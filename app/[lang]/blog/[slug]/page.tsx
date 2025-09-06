import { Navbar } from "@/components/navbar";
import { getBlogPost, getAllBlogSlugs, getTableOfContents } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Footer } from "@/components/footer";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import mdxComponents from "@/components/mdx-components";
import { getDictionary } from "../../dictionaries";
import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { headers } from "next/headers";

interface BlogPostPageProps {
  params: Promise<{ slug: string; lang: "en" | "pt" | "es" | "fr" }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const post = getBlogPost(slug, lang);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    keywords: post.tags.join(", "),
    url: `/${lang}/blog/${slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    author: post.author.name,
    section: post.category,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, lang } = await params;
  const dict = await getDictionary(lang);
  const post = getBlogPost(slug, lang);

  if (!post) {
    notFound();
  }

  const toc = getTableOfContents(post.content);
  const formattedDate = format(new Date(post.date), "dd MMM yyyy");

  // Get the current URL for sharing
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const currentUrl = `${protocol}://${host}/${lang}/blog/${slug}`;

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
                    <span
                      key={tag}
                      className="bg-neutral-500/10 text-foreground px-3 py-1 rounded-full text-xs font-medium"
                    >
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
                    <AvatarImage
                      className="object-cover"
                      src={post.author.image}
                    />
                    <AvatarFallback>
                      {post.author.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    {post.author.role && (
                      <div className="text-sm text-neutral-400">
                        {post.author.role}
                      </div>
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
              <ShareButtons title={post.title} url={currentUrl} />
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} dict={dict} />
    </div>
  );
}

export async function generateStaticParams() {
  const locales = ["en", "pt", "es", "fr"];
  const allParams: { slug: string; lang: string }[] = [];

  for (const lang of locales) {
    const slugs = getAllBlogSlugs(lang);
    allParams.push(...slugs.map((slug) => ({ slug, lang })));
  }

  return allParams;
}
