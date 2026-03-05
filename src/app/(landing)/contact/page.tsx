import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import RootLayout from '@/components/root-layout';
import PageHeader from '@/components/page-header';
import ContactForm from './_components/contact-form';

export const metadata: Metadata = {
  title: 'Connect | Harmonia Fortuna',
  description:
    'Contact Harmonia Fortuna to discuss long term partnership. All conversations are handled with discretion and care.',
};

export default async function ContactPage() {
  const t = await getTranslations();

  return (
    <RootLayout>
      <PageHeader
        backHref="/menu"
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <ContactForm />
    </RootLayout>
  );
}
