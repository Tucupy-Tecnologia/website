"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/animated-beam";
import React, { forwardRef, useRef } from "react";

const FlowNode = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode; label: string }
>(({ className, children, label }, ref) => {
	return (
		<div className="flex flex-col items-center gap-2">
			<div
				ref={ref}
				className={cn(
					"z-10 flex h-12 w-12 items-center justify-center rounded-lg border-2 bg-primary border-gray-400/20 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
					className,
				)}
			>
				{children}
			</div>
			<span className="text-xs font-medium text-gray-300 whitespace-nowrap">
				{label}
			</span>
		</div>
	);
});

FlowNode.displayName = "FlowNode";

export function WebsiteFlowDiagram({
	className,
}: {
	className?: string;
}): React.ReactElement {
	const containerRef = useRef<HTMLDivElement>(null);
	const designRef = useRef<HTMLDivElement>(null);
	const developmentRef = useRef<HTMLDivElement>(null);
	const testingRef = useRef<HTMLDivElement>(null);
	const deploymentRef = useRef<HTMLDivElement>(null);

	return (
		<div
			className={cn(
				"relative flex w-full items-center justify-center overflow-hidden rounded-lg p-6",
				className,
			)}
			ref={containerRef}
		>
			<div className="grid grid-cols-2 sm:grid-cols-4 h-full w-full items-center justify-between gap-8">
				<FlowNode ref={designRef} label="design">
					<Icons.design />
				</FlowNode>

				<FlowNode ref={developmentRef} label="development">
					<Icons.development />
				</FlowNode>

				<FlowNode ref={testingRef} label="testing">
					<Icons.testing />
				</FlowNode>

				<FlowNode ref={deploymentRef} label="deployment">
					<Icons.deployment />
				</FlowNode>
			</div>

			{/* Progressive beam flow - one continuous journey */}
			<div className="hidden sm:block">
				<AnimatedBeam
					containerRef={containerRef as React.RefObject<HTMLElement>}
					fromRef={designRef as React.RefObject<HTMLElement>}
					toRef={developmentRef as React.RefObject<HTMLElement>}
					curvature={0}
					duration={12}
					delay={0}
					pathColor="rgb(156 163 175)"
					gradientStartColor="#febe01"
					gradientStopColor="#febe01"
				/>
				<AnimatedBeam
					containerRef={containerRef as React.RefObject<HTMLElement>}
					fromRef={developmentRef as React.RefObject<HTMLElement>}
					toRef={testingRef as React.RefObject<HTMLElement>}
					curvature={0}
					duration={12}
					delay={1.5}
					pathColor="rgb(156 163 175)"
					gradientStartColor="#febe01"
					gradientStopColor="#febe01"
				/>
				<AnimatedBeam
					containerRef={containerRef as React.RefObject<HTMLElement>}
					fromRef={testingRef as React.RefObject<HTMLElement>}
					toRef={deploymentRef as React.RefObject<HTMLElement>}
					curvature={0}
					duration={12}
					delay={3}
					pathColor="rgb(156 163 175)"
					gradientStartColor="#febe01"
					gradientStopColor="#febe01"
				/>
			</div>

		</div>
	);
}

const Icons = {
	design: (): React.ReactElement => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="text-brand"
		>
			<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
			<circle cx="9" cy="9" r="2" />
			<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
		</svg>
	),
	development: (): React.ReactElement => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="text-brand"
		>
			<polyline points="16,18 22,12 16,6" />
			<polyline points="8,6 2,12 8,18" />
		</svg>
	),
	testing: (): React.ReactElement => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="text-brand"
		>
			<polyline points="20,6 9,17 4,12" />
		</svg>
	),
	deployment: (): React.ReactElement => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="text-brand"
		>
			<rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
			<rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
			<line x1="6" x2="6.01" y1="6" y2="6" />
			<line x1="6" x2="6.01" y1="18" y2="18" />
		</svg>
	),
};
