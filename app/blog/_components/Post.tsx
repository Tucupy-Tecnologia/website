import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import type { BlogMetadata } from "@/lib/blog-types";

interface PostProps {
  post: BlogMetadata
}

export function Post({ post }: PostProps) {
  const formattedDate = format(new Date(post.date), 'dd MMM yyyy')

  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col hover:bg-neutral-500/5 p-4 rounded-xl ease-out transition-colors cursor-pointer h-full">
      <div className="w-full mb-4">
        <Image 
          src={post.image} 
          alt={post.title} 
          width={400} 
          height={240} 
          className="rounded-lg border border-gray-400/20 w-full h-48 object-cover" 
        />
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <span className="text-xs text-neutral-500">
          {formattedDate} • {post.readingTime}
        </span>

        <h2 className="font-semibold text-base leading-tight">
          {post.title}
        </h2>

        <p className="text-sm text-neutral-400 leading-relaxed flex-1">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-auto">
          {post.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
