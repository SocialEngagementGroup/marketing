import React, { useState } from 'react';
import { faqEntries } from './faqData';

/**
 * FAQ accordion.
 *
 * The flagship design drove this with a data-open attribute and a
 * height-animating panel. Here the open index is React state and the
 * panel keeps the design's grid-template-rows 0fr -> 1fr transition,
 * which animates to content height without measuring anything.
 *
 * Only one panel is open at a time, matching the original.
 */
const FAQ: React.FC = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="chapter translucent" data-bg="#100C0C">
      <div
        className="shell"
        style={{
          display: 'grid',
          gap: 'clamp(2.5rem,5vw,4rem)',
          gridTemplateColumns: '1fr',
          alignItems: 'start',
        }}
      >
        <div style={{ maxWidth: '34rem' }}>
          <p className="mono eyebrow" data-fade>Common Questions</p>
          <h2
            data-fade
            data-delay=".05"
            style={{
              fontSize: 'clamp(2rem,4.2vw,3.2rem)',
              lineHeight: '1.08',
              letterSpacing: '-.02em',
              marginTop: '1.5rem',
            }}
          >
            Frequently asked <em style={{ color: 'var(--accent-display)' }}>questions</em>
          </h2>
        </div>

        <div className="faq" data-fade>
          {faqEntries.map((entry, i) => {
            const isOpen = open === i;
            return (
              <div className="faq-item" data-open={isOpen ? 'true' : 'false'} key={entry.q}>
                <h3 style={{ margin: 0 }}>
                  <button
                    className="faq-trigger"
                    type="button"
                    id={`faq-t${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-p${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{entry.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 1v16M1 9h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className="faq-panel" id={`faq-p${i}`} role="region" aria-labelledby={`faq-t${i}`}>
                  <div>
                    <div className="faq-body">
                      {entry.paras.map((p) => (
                        <p className="lede" key={p.slice(0, 40)}>{p}</p>
                      ))}
                      {entry.spec && (
                        <dl style={{ margin: '1.25rem 0 0', display: 'grid', gap: '.85rem' }}>
                          {entry.spec.map((s) => (
                            <div style={{ display: 'flex', gap: '1rem' }} key={s.term}>
                              <dt
                                className="mono"
                                style={{
                                  color: 'var(--accent)',
                                  width: '6.5rem',
                                  flex: 'none',
                                  paddingTop: '.35rem',
                                }}
                              >
                                {s.term}
                              </dt>
                              <dd className="lede" style={{ margin: 0 }}>{s.def}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
