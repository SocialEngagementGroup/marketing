import React from 'react';

/**
 * Hero — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Hero: React.FC = () => (
  <>
        <section id="hero" className="tinted" data-bg="#0B0908" style={{ scrollMarginTop: "0" }}><span id="top" aria-hidden="true"></span>
          <div className="shell grid">
            <div>
              <p className="mono eyebrow" data-fade>The SEG Website Growth Engine</p>

              <h1 className="h1 split" data-split style={{ marginTop: "1.75rem" }}>Every Website Should Turn Visitors Into <em>Customers</em></h1>

              <div className="line-mask" style={{ marginTop: "2.25rem" }}>
                <p className="lede" data-fade data-delay=".15" style={{ maxWidth: "34ch", borderLeft: "1px solid var(--accent-fill)", paddingLeft: "1.25rem" }}>
                  We build websites that work as hard as you do. No contracts. Just a site that actually converts.
                </p>
              </div>

              <div data-fade data-delay=".25" style={{ marginTop: "2.75rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}>
                <a className="btn" data-magnetic href="#lead">
                  <span>Free Website Audit</span>
                  <svg className="arrow" width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true"><path d="M1 6h14M10.5 1 15.5 6l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <p className="mono" style={{ color: "var(--muted)", lineHeight: "2" }}>Delivered in 48 hours<br />No contract, no obligation</p>
              </div>

              <div className="scroll-cue mono" data-fade data-delay=".4" style={{ marginTop: "clamp(3rem,7vw,5rem)" }}>
                <span className="track" aria-hidden="true"><i></i></span> Scroll
              </div>
            </div>

            <div className="device" data-hero-device>
              <div className="plate">
                <div className="gridlines" aria-hidden="true"></div>
                <div className="win win--back" aria-hidden="true">
                  <div className="bar"><i className="dot"></i><i className="dot"></i><i className="dot"></i></div>
                  <img className="shot" src="/assets/website/hero-shot-back.webp" alt="" loading="lazy" decoding="async" width="900" height="351" />
                </div>
                <div className="win">
                  <div className="bar" aria-hidden="true"><i className="dot"></i><i className="dot"></i><i className="dot"></i></div>
                  <img className="shot" src="/assets/website/hero-shot-front.webp" width="900" height="414" decoding="async" alt="flamehibachi.com home page on desktop, a live SEG build" />
                </div>
                <div className="speed-chip mono" aria-hidden="true"><i className="pulse"></i><span style={{ color: "var(--muted)" }}>flamehibachi.com</span><span className="tnum">0.5s</span></div>
              </div>

              <div className="seal" aria-hidden="true">
                <svg className="ring" viewBox="0 0 100 100">
                  <defs><path id="ring-path" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs>
                  <text fill="#C96D69" style={{ fontFamily: "var(--f-mono)", fontSize: "8.5px", letterSpacing: ".24em" }}>
                    <textPath href="#ring-path">WEBSITE GROWTH ENGINE &#183; SEG &#183; </textPath>
                  </text>
                </svg>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--accent)" }}><path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </section>
  </>
);

export default Hero;
