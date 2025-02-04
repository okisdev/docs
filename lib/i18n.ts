import type { I18nConfig } from 'fumadocs-core/i18n';

export const locales = [
  { locale: 'en', name: 'English' },
  { locale: 'zh-CN', name: '简体中文' },
  { locale: 'zh-HK', name: '繁體中文' },
];

export const i18n: I18nConfig = {
  defaultLanguage: 'en',
  languages: locales.map((locale) => locale.locale),
};
