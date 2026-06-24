import { HorseScene } from '../three/HorseScene';
import { useHeroScroll } from '../hooks/useHeroScroll';
import { WA_LINK } from '../data/services';

export function Hero() {
  const { parallaxY, progress } = useHeroScroll();

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Odontología equina · Colombia</p>
          <h1 className="hero__title">
            Diagnóstico odontológico equino en campo, <em>sin estrés de transporte</em>
          </h1>
          <p className="hero__text">
            El Dr. Diego Velásquez se desplaza hasta el haras con el equipamiento completo de diagnóstico y realiza el procedimiento en el propio ambiente del animal.
          </p>
          <p className="hero__meta">
            <strong>Formación de posgrado</strong> en cirugía odontológica equina · Atención en haras de toda Colombia.
          </p>
          <div className="hero__actions">
            <a href={WA_LINK} className="btn btn--primary" target="_blank" rel="noopener">
              Solicitar evaluación
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#servicios" className="btn btn--ghost">Ver servicios</a>
          </div>
          <dl className="hero__facts">
            <div className="hero__fact"><dt>En su haras</dt><dd>Sin estrés de transporte</dd></div>
            <div className="hero__fact"><dt>Posgrado</dt><dd>Odontología equina · Colombia</dd></div>
            <div className="hero__fact"><dt>24 h</dt><dd>Atención de urgencias</dd></div>
          </dl>
        </div>
        <div className="hero__media">
          <HorseScene scrollProgress={progress} parallaxY={parallaxY} />
        </div>
      </div>
    </section>
  );
}
