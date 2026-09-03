import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const baseHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');

const baseUrl = 'https://digital.socialengagementgroup.com';
const mainSiteUrl = 'https://www.socialengagementgroup.com';
const siteName = 'Social Engagement Group';
const logoUrl = `${mainSiteUrl}/assets/images/site-logo/logo.svg`;

const pages = [
  {
    path: '/',
    title: 'AI-Powered Business Growth | SEG',
    description:
      'Transform your digital presence with SEG through creative strategy, AI-powered execution, websites, ads, SEO, and content built to convert attention into leads.',
    heading: 'Where Human Creativity Meets AI-Powered Growth',
    body:
      'We tell your story across every digital touchpoint, blending creativity, strategy, and AI-powered execution for modern business growth.',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: mainSiteUrl,
        logo: logoUrl,
        sameAs: [
          'https://www.instagram.com/socialengagementgroup',
          'https://www.linkedin.com/company/social-engagement-group',
          'https://www.facebook.com/seg.socialengagementgroup/',
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: baseUrl,
      },
    ],
  },
  {
    path: '/marketing-for-law-firm',
    title: 'Marketing for Law Firms | SEG',
    description:
      'Dominate your local market with specialized digital marketing for law firms. We help attorneys build brand authority and generate consistent call volume.',
    heading: 'Marketing for Law Firms Built for Consistent Call Volume',
    body:
      'We help law firms generate inbound demand, build authority, and turn high-intent searches into qualified consultations.',
    serviceName: 'Marketing for Law Firms',
    serviceType: 'Legal Marketing',
  },
  {
    path: '/marketing-for-doctors',
    title: 'Marketing for Doctors | SEG',
    description:
      'We help healthcare providers attract ideal patients, build trust with stronger online reputation, and turn high-intent searches into scheduled appointments.',
    heading: 'Marketing for Medical Practices That Fills Your Calendar',
    body:
      'We help healthcare providers attract the right patients, strengthen reputation, and convert searches into scheduled appointments.',
    serviceName: 'Marketing for Doctors',
    serviceType: 'Healthcare Marketing',
  },
  {
    path: '/marketing-for-restaurants',
    title: 'Restaurant Marketing | Reservation Growth | SEG',
    description:
      'Fill your tables with restaurant marketing built for local search, paid ads, social proof, and reservation growth that turns hungry guests into regulars.',
    heading: 'Marketing for Restaurants That Fills Your Tables Everyday',
    body:
      'We help restaurants reach hungry local searchers, grow reservations, and turn first-time guests into regulars.',
    serviceName: 'Marketing for Restaurants',
    serviceType: 'Restaurant Marketing',
  },
  {
    // Title, description and schema are kept identical to the <SEO> props in
    // src/pages/WebsiteGrowthEnginePage.tsx. That page's client-side schema is
    // an @graph that also carries FAQPage, built from faqData.ts — a TS module
    // this plain-Node script can't import. Prerendering the ProfessionalService
    // half keeps the crawler-visible block accurate, and hydration swaps in the
    // fuller graph at the same id, so nothing is ever emitted twice.
    path: '/marketing-for-website',
    title: 'The SEG Website Growth Engine | Websites Built to Convert',
    description:
      'SEG builds mobile-first websites that turn visitors into calls and bookings. Free 48-hour website audit, no contracts. Built for law firms, medical practices, and local service businesses.',
    heading: 'Every Website Should Turn Visitors Into Customers',
    body:
      'We build websites that work as hard as you do. No contracts. Just a site that actually converts.',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': '#seg',
        name: siteName,
        description:
          'A full-service 360-degree marketing agency building websites and growth engines for law firms, medical practices, and local service businesses.',
        url: mainSiteUrl,
        telephone: '+1-512-214-0504',
        email: 'communications@socialengagementgroup.com',
        areaServed: 'US',
        priceRange: '$$',
      },
    ],
  },
];

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);

const canonicalFor = (pagePath) => `${baseUrl}${pagePath === '/' ? '/' : pagePath}`;

const serviceSchema = (page) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.serviceName,
  serviceType: page.serviceType,
  description: page.description,
  provider: {
    '@type': 'Organization',
    name: siteName,
    url: mainSiteUrl,
  },
  areaServed: 'US',
});

const renderMeta = (page) => {
  const canonical = canonicalFor(page.path);
  const schemas = page.schema || [serviceSchema(page)];

  return [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    '<meta name="robots" content="index, follow" />',
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${canonical}" />`,
    `${page.path === '/' ? '' : `<meta property="og:image" content="${baseUrl}/favicon.png" />`}`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${baseUrl}/favicon.png" />`,
    // The id has to match the one SEO.tsx assigns on hydration. That component
    // looks each id up before creating a node, so a matching id means it
    // rewrites this block in place; without one it appends a second copy and
    // every page ships its structured data twice.
    ...schemas.map(
      (schema, index) =>
        `<script type="application/ld+json" id="json-ld-schema-${index}">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`,
    ),
  ]
    .filter(Boolean)
    .join('\n    ');
};

const renderFallback = (page) => `
    <main data-prerendered="true">
      <h1>${escapeHtml(page.heading)}</h1>
      <p>${escapeHtml(page.body)}</p>
    </main>
  `;

const withoutDefaultSeo = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/i, '');

// The shell vercel.json rewrites unmatched paths to.
//
// It has to be a separate file from dist/index.html. Vercel serves a matching
// static file before it applies a rewrite, so dist/index.html is only ever the
// response for "/" — which means it should carry the homepage's metadata, and
// the rewrite target should carry none. Pointing the rewrite at index.html is
// what previously served the homepage's title, description, H1 and canonical
// on every route this script does not prerender, telling crawlers those pages
// were duplicates of the homepage.
//
// Deliberately noindex: after the loop below, every URL in sitemap.xml has its
// own prerendered file, so the only paths that land here are the thank-you
// pages, /404 and genuine misses — all of which should stay out of the index.
// SEO.tsx resets robots to "index, follow" on hydration, so a real page that
// ever slipped through would still recover for renderers that execute JS.
//
// #root is left empty on purpose. src/index.tsx branches on hasChildNodes(),
// so an empty root takes the createRoot path rather than trying to hydrate
// markup that React never produced.
const fallbackHtml = withoutDefaultSeo(baseHtml).replace(
  '</head>',
  '    <meta name="robots" content="noindex, follow" />\n  </head>',
);

await writeFile(path.join(distDir, 'fallback.html'), fallbackHtml);

for (const page of pages) {
  const html = withoutDefaultSeo(baseHtml)
    .replace('</head>', `    ${renderMeta(page)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${renderFallback(page)}</div>`);

  const outputDir =
    page.path === '/'
      ? distDir
      : path.join(distDir, page.path.replace(/^\//, ''));

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), html);
}
