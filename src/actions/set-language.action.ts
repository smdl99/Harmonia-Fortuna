'use server';

import { cookies } from 'next/headers';

export async function setLanguageAction(value: string) {
  const store = await cookies();

  store.set('locale', value);
}
