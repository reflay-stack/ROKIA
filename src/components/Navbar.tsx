import React from 'react';
import { Stethoscope, Disc3, CalendarCheck, BookOpen, Sparkles, ShieldCheck, Sun, Headphones } from 'lucide-react';

export type ActiveTab = 'quiz' | 'result' | 'symboliques' | 'player' | 'protocol' | 'dhikr' | 'guide' | 'advisor';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  hasDiagnosticResult: boolean;
  activePlaylistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  hasDiagnosticResult,
  activePlaylistCount
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div 
            id="nav-brand-btn"
            onClick={() => setActiveTab(hasDiagnosticResult ? 'result' : 'quiz')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center shadow-lg shadow-emerald-950/50 border border-emerald-500/30 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors">
                  Roqya Diag & Soins
                </span>
                <span className="hidden md:inline-block text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                  Orthodoxe
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Méthode Ben Halima Abderraouf • Coran & Sunna
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <button
              id="nav-quiz-btn"
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'quiz'
                  ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-700/50 shadow-inner'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
              }`}
            >
              <Stethoscope className="w-4 h-4 text-emerald-400" />
              <span>Diagnostic</span>
            </button>

            {hasDiagnosticResult && (
              <button
                id="nav-result-btn"
                onClick={() => setActiveTab('result')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'result'
                    ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-700/50 shadow-inner'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Mon Bilan & Soins</span>
              </button>
            )}

            <button
              id="nav-symboliques-btn"
              onClick={() => setActiveTab('symboliques')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative ${
                activeTab === 'symboliques'
                  ? 'bg-indigo-900/50 text-indigo-200 border border-indigo-700/60 shadow-inner'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
              }`}
            >
              <Headphones className="w-4 h-4 text-amber-300" />
              <span>Diagnostic Audio (Symboliques)</span>
            </button>

            <button
              id="nav-player-btn"
              onClick={() => setActiveTab('player')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative ${
                activeTab === 'player'
                  ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-700/50 shadow-inner'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
              }`}
            >
              <Disc3 className="w-4 h-4 text-emerald-400" />
              <span>Écoute Coranique (Arabe)</span>
              {activePlaylistCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-emerald-700 text-white">
                  {activePlaylistCount}
                </span>
              )}
            </button>

            <button
              id="nav-protocol-btn"
              onClick={() => setActiveTab('protocol')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'protocol'
                  ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-700/50 shadow-inner'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
              }`}
            >
              <CalendarCheck className="w-4 h-4 text-teal-400" />
              <span>Protocole 12 Jours</span>
            </button>

            <button
              id="nav-dhikr-btn"
              onClick={() => setActiveTab('dhikr')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dhikr'
                  ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-700/50 shadow-inner'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-300" />
              <span>Dhikr Quotidien</span>
            </button>

            <button
              id="nav-guide-btn"
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'guide'
                  ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-700/50 shadow-inner'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Guide Pratique</span>
            </button>

            <button
              id="nav-advisor-btn"
              onClick={() => setActiveTab('advisor')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'advisor'
                  ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-700/50 shadow-inner'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Conseils & Rêves</span>
            </button>
          </nav>

          {/* Quick Action Button */}
          <div className="flex items-center gap-2">
            <button
              id="header-start-diag-btn"
              onClick={() => setActiveTab('quiz')}
              className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-900/30 transition-all border border-emerald-400/30 flex items-center gap-1.5"
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nouveau</span> Diagnostic
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row (Horizontal Scroll) */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 gap-2 border-t border-slate-900 scrollbar-none">
          <button
            id="mobile-nav-quiz-btn"
            onClick={() => setActiveTab('quiz')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
              activeTab === 'quiz'
                ? 'bg-emerald-900/50 text-emerald-200 border border-emerald-700/50'
                : 'text-slate-400 bg-slate-900/40'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
            Diagnostic
          </button>

          {hasDiagnosticResult && (
            <button
              id="mobile-nav-result-btn"
              onClick={() => setActiveTab('result')}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
                activeTab === 'result'
                  ? 'bg-emerald-900/50 text-emerald-200 border border-emerald-700/50'
                  : 'text-slate-400 bg-slate-900/40'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Mon Bilan
            </button>
          )}

          <button
            id="mobile-nav-symboliques-btn"
            onClick={() => setActiveTab('symboliques')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
              activeTab === 'symboliques'
                ? 'bg-indigo-900/50 text-indigo-200 border border-indigo-700/50'
                : 'text-slate-400 bg-slate-900/40'
            }`}
          >
            <Headphones className="w-3.5 h-3.5 text-amber-300" />
            Diag. Audio (Symboliques)
          </button>

          <button
            id="mobile-nav-player-btn"
            onClick={() => setActiveTab('player')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
              activeTab === 'player'
                ? 'bg-emerald-900/50 text-emerald-200 border border-emerald-700/50'
                : 'text-slate-400 bg-slate-900/40'
            }`}
          >
            <Disc3 className="w-3.5 h-3.5 text-emerald-400" />
            Coran Arabe ({activePlaylistCount})
          </button>

          <button
            id="mobile-nav-protocol-btn"
            onClick={() => setActiveTab('protocol')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
              activeTab === 'protocol'
                ? 'bg-emerald-900/50 text-emerald-200 border border-emerald-700/50'
                : 'text-slate-400 bg-slate-900/40'
            }`}
          >
            <CalendarCheck className="w-3.5 h-3.5 text-teal-400" />
            12 Jours
          </button>

          <button
            id="mobile-nav-dhikr-btn"
            onClick={() => setActiveTab('dhikr')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
              activeTab === 'dhikr'
                ? 'bg-emerald-900/50 text-emerald-200 border border-emerald-700/50'
                : 'text-slate-400 bg-slate-900/40'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-300" />
            Dhikr
          </button>

          <button
            id="mobile-nav-guide-btn"
            onClick={() => setActiveTab('guide')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
              activeTab === 'guide'
                ? 'bg-emerald-900/50 text-emerald-200 border border-emerald-700/50'
                : 'text-slate-400 bg-slate-900/40'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            Guide Pratique
          </button>

          <button
            id="mobile-nav-advisor-btn"
            onClick={() => setActiveTab('advisor')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
              activeTab === 'advisor'
                ? 'bg-emerald-900/50 text-emerald-200 border border-emerald-700/50'
                : 'text-slate-400 bg-slate-900/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Conseils
          </button>
        </div>
      </div>
    </header>
  );
};
