import { Hotspot2D } from '../components/Hotspot2D';
import { HOTSPOTS } from '../data/hotspots';
import { asset } from '../lib/asset';

export function HorseFallback({ parallaxY }: { parallaxY: number }) {
  return (
    <div className="hero3d__fallback">
      <img
        src={asset('images/diego-campo.jpg')}
        alt="Examen odontológico equino en campo"
        style={{ transform: `translateY(${parallaxY}px) scale(1.05)` }}
      />
      <div className="hero3d__scanline" aria-hidden="true" />
      <div className="hero3d__corners" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      {HOTSPOTS.map((h) => (
        <Hotspot2D key={h.id} hotspot={h} />
      ))}
    </div>
  );
}
