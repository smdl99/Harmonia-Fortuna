import { Link } from 'gatsby';
import React from 'react';
import Button from './ui/button';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex items-center justify-center gap-2 text-xs text-secondary">
      <span className="text-[7px] md:text-xs">
        ©<span>{new Date().getFullYear()}</span> Harmonia Fortuna
      </span>{' '}
      |
      <Button asChild>
        <Link to="/privacy" className="text-[7px] md:text-xs">
          {t('footer.privacy')}
        </Link>
      </Button>
      |
      <Button asChild>
        <Link to="/terms" className="text-[7px] md:text-xs">
          {t('footer.terms')}
        </Link>
      </Button>
    </footer>
  );
}
