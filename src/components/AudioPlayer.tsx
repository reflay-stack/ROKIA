import React, { useState, useEffect, useRef } from 'react';
import { QuranVerse } from '../types/roqya';
import { 
  Play, Pause, SkipForward, SkipBack, RotateCcw, Volume2, VolumeX, 
  Sparkles, CheckCircle, Flame, HeartHandshake, Eye, EyeOff, ShieldCheck, 
  Repeat, Headphones, Sliders, ExternalLink, Bookmark
} from 'lucide-react';

interface AudioPlayerProps {
  playlist: QuranVerse[];
  dominantConditionName?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ playlist, dominantConditionName }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentRepetition, setCurrentRepetition] = useState<number>(1);
  const [targetRepetitions, setTargetRepetitions] = useState<number>(7);
  const [showTransliteration, setShowTransliteration] = useState<boolean>(true);
  const [showFrenchMeaning, setShowFrenchMeaning] = useState<boolean>(true);
  const [filterType, setFilterType] = useState<'all' | 'base' | 'specific'>('all');
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(0.9);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [activeTabSub, setActiveTabSub] = useState<'recitation' | 'symptoms_guide' | 'advice'>('recitation');
  const [bookmarkedVerses, setBookmarkedVerses] = useState<string[]>([]);
  const [audioError, setAudioError] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeVerseRef = useRef<HTMLDivElement | null>(null);

  // Filtered playlist
  const filteredPlaylist = playlist.filter((v) => {
    if (filterType === 'base') return v.isBaseVerse;
    if (filterType === 'specific') return !v.isBaseVerse;
    return true;
  });

  const currentVerse = filteredPlaylist[currentIndex] || filteredPlaylist[0] || playlist[0];

  // Initialize or handle verse change
  useEffect(() => {
    setCurrentRepetition(1);
    setAudioError(false);
    if (audioRef.current && currentVerse?.audioUrl) {
      audioRef.current.src = currentVerse.audioUrl;
      audioRef.current.playbackRate = playbackSpeed;
      audioRef.current.volume = isMuted ? 0 : volume;
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn('Audio play auto-interrupted or blocked:', err);
          setAudioError(true);
        });
      }
    }
  }, [currentIndex, currentVerse, playlist]);

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

  // Handle Audio Ended (Loop repetitions then next verse)
  const handleAudioEnded = () => {
    if (targetRepetitions === 999) {
      // Infinite repeat of current verse
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
      // Move to next verse in playlist
      handleNextVerse();
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
        console.warn('Play error:', err);
        setIsPlaying(false);
        setAudioError(true);
      });
    }
  };

  const handleNextVerse = () => {
    if (currentIndex < filteredPlaylist.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentRepetition(1);
    } else {
      // Restart playlist from beginning
      setCurrentIndex(0);
      setCurrentRepetition(1);
    }
  };

  const handlePrevVerse = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentRepetition(1);
    }
  };

  const toggleBookmark = (verseId: string) => {
    setBookmarkedVerses((prev) =>
      prev.includes(verseId) ? prev.filter((id) => id !== verseId) : [...prev, verseId]
    );
  };

  if (!currentVerse) {
    return (
      <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-emerald-900/40">
        <p className="text-slate-300">Aucun verset disponible dans la playlist sélectionnée.</p>
        <button
          onClick={() => setFilterType('all')}
          className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white text-sm"
        >
          Afficher tous les versets
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        onError={() => setAudioError(true)}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/60 to-slate-900 p-5 sm:p-6 rounded-2xl border border-emerald-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-200 border border-emerald-700/50 flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-emerald-400" />
                Lecture Orthodoxe en Arabe Pur
              </span>
              {dominantConditionName && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/50">
                  Cas détecté : {dominantConditionName}
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Lecteur Coranique de Soins & Répétitions
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Règle stricte selon Ben Halima Abderraouf : l\'écoute s\'effectue <strong className="text-emerald-300">exclusivement en langue arabe</strong> avec concentration et présence de cœur. La traduction française est fournie à titre indicatif.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              id="focus-mode-btn"
              onClick={() => setIsFocusMode(!isFocusMode)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isFocusMode
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              {isFocusMode ? 'Mode Normal' : 'Mode Immersion / Écoute'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Player on Left, Playlist & Guidance on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Active Quran Verse Player (7 or 12 cols in Focus Mode) */}
        <div className={`${isFocusMode ? 'lg:col-span-12' : 'lg:col-span-8'} space-y-6`}>
          {/* Main Display Card */}
          <div className="bg-slate-900/80 rounded-2xl border border-emerald-800/40 p-6 sm:p-8 shadow-2xl relative">
            {/* Top Bar inside Card */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-700/50 text-emerald-300 flex items-center justify-center font-bold text-sm">
                  {currentVerse.surahNumber}
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {currentVerse.surahNameFr}
                  </h2>
                  <p className="text-xs text-emerald-400 font-medium">
                    {currentVerse.surahNameAr} • Versets {currentVerse.verseRange}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(currentVerse.id)}
                  className={`p-2 rounded-lg border transition-colors ${
                    bookmarkedVerses.includes(currentVerse.id)
                      ? 'bg-amber-950/80 border-amber-600/60 text-amber-300'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                  title="Mettre en favori"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  {currentIndex + 1} / {filteredPlaylist.length}
                </span>
              </div>
            </div>

            {/* Why Prescribed Tag */}
            <div className="mb-6 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3 text-xs text-emerald-200/90">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-300 font-semibold">Action Thérapeutique : </strong>
                {currentVerse.whyPrescribed}
              </div>
            </div>

            {/* ARABIC CALLIGRAPHY DISPLAY (CORE) */}
            <div 
              ref={activeVerseRef}
              className="py-6 px-4 sm:px-6 bg-slate-950/80 rounded-2xl border border-emerald-900/50 my-4 text-center select-text shadow-inner"
            >
              <div 
                dir="rtl" 
                className="font-quran text-2xl sm:text-3xl md:text-4xl text-emerald-50 leading-[2.2] sm:leading-[2.4] tracking-wide text-right sm:text-center"
                style={{ wordSpacing: '4px' }}
              >
                {currentVerse.arabicText}
              </div>
            </div>

            {/* Audio Error Alert if any */}
            {audioError && (
              <div className="my-3 p-3 rounded-lg bg-amber-950/60 border border-amber-700/50 text-xs text-amber-200 flex items-center justify-between">
                <span>Le flux audio externe est temporairement indisponible. Vous pouvez lire le texte arabe ci-dessus à voix haute ou avec un casque.</span>
                <button 
                  onClick={() => { setAudioError(false); togglePlayPause(); }}
                  className="ml-2 px-2 py-1 bg-amber-800 hover:bg-amber-700 text-white rounded text-[11px]"
                >
                  Réessayer
                </button>
              </div>
            )}

            {/* Secondary Toggles (Transliteration & French Meaning) */}
            <div className="flex items-center justify-between gap-2 pt-2 pb-4 text-xs text-slate-400 border-b border-slate-800/60">
              <button
                onClick={() => setShowTransliteration(!showTransliteration)}
                className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
              >
                {showTransliteration ? <Eye className="w-3.5 h-3.5 text-emerald-400" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span>Phonétique {showTransliteration ? '(Visible)' : '(Masquée)'}</span>
              </button>

              <button
                onClick={() => setShowFrenchMeaning(!showFrenchMeaning)}
                className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
              >
                {showFrenchMeaning ? <Eye className="w-3.5 h-3.5 text-emerald-400" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span>Sens en français {showFrenchMeaning ? '(Visible)' : '(Masqué)'}</span>
              </button>
            </div>

            {/* Transliteration Box */}
            {showTransliteration && (
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/70 text-xs sm:text-sm text-slate-300 italic font-mono leading-relaxed">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1 not-italic font-sans">
                  Translittération phonétique :
                </span>
                {currentVerse.transliteration}
              </div>
            )}

            {/* French Meaning Box */}
            {showFrenchMeaning && (
              <div className="mt-3 p-3.5 rounded-xl bg-slate-950/30 border border-slate-800/40 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1 font-sans">
                  Sens des versets en français :
                </span>
                {currentVerse.frenchMeaning}
              </div>
            )}

            {/* PLAYER CONTROLS & REPETITION ENGINE */}
            <div className="mt-8 pt-6 border-t border-slate-800 space-y-6">
              {/* Repetition Status Indicator */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/40">
                <div className="flex items-center gap-2 text-sm text-emerald-200 font-medium">
                  <Repeat className="w-4 h-4 text-emerald-400" />
                  <span>Répétition du verset en cours :</span>
                  <span className="font-bold text-emerald-100 bg-emerald-900/70 px-2 py-0.5 rounded-md border border-emerald-700/60">
                    {targetRepetitions === 999 ? `${currentRepetition} (Boucle infinie)` : `${currentRepetition} / ${targetRepetitions}`}
                  </span>
                </div>

                {/* Target Repetitions Selector */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs text-slate-400 mr-1">Répéter :</span>
                  {[1, 3, 7, 11, 21, 999].map((rep) => (
                    <button
                      key={rep}
                      onClick={() => setTargetRepetitions(rep)}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                        targetRepetitions === rep
                          ? 'bg-emerald-600 text-white shadow'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {rep === 999 ? '∞' : `${rep}x`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Playback Bar (Prev, Play/Pause, Next, Speeds, Volume) */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Speed Controls */}
                <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-500 px-1 text-[11px]">Vitesse:</span>
                  {[0.8, 1.0, 1.2].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setPlaybackSpeed(spd)}
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        playbackSpeed === spd
                          ? 'bg-emerald-700 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                {/* Central Transport Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    id="player-prev-btn"
                    onClick={handlePrevVerse}
                    disabled={currentIndex === 0}
                    className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
                    title="Verset précédent"
                  >
                    <SkipBack className="w-5 h-5" />
                  </button>

                  <button
                    id="player-play-btn"
                    onClick={togglePlayPause}
                    className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-xl shadow-emerald-950/80 hover:scale-105 transition-all border border-emerald-400/40"
                    title={isPlaying ? 'Pause' : 'Écouter'}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    id="player-next-btn"
                    onClick={handleNextVerse}
                    className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Verset suivant"
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>

                {/* Volume & Reset */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-slate-400 hover:text-slate-200 p-1.5"
                    title={isMuted ? 'Activer le son' : 'Couper le son'}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(parseFloat(e.target.value));
                      setIsMuted(false);
                    }}
                    className="w-20 accent-emerald-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <button
                    onClick={() => {
                      if (audioRef.current) audioRef.current.currentTime = 0;
                      setCurrentRepetition(1);
                    }}
                    className="p-1.5 text-slate-400 hover:text-slate-200 ml-1"
                    title="Recommencer le verset"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Playlist & Roqya Advice (Hidden or stacked in focus mode) */}
        {!isFocusMode && (
          <div className="lg:col-span-4 space-y-6">
            {/* Playlist Filter Header */}
            <div className="bg-slate-900/80 rounded-2xl border border-emerald-800/40 p-5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  Programme Coranique
                </h3>
                <span className="text-xs text-slate-400">
                  {filteredPlaylist.length} verset(s)
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 mb-4 text-xs font-medium">
                <button
                  onClick={() => { setFilterType('all'); setCurrentIndex(0); }}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    filterType === 'all'
                      ? 'bg-emerald-700 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Tous ({playlist.length})
                </button>
                <button
                  onClick={() => { setFilterType('base'); setCurrentIndex(0); }}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    filterType === 'base'
                      ? 'bg-emerald-700 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Base ({playlist.filter((v) => v.isBaseVerse).length})
                </button>
                <button
                  onClick={() => { setFilterType('specific'); setCurrentIndex(0); }}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    filterType === 'specific'
                      ? 'bg-emerald-700 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Spécifiques ({playlist.filter((v) => !v.isBaseVerse).length})
                </button>
              </div>

              {/* Playlist Item Cards */}
              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                {filteredPlaylist.map((verse, idx) => {
                  const isCurrent = idx === currentIndex;
                  return (
                    <div
                      key={verse.id}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setCurrentRepetition(1);
                      }}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isCurrent
                          ? 'bg-emerald-950/70 border-emerald-500/60 shadow-md ring-1 ring-emerald-500/30'
                          : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                          isCurrent ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="truncate">
                          <p className={`text-xs font-semibold truncate ${isCurrent ? 'text-emerald-200' : 'text-slate-200'}`}>
                            {verse.surahNameFr}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate">
                            Versets {verse.verseRange} • {verse.isBaseVerse ? 'Base' : 'Ciblé'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {isCurrent && isPlaying && (
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-emerald-400 font-bold bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                          {verse.recommendedReps}x
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Roqya Guidance Box */}
            <div className="bg-gradient-to-br from-slate-900 to-emerald-950/50 rounded-2xl border border-emerald-800/40 p-5 shadow-xl space-y-3">
              <h4 className="font-bold text-xs text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                Conseils pendant l\'écoute
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Utiliser des <strong>écouteurs ou un casque</strong> pour isoler les bruits extérieurs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Fermer les yeux, respirer calmement et visualiser la lumière du Coran qui dissout le mal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Réactions normales :</strong> bâillements fréquents, rots, frissons ou chaleur dans les membres = évacuation en cours.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
