import { Inter, Zen_Old_Mincho } from 'next/font/google';
import { cookies } from 'next/headers';
import { Toaster } from 'sonner';
import { NextIntlClientProvider } from 'next-intl';
import { cn } from '@/utils/cn';
import { LanguageStoreProvider } from '@/store/language.store';
import AppProvider from '@/components/app-provider';
import './globals.css';

const sans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin', 'greek', 'cyrillic'],
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
  ],
});

const zenOldMincho = Zen_Old_Mincho({
  variable: '--font-zen-old-mincho',
  weight: ['400', '500', '700'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await cookies();

  const locale = store.get('locale')?.value;
  const theme = store.get('theme')?.value;

  return (
    <html lang="en">
      <body
        className={cn(
          theme === 'dark' && 'dark',
          locale === 'ar' && 'rtl',
          sans.variable,
          zenOldMincho.variable,
        )}
      >
        <NextIntlClientProvider>
          <LanguageStoreProvider language={locale || 'en'}>
            <AppProvider>
              <Toaster position="top-right" />
              {children}
            </AppProvider>
          </LanguageStoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
