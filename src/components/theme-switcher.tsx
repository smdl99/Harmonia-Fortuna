import React, { useEffect } from 'react';
import Button from './ui/button';
import { useThemeStore } from '../store/theme.store';
import { useTranslation } from 'react-i18next';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button type="button" onClick={toggleTheme}>
      {theme === 'dark' ? t('theme.light') : t('theme.dark')}
    </Button>
  );
}
