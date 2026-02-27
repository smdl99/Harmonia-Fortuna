'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitInquiryAction(data: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}) {
  const res = await resend.emails.send({
    to: process.env.EMAIL_TO!,
    template: {
      id: 'new-inquiry',
      variables: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
    },
  });

  return res;
}
