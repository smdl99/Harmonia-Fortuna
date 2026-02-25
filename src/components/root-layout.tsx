import React from 'react';
import Footer from './footer';
import Cursor from './cursor';
import LanguageSwitcher from './language-switcher';
import Button from './ui/button';
import { Link } from 'gatsby';
import ThemeSwitcher from './theme-switcher';
import { useTranslation } from 'react-i18next';

interface RootLayoutProps {
  children: React.ReactNode;
  isHomeEnabled?: boolean;
  isMenuEnabled?: boolean;
}

export default function RootLayout({
  children,
  isHomeEnabled,
  isMenuEnabled,
}: RootLayoutProps) {
  const { t } = useTranslation();

  return (
    <>
      <Cursor />

      <div className="min-h-screen flex flex-col px-4 md:px-8 py-6">
        <div className="grow flex flex-col">
          <header className="flex justify-end">
            <LanguageSwitcher />
          </header>

          <div className="grow flex flex-col mb-4 md:mb-6">
            <div className="grow flex flex-col items-center justify-center w-full max-w-160 mx-auto mb-4">
              {children}
            </div>

            <div className="flex items-center justify-center gap-2">
              {isHomeEnabled && (
                <Button asChild>
                  <Link to="/">{t('global.home')}</Link>
                </Button>
              )}
              {isMenuEnabled && (
                <Button asChild>
                  <Link to="/menu">{t('index.enter')}</Link>
                </Button>
              )}
              {(isHomeEnabled || isMenuEnabled) && (
                <span className="text-secondary">|</span>
              )}
              <ThemeSwitcher />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
