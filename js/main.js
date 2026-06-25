/* ============================================================
   SED · Specialized Equine Dentistry
   main.js — interacciones vanilla (sin frameworks)
   ============================================================ */
'use strict';

/* ----------------------------------------------------------
   DATOS DE SERVICIOS (orden y nomenclatura oficial del Dr. Diego)
   ---------------------------------------------------------- */
const SERVICES = [
  {
    id: 'examen-odontoplastia',
    index: '01',
    name: 'Examen Odontológico y Odontoplastía',
    short: 'Ajuste oclusal para mejorar la masticación, el confort con el freno y el rendimiento.',
    icon: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
    sections: [
      ['¿Qué incluye?', 'Evaluación de cada pieza dental, encías y articulación temporomandibular. La odontoplastía (ajuste oclusal) corrige puntas de esmalte, ganchos y rampas que generan dolor y dificultan la masticación.'],
      ['Beneficios', 'Mejor masticación y aprovechamiento del alimento, mayor confort con el bocado y prevención de problemas mayores a futuro.'],
      ['Frecuencia recomendada', 'Revisión anual en caballos adultos; semestral en animales de alta competición o mayores de 15 años.']
    ]
  },
  {
    id: 'exodoncias',
    index: '02',
    name: 'Exodoncias (Extracciones Dentales)',
    short: 'Diferentes técnicas de extracción con enfoque mínimamente invasivo.',
    icon: '<path d="M12 2c3 0 5 2 5 6 0 3-1 6-2 9-.5 1.5-1 3-3 3s-2.5-1.5-3-3c-1-3-2-6-2-9 0-4 2-6 5-6z"/>',
    sections: [
      ['Técnicas', 'Extracción intraoral con sedación (técnica de elección por su bajo trauma), extraoral para piezas fragmentadas o profundas, y quirúrgica para fracturas antiguas.'],
      ['Cuándo se indica', 'Dientes fracturados con dolor, caries profundas, piezas supernumerarias, movilidad excesiva o foco de sinusitis persistente.'],
      ['Cuidados posteriores', 'Dieta blanda de 7 a 10 días, antibioticoterapia controlada y revisión de control a los 15 días.']
    ]
  },
  {
    id: 'sinusitis',
    index: '03',
    name: 'Tratamiento de Sinusitis Secundaria',
    short: 'Infección sinusal de origen dental, tratada en su causa y no solo en sus síntomas.',
    icon: '<path d="M6 8c0-3 2-5 4-5s4 1 4 4c2 0 4 1 4 4s-2 5-5 5c-1 2-2 3-4 3s-4-1-4-4c-2 0-3-2-3-4s1-3 4-3z"/>',
    sections: [
      ['¿Qué es?', 'Infección de los senos paranasales causada por una afección dental, generalmente una raíz comprometida. Sin tratar el origen, los antibióticos solo enmascaran el problema.'],
      ['Signos característicos', 'Secreción nasal por una sola fosa, mal aliento intenso y, en algunos casos, asimetría facial.'],
      ['Protocolo', 'Radiografía y oroscopia para identificar la causa, tratamiento del foco infeccioso, drenaje y limpieza sinusal, con controles a los 15 y 30 días.']
    ]
  },
  {
    id: 'cirugia-sinusal',
    index: '04',
    name: 'Cirugía Sinusal Avanzada',
    short: 'Trepanación y sinusotomía para acceso y tratamiento de los senos paranasales.',
    icon: '<path d="M14 4l6 6M3 21l9-9M3 21l3-1 12-12-2-2L4 18z"/>',
    sections: [
      ['Cuándo es necesaria', 'Acumulación de material purulento, quistes o tumores que no responden al tratamiento conservador, o extracción de fragmentos dentales atrapados.'],
      ['Técnicas', 'Trepanación (apertura controlada para drenaje) y sinusotomía (acceso amplio para casos complejos), con apoyo de endoscopia sinusal cuando se requiere.'],
      ['Recuperación', 'Retorno a la actividad habitual en 15 a 30 días, con seguimiento y visitas de control.']
    ]
  },
  {
    id: 'radiologia',
    index: '05',
    name: 'Radiología Digital de Cabeza Equina',
    short: 'Soporte en imágenes de alta precisión para estructuras dentales y óseas.',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    sections: [
      ['¿Para qué sirve?', 'Permite visualizar raíces dentales, senos paranasales, hueso alveolar y articulación temporomandibular — estructuras imposibles de evaluar a simple vista.'],
      ['Cuándo se indica', 'Sospecha de sinusitis, fractura dental, quiste apical, diente retenido, evaluación pre-quirúrgica y examen pre-compra.'],
      ['En campo', 'Radiografía digital realizada en el haras, con interpretación inmediata del especialista.']
    ]
  },
  {
    id: 'pre-compra',
    index: '06',
    name: 'Examen Odontológico Pre-compra',
    short: 'Evaluación dental completa antes de adquirir el animal.',
    icon: '<path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    sections: [
      ['¿Qué incluye?', 'Evaluación de la oclusión, estado de las raíces, lesiones y posibles infecciones subclínicas, documentada con fotografías e informe escrito.'],
      ['¿Por qué importa?', 'Problemas no detectados pueden significar tratamientos costosos tras la compra. El examen protege la inversión y aporta transparencia.'],
      ['Entregable', 'Informe técnico detallado, firmado por el especialista.']
    ]
  }
];

