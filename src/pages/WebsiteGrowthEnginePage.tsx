import React, { useMemo } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import SEO from '../components/Common/SEO';
import ContactForm from '../components/Common/ContactForm';
import WebsiteGrowthEngine from '../components/WebsiteGrowthEngine';
import { faqEntries } from '../components/WebsiteGrowthEngine/FAQ/faqData';
import { absoluteUrl, routes } from '../data/seo';

const CANONICAL = absoluteUrl(routes.website);

/**
 * Website Growth Engine landing page.
 *
 * The shared Header and Footer are kept deliberately: the flagship design
 * shipped its own replicas of both (plus a theme toggle) purely so it
 * could be previewed as a standalone file. Those were dropped in the port
 * and the site's real components take their place.
 *
 * Header runs theme="light" — that prop selects white nav text, which is
 * what this page's dark hero needs.
 */
const WebsiteGrowthEnginePage: React.FC = () => {
  // Built from the same source as the rendered accordion so the answers
  // Google sees can never drift from the answers on the page.
  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': '#seg',
          name: 'Social Engagement Group',
          description:
            'A full-service 360-degree marketing agency building websites and growth engines for law firms, medical practices, and local service businesses.',
          url: 'https://www.socialengagementgroup.com',
          telephone: '+1-512-214-0504',
          email: 'communications@socialengagementgroup.com',
          areaServed: 'US',
          priceRange: '$$',
        },
        {
          '@type': 'FAQPage',
          '@id': `${CANONICAL}#faq`,
          mainEntity: faqEntries.map((e) => ({
            '@type': 'Question',
            name: e.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: [
                ...e.paras,
                ...(e.spec ?? []).map((s) => `${s.term}: ${s.def}`),
              ].join(' '),
            },
          })),
        },
      ],
    }),
    []
  );

  return (
    <div className="bg-black min-h-screen relative">
      <SEO
        title="The SEG Website Growth Engine | Websites Built to Convert"
        description="SEG builds mobile-first websites that turn visitors into calls and bookings. Free 48-hour website audit, no contracts. Built for law firms, medical practices, and local service businesses."
        ogTitle="The SEG Website Growth Engine"
        ogDescription="Mobile-first websites built to convert. Free 48-hour audit, no contracts."
        canonicalPath={routes.website}
        schema={schema}
      />

      <Header theme="light" accent="brick" />

      <WebsiteGrowthEngine />

      {/* The shared contact form and footer, same as every other landing
          page. They sit outside the `.wge` wrapper on purpose: the ported
          stylesheet restyles bare h2/p/a inside that scope, which would
          pull them away from the look they have elsewhere on the site.

          `relative z-[1]` is load-bearing. `.wge` is a positioned element,
          and positioned elements paint above static siblings, so its
          fixed full-viewport #atmos backdrop would otherwise cover both of
          these once the page scrolls past the FAQ — the footer renders but
          is painted over. Lifting them into their own positioned layer
          puts them back on top of the atmosphere.

          `#lead` is the anchor the page's CTAs already point at — the hero
          "Free Website Audit", the final "Get the Free Audit First", and
          the mobile action bar — so the id moves here with the form. */}
      <div className="relative z-[1]">
        <div id="lead" style={{ scrollMarginTop: '91px' }}>
          <ContactForm accent="brick" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default WebsiteGrowthEnginePage;
