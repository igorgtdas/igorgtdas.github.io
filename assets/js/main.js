/**
 * Script compartilhado (landing + páginas de case).
 * - Idioma: todo texto existe em PT e EN (.l-pt / .l-en); trocar o idioma só muda
 *   o atributo data-lang no <html>, sem re-renderizar nada.
 * - Tema: claro por padrão, alternável para escuro.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var LANG_KEY = 'portfolio-lang';
  var THEME_KEY = 'portfolio-theme';

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage indisponível */ }
  }

  // ---------- Idioma ----------
  function currentLang() { return root.getAttribute('data-lang') === 'en' ? 'en' : 'pt'; }

  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    var btn = document.querySelector('.lang-toggle');
    if (btn) {
      btn.textContent = lang === 'en' ? 'PT' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Mudar para português' : 'Switch to English');
    }
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.getAttribute('content');
  }

  // ---------- Tema ----------
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
  }

  // ---------- Helpers de render ----------
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  // Texto bilíngue: { pt, en } vira dois spans; string simples passa direto
  function bi(v, allowHtml) {
    if (v == null) return '';
    if (typeof v === 'string') return allowHtml ? v : esc(v);
    var pt = allowHtml ? v.pt : esc(v.pt);
    var en = allowHtml ? v.en : esc(v.en);
    return '<span class="l-pt">' + pt + '</span><span class="l-en">' + en + '</span>';
  }
  function chips(list) {
    return '<div class="chip-row">' + list.map(function (c) {
      return '<span class="chip">' + esc(c) + '</span>';
    }).join('') + '</div>';
  }

  function renderFeatured(el, items) {
    el.innerHTML = items.map(function (p) {
      var tags = p.challenge
        ? '<span class="tag-nda tag-team">' + bi({ pt: 'Desafio técnico', en: 'Technical challenge' }) + '</span>'
        : '<span class="tag-nda">' + bi({ pt: 'Projeto profissional · NDA', en: 'Professional project · NDA' }) + '</span>';
      if (p.team) tags += '<span class="tag-nda tag-team">' + bi({ pt: 'Contribuição em time', en: 'Team contribution' }) + '</span>';
      return '' +
        '<article class="feature-card reveal' + (p.hero ? ' is-hero' : '') + '">' +
          '<div class="feature-media"><img src="' + esc(p.image) + '" alt="' + esc(p.alt.pt) + '" loading="lazy"></div>' +
          '<div class="feature-body">' +
            '<div class="feature-top">' + tags + '</div>' +
            '<h3 class="feature-title">' + esc(p.title) + '</h3>' +
            '<p class="feature-sub">' + bi(p.summary) + '</p>' +
            '<ul class="feature-list">' + p.highlights.map(function (h) { return '<li>' + bi(h, true) + '</li>'; }).join('') + '</ul>' +
            chips(p.stack) +
            '<a class="feature-link stretched" href="' + esc(p.caseUrl) + '">' +
              bi({ pt: 'Ver case completo', en: 'Read the full case' }) + ' <span class="arrow">→</span></a>' +
          '</div>' +
        '</article>';
    }).join('');
  }

  function renderPersonal(el, items) {
    el.innerHTML = items.map(function (p) {
      var imgs = Array.isArray(p.image) ? p.image : [p.image];
      var media = imgs.map(function (src, i) {
        return '<img src="' + esc(src) + '" alt="' + esc(p.alt) + '" loading="lazy"' + (i === 0 ? ' class="is-visible"' : '') + '>';
      }).join('');
      var links = '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">GitHub →</a>';
      if (p.pdf) links += '<a href="' + esc(p.pdf) + '" target="_blank" rel="noopener">' + bi({ pt: 'TCC (PDF)', en: 'Thesis (PDF)' }) + '</a>';
      return '' +
        '<article class="personal-card reveal">' +
          '<div class="personal-media' + (imgs.length > 1 ? ' slideshow' : '') + '">' + media + '</div>' +
          '<div class="personal-body">' +
            '<h3>' + bi(p.title) + '</h3>' +
            '<p>' + bi(p.description) + '</p>' +
            chips(p.stack) +
            '<div class="personal-links">' + links + '</div>' +
          '</div>' +
        '</article>';
    }).join('');
  }

  // Um único timer para todos os slideshows (não acumula intervals)
  var slideTimer = null;
  function startSlideshows() {
    if (slideTimer) clearInterval(slideTimer);
    var shows = document.querySelectorAll('.personal-media.slideshow');
    if (!shows.length) return;
    slideTimer = setInterval(function () {
      shows.forEach(function (box) {
        var imgs = box.querySelectorAll('img');
        var idx = 0;
        imgs.forEach(function (img, i) { if (img.classList.contains('is-visible')) idx = i; });
        imgs[idx].classList.remove('is-visible');
        imgs[(idx + 1) % imgs.length].classList.add('is-visible');
      });
    }, 4000);
  }

  // ---------- Reveal ao rolar ----------
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  // ---------- Sumário das páginas de case ----------
  function initToc() {
    var links = document.querySelectorAll('.case-toc a');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.classList.remove('is-active'); });
          map[en.target.id].classList.add('is-active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  // ---------- Init ----------
  applyLang(currentLang());
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  var data = window.PORTFOLIO_DATA;
  var featuredEl = document.getElementById('featured-grid');
  var personalEl = document.getElementById('personal-grid');
  if (data && featuredEl) renderFeatured(featuredEl, data.featured);
  if (data && personalEl) renderPersonal(personalEl, data.personal);
  startSlideshows();
  initReveal();
  initToc();

  var langBtn = document.querySelector('.lang-toggle');
  if (langBtn) langBtn.addEventListener('click', function () {
    var next = currentLang() === 'pt' ? 'en' : 'pt';
    applyLang(next);
    store(LANG_KEY, next);
  });

  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    store(THEME_KEY, next);
  });

  var navToggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-links');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var open = navList.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navList.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navList.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
