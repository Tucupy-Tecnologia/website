import { PartnersMarquee } from "./partners";
import { getFeaturedBlogPost } from "@/lib/blog";
import { HeroContent } from "./hero-content";

interface HeroProps {
	lang: string;
	dict: any;
}

export async function Hero({ lang, dict }: HeroProps) {
	const featuredPost = getFeaturedBlogPost(lang as 'en' | 'pt' | 'es' | 'fr');

	return (
		<main className="max-w-6xl mx-auto px-4">
			<HeroContent featuredPost={featuredPost} lang={lang} dict={dict} />
			<PartnersMarquee />
		</main>
	)
}
