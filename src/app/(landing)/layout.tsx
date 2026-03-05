import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import LanguageSwitcher from '@/components/language-switcher';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harmonia Fortuna | Alternative Asset Management',
  description:
    'Harmonia Fortuna works alongside a select number of partners, focusing on differentiated opportunities, thoughtful execution, and long term alignment.',
};

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await cookies();

  const locale = store.get('locale')?.value;

  return (
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
  );
}
