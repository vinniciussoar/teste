import { useReveal } from '../hooks/useReveal';

const ITEMS = [
  {
    num: '01',
    title: 'En su haras',
    text: 'El especialista se desplaza hasta el animal. Cero estrés de transporte y cero riesgo de lesión en tránsito.',
  },
  {
    num: '02',
    title: 'Diagnóstico de precisión',
    text: 'Radiología digital de cabeza equina y evaluación intraoral con oroscopia, realizadas directamente en el haras.',
  },
  {
    num: '03',
    title: 'Registro y seguimiento',
    text: 'Cada procedimiento queda documentado en video y ficha clínica para el acompañamiento evolutivo del caso.',
  },
] as const;

function DiferencialItem({ item, delay }: { item: (typeof ITEMS)[number]; delay: 1 | 2 | 3 }) {
  const reveal = useReveal<HTMLDivElement>(delay);
  return (
    <article
      className={`diff__item${reveal.visible ? ' is-visible' : ''}`}
      ref={reveal.ref}
      data-reveal={reveal['data-reveal']}
      data-delay={reveal['data-delay']}
    >
      <span className="diff__num">{item.num}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

export function Diferenciales() {
  const head = useReveal();

  return (
    <section className="section" id="diferenciales">
      <div className="container">
        <div
          className={`section-head${head.visible ? ' is-visible' : ''}`}
          ref={head.ref}
          data-reveal={head['data-reveal']}
        >
          <p className="eyebrow">Por qué SED</p>
          <h2 className="section-title">Una consulta odontológica, no una visita general</h2>
          <p className="section-lead">
            La mayoría de los problemas dentales del caballo avanzan sin signos visibles. Detectarlos y tratarlos exige formación específica y el instrumental adecuado.
          </p>
        </div>
        <div className="diff__grid">
          {ITEMS.map((item, i) => (
            <DiferencialItem key={item.num} item={item} delay={((i % 3) + 1) as 1 | 2 | 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
