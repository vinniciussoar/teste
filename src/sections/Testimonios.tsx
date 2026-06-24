import { useReveal } from '../hooks/useReveal';

const TESTIMONIALS = [
  {
    kind: 'Haras de cría',
    quote: 'Espacio reservado para el testimonio de un haras de cría.',
    name: 'Propietario',
    place: 'Haras de cría · Colombia',
  },
  {
    kind: 'Caballo deportivo',
    quote: 'Espacio reservado para el testimonio de un criadero deportivo.',
    name: 'Entrenador',
    place: 'Caballos deportivos · Colombia',
  },
  {
    kind: 'Atención de urgencia',
    quote: 'Espacio reservado para el testimonio de una atención de urgencia.',
    name: 'Veterinario tratante',
    place: 'Urgencia coordinada · Colombia',
  },
] as const;

function Testimonial({ item, delay }: { item: (typeof TESTIMONIALS)[number]; delay: 1 | 2 | 3 }) {
  const reveal = useReveal<HTMLDivElement>(delay);
  return (
    <figure
      className={`testi${reveal.visible ? ' is-visible' : ''}`}
      ref={reveal.ref}
      data-reveal={reveal['data-reveal']}
      data-delay={reveal['data-delay']}
    >
      <span className="testi__kind">{item.kind}</span>
      <blockquote className="testi__quote">{item.quote}</blockquote>
      <figcaption className="testi__author">
        <span className="testi__photo">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21v-2a7 7 0 0114 0v2" /><circle cx="10" cy="7" r="4" /></svg>
        </span>
        <div>
          <div className="testi__name">{item.name}</div>
          <div className="testi__place">{item.place}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonios() {
  const head = useReveal();
  return (
    <section className="section" id="testimonios">
      <div className="container">
        <div
          className={`section-head section-head--center${head.visible ? ' is-visible' : ''}`}
          ref={head.ref}
          data-reveal={head['data-reveal']}
        >
          <p className="eyebrow">Testimonios</p>
          <h2 className="section-title">La confianza de los haras</h2>
        </div>
        <div className="testi__grid">
          {TESTIMONIALS.map((item, i) => (
            <Testimonial key={item.kind} item={item} delay={((i % 3) + 1) as 1 | 2 | 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
