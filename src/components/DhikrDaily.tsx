import React, { useState, useEffect, useRef } from 'react';
import { DhikrItem, DhikrPeriod, DhikrUserProgress } from '../types/roqya';
import { DHIKR_ITEMS } from '../data/dhikrData';
import { 
  Sun, Moon, ShieldCheck, Sparkles, CheckCircle2, RotateCcw, 
  Volume2, VolumeX, Maximize2, Minimize2, ChevronLeft, ChevronRight, 
  Copy, Check, Share2, Award, HeartHandshake, Flame, BookOpen, 
  CalendarCheck, Info, Compass
} from 'lucide-react';

interface DhikrDailyProps {
  onSyncWithProtocol?: () => void;
}

export const DhikrDaily: React.FC<DhikrDailyProps> = ({ onSyncWithProtocol }) => {
  const [selectedCategory, setSelectedCategory] = useState<DhikrPeriod | 'all'>('matin');
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [syncSuccessToast, setSyncSuccessToast] = useState<boolean>(false);

  // User progress state
  const [progress, setProgress] = useState<DhikrUserProgress>(() => {
    const today = new Date().toISOString().slice(0, 10);
    const saved = localStorage.getItem('roqya_dhikr_progress');
    if (saved) {
      try {
        const parsed: DhikrUserProgress = JSON.parse(saved);
        // If it's a new day, we reset counts but preserve lifetime total
        if (parsed.lastUpdated !== today) {
          return {
            counts: {},
            completedIds: [],
            lastUpdated: today,
            totalTasbihLifetime: parsed.totalTasbihLifetime || 0
          };
        }
        return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    return {
      counts: {},
      completedIds: [],
      lastUpdated: today,
      totalTasbihLifetime: 0
    };
  });

  // Audio synthesizer ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    localStorage.setItem('roqya_dhikr_progress', JSON.stringify(progress));
  }, [progress]);

  // Filter items by category
  const filteredItems = selectedCategory === 'all'
    ? DHIKR_ITEMS
    : DHIKR_ITEMS.filter((item) => item.category === selectedCategory);

  const currentDhikr = filteredItems[activeItemIndex] || filteredItems[0];
  const currentCount = progress.counts[currentDhikr?.id] || 0;
  const isCurrentCompleted = currentCount >= (currentDhikr?.targetCount || 1);

  // Subtle tap sound using Web Audio API
  const playTapSound = (isCompletedNow: boolean) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (isCompletedNow) {
        // High pleasant ding for completion
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else {
        // Subtle soft wooden click
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.start();
        osc.stop(ctx.currentTime + 0.06);
      }
    } catch {
      // Audio not supported or blocked
    }
  };

  // Increment counter
  const handleIncrement = (itemId: string, targetCount: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    // Haptic feedback if available
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(25);
    }

    setProgress((prev) => {
      const current = prev.counts[itemId] || 0;
      const nextCount = current + 1;
      const justCompleted = nextCount === targetCount;

      playTapSound(justCompleted);

      const updatedCompleted = justCompleted && !prev.completedIds.includes(itemId)
        ? [...prev.completedIds, itemId]
        : prev.completedIds;

      return {
        ...prev,
        counts: {
          ...prev.counts,
          [itemId]: nextCount
        },
        completedIds: updatedCompleted,
        totalTasbihLifetime: (prev.totalTasbihLifetime || 0) + 1
      };
    });
  };

  // Reset count for single item
  const handleResetItem = (itemId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setProgress((prev) => {
      const newCounts = { ...prev.counts };
      delete newCounts[itemId];
      return {
        ...prev,
        counts: newCounts,
        completedIds: prev.completedIds.filter((id) => id !== itemId)
      };
    });
  };

  // Mark full item as completed directly
  const handleMarkAsCompleted = (itemId: string, targetCount: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setProgress((prev) => ({
      ...prev,
      counts: {
        ...prev.counts,
        [itemId]: targetCount
      },
      completedIds: prev.completedIds.includes(itemId)
        ? prev.completedIds
        : [...prev.completedIds, itemId]
    }));
    playTapSound(true);
  };

  // Sync to Protocol 12 Days
  const handleSyncToProtocol = () => {
    const saved = localStorage.getItem('roqya_12_days_logs');
    if (saved) {
      try {
        const logs = JSON.parse(saved);
        if (logs && logs.length > 0) {
          const currentDayNumber = 1; // Mark day 1 or current
          const updatedLogs = logs.map((d: { dayNumber: number; completedTasks: { morningDhikr: boolean; eveningDhikr: boolean } }) => {
            if (d.dayNumber === currentDayNumber) {
              return {
                ...d,
                completedTasks: {
                  ...d.completedTasks,
                  morningDhikr: selectedCategory === 'matin' || d.completedTasks.morningDhikr,
                  eveningDhikr: selectedCategory === 'soir' || d.completedTasks.eveningDhikr
                }
              };
            }
            return d;
          });
          localStorage.setItem('roqya_12_days_logs', JSON.stringify(updatedLogs));
        }
      } catch (e) {
        console.error(e);
      }
    }
    setSyncSuccessToast(true);
    setTimeout(() => setSyncSuccessToast(false), 3000);
    if (onSyncWithProtocol) {
      onSyncWithProtocol();
    }
  };

  // Reset all session
  const handleResetCurrentCategory = () => {
    if (window.confirm('Voulez-vous réinitialiser les compteurs de cette catégorie pour aujourd\'hui ?')) {
      const itemIdsToReset = filteredItems.map((i) => i.id);
      setProgress((prev) => {
        const newCounts = { ...prev.counts };
        itemIdsToReset.forEach((id) => delete newCounts[id]);
        return {
          ...prev,
          counts: newCounts,
          completedIds: prev.completedIds.filter((id) => !itemIdsToReset.includes(id))
        };
      });
    }
  };

  // Copy Dhikr text
  const handleCopyText = (item: DhikrItem) => {
    const text = `${item.title}\n\n${item.arabicText}\n\nPhonétique : ${item.transliteration}\n\nTraduction : ${item.frenchMeaning}\n\nMérite : ${item.virtue}\n\nConseil Roqya (Ben Halima) : ${item.benHalimaAdvice || ''}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Stats
  const completedInCategory = filteredItems.filter(
    (item) => (progress.counts[item.id] || 0) >= item.targetCount
  ).length;
  const categoryProgressPercent = Math.round(
    (completedInCategory / (filteredItems.length || 1)) * 100
  );

  // Keyboard navigation / spacebar to increment
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && isFocusMode && currentDhikr) {
        e.preventDefault();
        handleIncrement(currentDhikr.id, currentDhikr.targetCount);
      } else if (e.code === 'ArrowRight') {
        setActiveItemIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.code === 'ArrowLeft') {
        setActiveItemIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.code === 'Escape' && isFocusMode) {
        setIsFocusMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocusMode, currentDhikr, filteredItems.length]);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/70 to-slate-900 rounded-3xl border border-emerald-800/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-900/80 text-emerald-200 border border-emerald-700/60 flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                Forteresse Spirituelle Quotidienne
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {completedInCategory}/{filteredItems.length} Invocations Validées
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                  soundEnabled
                    ? 'bg-emerald-950/80 border-emerald-700/60 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
                title={soundEnabled ? 'Son activé (clic doux)' : 'Son coupé'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="hidden sm:inline">{soundEnabled ? 'Son activé' : 'Muet'}</span>
              </button>

              {/* Protocol Sync Button */}
              <button
                onClick={handleSyncToProtocol}
                className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-teal-300 border border-teal-800/60 flex items-center gap-1.5 transition-all"
                title="Valider dans la checklist 12 jours"
              >
                <CalendarCheck className="w-4 h-4 text-teal-400" />
                <span>{syncSuccessToast ? 'Validé dans J-1 !' : 'Valider dans le Protocole'}</span>
              </button>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Bouclier Prophétique contre les Djinns & la Sorcellerie :
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
              Dhikr Quotidien & Invocations Protectrices
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Dans la méthode de <strong>Ben Halima Abderraouf</strong>, les invocations du matin (Adhkar Sabâh) et du soir (Adhkar Masâ) constituent l'armure indispensable sans laquelle les soins corporels (douches, tisanes) perdent leur efficacité face aux réattaques de djinns.
            </p>
          </div>

          {/* Progress Bar of active category */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-300 mb-1.5">
              <span>Progression du bouclier ({selectedCategory === 'matin' ? 'Matin' : selectedCategory === 'soir' ? 'Soir' : selectedCategory === 'sommeil' ? 'Coucher' : 'Session'})</span>
              <span className="font-bold text-emerald-400 font-mono">{categoryProgressPercent}%</span>
            </div>
            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-300 h-full rounded-full transition-all duration-300"
                style={{ width: `${categoryProgressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs Nav */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => { setSelectedCategory('matin'); setActiveItemIndex(0); }}
          className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            selectedCategory === 'matin'
              ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-950/60 border border-amber-400/40'
              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Sun className="w-4 h-4 text-amber-300" />
          <span>Invocations du Matin (Sabâh)</span>
        </button>

        <button
          onClick={() => { setSelectedCategory('soir'); setActiveItemIndex(0); }}
          className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            selectedCategory === 'soir'
              ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-950/60 border border-indigo-400/40'
              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Moon className="w-4 h-4 text-indigo-300" />
          <span>Invocations du Soir (Masâ)</span>
        </button>

        <button
          onClick={() => { setSelectedCategory('sommeil'); setActiveItemIndex(0); }}
          className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            selectedCategory === 'sommeil'
              ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-950/60 border border-teal-400/40'
              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-teal-300" />
          <span>Protection du Coucher</span>
        </button>

        <button
          onClick={() => { setSelectedCategory('tasbih'); setActiveItemIndex(0); }}
          className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            selectedCategory === 'tasbih'
              ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-950/60 border border-emerald-400/40'
              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>Tasbih & Istighfar (100x)</span>
        </button>

        <button
          onClick={() => { setSelectedCategory('all'); setActiveItemIndex(0); }}
          className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            selectedCategory === 'all'
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <span>Toutes ({DHIKR_ITEMS.length})</span>
        </button>
      </div>

      {/* Main Interactive Tasbih Spotlight Card */}
      {currentDhikr && (
        <div className="bg-slate-900/90 rounded-3xl border border-emerald-800/40 p-6 sm:p-8 shadow-2xl space-y-6 relative">
          {/* Header & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                  {currentDhikr.badgeLabel || 'Invocation Authentique'}
                </span>
                <span className="text-xs text-slate-400">
                  {activeItemIndex + 1} sur {filteredItems.length}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentDhikr.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => handleCopyText(currentDhikr)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Copier le texte et la traduction"
              >
                {copiedId === currentDhikr.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsFocusMode(true)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Mode Plein Écran Zen / Concentration"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Central Tasbih Counter Controller */}
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            {/* Big Interactive Circular Tap Button */}
            <div
              id="tasbih-tap-button"
              onClick={(e) => handleIncrement(currentDhikr.id, currentDhikr.targetCount, e)}
              className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full cursor-pointer select-none transition-all transform active:scale-95 flex flex-col items-center justify-center shadow-2xl border-4 ${
                isCurrentCompleted
                  ? 'bg-gradient-to-br from-emerald-700 via-teal-800 to-emerald-950 border-emerald-400/80 shadow-emerald-900/60'
                  : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-emerald-700/50 hover:border-emerald-500 shadow-slate-950'
              }`}
            >
              {/* Ripple / Ring effect */}
              <div className="absolute inset-2 rounded-full border border-dashed border-emerald-500/20 pointer-events-none" />

              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                {isCurrentCompleted ? 'Accompli !' : 'Appuyez pour compter'}
              </span>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                  {currentCount}
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-400 font-mono">
                  /{currentDhikr.targetCount}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                {isCurrentCompleted ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Objectif atteint
                  </span>
                ) : (
                  <span>Répétitions requises</span>
                )}
              </div>
            </div>

            {/* Quick Action Buttons Below Counter */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => handleResetItem(currentDhikr.id, e)}
                className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-semibold border border-slate-800 flex items-center gap-1.5 transition-colors"
                title="Remettre le compteur à 0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Remettre à 0</span>
              </button>

              {currentDhikr.targetCount > 10 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    for (let i = 0; i < 10; i++) {
                      handleIncrement(currentDhikr.id, currentDhikr.targetCount);
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 text-xs font-bold border border-emerald-800/60 transition-colors"
                >
                  +10 rapide
                </button>
              )}

              {!isCurrentCompleted && (
                <button
                  onClick={(e) => handleMarkAsCompleted(currentDhikr.id, currentDhikr.targetCount, e)}
                  className="px-3 py-1.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 text-xs font-semibold border border-emerald-700/50 flex items-center gap-1.5 transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Tout valider</span>
                </button>
              )}
            </div>
          </div>

          {/* Arabic Text Display */}
          <div className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800/90 space-y-4">
            <div className="text-right">
              <p
                className="font-arabic text-xl sm:text-2xl md:text-3xl text-emerald-100 leading-loose tracking-wide select-text"
                dir="rtl"
              >
                {currentDhikr.arabicText}
              </p>
            </div>

            {/* Transliteration */}
            <div className="border-t border-slate-800/80 pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300/90 block mb-1">
                Phonétique :
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic">
                {currentDhikr.transliteration}
              </p>
            </div>

            {/* Translation */}
            <div className="border-t border-slate-800/80 pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300/90 block mb-1">
                Sens en Français :
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {currentDhikr.frenchMeaning}
              </p>
            </div>
          </div>

          {/* Virtue & Ben Halima Roqya Advice Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200 space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>Mérite & Référence Authentique</span>
              </div>
              <p className="text-slate-300 leading-relaxed pt-1">
                {currentDhikr.virtue}
              </p>
              <span className="text-[10px] text-amber-400/80 block pt-1 font-mono">
                {currentDhikr.reference}
              </span>
            </div>

            {currentDhikr.benHalimaAdvice && (
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-emerald-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Conseil Roqya (Ben Halima Abderraouf)</span>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">
                  {currentDhikr.benHalimaAdvice}
                </p>
              </div>
            )}
          </div>

          {/* Prev / Next Item Navigation Footer */}
          <div className="flex items-center justify-between border-t border-slate-800 pt-4">
            <button
              onClick={() => setActiveItemIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5 border border-slate-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Précédente</span>
            </button>

            <div className="flex items-center gap-1">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveItemIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === activeItemIndex
                      ? 'bg-emerald-400 w-6'
                      : (progress.counts[filteredItems[idx]?.id] || 0) >= (filteredItems[idx]?.targetCount || 1)
                      ? 'bg-emerald-700'
                      : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveItemIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5 border border-slate-800 transition-colors"
            >
              <span>Suivante</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* List of All Invocations in Category with Quick Counters */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Toutes les Invocations ({filteredItems.length})</span>
          </h3>

          <button
            onClick={handleResetCurrentCategory}
            className="text-xs text-slate-400 hover:text-slate-200 underline"
          >
            Réinitialiser cette liste
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredItems.map((item, idx) => {
            const count = progress.counts[item.id] || 0;
            const isCompleted = count >= item.targetCount;
            const isCurrent = idx === activeItemIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItemIndex(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isCurrent
                    ? 'bg-emerald-950/50 border-emerald-500/80 ring-1 ring-emerald-500/30'
                    : isCompleted
                    ? 'bg-slate-900/70 border-emerald-800/40 text-slate-300'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="space-y-1 pr-2 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 font-mono">
                      #{idx + 1}
                    </span>
                    <h4 className={`text-xs sm:text-sm font-bold truncate ${isCurrent ? 'text-emerald-300' : 'text-white'}`}>
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {item.frenchMeaning}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Quick Tap button */}
                  <button
                    onClick={(e) => handleIncrement(item.id, item.targetCount, e)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      isCompleted
                        ? 'bg-emerald-700 text-white'
                        : 'bg-slate-950 border border-emerald-700/50 text-emerald-300 hover:bg-emerald-900'
                    }`}
                  >
                    {count}/{item.targetCount}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Focus / Fullscreen Mode Modal */}
      {isFocusMode && currentDhikr && (
        <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-xl flex flex-col p-4 sm:p-8 overflow-y-auto">
          <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col justify-between space-y-6">
            {/* Focus Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-900/80 text-emerald-200 border border-emerald-700/60">
                  Mode Concentration Zen
                </span>
                <span className="text-xs text-slate-400">
                  {activeItemIndex + 1} / {filteredItems.length}
                </span>
              </div>

              <button
                onClick={() => setIsFocusMode(false)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                title="Quitter le plein écran (Échap)"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Focus Body */}
            <div className="space-y-6 text-center my-auto py-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {currentDhikr.title}
              </h2>

              <p
                className="font-arabic text-2xl sm:text-3xl md:text-4xl text-emerald-200 leading-loose"
                dir="rtl"
              >
                {currentDhikr.arabicText}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 italic max-w-xl mx-auto">
                {currentDhikr.transliteration}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                {currentDhikr.frenchMeaning}
              </p>

              {/* Giant Tap Counter Zone in Focus */}
              <div className="pt-4">
                <button
                  onClick={(e) => handleIncrement(currentDhikr.id, currentDhikr.targetCount, e)}
                  className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full mx-auto flex flex-col items-center justify-center shadow-2xl border-4 transition-transform active:scale-95 ${
                    isCurrentCompleted
                      ? 'bg-emerald-700 border-emerald-300 text-white'
                      : 'bg-emerald-950 border-emerald-600 text-emerald-200 hover:bg-emerald-900'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-1">
                    {isCurrentCompleted ? 'Terminé !' : 'Appuyez (Espace)'}
                  </span>
                  <span className="text-5xl font-mono font-extrabold text-white">
                    {currentCount}
                  </span>
                  <span className="text-sm font-mono text-slate-400 mt-1">
                    sur {currentDhikr.targetCount}
                  </span>
                </button>
              </div>
            </div>

            {/* Focus Bottom Controls */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-4">
              <button
                onClick={() => setActiveItemIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
                className="px-4 py-2 rounded-xl bg-slate-900 text-xs font-bold text-slate-300 flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>

              <span className="text-xs text-slate-400 hidden sm:inline">
                Astuce : Appuyez sur la barre d'espace pour compter
              </span>

              <button
                onClick={() => setActiveItemIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 rounded-xl bg-slate-900 text-xs font-bold text-slate-300 flex items-center gap-1.5"
              >
                <span>Suivant</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
