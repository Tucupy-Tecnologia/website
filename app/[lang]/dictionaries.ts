import 'server-only'

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  pt: () => import('../../dictionaries/pt.json').then((module) => module.default),
  es: () => import('../../dictionaries/es.json').then((module) => module.default),
  fr: () => import('../../dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'pt' | 'es' | 'fr') =>
  dictionaries[locale]()