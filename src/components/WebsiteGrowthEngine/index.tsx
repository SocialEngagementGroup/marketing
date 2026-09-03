import React, { useRef } from 'react';

import Atmosphere from './Atmosphere';
import Hero from './Hero';
import Marquee from './Marquee';
import Pain from './Pain';
import Wipe from './Wipe';
import Repair from './Repair';
import Layers from './Layers';
import Stack from './Stack';
import Proof from './Proof';
import Showcase from './Showcase';
import FinalCTA from './FinalCTA';
import FAQ from './FAQ';

import { useScrollChoreography } from './useScrollChoreography';
import '../../styles/website-growth-engine.css';

/**
 * The Website Growth Engine page body.
 *
 * Everything is wrapped in `.wge`: the ported stylesheet is scoped to
 * that class, so the design's bare element rules (h1/h2/h3, p, a, the
 * box-sizing reset) cannot reach the shared Header, ContactForm and
 * Footer that sit outside this subtree.
 *
 * The page ends at the FAQ. The shared ContactForm follows it as a
 * sibling in WebsiteGrowthEnginePage — deliberately outside `.wge`, so
 * it renders identically to the one on every other landing page rather
 * than being restyled by the ported sheet.
 */
const WebsiteGrowthEngine: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  useScrollChoreography(root);

  return (
    <div className="wge" ref={root}>
      <Atmosphere />

      <div id="rail" aria-hidden="true"><span /></div>
      <div id="glow" aria-hidden="true" />

      <main id="main">
        <Hero />
        <Marquee />
        <Pain />
        <Wipe />
        <Repair />
        <Layers />
        <Stack />
        <Proof />
        <Showcase />
        <FinalCTA />
        <FAQ />
      </main>

      {/* Persistent mobile action bar. Visibility is geometry-driven in
          useScrollChoreography so it stands down over the two CTAs. */}
      <div id="actionbar" data-show="false">
        <p className="ab-copy"><b>Free website audit</b><span>Back in 48 hours</span></p>
        <a className="btn" href="#lead">
          <span>Book</span>
          <svg className="arrow" width="15" height="11" viewBox="0 0 17 12" fill="none" aria-hidden="true">
            <path d="M1 6h14M10.5 1 15.5 6l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WebsiteGrowthEngine;
