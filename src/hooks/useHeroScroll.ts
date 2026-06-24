import { useEffect, useState } from 'react';

/** Parallax sutil + progreso (0–1) del scroll dentro de la primera pantalla (hero). */
export function useHeroScroll() {
  const [parallaxY, setParallaxY] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      const sy = window.scrollY;
      if (sy < vh) {
        setParallaxY(sy * 0.12);
        setProgress(Math.min(1, sy / vh));
      } else {
        setProgress(1);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { parallaxY, progress };
}
