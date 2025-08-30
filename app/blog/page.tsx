import { Navbar } from "@/components/navbar";
import { FeaturedPost } from "./_components/FeaturedPost";
import { PostList } from "./_components/PostList";
import { Footer } from "@/components/footer";
import { getAllBlogPosts, getFeaturedBlogPost } from "@/lib/blog";

export default async function Page() {
  const posts = getAllBlogPosts('en')
  const featuredPost = getFeaturedBlogPost('en')

  return (
    <div className="bg-background min-h-screen space-y-8 sm:space-y-16">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 space-y-8 sm:space-y-12">
        {featuredPost && <FeaturedPost post={featuredPost} />}
        <PostList posts={posts} />
        <Footer />
      </main>
    </div>
  )
}
