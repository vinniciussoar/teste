import { SKULL_LAYERS } from '../data/skullLayers';

const MARKER_POSITIONS: Record<string, { top: string; left: string }> = {
  craneo: { top: '26%', left: '24%' },
  arcada: { top: '52%', left: '50%' },
  raices: { top: '72%', left: '46%' },
  senos: { top: '30%', left: '70%' },
};

export function SkullFallback({ activeLayer }: { activeLayer: number }) {
  return (
    <div className="skull3d__fallback" aria-hidden="true">
      <div className="skull3d__grid" />
      <div className="skull3d__scanline" />
      {SKULL_LAYERS.map((layer, i) => {
        const pos = MARKER_POSITIONS[layer.id];
        const active = i <= activeLayer;
        return (
          <div
            key={layer.id}
            className={`skull3d__marker${active ? ' is-active' : ''}`}
            style={{ top: pos.top, left: pos.left }}
          >
            <span className="skull3d__marker-dot">{layer.index}</span>
          </div>
        );
      })}
    </div>
  );
}
