/* ==========================================================================
   dingfengtrad.com - Main JavaScript
   Tesla-style scroll animations, interactions, particles
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------
     Header scroll behavior
     -------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  const updateHeader = () => {
    if (window.scrollY > 40) header?.classList.add('scrolled');
    else header?.classList.remove('scrolled');
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* --------------------------------------------------------
     Mobile nav toggle
     -------------------------------------------------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      primaryNav.classList.toggle('open');
    });
    primaryNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        primaryNav.classList.remove('open');
      });
    });
  }

  /* --------------------------------------------------------
     Smooth scroll
     -------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* --------------------------------------------------------
     Reveal on scroll
     -------------------------------------------------------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  /* --------------------------------------------------------
     Number counter (for stat values)
     -------------------------------------------------------- */
  const counters = document.querySelectorAll('[data-counter]');
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1800;
    const startTime = performance.now();
    const startVal = 0;
    const isFloat = !Number.isInteger(target);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = startVal + (target - startVal) * eased;
      el.textContent = prefix + (isFloat ? value.toFixed(1) : Math.floor(value).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window && counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) => (c.textContent = (c.getAttribute('data-counter') || '0') + (c.getAttribute('data-suffix') || '')));
  }

  /* --------------------------------------------------------
     Back to top button
     -------------------------------------------------------- */
  const backTop = document.querySelector('.back-top');
  const onScroll = () => {
    if (window.scrollY > 600) backTop?.classList.add('show');
    else backTop?.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* --------------------------------------------------------
     Tilt effect on cards
     -------------------------------------------------------- */
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -4;
      const ry = ((x - cx) / cx) * 4;
      el.style.transform = `translateY(-6px) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  /* --------------------------------------------------------
     Mouse-follow glow
     -------------------------------------------------------- */
  document.querySelectorAll('[data-glow]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', e.clientX - rect.left + 'px');
      el.style.setProperty('--my', e.clientY - rect.top + 'px');
    });
  });

  /* --------------------------------------------------------
     Contact form (front-end only, no real backend)
     -------------------------------------------------------- */
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      const submit = form.querySelector('button[type="submit"]');
      if (submit) {
        submit.disabled = true;
        submit.textContent = 'Sending...';
      }
      setTimeout(() => {
        success?.classList.add('show');
        form.reset();
        if (submit) {
          submit.disabled = false;
          submit.textContent = 'Submit Request';
        }
        setTimeout(() => success?.classList.remove('show'), 5000);
      }, 800);
    });
  }

  /* --------------------------------------------------------
     Active nav highlight
     -------------------------------------------------------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a').forEach((a) => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
