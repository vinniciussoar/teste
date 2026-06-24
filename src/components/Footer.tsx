import { asset } from '../lib/asset';
import { WA_LINK } from '../data/services';

export function Footer({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <img
              src={asset('images/logo.png')}
              className="footer__logo"
              alt="SED Specialized Equine Dentistry"
              width={130}
              height={46}
              loading="lazy"
            />
            <p className="footer__about">
              Odontología equina especializada. Diagnóstico y cirugía dental, con atención directa en haras de toda Colombia.
            </p>
          </div>
          <div className="footer__col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#diferenciales">Diferenciales</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#casos">Casos clínicos</a></li>
              <li><a href="#sobre">Dr. Diego</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li><a href={WA_LINK} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/sed_vet" target="_blank" rel="noopener">Instagram @sed_vet</a></li>
              <li>
                <button type="button" className="footer__link-btn" onClick={onOpenPrivacy}>
                  Política de Privacidad
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 SED · Specialized Equine Dentistry · Dr. Diego Velásquez</span>
          <span>
            Desarrollado por{' '}
            <a href="https://www.linkedin.com/in/vinnicius-s-nogueira" target="_blank" rel="noopener">
              Vinnicius Soares
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
