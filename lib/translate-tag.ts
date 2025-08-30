export function translateCategory(category: string, dict: Record<string, any>): string {
  const categoryTranslations = dict.blog.categories || {}
  return categoryTranslations[category] || category
}