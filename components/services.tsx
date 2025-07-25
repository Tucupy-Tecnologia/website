'use client';

import Image from "next/image";
import { useState, useMemo } from 'react';
import { MarqueeItemData, TechMarquee } from "./tech-marquee";
import { WebsiteFlowDiagram } from './flow-diagram';
import { FlowingDottedLine } from './dotted-line';
import { Network, Table2 } from "lucide-react";

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

interface EmailItemProps {
	email: string;
	isMiddleItem: boolean;
	isSecurityHovered: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function EmailItem({ email, isMiddleItem, isSecurityHovered }: EmailItemProps): React.ReactElement {
	const getDisplayText = (): string => {
		if (isMiddleItem && isSecurityHovered) {
			return '●●●●●●●●●●●●●●●●●●●';
		}
		return email;
	};

	const getBlurClass = (): string => {
		if (isMiddleItem && !isSecurityHovered) {
			return 'blur-sm';
		}
		return '';
	};

	return (
		<div className='bg-primary border border-gray-400/20 rounded-md px-7 py-3 w-48'>
			<p className={`transition-all duration-300 truncate ${getBlurClass()}`}>
				{getDisplayText()}
			</p>
		</div>
	);
}

export function Services(): React.ReactElement {
	const [isHostingHovered, setIsHostingHovered] = useState<boolean>(false);
	const [isSecurityHovered, setIsSecurityHovered] = useState<boolean>(false);

	const shuffledItems = useMemo(() => ({
		first: shuffleArray(marqueeItems),
		second: shuffleArray(marqueeItems),
		third: shuffleArray(marqueeItems),
	}), []);

	const emailData = useMemo(() => ({
		leftColumn: [
			'alice.smith@company.com',
			'●●●●●●●●●●●●●●●●●●●',
			'carol.wilson@tech.org'
		],
		rightColumn: [
			'david.brown@agency.co',
			'●●●●●●●●●●●●●●●●●●●',
			'frank.miller@dev.com'
		]
	}), []);

	return (
		<div className="bg-background pb-20">
			<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
					<div className="flex p-px lg:col-span-4">
						<div className="w-full overflow-hidden rounded-lg bg-primary outline outline-gray-400/20 max-lg:rounded-t-4xl lg:rounded-tl-2xl">
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-muted-foreground">Website</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-foregroudn">Design and development</p>
								<p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
									From concept to launch, we handle every step of the development process.
								</p>
							</div>
							<div className="px-10 mt-10">
								<WebsiteFlowDiagram />
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
								<h3 className="text-sm/4 font-semibold text-muted-foreground">Hosting</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-foreground">Deployment and maintenance</p>
								<p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
									Launch with confidence. Our deployment expertise ensures your website goes live smoothly and stays that way.
								</p>
							</div>

							<div className="space-y-10 pb-10">
								<TechMarquee
									items={shuffledItems.first}
									speed={35}
									play={isHostingHovered}
								/>
								<TechMarquee
									items={shuffledItems.second}
									speed={35}
									direction="right"
									play={isHostingHovered}
								/>
								<TechMarquee
									items={shuffledItems.third}
									speed={35}
									play={isHostingHovered}
								/>
							</div>
						</div>
					</div>
					<div className="flex p-px lg:col-span-2">
						<div
							className="w-full overflow-hidden rounded-lg bg-primary outline outline-gray-400/20 lg:rounded-bl-2xl"
							onMouseEnter={() => setIsSecurityHovered(true)}
							onMouseLeave={() => setIsSecurityHovered(false)}
						>
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-muted-foreground">Security</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-foreground">Protecting what matters most</p>
								<p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">Your data deserves the highest level of protection, and that's exactly what we deliver.</p>
							</div>

							<div className='flex items-center gap-2 -ml-6'>
								<div className='space-y-3'>
									{emailData.leftColumn.map((email: string, index: number) => (
										<EmailItem
											key={index}
											email={email}
											isMiddleItem={index === 1}
											isSecurityHovered={isSecurityHovered}
										/>
									))}
								</div>

								<div className='space-y-3'>
									{emailData.rightColumn.map((email: string, index: number) => (
										<EmailItem
											key={index}
											email={email}
											isMiddleItem={index === 1}
											isSecurityHovered={isSecurityHovered}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="flex p-px lg:col-span-4">
						<div className="w-full overflow-hidden rounded-lg bg-primary outline outline-gray-400/20 max-lg:rounded-b-2xl lg:rounded-br-2xl">
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-muted-foreground">Development</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-foreground">We ship really fast</p>
								<p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
									We don't just build fast—we think fast, adapt fast, and deliver fast. Your timeline becomes our mission, executed with surgical precision.
								</p>
							</div>

							<div className='space-y-6 mt-2'>
								<div className="relative flex items-center">
									<div className="absolute -top-[15px] px-2 z-50 left-20 flex items-center gap-2">
										<div className="bg-primary border border-gray-400/20 rounded-md w-fit flex items-center gap-1.5 px-2 py-1">
											<Table2 size={14} className="text-muted-foreground" />
											<span className="text-muted-foreground text-sm">
												users
											</span>
										</div>
										<div className="flex items-center gap-1.5 ml-16">
											<div className="bg-primary border border-gray-400/20 rounded-full w-fit flex items-center gap-1.5 px-3 py-1">
												<Network size={14} />
												<span className="text-sm">
													api/v1/me
												</span>
											</div>
											<div className="bg-primary border border-gray-400/20 rounded-full w-fit flex items-center gap-1.5 px-3 py-1">
												<Network size={14} />
												<span className="text-sm">
													api/v1/profile
												</span>
											</div>
										</div>
									</div>
									<FlowingDottedLine dotSize='xs' />
								</div>

								<div className="relative flex items-center">
									<div className="absolute -top-[15px] px-2 z-50 left-20 flex items-center gap-2">
										<div className="bg-primary border border-gray-400/20 rounded-md w-fit flex items-center gap-1.5 px-2 py-1">
											<Table2 size={14} className="text-muted-foreground" />
											<span className="text-muted-foreground text-sm">
												posts
											</span>
										</div>
										<div className="flex items-center gap-1.5 ml-12">
											<div className="bg-primary border border-gray-400/20 rounded-full w-fit flex items-center gap-1.5 px-3 py-1">
												<Network size={14} />
												<span className="text-sm">
													api/v1/posts
												</span>
											</div>
										</div>
									</div>
									<FlowingDottedLine dotSize='xs' />
								</div>

								<div className="relative flex items-center">
									<div className="absolute -top-[15px] px-2 z-50 left-20 flex items-center gap-2">
										<div className="bg-primary border border-gray-400/20 rounded-md w-fit flex items-center gap-1.5 px-2 py-1">
											<Table2 size={14} className="text-muted-foreground" />
											<span className="text-muted-foreground text-sm">
												orders
											</span>
										</div>
										<div className="flex items-center gap-4 ml-20">
											<div className="bg-primary border border-gray-400/20 rounded-full w-fit flex items-center gap-1.5 px-3 py-1">
												<Network size={14} />
												<span className="text-sm">
													api/v1/orders
												</span>
											</div>
											<div className="bg-primary border border-gray-400/20 rounded-full w-fit flex items-center gap-1.5 px-3 py-1">
												<Network size={14} />
												<span className="text-sm">
													api/v1/checkout
												</span>
											</div>
										</div>
									</div>
									<FlowingDottedLine dotSize='xs' />
								</div>

								<div className="relative flex items-center">
									<div className="absolute -top-[15px] px-2 z-50 left-20 flex items-center gap-2">
										<div className="bg-primary border border-gray-400/20 rounded-md w-fit flex items-center gap-1.5 px-2 py-1">
											<Table2 size={14} className="text-muted-foreground" />
											<span className="text-muted-foreground text-sm">
												sessions
											</span>
										</div>
										<div className="flex items-center gap-1.5 ml-8">
											<div className="bg-primary border border-gray-400/20 rounded-full w-fit flex items-center gap-1.5 px-3 py-1">
												<Network size={14} />
												<span className="text-sm">
													api/v1/auth
												</span>
											</div>
											<div className="bg-primary border border-gray-400/20 rounded-full w-fit flex items-center gap-1.5 px-3 py-1">
												<Network size={14} />
												<span className="text-sm">
													api/v1/logout
												</span>
											</div>
										</div>
									</div>
									<FlowingDottedLine dotSize='xs' />
								</div>

								<div className="relative flex items-center">
									<div className="absolute -top-[15px] px-2 z-50 left-20 flex items-center gap-2">
										<div className="bg-primary border border-gray-400/20 rounded-md w-fit flex items-center gap-1.5 px-2 py-1">
											<Table2 size={14} className="text-muted-foreground" />
											<span className="text-muted-foreground text-sm">
												analytics
											</span>
										</div>
										<div className="flex items-center gap-1.5 ml-14">
											<div className="bg-primary border border-gray-400/20 rounded-full w-fit flex items-center gap-1.5 px-3 py-1">
												<Network size={14} />
												<span className="text-sm">
													api/v1/stats
												</span>
											</div>
										</div>
									</div>
									<FlowingDottedLine dotSize='xs' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
