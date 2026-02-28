'use client';

import Button from './ui/button';
import { cn } from '../utils/cn';
import { setLanguageAction } from '@/actions/set-language.action';
import { useRouter } from 'next/navigation';

interface LanguageSwitcherProps {
  language: string;
}

const baseClassName =
  'text-xs font-regular opacity-50 transition-opacity font-regular';
const activeClassName = 'opacity-100 text-primary after:bg-primary';

export default function LanguageSwitcher({ language }: LanguageSwitcherProps) {
  const router = useRouter();

  const changeLanguage = async (value: string) => {
    setLanguageAction(value);
    router.refresh();
  };

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
        size="sm"
        className={cn(baseClassName, language === 'cn' && activeClassName)}
        onClick={() => changeLanguage('cn')}
      >
        中文
      </Button>
      <Button
        type="button"
        size="sm"
        className={cn(baseClassName, language === 'ru' && activeClassName)}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </Button>
      <Button
        type="button"
        size="sm"
        className={cn(baseClassName, language === 'ar' && activeClassName)}
        onClick={() => changeLanguage('ar')}
      >
        AR
      </Button>
    </div>
  );
}
