import React from 'react';

/**
 * Proof — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Proof: React.FC = () => (
  <>
        <section className="chapter translucent" data-bg="#1A1212">
          <div className="shell">
            <div style={{ maxWidth: "46rem" }}>
              <p className="mono eyebrow" data-fade>Chapter 05 / The Proof</p>
              <h2 className="split" data-split style={{ fontSize: "clamp(2.1rem,4.6vw,3.6rem)", lineHeight: "1.08", letterSpacing: "-.02em", marginTop: "1.75rem" }}>
                We build for businesses with <em style={{ color: "var(--accent-display)" }}>real reputations to protect.</em>
              </h2>
            </div>

            <div className="proof" style={{ marginTop: "clamp(3rem,6vw,4.5rem)" }}>
              <div data-fade>
                <div className="proof-top"><span className="mark" aria-hidden="true">MFC</span><span className="mono sector">Legal · Providence, RI</span></div>
                <p className="stat" data-count="5.0" data-decimals="1">5.0</p>
                <p className="mono" style={{ color: "var(--muted)", marginTop: ".85rem" }}>Across 155 Google Reviews</p>
                <h3 style={{ fontSize: "1.4rem", marginTop: "1.5rem" }}>MFC Law</h3>
                <p className="lede" style={{ fontSize: ".9375rem", marginTop: ".5rem" }}>One of Rhode Island&#8217;s top personal injury firms, with tens of millions recovered for their clients.</p>
                <p className="proof-src"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.4-3 8.3-7 10-4-1.7-7-5.6-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Verified · Google Business Profile</p>
              </div>
              <div data-fade data-delay=".1">
                <div className="proof-top"><span className="mark" aria-hidden="true">FJH</span><span className="mono sector">Hospitality · Five states</span></div>
                <p className="stat"><span data-count="20" data-decimals="0">20</span>+</p>
                <p className="mono" style={{ color: "var(--muted)", marginTop: ".85rem" }}>Locations Across Five States</p>
                <h3 style={{ fontSize: "1.4rem", marginTop: "1.5rem" }}>Flame Japanese Hibachi</h3>
                <p className="lede" style={{ fontSize: ".9375rem", marginTop: ".5rem" }}>Grown from a single dining room into a multi-state hibachi group.</p>
                <p className="proof-src"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.4-3 8.3-7 10-4-1.7-7-5.6-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Client reported · 2026</p>
              </div>
              <div data-fade data-delay=".2">
                <div className="proof-top"><span className="mark" aria-hidden="true">NIP</span><span className="mono sector">Healthcare · New York City</span></div>
                <p className="stat" data-count="7" data-decimals="0">7</p>
                <p className="mono" style={{ color: "var(--muted)", marginTop: ".85rem" }}>Locations Across New York City</p>
                <h3 style={{ fontSize: "1.4rem", marginTop: "1.5rem" }}>North Island Podiatry</h3>
                <p className="lede" style={{ fontSize: ".9375rem", marginTop: ".5rem" }}>Backed by more than 40 years of combined expertise across the five boroughs.</p>
                <p className="proof-src"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.4-3 8.3-7 10-4-1.7-7-5.6-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Client reported · 2026</p>
              </div>
            </div>

            <p data-fade style={{ marginTop: "clamp(2.5rem,5vw,3.5rem)", fontFamily: "var(--f-display)", fontStyle: "italic", fontSize: "clamp(1.15rem,2.2vw,1.6rem)", lineHeight: "1.5", maxWidth: "44rem", color: "var(--text)" }}>
              Different industries, same story: they focus on the business, we build the site that backs it up.
            </p>
          </div>
        </section>
  </>
);

export default Proof;
