import RootLayout from '@/components/root-layout';
import PageHeader from '@/components/page-header';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import RichText from '@/components/rich-text';

export const metadata: Metadata = {
  title: 'Our Approach | Harmonia Fortuna',
  description:
    'Our approach centers on thoughtful analysis, measured pacing, and consistent alignment across generations.',
};

export default async function AboutPage() {
  const t = await getTranslations();

  return (
    <RootLayout>
      <PageHeader backHref="/menu" title={t('about.title')} />

      <RichText>{(tags) => t.rich('about.text', tags)}</RichText>
    </RootLayout>
  );
}
