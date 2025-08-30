'use client';

import { Button } from "./ui/button";
import { PartnersMarquee } from "./partners";
import { scrollToSection } from "@/lib/scroll";
import Link from "next/link";

export function Hero() {



	return (
		<main className="max-w-6xl mx-auto px-4">
			<div className="mx-auto max-w-3xl  mb-10">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-gray-400/20 hover:ring-gray-400/30">
						Latest insights on building software that scales.
						<a href="#" className="font-semibold text-brand ml-1">
							<span aria-hidden="true" className="absolute inset-0" />
							Read more <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-6xl font-semibold">Your idea, our execution</h1>
					<h1 className="text-6xl font-semibold text-brand">Software that just works</h1>
					<p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
						We partner with ambitious companies to build software that grows with them.
						From MVPs that ship in weeks to platforms that serve millions. <br />
						We make it simple.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-4">
						<Button
							variant="brand"
							onClick={() => scrollToSection('contact')}
						>
							Let&apos;s build together
						</Button>
						<Link href="/about">
							<Button
								className="text-sm/6 font-semibold text-foreground ring ring-gray-400/20"
							>
								Learn more <span aria-hidden="true">→</span>
							</Button>
						</Link>
					</div>
				</div>
			</div>

			<PartnersMarquee />
		</main>
	)
}
