(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const gsap = window.gsap;

  if (gsap) gsap.ticker.lagSmoothing(0); // la entrada dura lo mismo aunque la página cargue lenta

  // Barra: fondo sólido al dejar la portada
  const top = $('[data-top]');
  const solid = () => top.classList.toggle('is-solid', scrollY > 60);
  addEventListener('scroll', solid, { passive: true });
  solid();

  // Menú en celular
  const menuBtn = $('[data-menu]'), nav = $('#nav');
  const setMenu = (open) => { menuBtn.setAttribute('aria-expanded', open); top.classList.toggle('is-open', open); };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && top.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); } });

  // Portada: menú de tres palabras; el animal se arma pieza por pieza
  const hero = $('[data-hero]');
  if (hero) {
    const tabs = $$('[role=tab]', hero);
    const animals = $$('.animal', hero);
    const pieces = (a) => [...$('svg', a).children].filter((n) => n.tagName !== 'defs');
    let current = null;

    const assemble = (a, first) => {
      const p = pieces(a);
      gsap.killTweensOf(p);
      if (reduce.matches) { gsap.fromTo(a, { opacity: 0 }, { opacity: 1, duration: 0.3 }); return; }
      gsap.fromTo(p, {
        x: (i) => Math.cos(i * 2.4) * (260 + (i % 5) * 60),
        y: (i) => Math.sin(i * 2.4) * (220 + (i % 4) * 60),
        rotation: (i) => (i % 2 ? 1 : -1) * (40 + (i % 6) * 18),
        scale: 0.5, opacity: 0, transformOrigin: '50% 50%',
      }, {
        x: 0, y: 0, rotation: 0, scale: 1, opacity: 1,
        duration: first ? 1.3 : 0.85, ease: 'expo.out', stagger: { amount: first ? 0.55 : 0.28 }, overwrite: true,
      });
    };

    const select = (tab, first) => {
      if (tab === current) return;
      current = tab;
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      hero.style.setProperty('--bg', tab.dataset.bg);
      animals.forEach((a) => {
        const on = a.dataset.animal === tab.dataset.animal;
        a.hidden = !on;
        if (on && gsap) assemble(a, first);
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!d) return;
        e.preventDefault();
        const n = tabs[(i + d + tabs.length) % tabs.length];
        n.focus();
        select(n);
      });
    });
    select(tabs[0], true);

    // Cambio automático: se detiene con el botón, al enfocar el menú con teclado o fuera de la vista
    const toggle = $('[data-auto-toggle]', hero);
    const WAIT = 6000;
    let timer = null, paused = reduce.matches, visible = true;
    const schedule = () => {
      clearTimeout(timer);
      if (paused || !visible || document.hidden || hero.querySelector('[role=tablist] :focus-visible')) return;
      timer = setTimeout(() => { select(tabs[(tabs.indexOf(current) + 1) % tabs.length]); schedule(); }, WAIT);
    };
    toggle.addEventListener('click', () => {
      paused = !paused;
      toggle.classList.toggle('is-paused', paused);
      toggle.setAttribute('aria-label', paused ? toggle.dataset.resume : toggle.dataset.pause);
      schedule();
    });
    tabs.forEach((t) => t.addEventListener('click', schedule));
    hero.addEventListener('focusin', schedule);
    hero.addEventListener('focusout', () => setTimeout(schedule));
    document.addEventListener('visibilitychange', schedule);
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; schedule(); }, { threshold: 0.35 }).observe(hero);
    schedule();

    // El animal sigue levemente al cursor
    if (gsap && !reduce.matches && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const art = $('.hero__art', hero);
      const qx = gsap.quickTo(art, 'x', { duration: 0.8, ease: 'power3' });
      const qy = gsap.quickTo(art, 'y', { duration: 0.8, ease: 'power3' });
      hero.addEventListener('pointermove', (e) => {
        qx((e.clientX / innerWidth - 0.5) * -28);
        qy((e.clientY / innerHeight - 0.5) * -20);
      });
    }
  }

  // Juegos: la carátula de abajo se aleja cuando la siguiente la cubre
  if (gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 861px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)', () => {
      const games = $$('.game');
      games.slice(0, -1).forEach((g, i) => {
        gsap.to($('.game__in', g), {
          scale: 0.93, opacity: 0.35, ease: 'none',
          scrollTrigger: { trigger: games[i + 1], start: 'top bottom', end: 'top top', scrub: true },
        });
      });
    });
    addEventListener('load', () => ScrollTrigger.refresh());
  }

  // Galería: con el mouse a la derecha avanza, a la izquierda regresa; más cerca del borde, más rápido
  const wall = $('[data-wall]');
  if (wall && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let speed = 0, raf = 0, last = 0, pos = 0;
    const step = (t) => {
      const dt = Math.min(t - last, 50);
      last = t;
      pos = Math.max(0, Math.min(wall.scrollWidth - wall.clientWidth, pos + speed * dt));
      wall.scrollLeft = pos;
      raf = speed ? requestAnimationFrame(step) : 0;
    };
    wall.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const r = wall.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1 izquierda, 1 derecha
      const force = Math.max(0, (Math.abs(x) - 0.25) / 0.75);
      speed = Math.sign(x) * force * 1.1; // px por ms
      wall.dataset.dir = force ? Math.sign(x) : 0;
      if (speed && !raf) { pos = wall.scrollLeft; last = performance.now(); raf = requestAnimationFrame(step); }
    });
    wall.addEventListener('pointerleave', () => { speed = 0; wall.dataset.dir = 0; });
  }

  // Videos: solo se reproducen a la vista, y nunca con movimiento reducido
  const vids = $$('video[data-auto]');
  if (vids.length) {
    if (reduce.matches) vids.forEach((v) => { v.controls = !v.closest('a'); });
    else {
      const io = new IntersectionObserver((es) => es.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) target.play().catch(() => {}); else target.pause();
      }), { rootMargin: '120px' });
      vids.forEach((v) => io.observe(v));
    }
  }

  // Contacto: cada opción cambia el mensaje de WhatsApp
  const ask = $('[data-ask]'), wa = $('[data-wa]');
  if (ask && wa) ask.addEventListener('change', (e) => { wa.href = e.target.value; });
})();
