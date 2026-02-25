import React, { useEffect } from 'react';
import Button from './ui/button';
import { cn } from '../utils/cn';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const { language } = i18n;

  useEffect(() => {
    document.body.classList.toggle('rtl', language === 'ar');
  }, [language]);

  const baseClassName = 'text-xs';
  const activeClassName = 'text-primary after:bg-primary';

  return (
    <div className="flex gap-2">
      <Button
        type="button"
        size="sm"
        className={cn(baseClassName, language === 'en' && activeClassName)}
        onClick={() => changeLanguage('en')}
      >
        EN
      </Button>
      <Button
        type="button"
        className={cn(baseClassName, language === 'cn' && activeClassName)}
        onClick={() => changeLanguage('cn')}
      >
        中文
      </Button>
      <Button
        type="button"
        className={cn(baseClassName, language === 'ru' && activeClassName)}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </Button>
      <Button
        type="button"
        className={cn(baseClassName, language === 'ar' && activeClassName)}
        onClick={() => changeLanguage('ar')}
      >
        AR
      </Button>
    </div>
  );
}
