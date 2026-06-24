import { useReveal } from '../hooks/useReveal';
import { WA_LINK } from '../data/services';

export function CtaFinal() {
  const box = useReveal<HTMLDivElement>();
  return (
    <section className="cta">
      <div className="container">
        <div
          className={`cta__box${box.visible ? ' is-visible' : ''}`}
          ref={box.ref}
          data-reveal={box['data-reveal']}
        >
          <h2 className="cta__title">¿Cuándo fue el último examen odontológico de su caballo?</h2>
          <p className="cta__text">
            La mayoría de los problemas de masticación y sinusitis del caballo tienen origen dental. El diagnóstico precoz evita complicaciones y cirugías más complejas.
          </p>
          <div className="cta__actions">
            <a href={WA_LINK} className="btn btn--light" target="_blank" rel="noopener">
              Solicitar evaluación
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#casos" className="btn btn--outline-light">Ver casos clínicos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
