"use client"

import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Search } from "lucide-react";
import { useState } from "react";

export function PostList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value || "all");
  };

  return (
    <div>
      <div className="mt-12 flex items-center justify-between">

        <ToggleGroup
          type="single"
          value={selectedCategory}
          onValueChange={handleCategoryChange}
          className="px-3 gap-2"
        >
          <ToggleGroupItem
            size='sm'
            value="all"
            className="rounded-full border border-gray-400/20 w-fit px-1 h-6 text-xs data-[state=on]:bg-neutral-50/10 hover:border-gray-200/20 hover:bg-background data-[state=on]:text-foreground hover:text-foreground "
          >
            All
          </ToggleGroupItem>
          <ToggleGroupItem
            size='sm'
            value="b"
            className="rounded-full border border-gray-400/20 h-6 text-xs data-[state=on]:bg-neutral-50/10 hover:border-gray-200/20 hover:bg-background data-[state=on]:text-foreground hover:text-foreground px-3 "
          >
            Products
          </ToggleGroupItem>

          <ToggleGroupItem
            size='sm'
            value="c"
            className="rounded-full border border-gray-400/20 h-6 text-xs data-[state=on]:bg-neutral-50/10 hover:border-gray-200/20 hover:bg-background data-[state=on]:text-foreground hover:text-foreground px-3"
          >
            Company
          </ToggleGroupItem>

          <ToggleGroupItem
            size='sm'
            value="d"
            className="rounded-full border border-gray-400/20 h-6 text-xs data-[state=on]:bg-neutral-50/10 hover:border-gray-200/20 hover:bg-background data-[state=on]:text-foreground hover:text-foreground px-4 "
          >
            Databases
          </ToggleGroupItem>

          <ToggleGroupItem
            size='sm'
            value="e"
            className="rounded-full border border-gray-400/20 h-6 text-xs data-[state=on]:bg-neutral-50/10 hover:border-gray-200/20 hover:bg-background data-[state=on]:text-foreground hover:text-foreground px-5 "
          >
            Engineering
          </ToggleGroupItem>

        </ToggleGroup>

        <div className="relative">
          <Search className="absolute top-0 bottom-0 my-auto left-2.5 size-4" />
          <Input className="w-full bg-red-50 pl-8 placeholder:text-xs" placeholder="Search blog" />
        </div>
      </div>








    </div>
  )
}
