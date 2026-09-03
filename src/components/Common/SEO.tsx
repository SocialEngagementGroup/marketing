import React, { useEffect } from 'react';
import { absoluteUrl, defaultOgImage, siteName } from '../../data/seo';

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalPath?: string;
  noindex?: boolean;
  schema?: object | object[];
}

/**
 * Dynamically updates page-level meta tags for this client-rendered app.
 */
const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  ogTitle, 
  ogDescription, 
  ogImage = defaultOgImage,
  ogType = 'website',
  canonicalPath,
  noindex = false,
  schema 
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper function to set meta tag
    const setMetaTag = (property: string, content: string, attrName: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attrName}="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attrName, property);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (element) {
        element.setAttribute('href', href);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', href);
        document.head.appendChild(element);
      }
    };

    const canonicalUrl = absoluteUrl(canonicalPath || window.location.pathname);
    const imageUrl = absoluteUrl(ogImage);

    // Update Meta Description
    setMetaTag('description', description);
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Update OpenGraph Tags
    setMetaTag('og:site_name', siteName, 'property');
    setMetaTag('og:title', ogTitle || title, 'property');
    setMetaTag('og:description', ogDescription || description, 'property');
    setMetaTag('og:type', ogType, 'property');
    setMetaTag('og:url', canonicalUrl, 'property');
    if (ogImage) {
      setMetaTag('og:image', imageUrl, 'property');
    }

    // Update Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    setMetaTag('twitter:image', imageUrl);

    // Update Canonical URL
    if (noindex) {
      const canonicalElement = document.querySelector('link[rel="canonical"]');
      canonicalElement?.remove();
    } else {
      setLinkTag('canonical', canonicalUrl);
    }

    // Update Schema.org JSON-LD
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((schemaItem, index) => {
        const id = `json-ld-schema-${index}`;
        let scriptTag = document.getElementById(id) as HTMLScriptElement | null;
        if (!scriptTag) {
          scriptTag = document.createElement('script');
          scriptTag.id = id;
          scriptTag.type = 'application/ld+json';
          document.head.appendChild(scriptTag);
        }
        scriptTag.text = JSON.stringify(schemaItem);
      });

      document.querySelectorAll('script[id^="json-ld-schema-"]').forEach((node, index) => {
        if (index >= schemas.length) node.remove();
      });

      const legacyScriptTag = document.getElementById('json-ld-schema');
      legacyScriptTag?.remove();
    } else {
      document.querySelectorAll('script[id^="json-ld-schema"]').forEach((node) => {
        node.remove();
      });
    }
  }, [
    title,
    description,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    canonicalPath,
    noindex,
    schema
  ]);

  return null;
};

export default SEO;
