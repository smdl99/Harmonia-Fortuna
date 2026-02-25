import React from 'react';
import RootLayout from '../components/root-layout';
import PageHeader from '../components/page-header';
import { Trans, useTranslation } from 'react-i18next';
import SEO from '../components/seo';

export default function Philanthropy() {
  const { t } = useTranslation();

  return (
    <RootLayout>
      <PageHeader backHref="/menu" title={t('philanthropy.title')} />

      <p className="text-sm">
        <Trans
          i18nKey="philanthropy.text"
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
    title="Philanthropy | Harmonia Fortuna"
    description="Harmonia Fortuna supports initiatives that strengthen resilience, long term stability, and responsible development across communities and generations."
  />
);
