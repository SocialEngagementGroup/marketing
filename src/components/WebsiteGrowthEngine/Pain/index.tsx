import React from 'react';

/**
 * Pain — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Pain: React.FC = () => (
  <>
        <section className="chapter tinted" data-bg="#120D0D">
          <div className="shell" style={{ display: "grid", gap: "clamp(2.5rem,6vw,5rem)", gridTemplateColumns: "1fr" }}>
            <div style={{ maxWidth: "52rem" }}>
              <p className="mono eyebrow" data-fade>Chapter 01 / The Leak</p>
              <h2 className="split" data-split style={{ fontSize: "clamp(2.1rem,5vw,4rem)", lineHeight: "1.06", letterSpacing: "-.02em", marginTop: "1.75rem" }}>
                They leave before you ever know <em style={{ color: "var(--accent-display)" }}>they were there.</em>
              </h2>
            </div>

            <div style={{ display: "grid", gap: "clamp(1.5rem,3vw,3rem)", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,17rem),1fr))" }}>
              <p className="lede" data-fade>Right now, someone lands on your website looking for exactly what you offer.</p>
              <p className="lede" data-fade data-delay=".1">Most of them are on their phone. It takes ages to load. The text is too small to read. The call button is buried three taps deep, if it works at all.</p>
              <p className="lede" data-fade data-delay=".2">So they don&#8217;t bother and leave in seconds. They go to your competitor&#8217;s site instead, the one built to work on the device they&#8217;re actually holding.</p>
            </div>

            <blockquote data-fade style={{ margin: "0", borderLeft: "1px solid var(--accent-fill)", paddingLeft: "clamp(1.25rem,3vw,2rem)", maxWidth: "46rem" }}>
              <p style={{ fontFamily: "var(--f-display)", fontStyle: "italic", fontSize: "clamp(1.25rem,2.6vw,1.9rem)", lineHeight: "1.45", color: "var(--text)" }}>
                We&#8217;ve seen it happen to good businesses every single time. The work is great. The website isn&#8217;t pulling its weight, especially not on mobile.
              </p>
            </blockquote>
          </div>
        </section>
  </>
);

export default Pain;
