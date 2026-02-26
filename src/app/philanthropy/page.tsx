import RootLayout from '@/components/root-layout';
import PageHeader from '@/components/page-header';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import RichText from '@/components/rich-text';
import AnimatedTrans from '@/components/animated-trans';

export const metadata: Metadata = {
  title: 'Philanthropy | Harmonia Fortuna',
  description:
    'Harmonia Fortuna supports initiatives that strengthen resilience, long term stability, and responsible development across communities and generations.',
};

export default async function Philanthropy() {
  const t = await getTranslations();

  return (
    <RootLayout>
      <PageHeader backHref="/menu" title={t('philanthropy.title')} />

      <AnimatedTrans asChild>
        <RichText>{(tags) => t.rich('philanthropy.text', tags)}</RichText>
      </AnimatedTrans>
    </RootLayout>
  );
}
