import React from 'react';

/**
 * Layers — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Layers: React.FC = () => (
  <>
        <section id="layers" className="tinted" data-bg="#0C0A0A" aria-labelledby="layers-h">
          <div className="viewport">
            <div className="shell" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
              <p className="mono eyebrow">Chapter 03 / The System</p>
              <h2 id="layers-h" style={{ fontSize: "clamp(1.9rem,4vw,3.1rem)", lineHeight: "1.08", letterSpacing: "-.02em", marginTop: "1.25rem", maxWidth: "22ch" }}>
                Four layers that make this <em style={{ color: "var(--accent-display)" }}>more than a website.</em>
              </h2>
            </div>

            <div className="track-scroller" data-track-scroller>
            <div className="h-track" data-track>
              <article className="panel">
                <span className="idx" aria-hidden="true">01</span>
                <p className="mono" style={{ color: "var(--accent)" }}>Design Layer</p>
                <h3>Built to convert, not just to look nice</h3>
                <p className="lede">A clear path to every call or booking, so no visitor ever has to wonder what to do next.</p>
              </article>
              <article className="panel">
                <span className="idx" aria-hidden="true">02</span>
                <p className="mono" style={{ color: "var(--accent)" }}>Speed &amp; Technical Layer</p>
                <h3>Fast load times on a mobile-first build</h3>
                <p className="lede">Most of your visitors are on their phone long before they&#8217;re ever on a desktop, all on a foundation search engines can actually read.</p>
              </article>
              <article className="panel">
                <span className="idx" aria-hidden="true">03</span>
                <p className="mono" style={{ color: "var(--accent)" }}>Conversion Layer</p>
                <h3>Every page built around one job</h3>
                <p className="lede">Turning a visitor into a call, a form, or a booking. Nothing on the page competes with that.</p>
              </article>
              <article className="panel">
                <span className="idx" aria-hidden="true">04</span>
                <p className="mono" style={{ color: "var(--accent)" }}>AI Layer</p>
                <h3>Optimized to get found by AI too</h3>
                <p className="lede">With a chat assistant that qualifies leads around the clock, long after your office has closed for the day.</p>
              </article>
            </div>
            </div>

            <div className="track-progress">
              <span aria-hidden="true" style={{ display: "flex", gap: ".5rem" }}><i><b></b></i><i><b></b></i><i><b></b></i><i><b></b></i></span>
              <span className="track-hint mono">Swipe
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true"><path d="M1 5h15M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </div>
        </section>
  </>
);

export default Layers;
