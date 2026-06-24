import { useEffect, useRef } from 'react';

export function PrivacyDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
  }, [open]);

  return (
    <dialog ref={ref} className="dialog" aria-labelledby="privTitle" onClose={onClose}>
      <div className="dialog__head">
        <div>
          <p className="dialog__tag">Legal</p>
          <h3 className="dialog__title" id="privTitle">Política de Privacidad</h3>
        </div>
        <button className="dialog__close" aria-label="Cerrar" onClick={onClose}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="dialog__body">
        <div className="dialog__section">
          <h4>Responsable</h4>
          <p>SED · Specialized Equine Dentistry, representada por el Dr. Diego Velásquez, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia).</p>
        </div>
        <div className="dialog__section">
          <h4>Datos que tratamos</h4>
          <p>Datos de contacto facilitados vía WhatsApp (nombre, teléfono) y datos de navegación (cookies técnicas).</p>
        </div>
        <div className="dialog__section">
          <h4>Finalidad</h4>
          <p>Responder solicitudes, coordinar visitas a haras y mejorar la experiencia de navegación.</p>
        </div>
        <div className="dialog__section">
          <h4>Sus derechos</h4>
          <p>Conocer, actualizar, rectificar y suprimir sus datos, o revocar la autorización, escribiéndonos por WhatsApp.</p>
        </div>
      </div>
    </dialog>
  );
}
