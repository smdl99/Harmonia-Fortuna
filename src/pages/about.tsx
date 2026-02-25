import React from 'react';
import SEO from '../components/seo';
import RootLayout from '../components/root-layout';
import PageHeader from '../components/page-header';
import { Trans, useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <RootLayout>
      <PageHeader backHref="/menu" title={t('about.title')} />

      <p className="text-sm">
        <Trans
          i18nKey="about.text"
          components={{
            br: <br />,
          }}
        />
      </p>
    </RootLayout>
  );
}

export const Head = () => (
  <SEO
    title="Our Approach | Harmonia Fortuna"
    description="Our approach centers on thoughtful analysis, measured pacing, and consistent alignment across generations."
  />
);
