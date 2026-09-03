import React from 'react';

/**
 * Repair — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Repair: React.FC = () => (
  <>
        <section id="repair" className="chapter on-bone" data-bg="#0E0A0A" aria-labelledby="repair-h">
          <div className="shell">
            <div className="repair-head">
              <p className="mono eyebrow" data-fade>Chapter 02 / The Repair</p>
              <h2 id="repair-h" className="h2-lg split" data-split>
                What it feels like when the website is <em>doing its job.</em>
              </h2>
              <p className="lede repair-lede" data-fade data-delay=".1">
                A visitor arrives from their phone and knows within a second they&#8217;re in the right place. Fast load. Clean design. One thumb-tap to call or book, no pinching, no zooming, no hunting for the number. Here is what changes on your side of that.
              </p>
            </div>

            <div className="repair-grid">
              <article className="rcard">
                <span className="plate" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.5v3A2 2 0 0 1 18 18.4 15.5 15.5 0 0 1 5.6 6 2 2 0 0 1 6.6 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                </span>
                <h3>The phone rings more</h3>
                <p className="lede">Calls start coming from people who already decided to hire someone. They are not browsing, they are choosing.</p>
                <div className="how">
                  <span className="mono">Because</span>
                  <p>One thumb-tap to call sits on every screen, always within reach of the thumb.</p>
                </div>
              </article>

              <article className="rcard">
                <span className="plate" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
                <h3>The calendar fills up</h3>
                <p className="lede">Bookings land while you are with a client, on site, or asleep. Nobody on your team chases a single one of them.</p>
                <div className="how">
                  <span className="mono">Because</span>
                  <p>Booking is two taps from any page, and the form asks only what you actually need.</p>
                </div>
              </article>

              <article className="rcard">
                <span className="plate" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 17l5-5 3.5 3.5L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 8h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3>Revenue grows on the same traffic</h3>
                <p className="lede">You are not buying more visitors. The visitors you already had stop leaving before they get to the point.</p>
                <div className="how">
                  <span className="mono">Because</span>
                  <p>Every page is built around one action, and nothing on the page competes with it.</p>
                </div>
              </article>

              <article className="rcard">
                <span className="plate" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 1 1-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3>You never touch it again</h3>
                <p className="lede">No plugin updates at midnight. No wondering whether the contact form still sends. It simply keeps working.</p>
                <div className="how">
                  <span className="mono">Because</span>
                  <p>Hosting, updates, and monitoring stay with us after launch, not just up to handoff.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
  </>
);

export default Repair;
