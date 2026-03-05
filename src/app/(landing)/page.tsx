import Pong from '@/components/pong';
import RootLayout from '@/components/root-layout';
import PageLoader from '@/components/page-loader';
import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import AnimatedTrans from '@/components/animated-trans';

export default async function HomePage() {
  const t = await getTranslations();

  const store = await cookies();

  const theme = store.get('theme')?.value as 'dark' | 'light' | undefined;

  return (
    <RootLayout isMenuEnabled>
      <div className="grow flex flex-col justify-center items-center text-center">
        <Pong theme={theme || 'light'} />

        <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-3">
          Harmonia Fortuna
        </h1>
        <AnimatedTrans asChild>
          <p className="text-muted">{t('index.subtitle')}</p>
        </AnimatedTrans>
      </div>
      <PageLoader />
    </RootLayout>
  );
}
