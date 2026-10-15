"use client";

import type { ElementType } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FileCode, FileText, Globe, Table2, Video } from "lucide-react";
import { cn } from "~/lib/utils";

type ConstellationNode = {
	icon: ElementType;
	label: string;
	tone: string;
	left: string;
	top: string;
	duration: number;
};

const NODES: ConstellationNode[] = [
	{
		icon: FileText,
		label: "PDF",
		tone: "text-sticker-teal",
		left: "3%",
		top: "26%",
		duration: 6,
	},
	{
		icon: Video,
		label: "Video",
		tone: "text-sticker-pink",
		left: "78%",
		top: "16%",
		duration: 7,
	},
	{
		icon: Globe,
		label: "Web",
		tone: "text-sticker-sky",
		left: "8%",
		top: "66%",
		duration: 8,
	},
	{
		icon: FileCode,
		label: "Notes",
		tone: "text-sticker-purple",
		left: "84%",
		top: "60%",
		duration: 6.5,
	},
	{
		icon: Table2,
		label: "Data",
		tone: "text-sticker-orange",
		left: "62%",
		top: "82%",
		duration: 7.5,
	},
];

export function StickerConstellation({ className }: { className?: string }) {
	const reduce = useReducedMotion();

	return (
		<div
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 overflow-hidden",
				className,
			)}
		>
			<div className="absolute left-1/2 top-0 size-[680px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[120px]" />

			{NODES.map((node, index) => {
				const Icon = node.icon;
				return (
					<motion.div
						key={node.label}
						className="absolute hidden items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md md:flex"
						style={{ left: node.left, top: node.top }}
						animate={reduce ? undefined : { y: [0, -12, 0] }}
						transition={
							reduce
								? undefined
								: {
										duration: node.duration,
										repeat: Infinity,
										ease: "easeInOut",
										delay: index * 0.35,
									}
						}
					>
						<Icon className={cn("size-4", node.tone)} />
						<span className="type-eyebrow text-white/80">{node.label}</span>
					</motion.div>
				);
			})}
		</div>
	);
}
