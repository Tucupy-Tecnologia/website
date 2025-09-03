"use client"

import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Post } from "./Post";
import type { BlogMetadata } from "@/lib/blog-types";
import { categories } from "@/lib/blog-types";
import { translateCategory } from "@/lib/translate-tag";

interface PostListProps {
  posts: BlogMetadata[]
  dict: Record<string, any>
  lang: string
}

export function PostList({ posts, dict, lang }: PostListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value || "All");
  };

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post =>
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div>
      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
        <div className="w-full sm:w-auto overflow-x-auto scrollbar-hide">
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;  /* Chrome, Safari and Opera */
            }
          `}</style>
          <ToggleGroup
            type="single"
            value={selectedCategory}
            onValueChange={handleCategoryChange}
            className="flex flex-nowrap px-0 sm:px-3 gap-2 min-w-max"
          >
            {categories.map((category) => (
              <ToggleGroupItem
                key={category}
                size='sm'
                value={category}
                className="rounded-full border border-gray-400/20 h-7 text-xs data-[state=on]:bg-neutral-50/10 hover:border-gray-200/20 hover:bg-background data-[state=on]:text-foreground hover:text-foreground px-8 whitespace-nowrap"
              >
                {translateCategory(category, dict)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="relative w-full sm:w-auto sm:pr-3">
          <Search className="absolute top-0 bottom-0 my-auto left-2.5 size-4" />
          <Input
            className="w-full bg-background pl-8 placeholder:text-xs"
            placeholder={dict.blog.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Post key={post.slug} post={post} lang={lang} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-neutral-400">
            {dict.blog.emptyState}
          </div>
        )}
      </div>
    </div>
  )
}
