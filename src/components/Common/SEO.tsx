import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

/**
 * SEO Component
 * Dynamically updates document title, meta description, OpenGraph tags, and Schema.org data.
 */
const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogType = 'website',
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

    // Update Meta Description
    setMetaTag('description', description);

    // Update OpenGraph Tags
    setMetaTag('og:title', ogTitle || title, 'property');
    setMetaTag('og:description', ogDescription || description, 'property');
    setMetaTag('og:type', ogType, 'property');
    setMetaTag('og:url', window.location.href, 'property');
    if (ogImage) {
      setMetaTag('og:image', ogImage, 'property');
    }

    // Update Schema.org JSON-LD
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'json-ld-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogType, schema]);

  return null;
};

export default SEO;
