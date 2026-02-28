import type { Metadata } from 'next';
import { Inter, Zen_Old_Mincho } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { cookies } from 'next/headers';
import { cn } from '@/utils/cn';
import LanguageSwitcher from '@/components/language-switcher';
import Footer from '@/components/footer';
import { LanguageStoreProvider } from '@/store/language.store';
import AppProvider from '@/components/app-provider';
import { Toaster } from 'sonner';

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

export const metadata: Metadata = {
  title: 'Harmonia Fortuna | Alternative Asset Management',
  description:
    'Harmonia Fortuna works alongside a select number of partners, focusing on differentiated opportunities, thoughtful execution, and long term alignment.',
};

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
              <div
                className="min-h-dvh flex flex-col px-12 py-6 overflow-hidden"
                id="main"
              >
                <div className="grow flex flex-col">
                  <header className="flex justify-end">
                    <LanguageSwitcher language={locale || 'en'} />
                  </header>

                  {children}

                  <Footer />
                </div>
              </div>
            </AppProvider>
          </LanguageStoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
