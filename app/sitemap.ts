import { getAllBlogSlugs } from '@/lib/blog'
import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tucupy.com'
const languages = ['en', 'pt', 'es', 'fr']

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = []

  // Add main pages for each language
  const mainPages = ['', '/about', '/blog', '/careers']
  
  for (const lang of languages) {
    for (const page of mainPages) {
      routes.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '/blog' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      })
    }
  }

  // Add blog posts for each language
  for (const lang of languages) {
    const blogSlugs = getAllBlogSlugs(lang)
    for (const slug of blogSlugs) {
      routes.push({
        url: `${baseUrl}/${lang}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  return routes
}