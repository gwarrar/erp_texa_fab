import { Language, AdminTranslations } from '../types';
import { ar } from './ar';
import { en } from './en';
import { ru } from './ru';
import { uk } from './uk';
import { ro } from './ro';
import { pl } from './pl';
import { tr } from './tr';

export const translations: Record<Language, AdminTranslations> = {
  ar,
  en,
  ru,
  uk,
  ro,
  pl,
  tr,
};

export { ar, en, ru, uk, ro, pl, tr };
