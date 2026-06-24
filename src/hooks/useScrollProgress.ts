import { useEffect, useState, type RefObject } from 'react';

/** Progresso de 0 a 1 de quanto a viewport já avançou através da altura do elemento. */
export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setProgress(1);
      return;
    }

    let ticking = false;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const raw = total <= 0 ? (rect.top <= 0 ? 1 : 0) : -rect.top / total;
      setProgress(Math.min(1, Math.max(0, raw)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);

  return progress;
}