const WA_LINK = 'https://wa.link/wzy3jo';

/* ----------------------------------------------------------
   HELPERS
   ---------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v; // solo para SVG estático de confianza
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ----------------------------------------------------------
   SERVICIOS — grid de tarjetas + panel de detalle en la página
   ---------------------------------------------------------- */
let activeServiceId = null;

function renderServiceGrid() {
  const grid = $('#servGrid');
  if (!grid) return;

  SERVICES.forEach((svc) => {
    const card = el('button', {
      class: 'serv__card',
      type: 'button',
      'aria-expanded': 'false',
      'aria-controls': 'servDetail'
    });
    card.append(
      el('span', { class: 'serv__icon', 'aria-hidden': 'true', html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">${svc.icon}</svg>` }),
      el('h3', { class: 'serv__card-name' }, svc.name),
      el('p', { class: 'serv__card-short' }, svc.short),
      el('span', { class: 'serv__card-more' }, [
        'Ver detalle',
        el('span', { 'aria-hidden': 'true', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6"/></svg>' })
      ])
    );
    card.addEventListener('click', () => toggleService(svc, card));
    grid.appendChild(card);
  });
}

function renderServiceDetail(svc) {
  const detail = $('#servDetail');
  detail.replaceChildren();

  const dl = el('dl', { class: 'serv__detail-dl' });
  svc.sections.forEach(([term, desc]) => {
    const row = el('div', {});
    row.append(el('dt', {}, term), el('dd', {}, desc));
    dl.appendChild(row);
  });

  const media = el('figure', { class: 'serv__detail-media', 'aria-label': 'Espacio para imagen del servicio' }, [
    el('span', { class: 'serv__detail-ph' }, [
      el('span', { 'aria-hidden': 'true', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>' }),
      // TODO: sustituir por foto real del procedimiento cuando el Dr. Diego la envíe
      'Espacio para imagen real del procedimiento'
    ])
  ]);

  const body = el('div', { class: 'serv__detail-body' }, [
    el('p', { class: 'serv__detail-tag' }, `Servicio ${svc.index}`),
    el('h3', { class: 'serv__detail-title' }, svc.name),
    dl,
    el('div', { class: 'serv__detail-actions' }, [
      el('a', { class: 'btn btn--primary btn--sm', href: WA_LINK, target: '_blank', rel: 'noopener' }, [
        'Consultar este servicio',
        el('span', { 'aria-hidden': 'true', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' })
      ]),
      el('button', { type: 'button', class: 'serv__detail-close', id: 'servDetailClose' }, [
        'Cerrar',
        el('span', { 'aria-hidden': 'true', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"/></svg>' })
      ])
    ])
  ]);

  detail.append(el('div', { class: 'serv__detail-grid' }, [media, body]));
  $('#servDetailClose').addEventListener('click', closeService);
}

function toggleService(svc, card) {
  const detail = $('#servDetail');
  const grid = $('#servGrid');
  const wasActive = activeServiceId === svc.id;

  $$('.serv__card', grid).forEach((c) => { c.classList.remove('is-active'); c.setAttribute('aria-expanded', 'false'); });

  if (wasActive) {
    closeService();
    return;
  }

  renderServiceDetail(svc);
  card.classList.add('is-active');
  card.setAttribute('aria-expanded', 'true');
  detail.hidden = false;
  activeServiceId = svc.id;
  detail.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
}

function closeService() {
  const detail = $('#servDetail');
  $$('.serv__card').forEach((c) => { c.classList.remove('is-active'); c.setAttribute('aria-expanded', 'false'); });
  detail.hidden = true;
  detail.replaceChildren();
  activeServiceId = null;
}

/* ----------------------------------------------------------
   NAV — fondo sólido al hacer scroll + menú móvil
   ---------------------------------------------------------- */
function initNav() {
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#navBurger');
  const menu = $('#navMenu');
  burger?.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  $$('.nav__link, .nav__actions a', menu).forEach((a) => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

/* ----------------------------------------------------------
   REVEAL AL ENTRAR EN VIEWPORT
   ---------------------------------------------------------- */
function initReveal() {
  const items = $$('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((i) => i.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach((i) => obs.observe(i));
}

/* ----------------------------------------------------------
   FICHA CLÍNICA — abrir/cerrar por caso
   ---------------------------------------------------------- */
function initFichas() {
  $$('.caso__toggle').forEach((btn) => {
    const ficha = document.getElementById(btn.getAttribute('aria-controls'));
    if (!ficha) return;
    btn.addEventListener('click', () => {
      const open = ficha.hasAttribute('hidden');
      if (open) ficha.removeAttribute('hidden'); else ficha.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
}

/* ----------------------------------------------------------
   CASOS · YouTube lazy (carga el iframe solo al hacer clic)
   ---------------------------------------------------------- */
function initCaseVideo() {
  $$('.caso__video').forEach((btn) => {
    const id = btn.getAttribute('data-video');
    if (!id || id === 'VIDEO_ID') {
      btn.style.cursor = 'default';
      return;
    }
    btn.addEventListener('click', () => {
      const wrap = btn.parentElement;
      const iframe = el('iframe', {
        src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
        title: 'Video del procedimiento',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: ''
      });
      wrap.replaceChildren(iframe);
    });
  });
}

/* ----------------------------------------------------------
   HERO · parallax sutil de la foto
   ---------------------------------------------------------- */
function initHeroParallax() {
  const img = $('.hero__bg');
  if (!img || reduceMotion || window.matchMedia('(max-width: 900px)').matches) return;
  let ticking = false;
  function update() {
    const y = window.scrollY;
    if (y < window.innerHeight) img.style.transform = `translateY(${y * 0.12}px)`;
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}

/* ----------------------------------------------------------
   COOKIES — consentimiento + desplazamiento del botón de WhatsApp
   ---------------------------------------------------------- */
const COOKIE_KEY = 'sed_cookie_consent';

function initCookie() {
  const cookie = $('#cookie');
  const waFloat = $('.wa-float');
  if (!cookie) return;

  function shiftWaFloat() {
    const h = cookie.offsetHeight;
    document.documentElement.style.setProperty('--cookie-offset', `${h + 18}px`);
    waFloat?.classList.add('is-shifted');
  }
  function unshiftWaFloat() {
    waFloat?.classList.remove('is-shifted');
  }
  function setConsent(value) {
    try { localStorage.setItem(COOKIE_KEY, value); } catch (_) { /* almacenamiento no disponible */ }
    cookie.classList.remove('is-visible');
    unshiftWaFloat();
  }

  let stored = null;
  try { stored = localStorage.getItem(COOKIE_KEY); } catch (_) { /* almacenamiento no disponible */ }
  if (!stored) {
    setTimeout(() => {
      cookie.classList.add('is-visible');
      shiftWaFloat();
    }, 1200);
  }

  $('#cookieAccept')?.addEventListener('click', () => setConsent('accepted'));
  $('#cookieDecline')?.addEventListener('click', () => setConsent('essential'));
  $('#cookieMore')?.addEventListener('click', (e) => {
    e.preventDefault();
    $('#privacyDialog')?.showModal();
  });
  window.addEventListener('resize', () => {
    if (cookie.classList.contains('is-visible')) shiftWaFloat();
  }, { passive: true });
}

/* ----------------------------------------------------------
   POLÍTICA DE PRIVACIDAD — diálogo nativo
   ---------------------------------------------------------- */
function initPrivacyDialog() {
  const dialog = $('#privacyDialog');
  if (!dialog) return;
  $('#openPrivacy')?.addEventListener('click', () => dialog.showModal());
  $('#closePrivacy')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
}

/* ----------------------------------------------------------
   INIT
   ---------------------------------------------------------- */
renderServiceGrid();
initNav();
initReveal();
initFichas();
initCaseVideo();
initHeroParallax();
initCookie();
initPrivacyDialog();
