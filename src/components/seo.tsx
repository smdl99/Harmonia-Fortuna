import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({
  title = 'Harmonia Fortuna | Alternative Asset Management',
  description = 'Harmonia Fortuna works alongside a select number of partners, focusing on differentiated opportunities, thoughtful execution, and long term alignment.',
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
