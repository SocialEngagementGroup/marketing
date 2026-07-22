export const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://digital.socialengagementgroup.com';

export const siteName = 'Social Engagement Group';
export const mainSiteUrl = 'https://www.socialengagementgroup.com';
export const defaultOgImage = '/favicon.png';

export const routes = {
  home: '/',
  lawyer: '/marketing-for-law-firm',
  doctors: '/marketing-for-doctors',
  restaurants: '/marketing-for-restaurants',
  websiteSolutions: '/website-solutions',
  thankYou: '/thank-you-cal',
  restaurantThankYou: '/thank-you-marketing-for-restaurants',
};

export const pageSeo = {
  home: {
    title: 'AI-Powered Business Growth | SEG',
    description:
      'Transform your digital presence with SEG through creative strategy, AI-powered execution, websites, ads, SEO, and content built to convert attention into leads.',
    path: routes.home,
  },
  lawyer: {
    title: 'Marketing for Law Firms | SEG',
    description:
      'Dominate your local market with specialized digital marketing for law firms. We help attorneys build brand authority and generate consistent call volume.',
    ogTitle: 'Marketing for Law Firms | SEG',
    ogDescription:
      'Dominate your local market with specialized digital marketing for law firms. We help attorneys build brand authority and generate consistent call volume.',
    path: routes.lawyer,
  },
  doctors: {
    title: 'Marketing for Doctors | SEG',
    description:
      'We help healthcare providers attract ideal patients, build trust with stronger online reputation, and turn high-intent searches into scheduled appointments.',
    path: routes.doctors,
  },
  restaurants: {
    title: 'Restaurant Marketing | Reservation Growth | SEG',
    description:
      'Fill your tables with restaurant marketing built for local search, paid ads, social proof, and reservation growth that turns hungry guests into regulars.',
    path: routes.restaurants,
  },
  websiteSolutions: {
    title: 'Web Solutions for Growing Businesses | SEG',
    description:
      'Get a high-performance, conversion-focused website built with modern strategy and design. Professional web solutions for growth-oriented businesses.',
    path: routes.websiteSolutions,
  },
  thankYou: {
    title: 'Session Confirmed | Social Engagement Group',
    description:
      "You're in the inner circle. Your session is confirmed. Check your email for details.",
    path: routes.thankYou,
    noindex: true,
  },
  notFound: {
    title: 'Page Not Found | Social Engagement Group',
    description: 'Oops! It looks like this page has drifted off into space.',
    path: '/404',
    noindex: true,
  },
} as const;

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: mainSiteUrl,
  logo: `${mainSiteUrl}/assets/images/site-logo/logo.svg`,
  sameAs: [
    'https://www.instagram.com/socialengagementgroup',
    'https://www.linkedin.com/company/social-engagement-group',
    'https://www.facebook.com/seg.socialengagementgroup/',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
};

export const serviceSchema = ({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  url: absoluteUrl(path),
  description,
  serviceType,
  areaServed: 'US',
  provider: {
    '@type': 'Organization',
    name: siteName,
    url: mainSiteUrl,
  },
  offers: {
    '@type': 'Offer',
    name,
    category: serviceType,
    availability: 'https://schema.org/InStock',
  },
});
