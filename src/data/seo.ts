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
    title: 'Where Human Creativity Meets AI-Powered Business Growth | SEG',
    description:
      'Transform your digital presence with Social Engagement Group. From 3D animation to high-intent Google Ads, we build conversion engines for modern industries. Book a call.',
    path: routes.home,
  },
  lawyer: {
    title: 'Legal Marketing Experts | Grow Your Law Practice with SEG',
    description:
      'Dominate your local market with specialized digital marketing for law firms. We help attorneys build brand authority and generate consistent call volume.',
    ogTitle: 'Legal Marketing Experts | Social Engagement Group',
    ogDescription:
      'Specialized digital marketing strategies for law firms. Build authority and automate your growth.',
    path: routes.lawyer,
  },
  doctors: {
    title: 'Marketing for Medical Practices That Fills Your Appointment Calendar',
    description:
      'We help healthcare providers attract the right patients, build trust with a strong online reputation, and run targeted campaigns that turn searches into scheduled appointments.',
    path: routes.doctors,
  },
  restaurants: {
    title: 'Marketing for Restaurants | Reservation Growth & Digital Strategy',
    description:
      'Fill your tables every day. Our guest-generating engine turns hungry searchers into loyal regulars for your restaurant.',
    path: routes.restaurants,
  },
  websiteSolutions: {
    title: 'Web Solutions | Professional Website Building | Social Engagement Group',
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
