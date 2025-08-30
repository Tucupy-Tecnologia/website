export function translateCategory(category: string, dict: any): string {
  const categoryTranslations = dict.blog.categories || {}
  return categoryTranslations[category] || category
}