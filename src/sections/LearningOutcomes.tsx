import { useCallback, useState } from 'react';
import { outcomes } from '../data/content';
import { CheckIcon, ZoomIcon } from '../components/Icons';
import Lightbox from '../components/Lightbox';

const images = outcomes.items.map((o) => ({ src: o.image, title: o.title }));

export default function LearningOutcomes() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="outcomes" className="learning-section">
      <div className="learning-container">
        <div className="learning-header">
          <h2 className="learning-title stagger-item" data-reveal="animate-fade-up">
            {outcomes.title}
          </h2>
          <p
            className="learning-description stagger-item"
            data-reveal="animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            {outcomes.description}
          </p>
        </div>
        <div className="learning-grid">
          {outcomes.items.map((item, i) => (
            <article
              key={item.title}
              className="learning-card stagger-item"
              data-reveal="animate-fade-up"
              style={{ animationDelay: `${(i % 3) * 100 + 100}ms` }}
            >
              <button
                type="button"
                className="learning-card-media"
                onClick={() => setActive(i)}
                aria-label={`Preview image: ${item.title}`}
              >
                <img className="learning-card-img" src={item.image} alt={item.title} loading="lazy" decoding="async" />
                <span className="learning-card-zoom" aria-hidden="true">
                  <ZoomIcon />
                </span>
              </button>
              <div className="learning-card-body">
                <div className="learning-card-head">
                  <div className="learning-icon-wrapper">
                    <CheckIcon />
                  </div>
                  <h3 className="learning-card-title">{item.title}</h3>
                </div>
                <p className="learning-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Lightbox images={images} index={active} onClose={close} onNavigate={setActive} />
    </section>
  );
}
