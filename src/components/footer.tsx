import { getTranslations } from 'next-intl/server';
import Button from './ui/button';
import Link from 'next/link';
import AnimatedTrans from './animated-trans';

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="flex items-center justify-center gap-2 text-[7px] md:text-[10px] text-secondary">
      <span className="">
        ©<span>{new Date().getFullYear()}</span> Harmonia Fortuna
      </span>
      |
      <Button asChild>
        <AnimatedTrans asChild>
          <Link href="/privacy">{t('footer.privacy')}</Link>
        </AnimatedTrans>
      </Button>
      |
      <Button asChild>
        <AnimatedTrans asChild>
          <Link href="/terms">{t('footer.terms')}</Link>
        </AnimatedTrans>
      </Button>
    </footer>
  );
}
