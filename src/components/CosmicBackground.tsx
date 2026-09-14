import { useEffect, useRef } from 'react';

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const starColors = ['#ffffff', '#c0c1ff', '#4cd7f6', '#ddb7ff', '#acedff'];
    let stars: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      baseAlpha: number;
      scintillationSpeed: number;
      phase: number;
    }> = [];

    const initStars = () => {
      stars = [];
      const count = Math.floor((width * height) / 4200);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.3 + 0.35,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          baseAlpha: Math.random() * 0.7 + 0.2,
          scintillationSpeed: Math.random() * 0.02 + 0.008,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    initStars();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Shooting stars
    interface Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      vx: number;
      vy: number;
      opacity: number;
      fadeSpeed: number;
      colorHead: string;
      colorTail: string;
    }

    const shootingStars: Meteor[] = [];

    const spawnShootingStar = () => {
      const angle = (Math.random() * 20 + 25) * (Math.PI / 180); // ~25-45 deg diagonal
      const speed = Math.random() * 7 + 13;
      const length = Math.random() * 110 + 90;
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.45,
        length,
        speed,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        opacity: 1,
        fadeSpeed: Math.random() * 0.014 + 0.01,
        colorHead: '#ffffff',
        colorTail: Math.random() > 0.5 ? '#4cd7f6' : '#c0c1ff',
      });

      const nextDelay = Math.random() * 4000 + 3500;
      meteorTimer = window.setTimeout(spawnShootingStar, nextDelay);
    };

    let meteorTimer = window.setTimeout(spawnShootingStar, 1500);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.phase += s.scintillationSpeed;
        const alpha = Math.max(0.08, Math.min(1, s.baseAlpha + Math.sin(s.phase) * 0.35));

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();

        // Bloom for bright stars
        if (s.radius > 1.15 && alpha > 0.65) {
          ctx.globalAlpha = alpha * 0.28;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // 2. Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const meteor = shootingStars[i];
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.opacity -= meteor.fadeSpeed;

        if (meteor.opacity <= 0 || meteor.x > width + 150 || meteor.y > height + 150) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = meteor.x - (meteor.vx / meteor.speed) * meteor.length;
        const tailY = meteor.y - (meteor.vy / meteor.speed) * meteor.length;

        ctx.save();
        ctx.globalAlpha = Math.max(0, meteor.opacity);

        const grad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        grad.addColorStop(0, 'rgba(76, 215, 246, 0)');
        grad.addColorStop(0.55, meteor.colorTail);
        grad.addColorStop(1, meteor.colorHead);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        // Meteor glowing nucleus
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow halo
        ctx.fillStyle = 'rgba(76, 215, 246, 0.45)';
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(meteorTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
      {/* Dynamic Cosmic Ambient Radial Dust & Gradients */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_55%),radial-gradient(circle_at_80%_40%,rgba(76,215,246,0.07),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(183,109,255,0.06),transparent_50%)]"
        aria-hidden="true"
      />
    </>
  );
}
