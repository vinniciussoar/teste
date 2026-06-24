import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { SkullScene } from '../three/SkullScene';
import { SKULL_LAYERS } from '../data/skullLayers';

export function SkullSection() {
  const head = useReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(trackRef);
  const activeLayer = Math.min(SKULL_LAYERS.length - 1, Math.floor(progress * SKULL_LAYERS.length));

  return (
    <section className="section skull" id="anatomia">
      <div className="container">
        <div
          className={`section-head${head.visible ? ' is-visible' : ''}`}
          ref={head.ref}
          data-reveal={head['data-reveal']}
        >
          <p className="eyebrow">Anatomía aplicada</p>
          <h2 className="section-title">Cada capa importa para el diagnóstico</h2>
          <p className="section-lead">
            Desplácese para recorrer las estructuras que se evalúan en un examen odontológico equino completo.
          </p>
        </div>
      </div>

      <div className="skull__track" ref={trackRef}>
        <div className="skull__visual">
          <SkullScene activeLayer={activeLayer} />
        </div>
        <div className="skull__steps">
          {SKULL_LAYERS.map((layer, i) => (
            <div key={layer.id} className={`skull__step${i === activeLayer ? ' is-active' : ''}`}>
              <span className="skull__step-index">{layer.index}</span>
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
