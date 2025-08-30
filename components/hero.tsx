import { PartnersMarquee } from "./partners";
import { getFeaturedBlogPost } from "@/lib/blog";
import { HeroContent } from "./hero-content";

export async function Hero() {
	const featuredPost = getFeaturedBlogPost('en');

	return (
		<main className="max-w-6xl mx-auto px-4">
			<HeroContent featuredPost={featuredPost} />
			<PartnersMarquee />
		</main>
	)
}
