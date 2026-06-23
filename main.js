/* ============================================================
   SED · Specialized Equine Dentistry
   main.js — interacciones limpias y modulares
   ============================================================ */
'use strict';

/* ----------------------------------------------------------
   DATOS DE SERVICIOS  (orden y nomenclatura oficial del Dr. Diego)
   ---------------------------------------------------------- */
const SERVICES = [
  {
    id: 'examen-odontoplastia',
    index: '01',
    name: 'Examen Odontológico y Odontoplastía',
    short: 'Ajuste oclusal para mejorar la masticación, el confort con el freno y el rendimiento.',
    icon: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
    hasVideo: true,
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
    hasVideo: false,
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
    hasVideo: false,
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
    hasVideo: false,
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
    hasVideo: false,
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
    hasVideo: false,
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
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/** Crea un elemento con atributos y/o hijos, sin usar innerHTML para datos. */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;          // solo para SVG estático de confianza
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

/* ----------------------------------------------------------
   RENDER DE TARJETAS DE SERVICIO  (componentes HTML reales)
   ---------------------------------------------------------- */
function renderServices() {
  const grid = $('#servGrid');
  const detail = $('#servDetail');
  if (!grid || !detail) return;

  // monta a lista compacta de serviços (chips clicáveis)
  SERVICES.forEach((svc, i) => {
    const card = el('button', {
      class: 'serv__card', type: 'button',
      'data-reveal': '', 'data-delay': String((i % 3) + 1)
    });
    card.append(
      el('div', { class: 'serv__top' }, [
        el('span', { class: 'serv__icon', 'aria-hidden': 'true', html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">${svc.icon}</svg>` }),
        el('span', { class: 'serv__index' }, svc.index)
      ]),
      el('h3', { class: 'serv__name' }, svc.name),
      el('p', { class: 'serv__desc' }, svc.short),
      el('span', { class: 'serv__more' }, [
        'Ver detalle',
        el('span', { 'aria-hidden': 'true', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' })
      ])
    );
    card.addEventListener('click', () => openService(svc));
    grid.appendChild(card);
  });

  // botão voltar
  $('#servBack')?.addEventListener('click', closeService);
}

function openService(svc) {
  const grid = $('#servGrid');
  const detail = $('#servDetail');

  // preenche o detalhe
  $('#servDetailIndex').textContent = svc.index;
  $('#servDetailName').textContent = svc.name;
  $('#servDetailLead').textContent = svc.short;

  const dl = $('#servDetailBody');
  dl.replaceChildren();
  svc.sections.forEach(([term, desc]) => {
    dl.appendChild(el('dt', {}, term));
    dl.appendChild(el('dd', {}, desc));
  });

  // troca de vista: esconde a lista, mostra o detalhe
  grid.hidden = true;
  detail.hidden = false;
  // leva o foco/scroll pro topo da seção
  $('#servicios').scrollIntoView({ behavior: 'smooth', block: 'start' });
  $('#servBack')?.focus();
}

function closeService() {
  const grid = $('#servGrid');
  const detail = $('#servDetail');
  detail.hidden = true;
  grid.hidden = false;
  $('#servicios').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ----------------------------------------------------------
   NAVBAR — fondo sólido al hacer scroll
   ---------------------------------------------------------- */
const nav = $('#nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ----------------------------------------------------------
   MENÚ MÓVIL
   ---------------------------------------------------------- */
const burger = $('#burger');
const menu = $('#menu');
burger?.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
$$('.nav__link, .nav__cta', menu).forEach(a =>
  a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

/* ----------------------------------------------------------
   REVEAL AL ENTRAR EN VIEWPORT
   ---------------------------------------------------------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  const items = $$('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(i => obs.observe(i));
}

/* ----------------------------------------------------------
   COOKIE
   ---------------------------------------------------------- */
const cookie = $('#cookie');
const waFloat = $('.wa-float');
const COOKIE_KEY = 'sed_cookie_consent';

function shiftWaFloat() {
  // calcula a altura real do banner (varía por idioma/quebra de linha) + respiro de 18px
  const h = cookie.offsetHeight;
  document.documentElement.style.setProperty('--cookie-offset', `${h + 18}px`);
  waFloat?.classList.add('is-shifted');
}
function unshiftWaFloat() {
  waFloat?.classList.remove('is-shifted');
}

function initCookie() {
  let stored = null;
  try { stored = localStorage.getItem(COOKIE_KEY); } catch (_) {}
  if (stored) return;
  setTimeout(() => {
    cookie.classList.add('is-visible');
    shiftWaFloat();
  }, 1200);
}
function setConsent(value) {
  try { localStorage.setItem(COOKIE_KEY, value); } catch (_) {}
  cookie.classList.remove('is-visible');
  unshiftWaFloat();
}
$('#cookieAccept')?.addEventListener('click', () => setConsent('accepted'));
$('#cookieDecline')?.addEventListener('click', () => setConsent('essential'));
window.addEventListener('resize', () => {
  if (cookie.classList.contains('is-visible')) shiftWaFloat();
}, { passive: true });

/* ----------------------------------------------------------
   INIT
   ---------------------------------------------------------- */
renderServices();
initReveal();   // se llama después de renderServices para observar las tarjetas nuevas
initCookie();

/* ----------------------------------------------------------
   HERO · parallax sutil de la foto (más lento que el scroll)
   ---------------------------------------------------------- */
(function initHeroParallax() {
  const img = document.querySelector('.hero__media img');
  if (!img) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(max-width: 900px)').matches) return; // en móvil no, evita jank
  let ticking = false;
  function update() {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      img.style.setProperty('--py', (y * 0.12) + 'px');
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();

/* ----------------------------------------------------------
   CASO · YouTube lazy (carga el iframe solo al hacer clic)
   ---------------------------------------------------------- */
(function initCaseVideo() {
  $$('.case__video').forEach((box) => {
    const id = box.getAttribute('data-yt');
    const btn = box.querySelector('.case__play');
    if (!btn) return;
    // si todavía no hay ID real, el botón no hace nada (placeholder)
    if (!id || id === 'VIDEO_ID') {
      btn.style.cursor = 'default';
      return;
    }
    btn.addEventListener('click', () => {
      const iframe = el('iframe', {
        src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
        title: 'Video del procedimiento',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: ''
      });
      box.replaceChildren(iframe);
    });
  });
})();
