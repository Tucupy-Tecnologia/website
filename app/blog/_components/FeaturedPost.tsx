import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import type { BlogMetadata } from "@/lib/blog-types"

interface FeaturedPostProps {
  post: BlogMetadata
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  const formattedDate = format(new Date(post.date), 'dd MMM yyyy')
  
  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 hover:bg-neutral-500/5 p-3 rounded-xl ease-out transition-colors cursor-pointer">
      <Image 
        src={post.image} 
        alt={post.title} 
        width={450} 
        height={350} 
        className="w-full lg:w-[450px] h-auto rounded-lg border border-gray-400/20" 
      />

      <div className="flex flex-col gap-3 w-full lg:pr-4">
        <span className="text-xs sm:text-sm text-neutral-500">
          {formattedDate} • {post.readingTime}
        </span>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-neutral-400">
          {post.description}
        </p>

        <div className="flex items-center gap-3">
          <Avatar className="size-6">
            <AvatarImage src={post.author.image} />
            <AvatarFallback>{post.author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h2 className="text-sm">
              {post.author.name}
            </h2>
            {post.author.role && (
              <span className="text-xs text-neutral-500">
                {post.author.role}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}