import { Navbar } from "@/components/navbar";
import { FeaturedPost } from "./_components/FeaturedPost";
import { PostList } from "./_components/PostList";

export default function Page() {
  return (
    <div className="bg-background min-h-screen space-y-16">
      <Navbar />

      <main className="max-w-6xl mx-auto px-1">
        <FeaturedPost />
        <PostList />
      </main>
    </div>
  )
}
