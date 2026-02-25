import React from 'react';
import RootLayout from '../components/root-layout';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/page-header';
import Input from '../components/ui/input';
import Button from '../components/ui/button';
import SEO from '../components/seo';

export default function LoginPage() {
  const { t } = useTranslation();

  return (
    <RootLayout>
      <PageHeader title={t('login.title')} backHref="/menu" />

      <form className="flex flex-col gap-3 w-full">
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

export const Head = () => (
  <SEO
    title="Client Access | Harmonia Fortuna"
    description="Secure access for partners of Harmonia Fortuna. Confidential reporting and protected communication within a private environment."
  />
);
