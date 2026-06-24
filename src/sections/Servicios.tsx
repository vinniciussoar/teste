import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { SERVICES, WA_LINK, type Service } from '../data/services';

function ServiceRow({ service, open, onToggle }: { service: Service; open: boolean; onToggle: () => void }) {
  const reveal = useReveal<HTMLDivElement>();
  const panelId = `serv-panel-${service.id}`;

  return (
    <article
      className={`serv__row${reveal.visible ? ' is-visible' : ''}${open ? ' is-open' : ''}`}
      ref={reveal.ref}
      data-reveal={reveal['data-reveal']}
    >
      <button
        type="button"
        className="serv__row-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="serv__row-index">{service.index}</span>
        <span className="serv__row-name">{service.name}</span>
        <span className="serv__row-short">{service.short}</span>
        <span className="serv__row-chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div className="serv__panel" id={panelId}>
        <div className="serv__panel-inner">
          <div className="serv__detail-grid">
            <figure className="serv__detail-media" aria-label="Espacio para imagen del servicio">
              <span className="serv__detail-ph">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                Espacio para imagen
              </span>
            </figure>
            <div className="serv__detail-body">
              <dl className="serv__detail-dl">
                {service.sections.map(([term, desc]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{desc}</dd>
                  </div>
                ))}
              </dl>
              <a className="serv__cta" href={WA_LINK} target="_blank" rel="noopener">
                Consultar este servicio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Servicios() {
  const head = useReveal();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="section serv" id="servicios">
      <div className="container">
        <div
          className={`section-head${head.visible ? ' is-visible' : ''}`}
          ref={head.ref}
          data-reveal={head['data-reveal']}
        >
          <p className="eyebrow">Qué tratamos</p>
          <h2 className="section-title">Servicios odontológicos equinos</h2>
          <p className="section-lead">
            Cada procedimiento exige conocimiento profundo de la anatomía equina. Seleccione un servicio para abrir su ficha clínica.
          </p>
        </div>
        <div className="serv__list">
          {SERVICES.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              open={openId === service.id}
              onToggle={() => setOpenId((current) => (current === service.id ? null : service.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
