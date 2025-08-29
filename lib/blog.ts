import 'server-only'

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogMetadata, BlogPost } from './blog-types'

export type { BlogPost, BlogMetadata } from './blog-types'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogSlugs(locale: string = 'en'): string[] {
  const localeDir = path.join(contentDirectory, locale)

  if (!fs.existsSync(localeDir)) {
    return []
  }

  const files = fs.readdirSync(localeDir)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getBlogPost(slug: string, locale: string = 'en'): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, locale, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      image: data.image,
      category: data.category,
      tags: data.tags || [],
      featured: data.featured || false,
      readingTime: readingTime(content).text,
      content,
      locale,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getAllBlogPosts(locale: string = 'en'): BlogMetadata[] {
  const slugs = getAllBlogSlugs(locale)

  const posts = slugs
    .map((slug) => {
      const post = getBlogPost(slug, locale)
      if (!post) return null

      // Return metadata without content for listing
      const { content, ...metadata } = post
      return metadata
    })
    .filter((post): post is BlogMetadata => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getFeaturedBlogPost(locale: string = 'en'): BlogMetadata | null {
  const posts = getAllBlogPosts(locale)
  return posts.find((post) => post.featured) || posts[0] || null
}

export function getBlogPostsByCategory(
  category: string,
  locale: string = 'en'
): BlogMetadata[] {
  const posts = getAllBlogPosts(locale)
  return posts.filter((post) =>
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function searchBlogPosts(
  query: string,
  locale: string = 'en'
): BlogMetadata[] {
  const posts = getAllBlogPosts(locale)
  const lowercaseQuery = query.toLowerCase()

  return posts.filter((post) =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.description.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export function getTableOfContents(content: string): Array<{
  id: string
  text: string
  level: number
}> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings: Array<{ id: string; text: string; level: number }> = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    headings.push({ id, text, level })
  }

  return headings
}

export { categories } from './blog-types'
export type { Category } from './blog-types'
