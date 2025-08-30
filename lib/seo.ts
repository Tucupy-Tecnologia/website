import type { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
  section?: string
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tucupy.com'
const defaultImage = '/tucupy-banner.webp'

export function createMetadata({
  title,
  description,
  keywords,
  image = defaultImage,
  url,
  type = 'website',
  publishedTime,
  author,
  section,
}: SEOConfig): Metadata {
  const fullTitle = title.includes('Tucupy') ? title : `${title} | Tucupy`
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: 'Tucupy',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  }

  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      authors: author ? [author] : undefined,
      section,
    }
  }

  return metadata
}

export function createAlternateLanguages(basePath: string) {
  const languages = ['en', 'pt', 'es', 'fr']
  return languages.reduce((acc, lang) => {
    acc[lang] = `${baseUrl}/${lang}${basePath}`
    return acc
  }, {} as Record<string, string>)
}

export function createStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tucupy',
    url: baseUrl,
    logo: `${baseUrl}/tucupy.svg`,
    description: 'Custom digital solutions for ambitious companies',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-91-99101-1351',
      contactType: 'Customer Service',
      email: 'contato@tucupy.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tv. Dom Romualdo de Seixas, 1560, Salas 807-808',
      addressLocality: 'Belém',
      addressRegion: 'PA',
      postalCode: '66055-200',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://www.linkedin.com/company/tucupy/',
      'https://www.instagram.com/tucupytecnologia/',
      'https://github.com/Tucupy-Tecnologia',
    ],
  }
}