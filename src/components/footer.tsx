import { getTranslations } from 'next-intl/server';
import Button from './ui/button';
import Link from 'next/link';

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="flex items-center justify-center gap-2 text-xs text-secondary">
      <span className="text-[7px] md:text-xs">
        ©<span>{new Date().getFullYear()}</span> Harmonia Fortuna
      </span>
      |
      <Button asChild>
        <Link href="/privacy" className="text-[7px] md:text-xs">
          {t('footer.privacy')}
        </Link>
      </Button>
      |
      <Button asChild>
        <Link href="/terms" className="text-[7px] md:text-xs">
          {t('footer.terms')}
        </Link>
      </Button>
    </footer>
  );
}
