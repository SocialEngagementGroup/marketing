import React from 'react';

/**
 * Atmosphere — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Atmosphere: React.FC = () => (
  <>
      <div id="atmos" aria-hidden="true">
        <span className="blob b1"></span>
        <span className="blob b2"></span>
        <span className="blob b3"></span>
        <span className="vignette"></span>
        <span className="grain"></span>
      </div>

  </>
);

export default Atmosphere;
