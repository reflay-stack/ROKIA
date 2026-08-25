import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../data/roqyaData';
import { DiagnosticQuestion, QuestionOption } from '../types/roqya';
import { 
  ArrowRight, ArrowLeft, Check, Sparkles, AlertCircle, HelpCircle, 
  ShieldAlert, BookOpen, Flame, HeartHandshake, CheckCircle2
} from 'lucide-react';

interface DiagnosticQuizProps {
  onCompleteDiagnostic: (selectedOptionIds: string[]) => void;
  initialSelectedIds?: string[];
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({
  onCompleteDiagnostic,
  initialSelectedIds = []
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>(initialSelectedIds);
  const [showExplanationModal, setShowExplanationModal] = useState<boolean>(false);

  const totalSteps = DIAGNOSTIC_QUESTIONS.length;
  const currentQuestion: DiagnosticQuestion = DIAGNOSTIC_QUESTIONS[currentStepIndex];

  const handleToggleOption = (option: QuestionOption) => {
    const isNoneOption = option.id.endsWith('_none') || option.id === 'block_aucun' || option.id === 'spirit_none';
    
    if (isNoneOption) {
      // If user clicks "none", remove other options in this question and toggle this one
      const currentQuestionOptionIds = currentQuestion.options.map((o) => o.id);
      setSelectedOptionIds((prev) => {
        const withoutCurrent = prev.filter((id) => !currentQuestionOptionIds.includes(id));
        return prev.includes(option.id) ? withoutCurrent : [...withoutCurrent, option.id];
      });
      return;
    }

    // Normal option: deselect any "none" option of this question, then toggle current
    setSelectedOptionIds((prev) => {
      const noneOpt = currentQuestion.options.find((o) => o.id.endsWith('_none') || o.id === 'block_aucun' || o.id === 'spirit_none');
      let cleaned = prev;
      if (noneOpt) {
        cleaned = prev.filter((id) => id !== noneOpt.id);
      }

      if (cleaned.includes(option.id)) {
        return cleaned.filter((id) => id !== option.id);
      } else {
        if (!currentQuestion.multiple) {
          const currentQuestionOptionIds = currentQuestion.options.map((o) => o.id);
          const withoutCurrent = cleaned.filter((id) => !currentQuestionOptionIds.includes(id));
          return [...withoutCurrent, option.id];
        }
        return [...cleaned, option.id];
      }
    });
  };

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onCompleteDiagnostic(selectedOptionIds);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const stepSelectionCount = currentQuestion.options.filter((opt) =>
    selectedOptionIds.includes(opt.id)
  ).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Header & Progress Bar */}
      <div className="bg-slate-900/90 rounded-2xl border border-emerald-800/40 p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Étape {currentStepIndex + 1} sur {totalSteps}
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Diagnostic Ciblé des Maux Occultes
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Méthodologie du Guide Pratique de la Roqya de Ben Halima Abderraouf
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800/60">
              {Math.round(((currentStepIndex + 1) / totalSteps) * 100)}% Complété
            </span>
          </div>
        </div>

        {/* Visual Progress Track */}
        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* Step Indicator Chips */}
        <div className="grid grid-cols-5 gap-1.5 mt-3 pt-1">
          {DIAGNOSTIC_QUESTIONS.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setCurrentStepIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentStepIndex
                  ? 'bg-emerald-400'
                  : idx < currentStepIndex
                  ? 'bg-emerald-700/70'
                  : 'bg-slate-800'
              }`}
              title={`Étape ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-slate-900/80 rounded-2xl border border-emerald-800/40 p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Question Title & Ben Halima Context */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {currentQuestion.title}
              </h2>
              <p className="text-sm text-emerald-300 font-medium mt-1">
                {currentQuestion.subtitle}
              </p>
            </div>
            <button
              onClick={() => setShowExplanationModal(!showExplanationModal)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-emerald-300 hover:bg-slate-800 border border-slate-700 transition-colors shrink-0"
              title="Explication théologique"
            >
              <HelpCircle className="w-5 h-5 text-emerald-400" />
            </button>
          </div>

          {/* Ben Halima Method Context Callout */}
          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-slate-300 flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-300">Règle de diagnostic : </span>
              {currentQuestion.explanation}
            </div>
          </div>
        </div>

        {/* Options Selection Grid */}
        <div className="space-y-3 pt-2">
          <p className="text-xs text-slate-400 flex items-center justify-between">
            <span>Sélectionnez toutes les options correspondantes (Choix multiple autorisé) :</span>
            {stepSelectionCount > 0 && (
              <span className="text-emerald-400 font-semibold font-mono">
                {stepSelectionCount} sélectionné(s)
              </span>
            )}
          </p>

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionIds.includes(option.id);
              const isNone = option.id.endsWith('_none') || option.id === 'block_aucun' || option.id === 'spirit_none';

              return (
                <div
                  key={option.id}
                  id={`opt-${option.id}`}
                  onClick={() => handleToggleOption(option)}
                  className={`p-4 sm:p-4.5 rounded-xl border transition-all cursor-pointer select-none flex items-start justify-between gap-3.5 ${
                    isSelected
                      ? 'bg-emerald-950/80 border-emerald-500/80 shadow-lg shadow-emerald-950/50 ring-1 ring-emerald-500/40'
                      : isNone
                      ? 'bg-slate-950/50 border-slate-800/80 hover:bg-slate-900/60'
                      : 'bg-slate-950/40 border-slate-800/70 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border shrink-0 transition-all ${
                        isSelected
                          ? 'bg-emerald-600 border-emerald-500 text-white'
                          : 'border-slate-700 bg-slate-900'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    <div>
                      <h3
                        className={`text-sm font-semibold leading-snug ${
                          isSelected ? 'text-emerald-100' : 'text-slate-200'
                        }`}
                      >
                        {option.label}
                      </h3>
                      {option.description && (
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {option.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {option.severityWeight > 0 && isSelected && (
                    <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-900/90 text-emerald-200 border border-emerald-700/60">
                      Indice {option.severityWeight === 3 ? 'Majeur' : 'Secondaire'}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
          <button
            id="quiz-prev-btn"
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Précédent</span>
          </button>

          <button
            id="quiz-next-btn"
            onClick={handleNextStep}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/80 flex items-center gap-2 transition-all border border-emerald-400/30"
          >
            <span>{currentStepIndex === totalSteps - 1 ? 'Générer Mon Bilan & Traitement' : 'Suivant'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Orthodox Foundation Notice Banner */}
      <div className="bg-slate-950/60 rounded-2xl border border-slate-800/80 p-4 text-xs text-slate-400 flex items-center gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
        <p>
          <strong>Avertissement important :</strong> Ce questionnaire est un outil d\'orientation thérapeutique basé sur les symptômes répertoriés dans le <em>Guide Pratique de la Roqya</em>. La guérison (Shifâ) n\'appartient qu\'à Allah, et aucun soin occulte ne se substitue à un avis médical pour les pathologies biologiques.
        </p>
      </div>
    </div>
  );
};
