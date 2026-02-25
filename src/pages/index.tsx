import React from 'react';
import { Link } from 'gatsby';
import Pong from '../components/pong';
import RootLayout from '../components/root-layout';
import Button from '../components/ui/button';
import ThemeSwitcher from '../components/theme-switcher';
import PageLoader from '../components/page-loader';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <RootLayout isMenuEnabled>
      <PageLoader />
      <div className="grow flex flex-col justify-center items-center text-center">
        <Pong />

        <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-3">
          Harmonia Fortuna
        </h1>
        <p className="text-muted">{t('index.subtitle')}</p>
      </div>
    </RootLayout>
  );
}

export const Head = () => <SEO />;
