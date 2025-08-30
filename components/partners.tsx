'use client';

import Image from 'next/image';
import {
	Marquee,
	MarqueeItem,
	MarqueeFade,
	MarqueeContent,
} from '@/components/ui/marquee';

import decktimus from '@/public/decktimus.svg';
import globalDiscounting from '@/public/global-discounting.svg';
import maratona from '@/public/maratona.svg';
import portoExclusivo from '@/public/porto-exclusivo.svg';
import pinheiroDiniz from '@/public/pinheiro-diniz.svg';

const partners = [
	{
		name: "Meia Maratona da amazônia",
		src: maratona.src,
	},
	{
		name: "Decktimus",
		src: decktimus.src,
	},
	{
		name: "Porto Exclusivo",
		src: portoExclusivo.src,
	},
	{
		name: "Global Discounting",
		src: globalDiscounting.src,
	},
	{
		name: "Pinheiro Diniz",
		src: pinheiroDiniz.src,
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
								<Image
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
