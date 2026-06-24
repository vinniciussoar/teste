import { Html } from '@react-three/drei';
import { useState } from 'react';
import type { Hotspot } from '../data/hotspots';

export function Hotspot3D({ hotspot }: { hotspot: Hotspot }) {
  const [open, setOpen] = useState(false);

  return (
    <Html position={hotspot.position3d} center distanceFactor={6} zIndexRange={[50, 0]}>
      <div className={`hotspot${open ? ' is-open' : ''}`}>
        <button
          type="button"
          className="hotspot__dot"
          aria-label={hotspot.title}
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
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
    </Html>
  );
}
