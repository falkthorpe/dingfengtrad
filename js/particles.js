/* ==========================================================================
   dingfengtrad.com - Canvas particle / constellation network
   Lightweight 2D canvas animation - engineered feel
   ========================================================================== */

(function () {
  'use strict';

  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let w = 0, h = 0, dpr = 1;
  let particles = [];
  let mouse = { x: -9999, y: -9999, active: false };
  let animId = null;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.parentElement.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    init();
  }

  function init() {
    const targetCount = isMobile ? 50 : 110;
    const area = w * h;
    const count = Math.max(40, Math.min(targetCount, Math.floor(area / 12000)));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.4,
        c: Math.random() > 0.7 ? 'rgba(124,58,237,' : 'rgba(0,212,255,'
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      const dxm = p.x - mouse.x;
      const dym = p.y - mouse.y;
      const dm = Math.sqrt(dxm * dxm + dym * dym);
      if (mouse.active && dm < 120) {
        p.x += (dxm / dm) * 0.3;
        p.y += (dym / dym) * 0.3;
      }
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        const maxD = 130;
        if (d2 < maxD * maxD) {
          const op = 1 - Math.sqrt(d2) / maxD;
          ctx.strokeStyle = `rgba(0,212,255,${op * 0.18})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Mouse halo lines
    if (mouse.active) {
      for (let p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        const mD = 160;
        if (d2 < mD * mD) {
          const op = 1 - Math.sqrt(d2) / mD;
          ctx.strokeStyle = `rgba(124,58,237,${op * 0.3})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (let p of particles) {
      ctx.fillStyle = p.c + '0.85)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    animId = requestAnimationFrame(step);
  }

  // Mouse events
  function onMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  }
  function onLeave() { mouse.active = false; mouse.x = -9999; mouse.y = -9999; }

  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('mouseleave', onLeave);
  canvas.addEventListener('touchmove', function (e) {
    if (e.touches[0]) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    }
  }, { passive: true });
  canvas.addEventListener('touchend', onLeave);

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    step();
  });

  // Pause animation when not visible
  if ('IntersectionObserver' in window) {
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!animId) step();
        } else {
          if (animId) { cancelAnimationFrame(animId); animId = null; }
        }
      });
    }, { threshold: 0.05 });
    io2.observe(canvas);
  }

  resize();
  step();
})();
