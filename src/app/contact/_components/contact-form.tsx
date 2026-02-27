'use client';

import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import Textarea from '@/components/ui/textarea';
import { useTranslations } from 'next-intl';
import { useMutation } from '@tanstack/react-query';
import { submitInquiryAction } from '../_actions/submit-inquiry.action';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const validationSchema = z.object({
  fullName: z.string().min(2, 'contact.form.fullName.error'),
  email: z.email('contact.form.email.error'),
  phone: z.string(),
  message: z.string().min(10, 'contact.form.message.error'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'contact.form.consent.error',
  }),
});

type ContactFormData = z.infer<typeof validationSchema>;

export default function ContactForm() {
  const t = useTranslations();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await submitInquiryAction(data);
      if (res.error) {
        throw new Error(res.error.message);
      }

      return res.data;
    },
    onSuccess: () => {
      form.reset();
      toast.success(t('contact.form.success'));
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (data: ContactFormData) => {
    mutate(data);
  };

  return (
    <form
      className="flex flex-col gap-3 w-full"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div className="w-full">
        <Input
          placeholder={t('contact.form.fullName.placeholder')}
          className="w-full"
          {...form.register('fullName')}
        />
        {form.formState.errors.fullName && (
          <p className="text-red-500 text-sm mt-1">
            {t(form.formState.errors.fullName.message!)}
          </p>
        )}
      </div>
      <div className="w-full">
        <Input
          type="email"
          placeholder={t('contact.form.email.placeholder')}
          className="w-full"
          {...form.register('email')}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {t(form.formState.errors.email.message!)}
          </p>
        )}
      </div>
      <div className="w-full">
        <Input
          type="tel"
          placeholder={t('contact.form.phone.placeholder')}
          className="w-full"
          {...form.register('phone')}
        />
        {form.formState.errors.phone && (
          <p className="text-red-500 text-sm mt-1">
            {t(form.formState.errors.phone.message!)}
          </p>
        )}
      </div>
      <div className="w-full">
        <Textarea
          placeholder={t('contact.form.message.placeholder')}
          className="w-full"
          {...form.register('message')}
        />
        {form.formState.errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {t(form.formState.errors.message.message!)}
          </p>
        )}
      </div>

      <div className="w-full">
        <label className="flex items-center gap-2">
          <input type="checkbox" {...form.register('consent')} />
          <span className="text-sm">{t('contact.form.consent.label')}</span>
        </label>
        {form.formState.errors.consent && (
          <p className="text-red-500 text-sm mt-1">
            {t(form.formState.errors.consent.message!)}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="outline"
        className="gap-2"
        disabled={isPending}
      >
        {t('contact.form.submit')}
        {isPending && <Loader2 className="animate-spin size-4" />}
      </Button>
    </form>
  );
}
