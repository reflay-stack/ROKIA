import React, { useState, useEffect, useRef } from 'react';
import { SymbolicVerseItem, ListeningReactionType, AudioDiagnosticSession } from '../types/roqya';
import { SYMBOLIC_VERSES_LIST, LISTENING_REACTIONS, ReactionInfo } from '../data/symbolicVersesData';
import { 
  Play, Pause, SkipForward, SkipBack, RotateCcw, Volume2, VolumeX, 
  Sparkles, CheckCircle2, ShieldAlert, AlertTriangle, FileText, 
  HelpCircle, Eye, EyeOff, Headphones, Bookmark, Copy, Check, Printer, 
  ArrowRight, ShieldCheck, HeartPulse, Activity, Stethoscope, ChevronRight,
  Flame, Droplets, Compass
} from 'lucide-react';

interface AudioDiagnosticProps {
  onOpenPlayerWithVerse?: (verseId: string) => void;
  onOpenProtocol?: () => void;
}

export const AudioDiagnostic: React.FC<AudioDiagnosticProps> = ({ 
  onOpenPlayerWithVerse, 
  onOpenProtocol 
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(0.95);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentRepetition, setCurrentRepetition] = useState<number>(1);
  const [targetRepetitions, setTargetRepetitions] = useState<number>(3);
  const [isAutoNextMode, setIsAutoNextMode] = useState<boolean>(true);
  const [filterCategory, setFilterCategory] = useState<'all' | 'sorcellerie' | 'djinn' | 'mauvais_oeil'>('all');
  const [showPhonetic, setShowPhonetic] = useState<boolean>(true);
  const [showMeaning, setShowMeaning] = useState<boolean>(true);
  const [audioError, setAudioError] = useState<boolean>(false);
  const [showFinalReport, setShowFinalReport] = useState<boolean>(false);
  const [copiedReport, setCopiedReport] = useState<boolean>(false);

  // Stored reactions by verse ID
  const [reactionsByVerse, setReactionsByVerse] = useState<Record<string, ListeningReactionType[]>>(() => {
    const saved = localStorage.getItem('roqya_audio_diagnostic_reactions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {};
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Filtered list of symbolic verses
  const filteredVerses = SYMBOLIC_VERSES_LIST.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.symbolCategory === filterCategory;
  });

  const currentVerse: SymbolicVerseItem = filteredVerses[currentIndex] || filteredVerses[0] || SYMBOLIC_VERSES_LIST[0];
  const currentVerseReactions = reactionsByVerse[currentVerse?.id] || [];

  // Save reactions to localStorage
  useEffect(() => {
    localStorage.setItem('roqya_audio_diagnostic_reactions', JSON.stringify(reactionsByVerse));
  }, [reactionsByVerse]);

  // Audio source setup on verse or repetition change
  useEffect(() => {
    setAudioError(false);
    if (audioRef.current && currentVerse?.audioUrl) {
      audioRef.current.src = currentVerse.audioUrl;
      audioRef.current.playbackRate = playbackSpeed;
      audioRef.current.volume = isMuted ? 0 : volume;
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn('Audio play auto-interrupted:', err);
          setAudioError(true);
        });
      }
    }
  }, [currentIndex, currentVerse]);

  // Handle Playback rate change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Handle Volume change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle Audio Ended
  const handleAudioEnded = () => {
    if (targetRepetitions === 999) {
      // Infinite repeat mode
      setCurrentRepetition((prev) => prev + 1);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => setAudioError(true));
      }
      return;
    }

    if (currentRepetition < targetRepetitions) {
      setCurrentRepetition((prev) => prev + 1);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => setAudioError(true));
      }
    } else {
      // Repetitions finished for this verse
      setCurrentRepetition(1);
      if (isAutoNextMode) {
        if (currentIndex < filteredVerses.length - 1) {
          // Pause slightly before moving to next verse
          setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
          }, 1500);
        } else {
          setIsPlaying(false);
          setShowFinalReport(true);
        }
      } else {
        setIsPlaying(false);
      }
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setAudioError(false);
      }).catch((err) => {
        console.warn('Audio play failed:', err);
        setIsPlaying(false);
        setAudioError(true);
      });
    }
  };

  const handleNext = () => {
    setCurrentRepetition(1);
    if (currentIndex < filteredVerses.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setCurrentRepetition(1);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredVerses.length - 1);
    }
  };

  // Toggle reaction for active verse
  const handleToggleReaction = (reactionType: ListeningReactionType) => {
    if (!currentVerse) return;
    const verseId = currentVerse.id;
    setReactionsByVerse((prev) => {
      const currentList = prev[verseId] || [];
      const exists = currentList.includes(reactionType);
      const updatedList = exists
        ? currentList.filter((r) => r !== reactionType)
        : [...currentList, reactionType];

      return {
        ...prev,
        [verseId]: updatedList
      };
    });
  };

  // Clear reactions for active verse
  const handleClearCurrentVerseReactions = () => {
    if (!currentVerse) return;
    setReactionsByVerse((prev) => {
      const copy = { ...prev };
      delete copy[currentVerse.id];
      return copy;
    });
  };

  // Reset all test reactions
  const handleResetAllReactions = () => {
    if (window.confirm('Voulez-vous réinitialiser toutes les réactions enregistrées pour ce test d\'écoute ?')) {
      setReactionsByVerse({});
      setShowFinalReport(false);
      setCurrentIndex(0);
    }
  };

  // Calculate diagnostic outcomes
  const versesWithReactions = SYMBOLIC_VERSES_LIST.filter(
    (item) => (reactionsByVerse[item.id] || []).length > 0
  );

  const totalReactionsCount = (Object.values(reactionsByVerse) as ListeningReactionType[][]).reduce(
    (sum: number, list: ListeningReactionType[]) => sum + (list?.length || 0), 
    0
  );

  // Generate shareable report text
  const generateReportText = () => {
    const dateStr = new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    let text = `=== BILAN DU DIAGNOSTIC AUDIO DES VERSETS SYMBOLIQUES ===\n`;
    text += `Méthode : Ben Halima Abderraouf\n`;
    text += `Date de l'écoute : ${dateStr}\n`;
    text += `Total des réactions relevées : ${totalReactionsCount} sur ${versesWithReactions.length} symboles réactifs.\n\n`;

    if (versesWithReactions.length === 0) {
      text += `Aucune réaction anormale relevée durant l'écoute des versets symboliques.\n`;
      text += `Recommandation : Si des blocages persistent, renouveler le test au calme ou poursuivre avec les invocations protectrices du matin et du soir.\n`;
      return text;
    }

    text += `--- AFFLICTIONS OCCULTES DÉTECTÉES PAR L'ÉCOUTE ---\n\n`;
    versesWithReactions.forEach((item, idx) => {
      const reactions = reactionsByVerse[item.id] || [];
      const reactionLabels = reactions.map((r) => {
        const found = LISTENING_REACTIONS.find((lr) => lr.type === r);
        return found ? found.label : r;
      }).join(', ');

      text += `${idx + 1}. ${item.symbolName}\n`;
      text += `   - Verset Coranique : Sourate ${item.surahNameFr} (${item.verseRange})\n`;
      text += `   - Réactions ressenties : ${reactionLabels}\n`;
      text += `   - Diagnostic Ben Halima : ${item.testedOccultAffliction}\n`;
      text += `   - Traitement ciblé : ${item.remedyAction}\n\n`;
    });

    text += `--- PROTOCOLE THÉRAPEUTIQUE CONSEILLÉ ---\n`;
    text += `1. Douche quotidienne à l'eau coranisée chaude avec Sidr pendant 12 jours.\n`;
    text += `2. Écoute répétée et ciblée des versets ayant provoqué des réactions ci-dessus.\n`;
    text += `3. Maintien strict du Dhikr du matin et du soir.\n`;

    return text;
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(generateReportText());
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hidden Audio Player instance */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        onError={() => setAudioError(true)}
      />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 rounded-3xl border border-indigo-800/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-900/80 text-indigo-200 border border-indigo-700/60 flex items-center gap-1.5 shadow-sm">
                <Headphones className="w-3.5 h-3.5 text-amber-300" />
                Test d'Écoute Thérapeutique
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {versesWithReactions.length} Symbole(s) Réactif(s)
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Reset test */}
              <button
                id="reset-audio-diag-btn"
                onClick={handleResetAllReactions}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors"
                title="Effacer les réactions du test"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Réinitialiser le test</span>
              </button>

              {/* View final report */}
              <button
                id="view-audio-report-btn"
                onClick={() => setShowFinalReport(!showFinalReport)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                  showFinalReport
                    ? 'bg-amber-600 text-white border-amber-400 shadow-md'
                    : 'bg-indigo-900/60 text-indigo-200 border-indigo-700/50 hover:bg-indigo-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{showFinalReport ? 'Retour à l\'Écoute' : 'Voir le Rapport Diagnostic'}</span>
              </button>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
              Méthode Ben Halima Abderraouf :
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
              Diagnostic par l'Écoute des Versets Symboliques
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Chaque verset coranique correspond à un symbole précis de sorcellerie ou de djinn (cadenas, nœuds, cimetière, mer, puits, poison mangé, bêtes sauvages, mauvais œil). Écoutez chaque verset attentivement et cochez les réactions corporelles ou émotionnelles ressenties pour révéler l'origine exacte du mal occulte.
            </p>
          </div>

          {/* Quick instructions pill bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px] text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-900/90 text-indigo-300 font-bold flex items-center justify-center shrink-0">1</span>
              <span>Isolez-vous au calme avec des écouteurs</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-900/90 text-indigo-300 font-bold flex items-center justify-center shrink-0">2</span>
              <span>Écoutez les versets les yeux fermés</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-900/90 text-indigo-300 font-bold flex items-center justify-center shrink-0">3</span>
              <span>Cochez les réactions physiques en direct</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional View: Final Diagnostic Report */}
      {showFinalReport ? (
        <div className="bg-slate-900/90 rounded-3xl border border-indigo-800/40 p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Résultats du Test d'Écoute
              </span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Rapport de Diagnostic Audio
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyReport}
                className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-800 flex items-center gap-1.5 transition-colors"
              >
                {copiedReport ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedReport ? 'Copié !' : 'Copier le Bilan'}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs font-bold text-slate-300 border border-slate-800 transition-colors"
                title="Imprimer le rapport"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {versesWithReactions.length === 0 ? (
            <div className="p-8 text-center bg-slate-950/60 rounded-2xl border border-slate-800 space-y-3">
              <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">
                Aucune Réaction Enregistrée
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Vous n'avez coché aucune réaction anormale (bâillements, chaleur, frissons, oppression) lors de l'écoute des {SYMBOLIC_VERSES_LIST.length} versets symboliques.
              </p>
              <button
                onClick={() => setShowFinalReport(false)}
                className="mt-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md"
              >
                Commencer l'Écoute Guidée
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Summary stats badge card */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-900/80 text-amber-300 flex items-center justify-center font-bold">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {versesWithReactions.length} Sorcellerie(s) ou Présence(s) Activée(s)
                    </h4>
                    <p className="text-xs text-slate-400">
                      {totalReactionsCount} réactions corporelles et émotionnelles observées
                    </p>
                  </div>
                </div>

                {onOpenProtocol && (
                  <button
                    onClick={onOpenProtocol}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md self-start sm:self-auto"
                  >
                    <span>Appliquer au Protocole 12 Jours</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* List of Detected Occult Afflictions */}
              <div className="space-y-4">
                {versesWithReactions.map((item, idx) => {
                  const reactions = reactionsByVerse[item.id] || [];
                  return (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-slate-950/80 border border-indigo-800/40 space-y-4 hover:border-indigo-600/60 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-950 text-amber-300 border border-amber-800/60">
                            #{idx + 1} - {item.badgeLabel}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white">
                            {item.symbolName}
                          </h3>
                        </div>

                        <span className="text-xs text-slate-400 font-mono">
                          Sourate {item.surahNameFr} ({item.verseRange})
                        </span>
                      </div>

                      {/* Symptoms felt */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                          Réactions observées à l'écoute :
                        </span>
                        <div className="flex items-center gap-2 flex-wrap">
                          {reactions.map((r) => {
                            const found = LISTENING_REACTIONS.find((lr) => lr.type === r);
                            return (
                              <span
                                key={r}
                                className="px-2.5 py-1 rounded-lg bg-indigo-950 text-indigo-200 border border-indigo-800/50 text-xs font-medium flex items-center gap-1"
                              >
                                <span>{found?.icon}</span>
                                <span>{found?.label}</span>
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Occult Affliction Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                          <div className="flex items-center gap-1.5 font-bold text-amber-300">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Affliction Identifiée (Ben Halima)</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed">
                            {item.testedOccultAffliction}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-1">
                          <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Action Thérapeutique Recommandée</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed">
                            {item.remedyAction}
                          </p>
                        </div>
                      </div>

                      {/* Play single verse button */}
                      <div className="flex items-center justify-end pt-1">
                        <button
                          onClick={() => {
                            const indexInFiltered = filteredVerses.findIndex((v) => v.id === item.id);
                            if (indexInFiltered !== -1) {
                              setCurrentIndex(indexInFiltered);
                              setShowFinalReport(false);
                              setIsPlaying(true);
                            }
                          }}
                          className="px-3 py-1.5 rounded-xl bg-indigo-900/60 hover:bg-indigo-800 text-xs font-bold text-indigo-200 border border-indigo-700/50 flex items-center gap-1.5 transition-colors"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Réécouter ce verset</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Main Listening Card & Reaction Tracker */
        <div className="bg-slate-900/90 rounded-3xl border border-indigo-800/40 p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Top Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => { setFilterCategory('all'); setCurrentIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  filterCategory === 'all'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Tous les Symboles ({SYMBOLIC_VERSES_LIST.length})
              </button>
              <button
                onClick={() => { setFilterCategory('sorcellerie'); setCurrentIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  filterCategory === 'sorcellerie'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Sorcelleries (12)
              </button>
              <button
                onClick={() => { setFilterCategory('djinn'); setCurrentIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  filterCategory === 'djinn'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Djinns (3)
              </button>
              <button
                onClick={() => { setFilterCategory('mauvais_oeil'); setCurrentIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  filterCategory === 'mauvais_oeil'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Mauvais Œil (1)
              </button>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
              {/* Repetitions dropdown */}
              <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800 text-slate-300">
                <span className="text-xs">Répétitions :</span>
                <select
                  value={targetRepetitions}
                  onChange={(e) => {
                    setTargetRepetitions(Number(e.target.value));
                    setCurrentRepetition(1);
                  }}
                  className="bg-transparent text-amber-300 font-bold focus:outline-none cursor-pointer text-xs"
                >
                  <option value={1} className="bg-slate-900 text-white">1 fois (1x)</option>
                  <option value={3} className="bg-slate-900 text-white">3 fois (3x)</option>
                  <option value={7} className="bg-slate-900 text-white">7 fois (7x)</option>
                  <option value={11} className="bg-slate-900 text-white">11 fois (11x)</option>
                  <option value={21} className="bg-slate-900 text-white">21 fois (21x)</option>
                  <option value={33} className="bg-slate-900 text-white">33 fois (33x)</option>
                  <option value={70} className="bg-slate-900 text-white">70 fois (70x)</option>
                  <option value={100} className="bg-slate-900 text-white">100 fois (100x)</option>
                  <option value={999} className="bg-slate-900 text-amber-400 font-bold">∞ Illimité (En boucle)</option>
                </select>
              </div>

              {/* Sound Mute */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                title={isMuted ? 'Rétablir le son' : 'Couper le son'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Active Verse Header Info */}
          {currentVerse && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-950 text-amber-300 border border-amber-800/60">
                      {currentVerse.badgeLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Symbole {currentIndex + 1} sur {filteredVerses.length}
                    </span>
                    {targetRepetitions === 999 ? (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-950/80 text-amber-200 border border-amber-700/60 shadow-sm flex items-center gap-1">
                        <span>Passe n°{currentRepetition}</span>
                        <span className="text-amber-400 font-mono">• ∞ Illimité</span>
                      </span>
                    ) : (
                      currentRepetition > 1 && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-900/80 text-indigo-200">
                          Passe {currentRepetition}/{targetRepetitions}
                        </span>
                      )
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {currentVerse.symbolName}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Sourate {currentVerse.surahNameFr} • Verset {currentVerse.verseRange}
                  </p>
                </div>

                {/* Main Player Transport Buttons */}
                <div className="flex items-center gap-2 self-center sm:self-auto">
                  <button
                    id="audio-diag-prev-btn"
                    onClick={handlePrev}
                    className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                    title="Verset Précédent"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>

                  <button
                    id="audio-diag-play-btn"
                    onClick={togglePlayPause}
                    className={`p-4 rounded-2xl text-white font-bold flex items-center justify-center shadow-lg transition-all transform active:scale-95 ${
                      isPlaying
                        ? 'bg-amber-600 hover:bg-amber-500 ring-4 ring-amber-500/20'
                        : 'bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500'
                    }`}
                    title={isPlaying ? 'Mettre en pause' : 'Lancer l\'écoute'}
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
                  </button>

                  <button
                    id="audio-diag-next-btn"
                    onClick={handleNext}
                    className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                    title="Verset Suivant"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Audio error alert */}
              {audioError && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs text-rose-200 flex items-center justify-between">
                  <span>Impossible de charger le flux audio. Vérifiez votre connexion.</span>
                  <button
                    onClick={() => {
                      if (audioRef.current && currentVerse) {
                        audioRef.current.src = currentVerse.audioUrl;
                        audioRef.current.play().catch(() => {});
                      }
                    }}
                    className="px-2 py-1 rounded bg-rose-800 text-white font-bold"
                  >
                    Réessayer
                  </button>
                </div>
              )}

              {/* Arabic Verse Display */}
              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="text-right">
                  <p
                    className="font-arabic text-xl sm:text-2xl md:text-3xl text-emerald-100 leading-loose tracking-wide select-text"
                    dir="rtl"
                  >
                    {currentVerse.arabicText}
                  </p>
                </div>

                {showPhonetic && (
                  <div className="border-t border-slate-800/80 pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300/90 block mb-1">
                      Phonétique :
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 italic">
                      {currentVerse.transliteration}
                    </p>
                  </div>
                )}

                {showMeaning && (
                  <div className="border-t border-slate-800/80 pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300/90 block mb-1">
                      Sens en Français :
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200">
                      {currentVerse.frenchMeaning}
                    </p>
                  </div>
                )}
              </div>

              {/* Ben Halima Diagnostic Explanation Callout */}
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-indigo-300">
                  <Stethoscope className="w-4 h-4 text-amber-300" />
                  <span>Ce que teste ce verset (Ben Halima Abderraouf)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {currentVerse.benHalimaDiagnosticAdvice}
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-slate-400">
                  <span className="font-semibold text-slate-300">Manifestations typiques :</span>
                  <span>{currentVerse.expectedReactionsIfAffected.join(' • ')}</span>
                </div>
              </div>

              {/* LIVE REACTION BUTTONS SELECTOR */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-rose-400" />
                    <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Qu'avez-vous ressenti pendant ce verset ?
                    </h3>
                  </div>

                  {currentVerseReactions.length > 0 && (
                    <button
                      onClick={handleClearCurrentVerseReactions}
                      className="text-xs text-slate-400 hover:text-slate-200 underline"
                    >
                      Effacer les réactions ({currentVerseReactions.length})
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {LISTENING_REACTIONS.map((r) => {
                    const isSelected = currentVerseReactions.includes(r.type);
                    return (
                      <button
                        key={r.type}
                        onClick={() => handleToggleReaction(r.type)}
                        className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between gap-1.5 ${
                          isSelected
                            ? 'bg-gradient-to-br from-indigo-800 via-indigo-900 to-slate-900 border-amber-400/80 text-white shadow-lg ring-2 ring-amber-400/30'
                            : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl">{r.icon}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold block leading-tight">
                            {r.label}
                          </span>
                          <span className="text-[10px] text-slate-400 block line-clamp-1 mt-0.5">
                            {r.shortDesc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Progress & Navigation between Verses */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5 border border-slate-800 transition-colors"
                >
                  <SkipBack className="w-4 h-4" />
                  <span>Précédent</span>
                </button>

                <div className="flex items-center gap-1 overflow-x-auto max-w-xs px-2">
                  {filteredVerses.map((item, idx) => {
                    const hasReactions = (reactionsByVerse[item.id] || []).length > 0;
                    const isCurrent = idx === currentIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setCurrentRepetition(1);
                        }}
                        className={`h-2.5 rounded-full transition-all ${
                          isCurrent
                            ? 'w-6 bg-amber-400'
                            : hasReactions
                            ? 'w-2.5 bg-rose-500'
                            : 'w-2.5 bg-slate-800'
                        }`}
                        title={`${item.symbolName} ${hasReactions ? '(Réactions notées)' : ''}`}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5 border border-slate-800 transition-colors"
                >
                  <span>Suivant</span>
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Grid of All Symbolic Verses for Direct Jump */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-indigo-400" />
            <h3 className="text-base sm:text-lg font-extrabold text-white">
              Index des {SYMBOLIC_VERSES_LIST.length} Versets Symboliques
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            Cliquez pour tester un symbole directement
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SYMBOLIC_VERSES_LIST.map((item, idx) => {
            const reactions = reactionsByVerse[item.id] || [];
            const isCurrent = filteredVerses[currentIndex]?.id === item.id;
            const hasReactions = reactions.length > 0;

            return (
              <div
                key={item.id}
                onClick={() => {
                  const foundIdx = filteredVerses.findIndex((v) => v.id === item.id);
                  if (foundIdx !== -1) {
                    setCurrentIndex(foundIdx);
                  } else {
                    setFilterCategory('all');
                    const allIdx = SYMBOLIC_VERSES_LIST.findIndex((v) => v.id === item.id);
                    setCurrentIndex(allIdx);
                  }
                  setShowFinalReport(false);
                  setIsPlaying(true);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                  isCurrent
                    ? 'bg-indigo-950/60 border-amber-400/80 ring-1 ring-amber-400/30'
                    : hasReactions
                    ? 'bg-slate-900/80 border-rose-700/60'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono">
                      #{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950 text-amber-300 border border-slate-800">
                      {item.badgeLabel}
                    </span>
                  </div>

                  <h4 className={`text-xs sm:text-sm font-bold ${isCurrent ? 'text-amber-300' : 'text-white'}`}>
                    {item.symbolName}
                  </h4>

                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {item.testedOccultAffliction}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    Sourate {item.surahNumber}:{item.verseRange}
                  </span>

                  {hasReactions ? (
                    <span className="px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-bold flex items-center gap-1">
                      <HeartPulse className="w-3 h-3 text-rose-400" />
                      {reactions.length} réaction(s)
                    </span>
                  ) : (
                    <span className="text-indigo-400 hover:text-indigo-300 text-[11px] font-semibold flex items-center gap-1">
                      <Play className="w-3 h-3 fill-current" />
                      Écouter
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
