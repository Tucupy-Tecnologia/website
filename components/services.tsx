'use client';

import { useState, useMemo } from 'react';
import Image from "next/image";
import { MarqueeItemData, TechMarquee } from "./tech-marquee";

export const marqueeItems: MarqueeItemData[] = [
	{
		id: "github",
		name: "Github",
		icon: <Image src="/github.svg" width={16} height={16} alt="Github" />,
	},
	{
		id: "tailwind-css",
		name: "Tailwind",
		icon: <Image src="/tailwind.svg" width={16} height={16} alt="Tailwind" />,
	},
	{
		id: "vercel",
		name: "Vercel",
		icon: <Image src="/vercel.svg" width={16} height={16} alt="Vercel" />,
	},
	{
		id: "aws",
		name: "AWS",
		icon: <Image src="/aws.svg" width={16} height={16} alt="AWS" />,
	},
	{
		id: "bun",
		name: "Bun",
		icon: <Image src="/bun.svg" width={16} height={16} alt="Bun" />,
	},
	{
		id: "docker",
		name: "Docker",
		icon: <Image src="/docker.svg" width={16} height={16} alt="Docker" />,
	},
	{
		id: "elysia",
		name: "Elysia",
		icon: <Image src="/elysia.svg" width={16} height={16} alt="Elysia" />,
	},
	{
		id: "go",
		name: "Go",
		icon: <Image src="/go.svg" width={16} height={16} alt="Go" />,
	},
];

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

export function Services(): React.ReactElement {
	const [isHostingHovered, setIsHostingHovered] = useState<boolean>(false);

	const shuffledItems = useMemo(() => ({
		first: shuffleArray(marqueeItems),
		second: shuffleArray(marqueeItems),
		third: shuffleArray(marqueeItems),
	}), []);

	return (
		<div className="bg-background pb-20">
			<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
					<div className="flex p-px lg:col-span-4">
						<div className="w-full overflow-hidden rounded-lg bg-primary outline outline-gray-400/20 max-lg:rounded-t-4xl lg:rounded-tl-2xl">
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-gray-400">Website</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-white">Design and development</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-400">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus
									egestas sem pellentesque.
								</p>
							</div>
						</div>
					</div>
					<div className="flex p-px lg:col-span-2">
						<div
							className="w-full overflow-hidden rounded-lg bg-primary outline outline-gray-400/20 lg:rounded-tr-2xl"
							onMouseEnter={() => setIsHostingHovered(true)}
							onMouseLeave={() => setIsHostingHovered(false)}
						>
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-gray-400">Hosting</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-white">Deployment and maintenance</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-400">
									We take care of getting your application online and keeping it running smoothly. Focus on your business while we handle the technical details.
								</p>
							</div>

							<div className="space-y-10 pb-10">
								<TechMarquee
									items={shuffledItems.first}
									speed={50}
									play={isHostingHovered}
								/>
								<TechMarquee
									items={shuffledItems.second}
									speed={40}
									direction="right"
									play={isHostingHovered}
								/>
								<TechMarquee
									items={shuffledItems.third}
									speed={50}
									play={isHostingHovered}
								/>
							</div>
						</div>
					</div>
					<div className="flex p-px lg:col-span-2">
						<div className="w-full overflow-hidden rounded-lg bg-primary outline outline-gray-400/20 lg:rounded-bl-2xl">
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-gray-400">Security</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-white">Advanced access control</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-400">
									Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
								</p>
							</div>
						</div>
					</div>
					<div className="flex p-px lg:col-span-4">
						<div className="w-full overflow-hidden rounded-lg bg-primary outline outline-gray-400/20 max-lg:rounded-b-2xl lg:rounded-br-2xl">
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-gray-400">Performance</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-white">Lightning-fast builds</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-400">
									Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at
									augue sed elit dictum vulputate.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
