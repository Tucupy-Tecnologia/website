export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: {
    name: string
    image: string
    role?: string
  }
  image: string
  category: string
  tags: string[]
  featured?: boolean
  readingTime: string
  content: string
  locale: string
}

export interface BlogMetadata {
  slug: string
  title: string
  description: string
  date: string
  author: {
    name: string
    image: string
    role?: string
  }
  image: string
  category: string
  tags: string[]
  featured?: boolean
  readingTime: string
  locale: string
}

export const categories = [
  'All',
  'Products',
  'Company', 
  'Databases',
  'Engineering',
] as const

export type Category = typeof categories[number]