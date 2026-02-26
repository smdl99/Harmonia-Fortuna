import Button from './ui/button';
import ThemeSwitcher from './theme-switcher';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import AnimatedTrans from './animated-trans';

interface RootLayoutProps {
  children: React.ReactNode;
  isHomeEnabled?: boolean;
  isMenuEnabled?: boolean;
}

export default async function RootLayout({
  children,
  isHomeEnabled,
  isMenuEnabled,
}: RootLayoutProps) {
  const t = await getTranslations();
  const store = await cookies();

  const theme = store.get('theme')?.value as 'dark' | 'light' | undefined;

  return (
    <div className="grow flex flex-col mb-4 md:mb-6">
      <div className="grow flex flex-col items-center justify-center w-full max-w-160 mx-auto mb-4">
        {children}
      </div>

      <div className="flex items-center justify-center gap-2">
        {isHomeEnabled && (
          <Button asChild size="sm">
            <AnimatedTrans asChild>
              <Link href="/">{t('global.home')}</Link>
            </AnimatedTrans>
          </Button>
        )}
        {isMenuEnabled && (
          <Button asChild size="sm">
            <AnimatedTrans asChild>
              <Link href="/menu">{t('index.enter')}</Link>
            </AnimatedTrans>
          </Button>
        )}
        {(isHomeEnabled || isMenuEnabled) && (
          <span className="text-secondary text-xs">|</span>
        )}
        <ThemeSwitcher theme={theme || 'light'} />
      </div>
    </div>
  );
}
