import React from 'react';

/**
 * Marquee — ported from the Growth Engine flagship design.
 * Markup and data-* animation hooks are preserved verbatim; the
 * choreography that reads them lives in useScrollChoreography.
 */
const Marquee: React.FC = () => (
  <>
        <div className="marquee" aria-hidden="true" data-marquee>
          <div className="row">
            <span>Mobile First</span><span>Built To Convert</span><span>48 Hour Audit</span><span>No Contracts</span><span>Found By AI</span><span>Post-Launch Support</span>
            <span>Mobile First</span><span>Built To Convert</span><span>48 Hour Audit</span><span>No Contracts</span><span>Found By AI</span><span>Post-Launch Support</span>
          </div>
        </div>
  </>
);

export default Marquee;
