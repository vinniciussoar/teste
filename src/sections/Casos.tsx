import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { CASES, type ClinicalCase } from '../data/cases';

const STEP_LABELS = ['Problema', 'Diagnóstico', 'Procedimiento', 'Resultado'] as const;

function CaseVideo({ youtubeId }: { youtubeId?: string }) {
  const [playing, setPlaying] = useState(false);
  const hasRealVideo = Boolean(youtubeId && youtubeId !== 'VIDEO_ID');

  if (playing && hasRealVideo) {
    return (
      <div className="case__video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title="Video del procedimiento"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="case__video">
      <button
        className="case__play"
        type="button"
        aria-label="Reproducir video"
        style={{ cursor: hasRealVideo ? 'pointer' : 'default' }}
        onClick={() => hasRealVideo && setPlaying(true)}
      >
        <span className="case__play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
        <span className="case__play-label">
          {hasRealVideo ? 'Ver procedimiento en video' : 'Video en preparación'}
        </span>
      </button>
    </div>
  );
}

function CaseCard({ caseItem, delay }: { caseItem: ClinicalCase; delay: 1 | 2 }) {
  const reveal = useReveal<HTMLDivElement>(delay);
  const steps = [caseItem.problema, caseItem.diagnostico, caseItem.procedimiento, caseItem.resultado];

  return (
    <article
      className={`case${reveal.visible ? ' is-visible' : ''}${caseItem.pending ? ' case--placeholder' : ''}`}
      ref={reveal.ref}
      data-reveal={reveal['data-reveal']}
      data-delay={reveal['data-delay']}
    >
      <div className="case__media">
        {caseItem.pending ? (
          <div className="case__media--placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <span>Material clínico en preparación</span>
          </div>
        ) : (
          <CaseVideo youtubeId={caseItem.youtubeId} />
        )}
      </div>
      <div className="case__body">
        <span className={`case__tag${caseItem.pending ? ' case__tag--soon' : ''}`}>{caseItem.tag}</span>
        <h3 className="case__title">{caseItem.title}</h3>

        <ol className="case__timeline">
          {STEP_LABELS.map((label, i) => (
            <li key={label} className="case__timeline-step">
              <span className="case__timeline-node">{i + 1}</span>
              <div>
                <dt>{label}</dt>
                <dd className={caseItem.pending ? 'case__ph' : undefined}>{steps[i]}</dd>
              </div>
            </li>
          ))}
        </ol>

        {caseItem.pending && (
          <p className="case__note">Se publicará con material clínico real, autorizado por el propietario.</p>
        )}
      </div>
    </article>
  );
}

export function Casos() {
  const head = useReveal();

  return (
    <section className="section" id="casos">
      <div className="container">
        <div
          className={`section-head${head.visible ? ' is-visible' : ''}`}
          ref={head.ref}
          data-reveal={head['data-reveal']}
        >
          <p className="eyebrow">Casos reales</p>
          <h2 className="section-title">Diagnóstico, procedimiento y resultado</h2>
          <p className="section-lead">
            Casos atendidos en campo. Cada ficha sigue la misma estructura clínica: del problema observado al resultado obtenido.
          </p>
        </div>
        <div className="cases__grid">
          {CASES.map((caseItem, i) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} delay={((i % 2) + 1) as 1 | 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
