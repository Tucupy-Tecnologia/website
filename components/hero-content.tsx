'use client';

import { Button } from "./ui/button";
import { scrollToSection } from "@/lib/scroll";
import Link from "next/link";
import { BlogMetadata } from "@/lib/blog";

interface HeroContentProps {
  featuredPost: BlogMetadata | null;
  lang: string;
  dict: Record<string, any>;
}

export function HeroContent({ featuredPost, lang, dict }: HeroContentProps) {
  return (
    <div className="mx-auto max-w-3xl  mb-10">
      {featuredPost && (
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-gray-400/20 hover:ring-gray-400/30">
            {featuredPost.title}
            <Link href={`/${lang}/blog/${featuredPost.slug}`} className="font-semibold text-brand ml-1">
              <span aria-hidden="true" className="absolute inset-0" />
              {dict.hero.readMore} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      )}
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-semibold">{dict.hero.title1}</h1>
        <h1 className="text-4xl sm:text-6xl font-semibold text-brand">{dict.hero.title2}</h1>
        <p className="mt-4 sm:mt-8 font-medium text-pretty text-muted-foreground sm:text-xl/8">
          {dict.hero.description} <br />
          {dict.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-y-4 sm:flex-row items-center justify-center gap-x-4">
          <Button
            variant="brand"
            onClick={() => scrollToSection('contact')}
          >
            {dict.hero.cta}
          </Button>
          <Link href={`/${lang}/about`}>
            <Button
              className="text-sm/6 font-semibold text-foreground ring ring-gray-400/20"
            >
              {dict.hero.learnMore} <span aria-hidden="true">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
