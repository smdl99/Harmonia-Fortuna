import Link from 'next/link';
import Button from './ui/button';
import { getTranslations } from 'next-intl/server';

interface PageHeaderProps {
  backHref: string;
  title: string;
  subtitle?: string;
}

export default async function PageHeader({
  backHref,
  title,
  subtitle,
}: PageHeaderProps) {
  const t = await getTranslations();

  return (
    <div className="w-full">
      <Button asChild className="text-primary after:bg-primary text-sm mb-6">
        <Link href={backHref}>← {t('global.back')}</Link>
      </Button>

      <div className="mb-4">
        <h1 className="text-2xl font-light tracking-widest mb-2">{title}</h1>
        {subtitle && <p className="text-muted">{subtitle}</p>}
      </div>
    </div>
  );
}
