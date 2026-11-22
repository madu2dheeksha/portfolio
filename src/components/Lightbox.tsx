import { useEffect, useRef } from 'react';
import { ChevronIcon, CloseIcon } from './Icons';

export interface LightboxImage {
  src: string;
  title: string;
}

interface Props {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Full-screen image preview with keyboard (Esc / ← / →) and swipe support. */
export default function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, images.length, onClose, onNavigate]);

  if (index === null) return null;
  const image = images[index];
  const prev = () => onNavigate((index - 1 + images.length) % images.length);
  const next = () => onNavigate((index + 1) % images.length);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.title} – image preview`}
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <button ref={closeRef} className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Close preview">
        <CloseIcon />
      </button>
      {images.length > 1 && (
        <>
          <button
            className="lightbox-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            <ChevronIcon dir="left" />
          </button>
          <button
            className="lightbox-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            <ChevronIcon dir="right" />
          </button>
        </>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox-img" src={image.src} alt={image.title} />
        <figcaption className="lightbox-caption">
          {image.title}
          <span className="lightbox-counter">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
