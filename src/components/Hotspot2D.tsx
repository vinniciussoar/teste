import { useState } from 'react';
import type { Hotspot } from '../data/hotspots';

export function Hotspot2D({ hotspot }: { hotspot: Hotspot }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`hotspot hotspot--2d${open ? ' is-open' : ''}`}
      style={{ top: hotspot.position2d.top, left: hotspot.position2d.left }}
    >
      <button
        type="button"
        className="hotspot__dot"
        aria-label={hotspot.title}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {hotspot.label}
      </button>
      {open && (
        <div className="hotspot__card" role="dialog">
          <h4>{hotspot.title}</h4>
          <p>{hotspot.description}</p>
        </div>
      )}
    </div>
  );
}
