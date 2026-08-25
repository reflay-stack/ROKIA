import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { DiagnosticResult } from './components/DiagnosticResult';
import { AudioPlayer } from './components/AudioPlayer';
import { Protocol12Days } from './components/Protocol12Days';
import { DhikrDaily } from './components/DhikrDaily';
import { PracticalGuide } from './components/PracticalGuide';
import { RoqyaAdvisor } from './components/RoqyaAdvisor';
import { AudioDiagnostic } from './components/AudioDiagnostic';
import { DiagnosticResultData, QuranVerse } from './types/roqya';
import { runDiagnostic } from './utils/diagnosticEngine';
import { QURAN_VERSES } from './data/roqyaData';
import { ShieldCheck, HeartHandshake, BookOpen, Stethoscope, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('quiz');
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('roqya_selected_options');
    return saved ? JSON.parse(saved) : [];
  });

  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResultData | null>(() => {
    const saved = localStorage.getItem('roqya_diagnostic_result');
    return saved ? JSON.parse(saved) : null;
  });

  const [activePlaylist, setActivePlaylist] = useState<QuranVerse[]>(() => {
    if (diagnosticResult && diagnosticResult.customPlaylist.length > 0) {
      return diagnosticResult.customPlaylist;
    }
    // Default base playlist
    return QURAN_VERSES.filter((v) => v.isBaseVerse);
  });

  // Keep localStorage updated
  useEffect(() => {
    if (diagnosticResult) {
      localStorage.setItem('roqya_diagnostic_result', JSON.stringify(diagnosticResult));
      setActivePlaylist(diagnosticResult.customPlaylist);
    }
  }, [diagnosticResult]);

  useEffect(() => {
    localStorage.setItem('roqya_selected_options', JSON.stringify(selectedOptionIds));
  }, [selectedOptionIds]);

  const handleCompleteDiagnostic = (optionIds: string[]) => {
    setSelectedOptionIds(optionIds);
    const result = runDiagnostic(optionIds);
    setDiagnosticResult(result);
    setActivePlaylist(result.customPlaylist);
    setActiveTab('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeQuiz = () => {
    setSelectedOptionIds([]);
    setDiagnosticResult(null);
    setActivePlaylist(QURAN_VERSES.filter((v) => v.isBaseVerse));
    setActiveTab('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-800 selection:text-emerald-100">
      {/* Sticky Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hasDiagnosticResult={diagnosticResult !== null}
        activePlaylistCount={activePlaylist.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {activeTab === 'quiz' && (
          <DiagnosticQuiz
            onCompleteDiagnostic={handleCompleteDiagnostic}
            initialSelectedIds={selectedOptionIds}
          />
        )}

        {activeTab === 'result' && diagnosticResult && (
          <DiagnosticResult
            result={diagnosticResult}
            onStartAudioPlaylist={() => {
              setActiveTab('player');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartProtocol12Days={() => {
              setActiveTab('protocol');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRetakeQuiz={handleRetakeQuiz}
            onOpenAudioDiagnostic={() => {
              setActiveTab('symboliques');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'symboliques' && (
          <AudioDiagnostic
            onOpenPlayerWithVerse={(verseId) => {
              setActiveTab('player');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenProtocol={() => {
              setActiveTab('protocol');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'player' && (
          <AudioPlayer
            playlist={activePlaylist}
            dominantConditionName={diagnosticResult?.dominantCondition?.name}
          />
        )}

        {activeTab === 'protocol' && (
          <Protocol12Days
            onOpenAudioPlayer={() => {
              setActiveTab('player');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDhikr={() => {
              setActiveTab('dhikr');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'dhikr' && (
          <DhikrDaily
            onSyncWithProtocol={() => {
              // optional feedback
            }}
          />
        )}

        {activeTab === 'guide' && <PracticalGuide />}

        {activeTab === 'advisor' && (
          <RoqyaAdvisor
            onSelectVerseToPlay={() => {
              setActiveTab('player');
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Roqya Diag & Soins — Conforme au Coran, à la Sunna & au Guide Pratique de Ben Halima Abderraouf</span>
          </div>
          <p className="leading-relaxed max-w-2xl mx-auto">
            Rappel théologique : La guérison (Shifâ) appartient exclusivement à Allah. Les versets, l'eau chaude coranisée, le Sana Makki et la Hijama sont des causes licites. Aucun soin occulte ne dispense d'une consultation médicale auprès d'un professionnel de santé pour les pathologies organiques ou psychiques.
          </p>
          <div className="pt-2 text-[11px] text-slate-400 font-mono">
            Lecture coranique exclusivement en langue arabe • Sans publicité ni shirk
          </div>
        </div>
      </footer>
    </div>
  );
}
