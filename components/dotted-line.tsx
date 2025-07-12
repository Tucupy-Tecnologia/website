import React from 'react';
import { motion } from 'framer-motion';

interface FlowingDottedLineProps {
	className?: string;
	speed?: 'slow' | 'normal' | 'fast';
	dotSize?: 'xs' | 'sm' | 'md' | 'lg';
	color?: string;
	dotSpacing?: number;
}

export function FlowingDottedLine({
	className = '',
	speed = 'normal',
	dotSize = 'sm',
	color = 'bg-gray-400',
	dotSpacing = 10
}: FlowingDottedLineProps) {
	// Speed configuration
	const speedMap: Record<typeof speed, number> = {
		slow: 30,
		normal: 20,
		fast: 10
	};

	// Dot size configuration
	const sizeMap: Record<typeof dotSize, string> = {
		xs: 'w-0.5 h-0.5',
		sm: 'w-1 h-1',
		md: 'w-1.5 h-1.5',
		lg: 'w-2 h-2'
	};

	const animationDuration: number = speedMap[speed];
	const dotClass: string = sizeMap[dotSize];

	// Create enough dots to fill the screen and have seamless loop
	const dotCount: number = 50;

	return (
		<div className={`relative w-full overflow-hidden ${className}`} style={{ height: '20px' }}>
			<motion.div
				className="absolute flex items-center"
				style={{
					gap: `${dotSpacing}px`,
					left: -(dotCount * dotSpacing / 2)
				}}
				animate={{
					x: [0, dotCount * dotSpacing / 2]
				}}
				transition={{
					x: {
						duration: animationDuration,
						ease: "linear",
						repeat: Infinity,
						repeatType: "loop"
					}
				}}
			>
				{/* Create dots - double the amount to ensure seamless loop */}
				{Array.from({ length: dotCount * 2 }, (_, index) => (
					<div
						key={index}
						className={`${dotClass} ${color} rounded-full flex-shrink-0`}
					/>
				))}
			</motion.div>
		</div>
	);
}
