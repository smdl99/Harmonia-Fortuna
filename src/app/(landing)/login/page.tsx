import RootLayout from '@/components/root-layout';
import PageHeader from '@/components/page-header';
import Input from '@/components/landing/input';
import Button from '@/components/landing/button';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Client Access | Harmonia Fortuna',
  description:
    'Secure access for partners of Harmonia Fortuna. Confidential reporting and protected communication within a private environment.',
};

export default async function LoginPage() {
  const t = await getTranslations();

  const handleSubmit = async () => {
    'use server';

    redirect('/admin');
  };

  return (
    <RootLayout>
      <PageHeader title={t('login.title')} backHref="/menu" />

      <form className="flex flex-col gap-3 w-full" action={handleSubmit}>
        <Input
          type="text"
          placeholder={t('login.form.username.placeholder')}
          required
        />
        <Input
          type="password"
          placeholder={t('login.form.password.placeholder')}
          required
        />

        <Button type="submit" variant="outline">
          {t('login.form.submit')}
        </Button>
      </form>
    </RootLayout>
  );
}
