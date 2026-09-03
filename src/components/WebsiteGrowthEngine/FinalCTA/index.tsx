import React from 'react';

/**
 * FinalCTA — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const FinalCTA: React.FC = () => (
  <>
        <section id="final" className="chapter tinted" data-bg="#170F0F" style={{ paddingBlock: "clamp(7rem,14vw,12rem)" }}>
          <div className="halo" aria-hidden="true"></div>
          <span className="word-bg" aria-hidden="true" data-grow>GROW</span>

          <div className="shell" style={{ position: "relative", textAlign: "center" }}>
            <p className="mono eyebrow" data-fade style={{ justifyContent: "center" }}>Ready When You Are</p>
            <h2 className="split" data-split style={{ fontSize: "clamp(2rem,4.6vw,3.6rem)", lineHeight: "1.1", letterSpacing: "-.02em", margin: "1.75rem auto 0", maxWidth: "22ch" }}>
              Competitors already have a website working for them. <em style={{ color: "var(--accent-display)" }}>Let&#8217;s make sure yours does too.</em>
            </h2>

            <div data-fade data-delay=".15" style={{ marginTop: "clamp(2.5rem,5vw,3.5rem)", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a className="btn btn--bone" data-magnetic href="https://calendly.com/itseg/segmeet" target="_blank" rel="noopener noreferrer">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                <span>Book a Free Consultation</span>
                <svg className="arrow" width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true"><path d="M1 6h14M10.5 1 15.5 6l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a className="btn btn--ghost" data-magnetic href="#lead"><span>Get the Free Audit First</span></a>
            </div>

            <p className="mono" data-fade data-delay=".25" style={{ marginTop: "2rem", color: "var(--muted)" }}>No contracts &#183; No lock-in &#183; Audit in 48 hours</p>
          </div>
        </section>
  </>
);

export default FinalCTA;
