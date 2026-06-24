import { useEffect, useState } from 'react';
import { asset } from '../lib/asset';
import { WA_LINK } from '../data/services';

const LINKS = [
  { href: '#diferenciales', label: 'Diferenciales' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#casos', label: 'Casos clínicos' },
  { href: '#sobre', label: 'Dr. Diego' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__logo" aria-label="SED · Specialized Equine Dentistry — inicio">
          <img src={asset('images/logo.png')} alt="SED Specialized Equine Dentistry" width={120} height={42} />
        </a>
        <nav aria-label="Navegación principal">
          <button
            className="nav__burger"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
          <ul className={`nav__menu${open ? ' is-open' : ''}`} id="menu">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__link" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WA_LINK}
                className="nav__cta"
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
              >
                Solicitar evaluación
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
