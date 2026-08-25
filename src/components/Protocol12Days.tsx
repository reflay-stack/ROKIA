import React, { useState, useEffect } from 'react';
import { DayLogEntry } from '../types/roqya';
import { 
  CalendarCheck, CheckCircle2, Circle, Droplets, Disc3, Sun, Moon, 
  Flame, Sparkles, BookOpen, AlertCircle, HeartHandshake, ShieldCheck, 
  Bell, BellRing, ChevronRight, Save, PlusCircle, Check
} from 'lucide-react';

const REACTION_OPTIONS = [
  'Bâillements répétés',
  'Rots / Évacuation d\'air',
  'Bouffées de chaleur',
  'Frissons / Chair de poule',
  'Picotements / Fourmillements',
  'Pression temporaire à la tête',
  'Larmes involontaires',
  'Apaisement profond et légèreté'
];

interface Protocol12DaysProps {
  onOpenAudioPlayer: () => void;
  onOpenDhikr?: () => void;
}

export const Protocol12Days: React.FC<Protocol12DaysProps> = ({ onOpenAudioPlayer, onOpenDhikr }) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [dayLogs, setDayLogs] = useState<DayLogEntry[]>(() => {
    const saved = localStorage.getItem('roqya_12_days_logs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    // Initialize default 12 days
    return Array.from({ length: 12 }, (_, i) => ({
      dayNumber: i + 1,
      date: new Date(Date.now() + i * 86400000).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
      isCompleted: false,
      completedTasks: {
        warmShower: false,
        quranAudio: false,
        morningDhikr: false,
        eveningDhikr: false,
        herbalTreatment: false,
        hijamaOrMassage: false
      },
      physicalReactions: [],
      dreamNotes: '',
      symptomSeverity: 5,
      notes: ''
    }));
  });

  const [reminderActive, setReminderActive] = useState<boolean>(() => {
    return localStorage.getItem('roqya_reminder_active') === 'true';
  });
  const [reminderTime, setReminderTime] = useState<string>('20:30');
  const [showSavedToast, setShowSavedToast] = useState<boolean>(false);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('roqya_12_days_logs', JSON.stringify(dayLogs));
  }, [dayLogs]);

  const activeDayLog = dayLogs.find((d) => d.dayNumber === selectedDayNumber) || dayLogs[0];

  const handleToggleTask = (taskKey: keyof DayLogEntry['completedTasks']) => {
    setDayLogs((prev) =>
      prev.map((day) => {
        if (day.dayNumber === selectedDayNumber) {
          const updatedTasks = {
            ...day.completedTasks,
            [taskKey]: !day.completedTasks[taskKey]
          };
          const allCoreCompleted =
            updatedTasks.warmShower && updatedTasks.quranAudio && updatedTasks.eveningDhikr;
          return {
            ...day,
            completedTasks: updatedTasks,
            isCompleted: allCoreCompleted
          };
        }
        return day;
      })
    );
  };

  const handleToggleReaction = (reaction: string) => {
    setDayLogs((prev) =>
      prev.map((day) => {
        if (day.dayNumber === selectedDayNumber) {
          const exists = day.physicalReactions.includes(reaction);
          const updatedReactions = exists
            ? day.physicalReactions.filter((r) => r !== reaction)
            : [...day.physicalReactions, reaction];
          return {
            ...day,
            physicalReactions: updatedReactions
          };
        }
        return day;
      })
    );
  };

  const handleUpdateNotes = (field: 'dreamNotes' | 'notes', value: string) => {
    setDayLogs((prev) =>
      prev.map((day) => (day.dayNumber === selectedDayNumber ? { ...day, [field]: value } : day))
    );
  };

  const handleUpdateSeverity = (score: number) => {
    setDayLogs((prev) =>
      prev.map((day) => (day.dayNumber === selectedDayNumber ? { ...day, symptomSeverity: score } : day))
    );
  };

  const handleToggleReminder = () => {
    const next = !reminderActive;
    setReminderActive(next);
    localStorage.setItem('roqya_reminder_active', String(next));
    if (next && 'Notification' in window) {
      Notification.requestPermission();
    }
  };

  const completedDaysCount = dayLogs.filter((d) => d.isCompleted).length;
  const progressPercent = Math.round((completedDaysCount / 12) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Top Protocol Header */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/70 to-slate-900 rounded-3xl border border-teal-800/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-teal-900/80 text-teal-200 border border-teal-700/60 flex items-center gap-1.5">
                <CalendarCheck className="w-3.5 h-3.5" />
                Cure Intensive Corporelle & Spirituelle
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {completedDaysCount} / 12 Jours Accomplis
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Protocole Orthodoxe des 12 Jours de Lavage
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              La règle d\'or selon Ben Halima Abderraouf : 12 jours consécutifs de douches chaudes à l\'eau coranisée combinées à l\'écoute du Coran au Maghreb pour dissoudre la matière occulte et chasser les djinns.
            </p>
          </div>

          {/* Evening Notification Switch */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/90 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-teal-950 border border-teal-700/50 flex items-center justify-center text-teal-300">
              {reminderActive ? <BellRing className="w-5 h-5 text-teal-400 animate-pulse" /> : <Bell className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">Rappel du Soir (Maghreb)</span>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="bg-slate-900 text-xs px-1.5 py-0.5 rounded border border-slate-700 text-teal-300"
                />
              </div>
              <button
                onClick={handleToggleReminder}
                className="text-[11px] text-teal-400 hover:text-teal-300 underline mt-0.5 block font-medium"
              >
                {reminderActive ? 'Rappels actifs (Désactiver)' : 'Activer le rappel quotidien'}
              </button>
            </div>
          </div>
        </div>

        {/* 12-Day Overall Progress Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs font-medium text-slate-300 mb-2">
            <span>Progression du traitement de 12 jours</span>
            <span className="font-bold text-teal-300">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div
              className="bg-gradient-to-r from-teal-500 via-emerald-400 to-emerald-300 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 12 Days Navigation Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
        {dayLogs.map((day) => {
          const isSelected = day.dayNumber === selectedDayNumber;
          return (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDayNumber(day.dayNumber)}
              className={`p-2.5 rounded-xl border transition-all text-center flex flex-col items-center justify-between gap-1.5 ${
                isSelected
                  ? 'bg-teal-900/80 border-teal-400 text-white shadow-lg ring-1 ring-teal-400/50'
                  : day.isCompleted
                  ? 'bg-emerald-950/60 border-emerald-700/60 text-emerald-200'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider">
                J-{day.dayNumber}
              </span>
              <div className="my-0.5">
                {day.isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-600 mx-auto" />
                )}
              </div>
              <span className="text-[9px] font-mono text-slate-400">
                {day.date}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Day Detail Card */}
      <div className="bg-slate-900/80 rounded-3xl border border-teal-800/40 p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Day Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-teal-950 border border-teal-700/50 text-teal-300 font-extrabold text-lg flex items-center justify-center">
              J-{activeDayLog.dayNumber}
            </span>
            <div>
              <h2 className="text-xl font-bold text-white">
                Fiche de Suivi — Jour {activeDayLog.dayNumber}
              </h2>
              <p className="text-xs text-slate-400">
                {activeDayLog.date} • {activeDayLog.isCompleted ? 'Validé avec succès' : 'En attente de complétion'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
            {onOpenDhikr && (
              <button
                onClick={onOpenDhikr}
                className="px-3.5 py-2 bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 text-amber-200 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
              >
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span>Compteur Dhikr</span>
              </button>
            )}

            <button
              onClick={onOpenAudioPlayer}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
            >
              <Disc3 className="w-3.5 h-3.5" />
              <span>Lecteur Coranique</span>
            </button>
          </div>
        </div>

        {/* Section 1 : Checklist of Daily Prescriptions */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-teal-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            1. Soins & Invocations du Jour
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Task: Warm Coranised Shower in Basin */}
            <div
              onClick={() => handleToggleTask('warmShower')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                activeDayLog.completedTasks.warmShower
                  ? 'bg-teal-950/70 border-teal-500/70 text-teal-100 shadow-md'
                  : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900/60'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg mt-0.5 flex items-center justify-center border shrink-0 ${
                  activeDayLog.completedTasks.warmShower
                    ? 'bg-teal-600 border-teal-400 text-white'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                {activeDayLog.completedTasks.warmShower && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Douche à l\'eau coranisée chaude</h4>
                  <Droplets className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Debout dans une bassine, verser l\'eau chaude sur tout le corps. Jeter l\'eau dehors sur la terre/plantes (pas dans les toilettes).
                </p>
              </div>
            </div>

            {/* Task: Quranic Audio Listening at Night */}
            <div
              onClick={() => handleToggleTask('quranAudio')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                activeDayLog.completedTasks.quranAudio
                  ? 'bg-teal-950/70 border-teal-500/70 text-teal-100 shadow-md'
                  : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900/60'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg mt-0.5 flex items-center justify-center border shrink-0 ${
                  activeDayLog.completedTasks.quranAudio
                    ? 'bg-teal-600 border-teal-400 text-white'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                {activeDayLog.completedTasks.quranAudio && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Écoute de la playlist Coranique</h4>
                  <Disc3 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Écoute au casque avec concentration, de préférence le soir au moment du Maghreb. Répétition des versets d\'annulation.
                </p>
              </div>
            </div>

            {/* Task: Morning & Evening Adhkar */}
            <div
              onClick={() => handleToggleTask('morningDhikr')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                activeDayLog.completedTasks.morningDhikr
                  ? 'bg-teal-950/70 border-teal-500/70 text-teal-100 shadow-md'
                  : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900/60'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg mt-0.5 flex items-center justify-center border shrink-0 ${
                  activeDayLog.completedTasks.morningDhikr
                    ? 'bg-teal-600 border-teal-400 text-white'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                {activeDayLog.completedTasks.morningDhikr && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Invocations du Matin (Adhkar Sabâh)</h4>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Ayat Al-Kursi, 3 Protectrices (3x), "Bismillahi alladhi la yadurru..." (3x).
                </p>
              </div>
            </div>

            {/* Task: Evening Adhkar & Night protection */}
            <div
              onClick={() => handleToggleTask('eveningDhikr')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                activeDayLog.completedTasks.eveningDhikr
                  ? 'bg-teal-950/70 border-teal-500/70 text-teal-100 shadow-md'
                  : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900/60'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg mt-0.5 flex items-center justify-center border shrink-0 ${
                  activeDayLog.completedTasks.eveningDhikr
                    ? 'bg-teal-600 border-teal-400 text-white'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                {activeDayLog.completedTasks.eveningDhikr && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Invocations du Soir & Couchage</h4>
                  <Moon className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Adhkar du soir + récitation des 3 protectrices dans les mains et friction du corps avant de dormir.
                </p>
              </div>
            </div>

            {/* Task: Tisane Sana Makki or Herbal remedy (Days 1-5) */}
            <div
              onClick={() => handleToggleTask('herbalTreatment')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                activeDayLog.completedTasks.herbalTreatment
                  ? 'bg-teal-950/70 border-teal-500/70 text-teal-100 shadow-md'
                  : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900/60'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg mt-0.5 flex items-center justify-center border shrink-0 ${
                  activeDayLog.completedTasks.herbalTreatment
                    ? 'bg-teal-600 border-teal-400 text-white'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                {activeDayLog.completedTasks.herbalTreatment && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Tisane Sana Makki / Miel coranisé</h4>
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  À jeun le matin (si sorcellerie mangée diagnostiquée) ou miel coranisé.
                </p>
              </div>
            </div>

            {/* Task: Hijama or Habba Sawda Massage */}
            <div
              onClick={() => handleToggleTask('hijamaOrMassage')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                activeDayLog.completedTasks.hijamaOrMassage
                  ? 'bg-teal-950/70 border-teal-500/70 text-teal-100 shadow-md'
                  : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900/60'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg mt-0.5 flex items-center justify-center border shrink-0 ${
                  activeDayLog.completedTasks.hijamaOrMassage
                    ? 'bg-teal-600 border-teal-400 text-white'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                {activeDayLog.completedTasks.hijamaOrMassage && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Massage Huile de Nigelle / Hijama</h4>
                  <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Application d\'huile coranisée sur les pieds, jambes ou zones douloureuses après la douche.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 : Physical Reactions Log during Day */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-teal-300 flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            2. Réactions Physiques Observées Aujourd\'hui
          </h3>
          <p className="text-xs text-slate-400">
            Cochez les sensations ressenties pendant la douche ou l\'écoute (signes d\'expulsion) :
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {REACTION_OPTIONS.map((react) => {
              const isChecked = activeDayLog.physicalReactions.includes(react);
              return (
                <button
                  key={react}
                  onClick={() => handleToggleReaction(react)}
                  className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                    isChecked
                      ? 'bg-amber-950/80 border-amber-500/80 text-amber-100 shadow'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{react}</span>
                    {isChecked && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3 : Dreams & Night Observations */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-teal-300 flex items-center gap-2">
            <Moon className="w-4 h-4 text-indigo-400" />
            3. Journal des Rêves de la Nuit
          </h3>
          <p className="text-xs text-slate-400">
            Notez si les symboles changent (ex: tuer le serpent, cadenas qui s\'ouvre, eau claire, fuite des bêtes = signe de victoire) :
          </p>
          <textarea
            value={activeDayLog.dreamNotes}
            onChange={(e) => handleUpdateNotes('dreamNotes', e.target.value)}
            placeholder="Exemple: J'ai rêvé que le serpent s'enfuyait ou que la porte bloquée s'ouvrait enfin..."
            rows={2}
            className="w-full bg-slate-950/80 rounded-xl border border-slate-800 p-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>

        {/* Spiritual Guidance Callout */}
        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-300">Rappel spirituel fondamental :</strong>
            <p className="mt-0.5 text-slate-300 leading-relaxed">
              La douche et l\'écoute ne sont que des moyens physiques et spirituels. La guérison dépend avant tout de votre <strong>repentir sincère (Tawba)</strong>, de la <strong>prière à l\'heure</strong>, de l\'éloignement des péchés (musique profane, regards illicites, colère) et de votre <strong>confiance totale en Allah seul</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
