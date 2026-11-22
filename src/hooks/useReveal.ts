import { useEffect } from 'react';

/**
 * Recreates the original site's scroll animations.
 * Any element with `data-reveal="className"` gets that class added the first
 * time it scrolls into view (same IntersectionObserver approach as the original).
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add(el.dataset.reveal as string));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add(el.dataset.reveal as string);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
