import { useState, useCallback, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
  xPercent: number;
  yPercent: number;
}

export function useMouseFollow() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0, xPercent: 0.5, yPercent: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      xPercent: (e.clientX - rect.left) / rect.width,
      yPercent: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return { ref, pos, handleMouseMove };
}
