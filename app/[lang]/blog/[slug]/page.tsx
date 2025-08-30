import { Navbar } from "@/components/navbar";
import { getBlogPost, getAllBlogSlugs, getTableOfContents } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Twitter, Linkedin, Copy, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Footer } from "@/components/footer";
import { TableOfContents } from "@/components/blog/TableOfContents";
import mdxComponents from "@/components/mdx-components";
import { getDictionary } from "../../dictionaries";

interface BlogPostPageProps {
  params: Promise<{ slug: string; lang: 'en' | 'pt' | 'es' | 'fr' }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, lang } = await params
  const dict = await getDictionary(lang)
  const post = getBlogPost(slug, lang)

  if (!post) {
    notFound()
  }

  const toc = getTableOfContents(post.content)
  const formattedDate = format(new Date(post.date), 'dd MMM yyyy')

  return (
    <div className="bg-background min-h-screen">
      <Navbar lang={lang} dict={dict} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="mb-8">
          <Link
            href={`/${lang}/blog`}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-foreground transition-colors mb-4"
          >
            <ChevronLeft className="size-4" />
            Back
          </Link>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            <article className="max-w-none">
              {/* Article header */}
              <header className="mb-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="bg-neutral-500/10 text-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category.toLowerCase()}
                  </span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-neutral-500/10 text-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
                  <span>{formattedDate}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <Avatar className="size-10">
                    <AvatarImage src={post.author.image} />
                    <AvatarFallback>{post.author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    {post.author.role && (
                      <div className="text-sm text-neutral-400">{post.author.role}</div>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full rounded-lg border border-neutral-800"
                  />
                </div>
              </header>

              {/* Article content */}
              <div className="prose">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Table of Contents */}
              <TableOfContents headings={toc} />

              {/* Share section */}
              <div>
                <h3 className="text-sm font-semibold mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors">
                    <Twitter className="size-4" />
                  </button>
                  <button className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors">
                    <Linkedin className="size-4" />
                  </button>
                  <button className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors">
                    <Copy className="size-4" />
                  </button>
                  <button className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors">
                    <ExternalLink className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} dict={dict} />
    </div>
  )
}

export async function generateStaticParams() {
  const locales = ['en', 'pt', 'es', 'fr']
  const allParams: { slug: string; lang: string }[] = []
  
  for (const lang of locales) {
    const slugs = getAllBlogSlugs(lang)
    allParams.push(...slugs.map((slug) => ({ slug, lang })))
  }
  
  return allParams
}

