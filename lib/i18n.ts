import type { I18nConfig } from 'fumadocs-core/i18n';
import type { Translations } from 'fumadocs-ui/i18n';

export const locales = [
  { locale: 'en', name: 'English' },
  { locale: 'zh-CN', name: '简体中文' },
  { locale: 'zh-HK', name: '繁體中文' },
];

export const i18n: I18nConfig = {
  defaultLanguage: 'zh-HK',
  languages: locales.map((locale) => locale.locale),
};

export const zhHK: Partial<Translations> = {
  search: '搜索',
  searchNoResult: '找不到任何結果',
  toc: '目錄',
  tocNoHeadings: '找不到任何章節',
  lastUpdate: '最後更新',
  chooseLanguage: '選擇語言',
  nextPage: '下一頁',
  previousPage: '上一頁',
  chooseTheme: '選擇主題',
  editOnGithub: '在 GitHub 上編輯',
};

export const zhCN: Partial<Translations> = {
  search: '搜索',
  searchNoResult: '找不到任何结果',
  toc: '目录',
  tocNoHeadings: '找不到任何章节',
  lastUpdate: '最后更新',
  chooseLanguage: '选择语言',
  nextPage: '下一页',
  previousPage: '上一页',
  chooseTheme: '选择主题',
  editOnGithub: '在 GitHub 上编辑',
};
