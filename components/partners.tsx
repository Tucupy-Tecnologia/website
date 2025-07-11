'use client';

import {
	Marquee,
	MarqueeItem,
	MarqueeFade,
	MarqueeContent,
} from '@/components/ui/marquee';

const partners = [
	{
		name: "Transistor",
		src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
	},
	{
		name: "Reform",
		src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
	},
	{
		name: "Tuple",
		src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
	},
	{
		name: "SavvyCal",
		src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
	},
	{
		name: "Statamic",
		src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
	},
];

export function PartnersMarquee() {
	return (
		<div>
			<div className="mx-auto max-w-3xl px-6 lg:px-8">
				<Marquee>
					<MarqueeFade side="left" />
					<MarqueeFade side="right" />
					<MarqueeContent speed={30} pauseOnHover={false}>
						{partners.concat(partners).map((partner, index) => (
							<MarqueeItem key={index} className="mx-6">
								<img
									src={partner.src}
									alt={partner.name}
									width={80}
									height={25}
									className="max-h-8 w-full object-contain opacity-40 grayscale"
								/>
							</MarqueeItem>
						))}
					</MarqueeContent>
				</Marquee>
			</div>
		</div>
	)
}
