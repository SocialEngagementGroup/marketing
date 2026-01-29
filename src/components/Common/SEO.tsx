import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

/**
 * SEO Component
 * Dynamically updates document title and meta description tag.
 */
const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      // Create meta description if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [title, description]);

  return null; // This component doesn't render anything to the DOM
};

export default SEO;
