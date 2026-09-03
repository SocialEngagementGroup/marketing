import React from 'react';

/**
 * Wipe — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Wipe: React.FC = () => (
  <>
        <section id="wipe" className="translucent" data-bg="#16100F" aria-labelledby="wipe-h">
          <div className="shell stage">
            <div>
              <p className="mono eyebrow">The Same Business, Two Websites</p>
              <h2 id="wipe-h" style={{ fontSize: "clamp(2rem,4.4vw,3.4rem)", lineHeight: "1.08", letterSpacing: "-.02em", marginTop: "1.5rem" }}>
                Drag the scroll and watch<br /><em style={{ color: "var(--accent-display)" }}>the leak close.</em>
              </h2>

              <div className="readout" style={{ marginTop: "clamp(2.5rem,5vw,3.5rem)" }}>
                <div>
                  <p className="mono" style={{ color: "var(--muted)" }}>First Paint</p>
                  <p className="num"><span data-load-time>6.4</span>s</p>
                </div>
                <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr 1fr", maxWidth: "26rem" }}>
                  <div>
                    <p className="mono" style={{ color: "var(--muted)" }}>Taps To Call</p>
                    <p style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: "1", marginTop: ".5rem" }} className="tnum"><span data-taps>3</span></p>
                  </div>
                  <div>
                    <p className="mono" style={{ color: "var(--muted)" }}>Built For</p>
                    <p style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: "1", marginTop: ".5rem" }}><span data-builtfor>Desktop</span></p>
                  </div>
                </div>
                <p className="lede" style={{ maxWidth: "38ch" }} data-wipe-caption>Everything above is what a visitor meets today. Keep scrolling.</p>
              </div>
            </div>

            <div>
              <div className="phone">
                <div className="screen">
                  {/* BEFORE */}
                  <div className="layer" aria-hidden="true">
                    <div className="scr scr--before">
                      <div className="notch"><i></i></div>
                      <div className="content">
                        <div className="navrow"><i></i><i></i><i></i><i></i><i></i></div>
                        <div className="hero"></div>
                        <div className="lines">
                          <i style={{ width: "100%" }}></i><i style={{ width: "100%" }}></i><i style={{ width: "96%" }}></i><i style={{ width: "100%" }}></i>
                          <i style={{ width: "88%" }}></i><i style={{ width: "100%" }}></i><i style={{ width: "92%" }}></i><i style={{ width: "74%" }}></i>
                          <i style={{ width: "100%" }}></i><i style={{ width: "81%" }}></i>
                          <i style={{ width: "97%" }}></i><i style={{ width: "100%" }}></i><i style={{ width: "69%" }}></i>
                          <i style={{ width: "100%" }}></i><i style={{ width: "90%" }}></i><i style={{ width: "100%" }}></i>
                          <i style={{ width: "77%" }}></i><i style={{ width: "100%" }}></i><i style={{ width: "85%" }}></i>
                          <i style={{ width: "100%" }}></i><i style={{ width: "72%" }}></i>
                        </div>
                        <div className="fill"></div>
                      </div>
                      <div className="foot">call &#183; buried 3 taps deep</div>
                    </div>
                  </div>
                  {/* AFTER */}
                  <div className="layer after" data-after>
                    <div className="shotstrip" data-strip>
                      <i className="fr fr-a"></i><i className="fr fr-b"></i><i className="fr fr-c"></i>
                      <i className="fr fr-d"></i><i className="fr fr-e"></i>
                      <span className="sr-only">flamehibachi.com loading on a phone, recorded frame by frame</span>
                      <span className="badge-tl tnum" aria-hidden="true">0.5s</span>
                    </div>
                  </div>
                  <span className="wipe-line" data-wipe-line aria-hidden="true"></span>
                </div>
              </div>
              <p className="mono" style={{ textAlign: "center", marginTop: "1.5rem", color: "var(--muted)" }}>
                <span data-wipe-label>Typical unoptimized site</span>
              </p>
              <p className="cap-note">
                Real capture, throttled to Slow 4G. First paint 0.5s is the median of three unthrottled mobile loads, Sep 2026.
              </p>
            </div>
          </div>
        </section>
  </>
);

export default Wipe;
