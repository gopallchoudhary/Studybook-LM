"use client";

import type { ElementType } from "react";
import { motion } from "motion/react";
import {
	Brain,
	FileCheck2,
	FileText,
	Globe,
	GraduationCap,
	ListTodo,
	MessageSquareCode,
	Sparkles,
	UploadCloud,
	Video,
} from "lucide-react";
import { IllustrationTile, type StickerColor } from "./illustration-tile";

type Step = {
	marker: string;
	sticker: StickerColor;
	icon: ElementType;
	eyebrow: string;
	title: string;
	description: string;
	tags: { name: string; icon: ElementType }[];
};

const STEPS: Step[] = [
	{
		marker: "01",
		sticker: "teal",
		icon: UploadCloud,
		eyebrow: "Multi-modal ingestion",
		title: "Connect your sources",
		description: "Upload PDFs, websites, YouTube lectures, or notes.",
		tags: [
			{ name: "PDF Documents", icon: FileText },
			{ name: "Websites", icon: Globe },
			{ name: "YouTube Transcripts", icon: Video },
		],
	},
	{
		marker: "02",
		sticker: "brand",
		icon: MessageSquareCode,
		eyebrow: "Grounded RAG engine",
		title: "Chat with verified citations",
		description: "Ask in plain language, get sourced answers.",
		tags: [
			{ name: "Streaming RAG", icon: Brain },
			{ name: "Numbered Citations", icon: FileCheck2 },
			{ name: "Long-term Memory", icon: MessageSquareCode },
		],
	},
	{
		marker: "03",
		sticker: "pink",
		icon: Sparkles,
		eyebrow: "Instant study tools",
		title: "Generate Studio artifacts",
		description: "Turn notebooks into flashcards, quizzes, and reports.",
		tags: [
			{ name: "Flashcards", icon: GraduationCap },
			{ name: "Quizzes", icon: ListTodo },
			{ name: "Mind Maps & Summaries", icon: Sparkles },
		],
	},
];

export function HowItWorksSection() {
	return (
		<section id="how-it-works" className="relative scroll-mt-20 py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<div className="type-eyebrow shadow-level-1 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-2.5 py-1 text-brand dark:bg-zinc-900">
						<span>Simple 3-Step Workflow</span>
					</div>

					<h2 className="type-heading-1 mt-4 text-ink">
						From raw information to deep understanding in minutes.
					</h2>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
					{STEPS.map((step, index) => (
						<motion.div
							key={step.marker}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.45, delay: index * 0.12 }}
							className="flex"
						>
							<IllustrationTile
								sticker={step.sticker}
								icon={step.icon}
								marker={step.marker}
								eyebrow={step.eyebrow}
								title={step.title}
								description={step.description}
								className="w-full"
								footer={
									<div className="flex flex-wrap gap-1.5">
										{step.tags.map((tag) => {
											const TagIcon = tag.icon;
											return (
												<span
													key={tag.name}
													className="type-caption inline-flex items-center gap-1 rounded-md bg-canvas-soft px-2 py-1 text-ink-secondary dark:bg-zinc-800 dark:text-zinc-300"
												>
													<TagIcon className="size-3 text-ink-muted" />
													<span>{tag.name}</span>
												</span>
											);
										})}
									</div>
								}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
