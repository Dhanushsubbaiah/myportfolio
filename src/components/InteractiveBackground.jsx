import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const state = {
      w: 0,
      h: 0,
      themeDark: document.documentElement.classList.contains('dark'),
      target: { x: 0, y: 0 },
      blobs: [
        { x: 0, y: 0, vx: 0, vy: 0, lag: 0.05, radius: 80 },
        { x: 0, y: 0, vx: 0, vy: 0, lag: 0.07, radius: 60 },
        { x: 0, y: 0, vx: 0, vy: 0, lag: 0.08, radius: 40 },
      ],
      particles: [],
      lastMove: 0,
      hue: 0,
      lastEmit: 0,
    };

    function resize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state.w = w;
      state.h = h;
      // center blobs initially
      const cx = w / 2;
      const cy = h / 2;
      state.target.x = cx;
      state.target.y = cy;
      state.blobs.forEach((b, i) => {
        b.x = cx;
        b.y = cy;
        b.vx = 0;
        b.vy = 0;
      });
    }

    function handleMove(e) {
      const t = e.touches ? e.touches[0] : e;
      state.target.x = t.clientX;
      state.target.y = t.clientY;
      const now = performance.now();
      state.lastMove = now;
      // emit particles (very low density)
      if (now - state.lastEmit > 90) {
        state.lastEmit = now;
        state.particles.push({
          x: state.target.x + (Math.random() - 0.5) * 8,
          y: state.target.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          life: 1,
          r: 0.5 + Math.random() * 0.6,
        });
      }
      if (state.particles.length > 60) state.particles.splice(0, state.particles.length - 60);
    }

    function updateTheme() {
      state.themeDark = document.documentElement.classList.contains('dark');
    }

    function step() {
      state.hue = (state.hue + 0.05) % 360; // very slow rainbow shift
      // clear with subtle fade for trails
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = state.themeDark ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.08)';
      ctx.fillRect(0, 0, state.w, state.h);

      // update blobs (spring toward target)
      state.blobs.forEach((b) => {
        const ax = (state.target.x - b.x) * b.lag;
        const ay = (state.target.y - b.y) * b.lag;
        b.vx = (b.vx + ax) * 0.85;
        b.vy = (b.vy + ay) * 0.85;
        b.x += b.vx;
        b.y += b.vy;
      });

      // draw glow blobs; vibgyor hues cycling
      ctx.globalCompositeOperation = state.themeDark ? 'screen' : 'source-over';
      const alpha = state.themeDark ? 0.08 : 0.10;
      const hues = [0, 30, 60, 120, 210, 270, 300]; // R O Y G B I V
      state.blobs.forEach((b, i) => {
        const h = (state.hue + hues[(i * 2) % hues.length]) % 360;
        const inner = `hsla(${h}, 90%, ${state.themeDark ? 55 : 60}%, ${alpha})`;
        const grd = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grd.addColorStop(0, inner);
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // particles (cosmic twinkles)
      ctx.globalCompositeOperation = state.themeDark ? 'lighter' : 'source-over';
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life *= 0.94;
        if (p.life < 0.05) {
          state.particles.splice(i, 1);
          continue;
        }
        const base = state.themeDark ? 0.08 : 0.12; // very dim
        const op = base * p.life;
        const ph = (state.hue + (i * 13) % 360) % 360;
        ctx.fillStyle = `hsla(${ph}, 90%, ${state.themeDark ? 70 : 50}%, ${op})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    resize();
    updateTheme();
    step();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    const themeObs = new MutationObserver(updateTheme);
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      themeObs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
