import { Navbar } from "@/components/navbar";
import { FeaturedPost } from "./_components/FeaturedPost";
import { PostList } from "./_components/PostList";
import { Footer } from "@/components/footer";
import { getAllBlogPosts, getFeaturedBlogPost } from "@/lib/blog";
import { getDictionary } from "../dictionaries";

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
        {featuredPost && <FeaturedPost post={featuredPost} />}
        <PostList posts={posts} dict={dict} />
        <Footer lang={lang} dict={dict} />
      </main>
    </div>
  )
}
