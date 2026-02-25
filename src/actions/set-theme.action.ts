'use server';

import { cookies } from 'next/headers';

export async function setThemeAction(value: 'dark' | 'light') {
  const store = await cookies();

  store.set('theme', value);
}
