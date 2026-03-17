(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-lang';
  var currentLang = localStorage.getItem(STORAGE_KEY) || 'pt';

  function getNested(obj, path) {
    var keys = path.split('.');
    var o = obj;
    for (var i = 0; i < keys.length; i++) {
      if (o == null) return undefined;
      o = o[keys[i]];
    }
    return o;
  }

  function applyTranslations(lang) {
    var t = PORTFOLIO_DATA.lang[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = getNested(t, key);
      if (val === undefined) return;
      if (typeof val === 'string' && val.indexOf('<') !== -1) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = lang === 'en'
        ? 'Portfolio of Igor Gonçalves. Data Scientist, Machine Learning and Reliability Engineering applied to aviation.'
        : 'Portfólio de Igor Gonçalves. Cientista de Dados, Machine Learning e Engenharia de Confiabilidade aplicada à aviação.';
    }
    document.title = lang === 'en' ? 'Igor Gonçalves — Data Scientist & AI' : 'Igor Gonçalves — Cientista de Dados & IA';
    var langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
      langBtn.textContent = lang === 'en' ? 'PT' : 'EN';
      langBtn.setAttribute('aria-label', t.aria.lang);
      langBtn.setAttribute('title', lang === 'en' ? 'Português' : 'English');
    }
  }

  function renderProjects(lang) {
    var grid = document.getElementById('projetos-grid');
    if (!grid || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.projects) return;
    var t = PORTFOLIO_DATA.lang[lang];
    var viewGitHub = t && t.project ? t.project.viewGitHub : 'Ver no GitHub →';
    var downloadPdf = t && t.project ? t.project.downloadPdf : 'Baixar PDF';
    grid.innerHTML = PORTFOLIO_DATA.projects.map(function (p) {
      var title = typeof p.title === 'object' ? (p.title[lang] || p.title.pt) : p.title;
      var desc = typeof p.description === 'object' ? (p.description[lang] || p.description.pt) : p.description;
      var stack = typeof p.stack === 'object' ? (p.stack[lang] != null ? p.stack[lang] : p.stack.pt) : p.stack;
      var alt = typeof p.alt === 'object' ? (p.alt[lang] || p.alt.pt) : (p.alt || title);
      var linksHtml = '<a href="' + (p.url || '#') + '" target="_blank" rel="noopener" class="projeto-link">' + viewGitHub + '</a>';
      if (p.pdf) {
        linksHtml += ' <a href="' + p.pdf + '" download class="projeto-link projeto-link-pdf">' + downloadPdf + '</a>';
      }
      return (
        '<article class="projeto-card" data-repo="' + (p.id || '') + '">' +
          '<div class="projeto-image">' +
            '<img src="' + (p.image || '') + '" alt="' + alt.replace(/"/g, '&quot;') + '">' +
          '</div>' +
          '<div class="projeto-body">' +
            '<h3>' + title.replace(/</g, '&lt;') + '</h3>' +
            '<p>' + desc.replace(/</g, '&lt;') + '</p>' +
            '<div class="projeto-meta">' +
              '<span class="projeto-lang">' + (p.lang || '') + '</span>' +
              '<span class="projeto-stack">' + (stack || '').replace(/</g, '&lt;') + '</span>' +
            '</div>' +
            '<div class="projeto-links">' + linksHtml + '</div>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    renderProjects(lang);
  }

  // Inicialização
  var heroImg = document.getElementById('hero-photo');
  if (heroImg && typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.heroImageUrl) {
    heroImg.src = PORTFOLIO_DATA.heroImageUrl;
  }
  applyTranslations(currentLang);
  renderProjects(currentLang);

  // Botão de idioma
  var langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLang(currentLang === 'pt' ? 'en' : 'pt');
    });
  }

  // Menu mobile
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelectorAll('.nav-links a');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var list = nav && nav.querySelector('.nav-links');
      if (list) {
        list.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', list.classList.contains('is-open'));
      }
    });
  }

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      var list = nav && nav.querySelector('.nav-links');
      if (list && list.classList.contains('is-open')) {
        list.classList.remove('is-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
