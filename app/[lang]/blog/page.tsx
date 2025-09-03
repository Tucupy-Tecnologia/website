import { Navbar } from "@/components/navbar";
import { FeaturedPost } from "./_components/FeaturedPost";
import { PostList } from "./_components/PostList";
import { Footer } from "@/components/footer";
import { getAllBlogPosts, getFeaturedBlogPost } from "@/lib/blog";
import { getDictionary } from "../dictionaries";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' | 'es' | 'fr' }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return createMetadata({
    title: dict.seo.blog.title,
    description: dict.seo.blog.description,
    keywords: dict.seo.blog.keywords,
    url: `/${lang}/blog`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' | 'es' | 'fr' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const posts = getAllBlogPosts(lang)
  const featuredPost = getFeaturedBlogPost(lang)

  return (
    <div className="bg-background min-h-screen space-y-8 sm:space-y-16">
      <Navbar lang={lang} dict={dict} />

      <main className="max-w-6xl mx-auto px-4 space-y-8 sm:space-y-12">
        {featuredPost && <FeaturedPost post={featuredPost} lang={lang} />}
        <PostList posts={posts} dict={dict} lang={lang} />
        <Footer lang={lang} dict={dict} />
      </main>
    </div>
  )
}
