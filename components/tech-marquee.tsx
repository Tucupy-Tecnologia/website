'use client';

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@/components/ui/marquee';

export type MarqueeItemData = {
	id: string;
	name: string;
	icon: React.ReactNode;
};

type TechMarqueeProps = {
	items: MarqueeItemData[];
	speed?: number;
	direction?: 'left' | 'right';
	showFade?: boolean;
	className?: string;
	play?: boolean;
};

export function TechMarquee({
	items,
	speed = 50,
	direction = 'left',
	showFade = true,
	className,
	play = true
}: TechMarqueeProps): React.ReactElement {
	return (
		<Marquee className={className}>
			{showFade && <MarqueeFade side="left" className='from-primary' />}
			{showFade && <MarqueeFade side="right" className='from-primary' />}

			<MarqueeContent
				speed={speed}
				direction={direction}
				play={play}
				pauseOnHover={false}
			>
				{items.map((item: MarqueeItemData) => (
					<MarqueeItem
						key={item.id}
						className="flex items-center gap-3"
					>
						<div className='flex items-center gap-2 border rounded-md px-2 py-1.5 border-gray-400/20'>
							{item.icon}
							<span className='text-xs font-medium text-foreground'>
								{item.name}
							</span>
						</div>
					</MarqueeItem>
				))}
			</MarqueeContent>
		</Marquee>
	);
}
