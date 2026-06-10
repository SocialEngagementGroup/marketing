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
    title: 'Where Human Creativity Meets AI-Powered Business Growth | SEG',
    description:
      'Transform your digital presence with Social Engagement Group. From 3D animation to high-intent Google Ads, we build conversion engines for modern industries. Book a call.',
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
    title: 'Legal Marketing Experts | Grow Your Law Practice with SEG',
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
    title: 'Marketing for Medical Practices That Fills Your Appointment Calendar',
    description:
      'We help healthcare providers attract the right patients, build trust with a strong online reputation, and run targeted campaigns that turn searches into scheduled appointments.',
    heading: 'Marketing for Medical Practices That Fills Your Calendar',
    body:
      'We help healthcare providers attract the right patients, strengthen reputation, and convert searches into scheduled appointments.',
    serviceName: 'Marketing for Doctors',
    serviceType: 'Healthcare Marketing',
  },
  {
    path: '/marketing-for-restaurants',
    title: 'Marketing for Restaurants | Reservation Growth & Digital Strategy',
    description:
      'Fill your tables every day. Our guest-generating engine turns hungry searchers into loyal regulars for your restaurant.',
    heading: 'Marketing for Restaurants That Fills Your Tables Everyday',
    body:
      'We help restaurants reach hungry local searchers, grow reservations, and turn first-time guests into regulars.',
    serviceName: 'Marketing for Restaurants',
    serviceType: 'Restaurant Marketing',
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
    ...schemas.map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`,
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
