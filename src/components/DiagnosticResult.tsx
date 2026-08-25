import React, { useState } from 'react';
import { DiagnosticResultData, PracticalRemedy, QuranVerse } from '../types/roqya';
import { 
  Sparkles, ShieldCheck, Flame, Droplets, Disc3, CalendarCheck, 
  ArrowRight, AlertTriangle, CheckCircle, Info, HeartHandshake, 
  Share2, Printer, ChevronDown, ChevronUp, BookOpen, Headphones
} from 'lucide-react';

interface DiagnosticResultProps {
  result: DiagnosticResultData;
  onStartAudioPlaylist: () => void;
  onStartProtocol12Days: () => void;
  onRetakeQuiz: () => void;
  onOpenAudioDiagnostic?: () => void;
}

export const DiagnosticResult: React.FC<DiagnosticResultProps> = ({
  result,
  onStartAudioPlaylist,
  onStartProtocol12Days,
  onRetakeQuiz,
  onOpenAudioDiagnostic
}) => {
  const [expandedRemedyId, setExpandedRemedyId] = useState<string | null>(
    result.practicalRemedies[0]?.id || null
  );
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  const toggleExpandRemedy = (id: string) => {
    setExpandedRemedyId((prev) => (prev === id ? null : id));
  };

  const handleShareOrCopy = () => {
    const text = `Bilan Roqya Diag & Soins\nDate: ${result.date}\nDiagnostic dominant: ${result.dominantCondition?.name || 'Non concluant'}\nScore: ${result.totalScore}\nRemèdes prescrits: ${result.practicalRemedies.map(r => r.title).join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Top Banner: Diagnosis Result Summary */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/80 to-slate-900 rounded-3xl border border-emerald-700/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-800/80 text-emerald-100 border border-emerald-600/50 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Bilan Thérapeutique Établi
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {result.date}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShareOrCopy}
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 border border-slate-700 transition-colors"
                title="Copier le résumé"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copiedSuccess ? 'Copié !' : 'Partager'}
              </button>
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 border border-slate-700 transition-colors"
                title="Imprimer"
              >
                <Printer className="w-3.5 h-3.5" />
                Imprimer
              </button>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Affliction Occulte Dominante :
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
              {result.dominantCondition?.name || 'Aucun mal occulte majeur détecté'}
            </h1>
            {result.dominantCondition?.nameArabic && (
              <p className="font-arabic text-xl sm:text-2xl text-emerald-300 mt-1" dir="rtl">
                {result.dominantCondition.nameArabic}
              </p>
            )}
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl pt-1">
            {result.summaryMessage}
          </p>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Indice de sévérité</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">
                {result.totalScore} pts
              </span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Afflictions ciblées</span>
              <span className="text-lg font-bold text-amber-300 font-mono">
                {result.conditionsFound.length}
              </span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Remèdes pratiques</span>
              <span className="text-lg font-bold text-teal-300 font-mono">
                {result.practicalRemedies.length}
              </span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Versets en arabe</span>
              <span className="text-lg font-bold text-emerald-300 font-mono">
                {result.customPlaylist.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Notice if applicable */}
      {result.warningAlert && (
        <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/60 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p>{result.warningAlert}</p>
        </div>
      )}

      {/* Action Buttons Hub */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          id="result-listen-playlist-btn"
          onClick={onStartAudioPlaylist}
          className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-xl shadow-emerald-950/80 border border-emerald-400/30 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Disc3 className="w-6 h-6 text-white group-hover:rotate-45 transition-transform" />
            </div>
            <div>
              <h3 className="text-base font-bold">Lancer l\'Écoute Coranique</h3>
              <p className="text-xs text-emerald-100">
                {result.customPlaylist.length} versets spécifiques en arabe pur
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-emerald-100 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          id="result-start-protocol-btn"
          onClick={onStartProtocol12Days}
          className="p-5 rounded-2xl bg-slate-900 hover:bg-slate-850 text-white font-bold border border-emerald-700/60 hover:border-emerald-500 shadow-xl shadow-slate-950/80 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center">
              <CalendarCheck className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Suivi du Protocole 12 Jours</h3>
              <p className="text-xs text-slate-400">
                Checklist quotidienne, douches chaudes et journal
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* PART A : PRACTICAL TREATMENTS (Moteur de Traitement selon Ben Halima) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-extrabold text-white">
              Partie A : Traitements Pratiques Prescrits
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            {result.practicalRemedies.length} remède(s) actif(s)
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {result.practicalRemedies.map((remedy) => {
            const isExpanded = expandedRemedyId === remedy.id;
            return (
              <div
                key={remedy.id}
                className="bg-slate-900/80 rounded-2xl border border-emerald-800/40 overflow-hidden shadow-lg transition-all"
              >
                <div
                  onClick={() => toggleExpandRemedy(remedy.id)}
                  className="p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/50 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                      {remedy.category === 'lavage' && <Droplets className="w-5 h-5" />}
                      {remedy.category === 'tisane' && <Flame className="w-5 h-5" />}
                      {remedy.category === 'hijama' && <ShieldCheck className="w-5 h-5" />}
                      {remedy.category === 'massage' && <Sparkles className="w-5 h-5" />}
                      {remedy.category === 'spray_maison' && <Droplets className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-white">
                          {remedy.title}
                        </h3>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                          {remedy.recommendedDays}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        {remedy.subtitle}
                      </p>
                    </div>
                  </div>

                  <button className="p-1 text-slate-400 hover:text-white">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-slate-800/60 space-y-4 text-xs sm:text-sm text-slate-300 mt-2">
                    {/* Ingredients */}
                    {remedy.ingredients && remedy.ingredients.length > 0 && (
                      <div>
                        <h4 className="font-bold text-emerald-300 text-xs uppercase tracking-wider mb-2">
                          Ingrédients nécessaires :
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {remedy.ingredients.map((ing, i) => (
                            <li key={i} className="flex items-center gap-2 bg-slate-950/50 p-2 rounded-lg border border-slate-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                              <span>{ing}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Step by step Instructions */}
                    <div>
                      <h4 className="font-bold text-emerald-300 text-xs uppercase tracking-wider mb-2">
                        Mode de préparation & Utilisation pas à pas :
                      </h4>
                      <div className="space-y-2">
                        {remedy.preparationInstructions.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60">
                            <span className="w-5 h-5 rounded-full bg-emerald-900/80 text-emerald-200 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dosage & Important Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
                        <span className="font-bold text-emerald-300 block mb-1">Posologie :</span>
                        <p>{remedy.dosage}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40">
                        <span className="font-bold text-amber-300 block mb-1">Règles & Précautions :</span>
                        <ul className="space-y-1">
                          {remedy.importantNotes.map((note, nIdx) => (
                            <li key={nIdx} className="flex items-start gap-1.5">
                              <span className="text-amber-400">•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* AUDIO DIAGNOSTIC WITH SYMBOLIC VERSES CALLOUT */}
      {onOpenAudioDiagnostic && (
        <div className="bg-gradient-to-r from-indigo-950/90 via-slate-900 to-indigo-950/80 rounded-2xl border border-indigo-700/50 p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-indigo-900/80 text-amber-300 flex items-center justify-center shrink-0 border border-indigo-700/50 shadow-md">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-indigo-900 text-indigo-200 border border-indigo-700">
                  Nouveau • Méthode Ben Halima
                </span>
                <span className="text-xs text-amber-300 font-semibold">16 Symboles audio</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Confirmer par le Diagnostic à l'Écoute (Versets Symboliques)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                Écoutez les 16 versets symboliques (cadenas, nœuds, cimetière, mer, puits, poison mangé, mauvais œil) et cochez vos réactions corporelles en direct pour affiner ce diagnostic.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAudioDiagnostic}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all shrink-0 self-stretch sm:self-auto justify-center"
          >
            <span>Lancer le Test d'Écoute</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* PART B : QURANIC PLAYLIST PREVIEW (Exclusivement en Arabe) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Disc3 className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-extrabold text-white">
              Partie B : La Playlist Coranique Générée (Arabe Pur)
            </h2>
          </div>
          <button
            onClick={onStartAudioPlaylist}
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
          >
            <span>Ouvrir le lecteur complet</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-slate-900/80 rounded-2xl border border-emerald-800/40 p-5 shadow-xl space-y-4">
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-200">
            <strong>Attention absolue :</strong> Les versets ci-dessous sont générés selon vos symboles détectés et doivent être écoutés en arabe avec répétition.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {result.customPlaylist.map((verse, idx) => (
              <div
                key={verse.id}
                className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-emerald-700/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      {verse.isBaseVerse ? 'Base Universelle' : 'Verset Déclenché'}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-slate-900 px-1.5 py-0.5 rounded text-slate-400">
                      {verse.recommendedReps}x
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {verse.surahNameFr}
                  </h4>
                  <p className="text-xs text-slate-400">
                    Versets {verse.verseRange}
                  </p>
                  <p className="font-arabic text-sm text-emerald-300/90 mt-1" dir="rtl">
                    {verse.surahNameAr}
                  </p>
                </div>

                <p className="text-[11px] text-slate-400 mt-2.5 line-clamp-2 border-t border-slate-800/60 pt-2">
                  {verse.whyPrescribed}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Retake Button & Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <button
          onClick={onRetakeQuiz}
          className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
        >
          Refaire le questionnaire de diagnostic
        </button>

        <button
          onClick={onStartProtocol12Days}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Commencer le Jour 1 du Traitement</span>
        </button>
      </div>
    </div>
  );
};
