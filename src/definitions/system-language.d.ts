import { LanguageCode } from './foundry-types';

/**
 * The game system may designate an array of language specifications that it supports by default.
 * Each element in the languages array is an object which defines the language tag, label, and path
 * to its localization file.
 * Source: https://foundryvtt.com/article/system-development/
 */
export interface SystemLanguage {
  // The formal and readable name for the language, for example "English".
  name: string;

  // The official 2-character language code in lower-case letters, for example "en".
  lang: LanguageCode;

  // Path to a JSON file relative to the system directory where language translation strings are
  // provided.
  path: string;
}
