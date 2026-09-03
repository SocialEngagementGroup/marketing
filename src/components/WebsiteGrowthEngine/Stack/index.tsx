import React from 'react';

/**
 * Stack — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Stack: React.FC = () => (
  <>
        <section id="stack" className="chapter tinted" data-bg="#150F0F" style={{ scrollMarginTop: "91px" }}>
          <div className="shell">
            <div style={{ maxWidth: "44rem" }}>
              <p className="mono eyebrow" data-fade>Chapter 04 / The Offer</p>
              <h2 className="split" data-split style={{ fontSize: "clamp(2.1rem,4.6vw,3.6rem)", lineHeight: "1.08", letterSpacing: "-.02em", marginTop: "1.75rem" }}>
                Everything in the build, <em style={{ color: "var(--accent-display)" }}>nothing you don&#8217;t need.</em>
              </h2>
            </div>

            <div className="stack" style={{ marginTop: "clamp(3rem,6vw,5rem)" }}>
              <article className="stack-card" data-stack-card style={{ top: "calc(91px + 1.5rem)" }}>
                <h3>Free Website Audit</h3>
                <p>Delivered within 48 hours of signing up.</p>
                <p className="why">You see exactly what&#8217;s costing you visitors before you commit to anything else.</p>
              </article>
              <article className="stack-card" data-stack-card style={{ top: "calc(91px + 2.6rem)" }}>
                <h3>Custom Design &amp; Build</h3>
                <p>A site built around your business, not a recycled template.</p>
                <p className="why">Looks and works like it belongs to a real, established business.</p>
              </article>
              <article className="stack-card" data-stack-card style={{ top: "calc(91px + 3.7rem)" }}>
                <h3>Mobile-First Build</h3>
                <p>Every page designed for phone screens first, desktop second.</p>
                <p className="why">Most of your visitors are on mobile, so that&#8217;s where it has to work best.</p>
              </article>
              <article className="stack-card" data-stack-card style={{ top: "calc(91px + 4.8rem)" }}>
                <h3>Done-For-You Setup</h3>
                <p>We handle hosting, domain, and migration.</p>
                <p className="why">Zero technical work required from you.</p>
              </article>
              <article className="stack-card" data-stack-card style={{ top: "calc(91px + 5.9rem)" }}>
                <h3>Post-Launch Support</h3>
                <p>We&#8217;re there after launch, not just at handoff.</p>
                <p className="why">Nothing breaks silently while you&#8217;re busy running the business.</p>
              </article>
            </div>
          </div>
        </section>
  </>
);

export default Stack;
