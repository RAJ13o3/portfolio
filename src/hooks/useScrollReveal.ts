import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const children = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    children.forEach((child) => observer.observe(child));
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
