import { useEffect, useRef } from 'react';

interface CookieConsentProps {
  visible: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onMoreInfo: () => void;
}

export function CookieConsent({ visible, onAccept, onDecline, onMoreInfo }: CookieConsentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const update = () => {
      const h = ref.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--cookie-offset', `${h + 18}px`);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [visible]);

  return (
    <div ref={ref} className={`cookie${visible ? ' is-visible' : ''}`} role="region" aria-label="Aviso de cookies">
      <div className="container cookie__inner">
        <p className="cookie__text">
          Usamos cookies técnicas para mejorar su experiencia de navegación, conforme a la Ley 1581 de 2012.{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onMoreInfo();
            }}
          >
            Más información
          </a>
          .
        </p>
        <div className="cookie__actions">
          <button className="cookie__btn cookie__btn--decline" onClick={onDecline}>
            Solo esenciales
          </button>
          <button className="cookie__btn cookie__btn--accept" onClick={onAccept}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
