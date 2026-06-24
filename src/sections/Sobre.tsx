import { useReveal } from '../hooks/useReveal';
import { asset } from '../lib/asset';

export function Sobre() {
  const photo = useReveal<HTMLDivElement>();
  const text = useReveal<HTMLDivElement>(1);

  return (
    <section className="section about" id="sobre">
      <div className="container about__grid">
        <figure
          className={`about__photo${photo.visible ? ' is-visible' : ''}`}
          ref={photo.ref}
          data-reveal={photo['data-reveal']}
        >
          <img src={asset('images/diego-campo.jpg')} alt="Dr. Diego Velásquez" width={500} height={600} loading="lazy" />
        </figure>
        <div
          className={`about__text-wrap${text.visible ? ' is-visible' : ''}`}
          ref={text.ref}
          data-reveal={text['data-reveal']}
          data-delay={text['data-delay']}
        >
          <p className="eyebrow">El especialista</p>
          <h2 className="about__title">Dr. Diego <em>Velásquez</em></h2>
          <p className="about__text">
            Soy especialista en odontología equina, con <strong>formación de posgrado en Colombia</strong>. Trabajo directamente en campo porque creo que el mejor diagnóstico se hace en el ambiente del animal.
          </p>
          <p className="about__text">
            Cada procedimiento queda registrado para que usted pueda acompañar la evolución del caso. Atiendo haras de cría y caballos deportivos en toda Colombia.
          </p>
          <ul className="about__creds">
            <li className="about__cred">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              <div>
                <div className="about__cred-t">Formación de posgrado en odontología equina</div>
                <div className="about__cred-s">Colombia</div>
              </div>
            </li>
            <li className="about__cred">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4l6 6M3 21l9-9M3 21l3-1 12-12-2-2L4 18z" /></svg>
              <div>
                <div className="about__cred-t">Cirugía sinusal y extracciones avanzadas</div>
                <div className="about__cred-s">Experiencia clínica especializada</div>
              </div>
            </li>
            <li className="about__cred">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
              <div>
                <div className="about__cred-t">Médico Veterinario y Zootecnista</div>
                <div className="about__cred-s">Registro profesional · Colombia</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
