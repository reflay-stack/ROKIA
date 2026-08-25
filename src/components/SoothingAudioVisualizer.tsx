import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Waves, CircleDot, Eye, EyeOff } from 'lucide-react';

interface SoothingAudioVisualizerProps {
  isPlaying: boolean;
  surahName?: string;
  theme?: 'emerald' | 'amber' | 'teal';
}

export const SoothingAudioVisualizer: React.FC<SoothingAudioVisualizerProps> = ({
  isPlaying,
  surahName,
  theme = 'emerald',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  
  const [visualMode, setVisualMode] = useState<'waves' | 'particles' | 'combined'>('combined');
  const [isBreathingGuideActive, setIsBreathingGuideActive] = useState<boolean>(true);

  // Speed and phase state refs for continuous fluid motion
  const stateRef = useRef({
    phase: 0,
    speed: isPlaying ? 0.035 : 0.008,
    targetSpeed: isPlaying ? 0.035 : 0.008,
    amplitudeMultiplier: isPlaying ? 1.0 : 0.25,
    targetAmp: isPlaying ? 1.0 : 0.25,
    particles: [] as Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      baseAlpha: number;
      color: string;
    }>,
  });

  // Update target speed & amplitude when playing state changes
  useEffect(() => {
    stateRef.current.targetSpeed = isPlaying ? 0.038 : 0.006;
    stateRef.current.targetAmp = isPlaying ? 1.0 : 0.2;
  }, [isPlaying]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handler using container bounding rect
    const updateCanvasSize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Initialize particles
      const particleColors = theme === 'amber'
        ? ['#f59e0b', '#fbbf24', '#d97706', '#fef3c7']
        : theme === 'teal'
        ? ['#14b8a6', '#2dd4bf', '#0f766e', '#ccfbf1']
        : ['#10b981', '#34d399', '#059669', '#6ee7b7', '#f59e0b'];

      const pCount = Math.min(35, Math.floor(rect.width / 25));
      const newParticles = [];
      for (let i = 0; i < pCount; i++) {
        newParticles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          radius: Math.random() * 2.5 + 1.2,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -(Math.random() * 0.5 + 0.2),
          alpha: Math.random() * 0.7 + 0.2,
          baseAlpha: Math.random() * 0.5 + 0.3,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
        });
      }
      stateRef.current.particles = newParticles;
    };

    updateCanvasSize();

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Animation Loop
    const render = () => {
      if (!canvas || !ctx || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Smooth interpolation for speed and amplitude
      const s = stateRef.current;
      s.speed += (s.targetSpeed - s.speed) * 0.06;
      s.amplitudeMultiplier += (s.targetAmp - s.amplitudeMultiplier) * 0.05;
      s.phase += s.speed;

      ctx.clearRect(0, 0, width, height);

      // Background gentle radial glow in the center
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        width / 1.5
      );

      if (theme === 'amber') {
        gradient.addColorStop(0, isPlaying ? 'rgba(245, 158, 11, 0.14)' : 'rgba(245, 158, 11, 0.04)');
        gradient.addColorStop(0.5, isPlaying ? 'rgba(180, 83, 9, 0.06)' : 'rgba(180, 83, 9, 0.02)');
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
      } else {
        gradient.addColorStop(0, isPlaying ? 'rgba(16, 185, 129, 0.16)' : 'rgba(16, 185, 129, 0.04)');
        gradient.addColorStop(0.5, isPlaying ? 'rgba(13, 148, 136, 0.07)' : 'rgba(13, 148, 136, 0.02)');
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Floating Particles (if mode is 'particles' or 'combined')
      if (visualMode === 'particles' || visualMode === 'combined') {
        s.particles.forEach((p) => {
          p.x += p.vx * (isPlaying ? 1.4 : 0.4);
          p.y += p.vy * (isPlaying ? 1.4 : 0.4);

          // Wrap around screen
          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          // Pulse particle glow
          const pulse = Math.sin(s.phase * 2 + p.x) * 0.2;
          const currentAlpha = Math.max(0.1, Math.min(0.9, p.baseAlpha + pulse)) * (isPlaying ? 1.0 : 0.4);

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * (isPlaying ? 1.15 : 0.9), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha;
          ctx.shadowBlur = isPlaying ? 10 : 4;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        });
      }

      // Draw Harmonic Waves (if mode is 'waves' or 'combined')
      if (visualMode === 'waves' || visualMode === 'combined') {
        const waveConfigs = [
          {
            frequency: 0.012,
            amplitude: 20 * s.amplitudeMultiplier,
            speedOffset: 0,
            color: 'rgba(16, 185, 129, 0.45)',
            lineWidth: 2.2,
          },
          {
            frequency: 0.018,
            amplitude: 28 * s.amplitudeMultiplier,
            speedOffset: 1.5,
            color: 'rgba(45, 212, 191, 0.4)',
            lineWidth: 1.8,
          },
          {
            frequency: 0.008,
            amplitude: 14 * s.amplitudeMultiplier,
            speedOffset: 3.2,
            color: 'rgba(245, 158, 11, 0.35)',
            lineWidth: 1.5,
          },
          {
            frequency: 0.024,
            amplitude: 18 * s.amplitudeMultiplier,
            speedOffset: 4.8,
            color: 'rgba(52, 211, 153, 0.3)',
            lineWidth: 1.2,
          },
        ];

        waveConfigs.forEach((w) => {
          ctx.save();
          ctx.beginPath();
          ctx.lineWidth = w.lineWidth;
          ctx.strokeStyle = w.color;
          ctx.shadowBlur = isPlaying ? 12 : 3;
          ctx.shadowColor = w.color;

          const centerY = height / 2;
          for (let x = 0; x <= width; x += 4) {
            // Apply a bell-curve windowing function so waves smoothly taper at the container edges
            const windowing = Math.sin((x / width) * Math.PI);
            const y =
              centerY +
              Math.sin(x * w.frequency + s.phase + w.speedOffset) *
                w.amplitude *
                windowing *
                (1 + 0.25 * Math.cos(s.phase * 0.7 + x * 0.005));

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
          ctx.restore();
        });
      }

      // Draw Center Rhythmic Breathing / Serenity Pulse
      if (isBreathingGuideActive) {
        const breathTime = (Date.now() / 3800) * Math.PI; // ~7.6s full cycle (inhalation/exhalation)
        const breathRadius = (height * 0.16) + Math.sin(breathTime) * (height * 0.05) * (isPlaying ? 1.0 : 0.3);
        const breathAlpha = 0.15 + Math.sin(breathTime) * 0.1;

        ctx.save();
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, Math.max(12, breathRadius), 0, Math.PI * 2);
        ctx.strokeStyle = theme === 'amber' ? 'rgba(245, 158, 11, 0.5)' : 'rgba(52, 211, 153, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.globalAlpha = isPlaying ? breathAlpha : breathAlpha * 0.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, Math.max(4, breathRadius * 0.35), 0, Math.PI * 2);
        ctx.fillStyle = theme === 'amber' ? 'rgba(251, 191, 36, 0.4)' : 'rgba(16, 185, 129, 0.4)';
        ctx.fill();
        ctx.restore();
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
    };
  }, [isPlaying, visualMode, isBreathingGuideActive, theme]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-emerald-900/60 bg-slate-950 shadow-2xl my-3">
      {/* Top Overlay Badge & Controls */}
      <div className="absolute top-2.5 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-900/90 text-emerald-300 border border-emerald-800/70 shadow backdrop-blur-md">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
            {isPlaying ? 'Onde Sonore & Concentration Active' : 'Sérénité en Attente (Pause)'}
          </span>
          {surahName && (
            <span className="hidden sm:inline-block text-[11px] text-slate-400 bg-slate-900/80 px-2 py-1 rounded-md border border-slate-800 backdrop-blur-sm">
              {surahName}
            </span>
          )}
        </div>

        {/* Visual Mode Toggles */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 pointer-events-auto backdrop-blur-md shadow-md">
          <button
            onClick={() => setVisualMode('waves')}
            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              visualMode === 'waves'
                ? 'bg-emerald-700 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Mode Ondes Sonores"
          >
            <Waves className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-[10px]">Ondes</span>
          </button>

          <button
            onClick={() => setVisualMode('particles')}
            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              visualMode === 'particles'
                ? 'bg-emerald-700 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Mode Particules & Aura"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-[10px]">Particules</span>
          </button>

          <button
            onClick={() => setVisualMode('combined')}
            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              visualMode === 'combined'
                ? 'bg-emerald-700 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Mode Ondes + Particules Combinées"
          >
            <span className="text-[10px] font-bold px-1">Onde & Flux</span>
          </button>

          <button
            onClick={() => setIsBreathingGuideActive(!isBreathingGuideActive)}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              isBreathingGuideActive
                ? 'text-emerald-300 bg-emerald-950/70 border border-emerald-800/50'
                : 'text-slate-500 hover:text-slate-300'
            }`}
            title={isBreathingGuideActive ? 'Masquer le repère respiratoire' : 'Activer le repère respiratoire'}
          >
            <CircleDot className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Visual Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-36 sm:h-44 md:h-52 relative flex items-center justify-center cursor-crosshair overflow-hidden"
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* Ambient Subtle Center Hint when paused */}
        {!isPlaying && (
          <div className="relative z-10 text-center pointer-events-none px-4 select-none opacity-70">
            <p className="text-xs text-slate-400 font-medium tracking-wide">
              Appuyez sur <span className="text-emerald-300 font-bold">Écouter</span> pour lancer l'immersion spirituelle
            </p>
          </div>
        )}

        {/* Dynamic Wave Frequency Bar Overlay (Bottom) */}
        <div className="absolute bottom-2 left-6 right-6 flex items-end justify-between gap-1 h-8 pointer-events-none opacity-40">
          {[...Array(32)].map((_, i) => {
            // Harmonic equalizer bars effect
            return (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-emerald-500/80 to-teal-300/40 rounded-t-sm transition-all duration-300"
                style={{
                  height: isPlaying
                    ? `${Math.max(12, Math.sin((i / 32) * Math.PI + (Date.now() / 300) + i) * 85)}%`
                    : '10%',
                  opacity: isPlaying ? 0.75 : 0.25,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom Subtitle / Mindfulness breathing hint */}
      <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Conseil d'écoute : Respirez profondément et concentrez votre intention sur la guérison divine (Ach-Chifaa).</span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-emerald-400/80">
          {isPlaying ? 'Énergie Coranique Active' : 'Pause'}
        </span>
      </div>
    </div>
  );
};
