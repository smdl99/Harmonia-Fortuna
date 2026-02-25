import React from 'react';
import SEO from '../components/seo';
import RootLayout from '../components/root-layout';
import Pong from '../components/pong';
import Button from '../components/ui/button';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

const btnClassName =
  'text-primary after:bg-primary text-base font-medium md:text-xl';

export default function MenuPage() {
  const { t } = useTranslation();

  return (
    <RootLayout isHomeEnabled>
      <Pong />

      <nav className="flex gap-2 justify-center mb-4">
        <Button asChild className={btnClassName}>
          <Link to="/about">{t('menu.about')}</Link>
        </Button>
        <div className="w-px bg-primary h-7" />
        <Button asChild className={btnClassName}>
          <Link to="/contact">{t('menu.contact')}</Link>
        </Button>
        <div className="w-px bg-primary h-7" />
        <Button asChild className={btnClassName}>
          <Link to="/philanthropy">{t('menu.philanthropy')}</Link>
        </Button>
        <div className="w-px bg-primary h-7" />
        <Button asChild className={btnClassName}>
          <Link to="/login">{t('menu.login')}</Link>
        </Button>
      </nav>

      <p className="text-sm text-secondary text-center">
        Chemin Jean-Baptiste Vandelle 3A
        <br />
        Lakeside Geneva Building,
        <br />
        Geneva, 1290, Switzerland
      </p>
    </RootLayout>
  );
}

export const Head = () => (
  <SEO
    title="Overview | Harmonia Fortuna"
    description="A private partnership grounded in discipline, clarity, and long term perspective. Harmonia Fortuna prioritizes continuity and principled relationships."
  />
);
