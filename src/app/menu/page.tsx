import RootLayout from '@/components/root-layout';
import Pong from '@/components/pong';
import Button from '@/components/ui/button';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import TimeItem from '@/components/time-item';
import AnimatedTrans from '@/components/animated-trans';

export const metadata: Metadata = {
  title: 'Overview | Harmonia Fortuna',
  description:
    'A private partnership grounded in discipline, clarity, and long term perspective. Harmonia Fortuna prioritizes continuity and principled relationships.',
};

const btnClassName = 'text-primary after:bg-primary text-sm md:text-lg';

export default async function MenuPage() {
  const t = await getTranslations();
  const store = await cookies();

  const theme = store.get('theme')?.value as 'dark' | 'light' | undefined;

  return (
    <RootLayout isHomeEnabled>
      <Pong theme={theme || 'light'} />

      <nav className="flex gap-2 items-center justify-center mb-4">
        <Button asChild className={btnClassName}>
          <AnimatedTrans asChild>
            <Link href="/about">{t('menu.about')}</Link>
          </AnimatedTrans>
        </Button>
        <div className="w-px bg-primary h-4" />
        <Button asChild className={btnClassName}>
          <AnimatedTrans asChild>
            <Link href="/contact">{t('menu.contact')}</Link>
          </AnimatedTrans>
        </Button>
        <div className="w-px bg-primary h-4" />
        <Button asChild className={btnClassName}>
          <AnimatedTrans asChild>
            <Link href="/philanthropy">{t('menu.philanthropy')}</Link>
          </AnimatedTrans>
        </Button>
        <div className="w-px bg-primary h-4" />
        <Button asChild className={btnClassName}>
          <AnimatedTrans asChild>
            <Link href="/login">{t('menu.login')}</Link>
          </AnimatedTrans>
        </Button>
      </nav>

      <p className="text-xs text-secondary text-center mb-8">
        Chemin Jean-Baptiste Vandelle 3A
        <br />
        Lakeside Geneva Building,
        <br />
        Geneva, 1290, Switzerland
      </p>

      <div className="w-full flex items-center gap-8 justify-center">
        <TimeItem zone="America/New_York" label={t('menu.ny')} />
        <TimeItem zone="Europe/Berlin" label={t('menu.gn')} />
        <TimeItem zone="Asia/Hong_Kong" label={t('menu.hk')} />
      </div>
    </RootLayout>
  );
}
