export function storeLanguage(language: string) {
  localStorage.setItem('language', language);
}

export function getLanguage() {
  return localStorage.getItem('language') || 'en';
}
