import { contributions } from '../data/content';
import { ContributionSvg } from '../components/Icons';

export default function Contributions() {
  return (
    <section id="contributions" className="contributions-section">
      <div className="contributions-container">
        <div className="split-layout">
          <div className="header-column fade-in" data-reveal="visible">
            <h2 className="section-heading">{contributions.heading}</h2>
            <p className="section-description">{contributions.description}</p>
          </div>
          <div className="list-column">
            {contributions.items.map((item, i) => (
              <div
                key={item.title}
                className="contribution-item fade-in"
                data-reveal="visible"
                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
              >
                <div className="item-icon-wrapper">
                  <ContributionSvg icon={item.icon} />
                </div>
                <div className="item-content">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
