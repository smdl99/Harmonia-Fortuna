import RootLayout from '@/components/root-layout';
import PageHeader from '@/components/page-header';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import Textarea from '@/components/ui/textarea';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

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

      <form className="flex flex-col gap-3 w-full">
        <Input placeholder={t('contact.form.fullName.placeholder')} />
        <Input placeholder={t('contact.form.email.placeholder')} />
        <Input placeholder={t('contact.form.phone.placeholder')} />
        <Textarea placeholder={t('contact.form.message.placeholder')} />

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span className="text-sm">{t('contact.form.consent.label')}</span>
        </label>

        <Button type="submit" variant="outline">
          {t('contact.form.submit')}
        </Button>
      </form>
    </RootLayout>
  );
}
