import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { cookies } from 'next/headers';
import { cn } from '@/utils/cn';
import Cursor from '@/components/cursor';
import LanguageSwitcher from '@/components/language-switcher';
import Footer from '@/components/footer';

const sans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
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
        )}
      >
        <NextIntlClientProvider>
          {/* <Cursor /> */}

          <div className="min-h-screen flex flex-col px-4 md:px-8 py-6 overflow-hidden">
            <div className="grow flex flex-col">
              <header className="flex justify-end">
                <LanguageSwitcher language={locale || 'en'} />
              </header>

              {children}

              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
