import React from 'react';

/**
 * Showcase — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Showcase: React.FC = () => (
  <>
        <section id="showcase" className="chapter tinted" data-bg="#100C0C" aria-labelledby="sc-h">
          <div className="shell">

            {/* header ------------------------------------------------- */}
            <div className="sc-head" data-fade>
              <span className="pill mono"><i aria-hidden="true"></i>Showcase &#183; Hit-and-run</span>
              <h2 id="sc-h" className="h2-lg split" data-split>
                Page one for Rhode Island hit-and-run, and the <em>first law firm</em> in this search.
              </h2>
              <p className="lede">
                For &#8220;RI hit and run accidents,&#8221; mfclaw.com came back as the first law-firm result, ahead of every competing firm on the page. Across the quarter the page averages position 7.71.
              </p>
            </div>

            {/* KPIs --------------------------------------------------- */}
            <div className="kpi-row">
              <div className="panel-card kpi" data-fade>
                <span className="v"><span data-count="29" data-decimals="0">29</span></span>
                <span className="k">Visits from hit-and-run searches</span>
              </div>
              <div className="panel-card kpi" data-fade data-delay=".08">
                <span className="v"><span data-count="1.67" data-decimals="2">1.67</span>%</span>
                <span className="k">Click rate, 12&#215; the site-wide average</span>
              </div>
              <div className="panel-card kpi" data-fade data-delay=".16">
                <span className="v"><span data-count="7.71" data-decimals="2">7.71</span></span>
                <span className="k">Average position across the quarter</span>
              </div>
            </div>

            {/* the result Google returned ----------------------------- */}
            <div className="panel-card" data-fade>
              <p className="mono muted">The result Google returned</p>
              <div className="serp" style={{ marginTop: "1.25rem" }}>
                <div className="serp-top">
                  <span className="serp-fav" aria-hidden="true">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7Zm10 0-3 6h6l-3-6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
                  </span>
                  <span>
                    <span className="serp-site">Law Offices of Michael F. Campopiano</span><br />
                    <span className="serp-url">https://mfclaw.com &#8250; ri-hit-and-run-accidents</span>
                  </span>
                </div>
                <p className="serp-title">Hit-and-Run Accident in Rhode Island: What to Do | MFC Law</p>
                <p className="serp-snippet">
                  <b>Leaving the scene of a crash involving injury is a felony in Rhode Island</b>, punishable by up to five years in prison, fines, and license revocation. <span className="serp-more">Read more</span>
                </p>
              </div>
            </div>

            {/* order + snippet ---------------------------------------- */}
            <div className="sc-two">
              <div className="panel-card" data-fade>
                <p className="mono muted">Law firms, in the order Google listed them</p>
                <div className="rank-list">
                  <div className="rank is-client">
                    <span className="n">1</span><span className="nm">MFC Law</span><span className="tag mono">The client</span>
                  </div>
                  <div className="rank"><span className="n">2</span><span className="nm">Marin &amp; Murphy</span></div>
                  <div className="rank"><span className="n">3</span><span className="nm">Gemma Law</span></div>
                  <div className="rank"><span className="n">4</span><span className="nm">Louis Grande</span></div>
                </div>
              </div>

              <div className="panel-card" data-fade data-delay=".08">
                <p className="mono muted">The snippet earning the clicks</p>
                <blockquote className="sc-quote">
                  <p>&#8220;Leaving the scene of a crash involving injury is a felony in Rhode Island, punishable by up to five years in prison, fines, and license revocation.&#8221;</p>
                </blockquote>
                <p className="lede" style={{ marginTop: "1.25rem" }}>
                  That is the exact answer to the top question Google lists for this search, which is why the page earns clicks well above the site average.
                </p>
              </div>
            </div>

            <p className="sc-note" data-fade>
              Screenshots: one search on Jul 29, 2026. Google personalises results by location and history, so a Rhode Island searcher may see a different order.
            </p>

            {/* pages doing the work + keyword coverage ----------------- */}
            <div className="sc-two">
              <div className="panel-card" data-fade>
                <div className="bar-head">
                  <p className="mono muted">The pages doing the work</p>
                  <p className="mono muted">Visits, last 3 months</p>
                </div>
                <div className="bars">
                  <div className="bar-row"><div className="bar-top"><span className="bar-name">Homepage</span><span className="bar-val">195</span></div><div className="bar-tr"><i className="bar-fi" data-bar="100"></i></div></div>
                  <div className="bar-row"><div className="bar-top"><span className="bar-name">Guide: Personal Injury Protection in MA</span><span className="bar-val">63</span></div><div className="bar-tr"><i className="bar-fi" data-bar="32"></i></div></div>
                  <div className="bar-row"><div className="bar-top"><span className="bar-name">Guide: MA Tort Threshold Rules</span><span className="bar-val">47</span></div><div className="bar-tr"><i className="bar-fi" data-bar="24"></i></div></div>
                  <div className="bar-row"><div className="bar-top"><span className="bar-name">RI Hit-and-Run Accidents</span><span className="bar-val">29</span></div><div className="bar-tr"><i className="bar-fi" data-bar="15"></i></div></div>
                  <div className="bar-row"><div className="bar-top"><span className="bar-name">Guide: Insurance Bad Faith in RI</span><span className="bar-val">9</span></div><div className="bar-tr"><i className="bar-fi" data-bar="5"></i></div></div>
                </div>
              </div>

              <div className="panel-card" data-fade data-delay=".08">
                <div className="kw-hero">
                  <span className="n"><span data-count="114" data-decimals="0">114</span></span>
                  <span className="t">non-branded searches ranking in the top 10</span>
                </div>
                <p className="lede" style={{ marginTop: "1rem" }}>Not just the firm name. These are searches strangers type, grouped by the kind of case they describe.</p>
                <p className="sc-note" style={{ marginTop: "auto", paddingTop: "1.5rem" }}>Most sit at the bottom of page one, positions 7 to 10, which is why they are not earning clicks yet.</p>
              </div>
            </div>

            <div className="panel-card kw-board" data-fade>
              <div className="kw-grid">
                <div className="kw-group">
                  <p className="mono">Injury &amp; premises</p>
                  <div className="kw-table">
                    <div className="kw top"><span className="q">personal injury attorney</span><span className="m">#1.3 &#183; 1,752</span></div>
                    <div className="kw top"><span className="q">injury lawyer</span><span className="m">#1.1 &#183; 640</span></div>
                    <div className="kw"><span className="q">providence dog bite injury attorney</span><span className="m">#9.4 &#183; 432</span></div>
                    <div className="kw"><span className="q">providence pedestrian accident attorney</span><span className="m">#7.9 &#183; 391</span></div>
                  </div>
                </div>
                <div className="kw-group">
                  <p className="mono">Car accidents</p>
                  <div className="kw-table">
                    <div className="kw"><span className="q">car accident lawyer</span><span className="m">#10 &#183; 1,423</span></div>
                    <div className="kw"><span className="q">car accident attorney</span><span className="m">#6.9 &#183; 871</span></div>
                    <div className="kw"><span className="q">cranston car accident attorneys</span><span className="m">#7.1 &#183; 631</span></div>
                    <div className="kw"><span className="q">hit and run rhode island</span><span className="m">#3.1 &#183; 46</span></div>
                  </div>
                </div>
                <div className="kw-group">
                  <p className="mono">Rideshare</p>
                  <div className="kw-table">
                    <div className="kw"><span className="q">uber &amp; lyft accident lawyer</span><span className="m">#10 &#183; 1,450</span></div>
                    <div className="kw"><span className="q">lyft accident lawyer near me</span><span className="m">#9.9 &#183; 1,397</span></div>
                    <div className="kw"><span className="q">rideshare accident lawyer near me</span><span className="m">#9.8 &#183; 1,162</span></div>
                  </div>
                </div>
                <div className="kw-group">
                  <p className="mono">Product liability</p>
                  <div className="kw-table">
                    <div className="kw"><span className="q">product liability attorney</span><span className="m">#9.3 &#183; 1,187</span></div>
                    <div className="kw"><span className="q">providence product liability attorney</span><span className="m">#7 &#183; 1,016</span></div>
                    <div className="kw"><span className="q">product liability lawyer</span><span className="m">#9.6 &#183; 1,009</span></div>
                    <div className="kw"><span className="q">product liability law firm</span><span className="m">#7 &#183; 454</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* next wins + plan --------------------------------------- */}
            <div className="sc-two">
              <div className="panel-card" data-fade>
                <h3 style={{ fontSize: "clamp(1.35rem,2vw,1.7rem)" }}>Where the next wins are</h3>
                <p className="lede" style={{ marginTop: ".85rem" }}>Seen tens of thousands of times, but ranked on page 2 to 4, so the clicks go elsewhere. Moving these up is the biggest lever.</p>
                <div className="bar-head" style={{ marginTop: "1.75rem" }}>
                  <p className="mono muted">Search term</p>
                  <p className="mono muted">Times shown vs current rank</p>
                </div>
                <div className="bars">
                  <div className="bar-row cool"><div className="bar-top"><span className="bar-name">&#8220;providence car accident lawyer&#8221;</span><span className="badge-page">Page 4</span></div><div className="bar-tr"><i className="bar-fi" data-bar="100"></i></div><div className="bar-top"><span></span><span className="bar-val">16.7K</span></div></div>
                  <div className="bar-row cool"><div className="bar-top"><span className="bar-name">&#8220;rhode island motorcycle accident lawyer&#8221;</span><span className="badge-page">Page 4</span></div><div className="bar-tr"><i className="bar-fi" data-bar="97"></i></div><div className="bar-top"><span></span><span className="bar-val">16.2K</span></div></div>
                  <div className="bar-row cool"><div className="bar-top"><span className="bar-name">&#8220;warwick slip and fall lawyer&#8221;</span><span className="badge-page">Page 3</span></div><div className="bar-tr"><i className="bar-fi" data-bar="75"></i></div><div className="bar-top"><span></span><span className="bar-val">12.6K</span></div></div>
                  <div className="bar-row cool"><div className="bar-top"><span className="bar-name">&#8220;providence Uber &amp; Lyft accident lawyer&#8221;</span><span className="badge-page">Page 2</span></div><div className="bar-tr"><i className="bar-fi" data-bar="72"></i></div><div className="bar-top"><span></span><span className="bar-val">12.0K</span></div></div>
                </div>
              </div>

              <div className="panel-card" data-fade data-delay=".08">
                <h3 style={{ fontSize: "clamp(1.35rem,2vw,1.7rem)" }}>What we do next</h3>
                <ol className="steps" style={{ listStyle: "none", padding: "0", margin: "1.5rem 0 0" }}>
                  <li className="step"><span className="sn">01</span><div><h4>Push page-2 pages to page 1</h4><p>Car-accident, motorcycle and rideshare pages are already getting seen.</p></div></li>
                  <li className="step"><span className="sn">02</span><div><h4>Keep publishing guides</h4><p>The PIP and tort-threshold posts prove educational content earns visits.</p></div></li>
                  <li className="step"><span className="sn">03</span><div><h4>Strengthen city pages</h4><p>Providence, Warwick and Pawtucket: high-intent, local searches.</p></div></li>
                  <li className="step"><span className="sn">04</span><div><h4>Protect the #1 rankings</h4><p>Keep the firm name and hit-and-run searches locked at the top.</p></div></li>
                </ol>
              </div>
            </div>

            <p className="sc-note" data-fade>Google Search Console &#183; reported to the client, July 2026</p>
          </div>
        </section>
  </>
);

export default Showcase;
