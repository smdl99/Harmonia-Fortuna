'use client';

import Button from './ui/button';
import { useTranslations } from 'next-intl';
import { setThemeAction } from '@/actions/set-theme.action';
import { useRouter } from 'next/navigation';

interface ThemeSwitcherProps {
  theme: 'dark' | 'light';
}

export default function ThemeSwitcher({ theme }: ThemeSwitcherProps) {
  const t = useTranslations();
  const router = useRouter();

  const toggleTheme = async () => {
    await setThemeAction(theme === 'dark' ? 'light' : 'dark');
    router.refresh();
  };

  return (
    <Button type="button" onClick={toggleTheme} size="sm">
      {theme === 'dark' ? t('theme.light') : t('theme.dark')}
    </Button>
  );
}
