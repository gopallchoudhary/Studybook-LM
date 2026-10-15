"use client";

import type { ElementType } from "react";
import { motion } from "motion/react";
import {
	BarChart3,
	Code2,
	GraduationCap,
	MessageCircle,
	Scale,
} from "lucide-react";
import { IllustrationTile, type StickerColor } from "./illustration-tile";

type UseCase = {
	id: string;
	sticker: StickerColor;
	icon: ElementType;
	category: string;
	title: string;
	description: string;
	query: string;
};

const USE_CASES: UseCase[] = [
	{
		id: "legal-research",
		sticker: "teal",
		icon: Scale,
		category: "Legal & Academic Research",
		title: "Research a complex case",
		description: "Compare precedents and clauses across 50+ case briefs.",
		query:
			"Compare the exclusion criteria and standard of care between Exhibit A and Exhibit B.",
	},
	{
		id: "study-finals",
		sticker: "pink",
		icon: GraduationCap,
		category: "University & Higher Ed",
		title: "Study for finals & exams",
		description: "Turn 400-page textbooks into flashcards and quizzes.",
		query:
			"Generate a 10-question practice exam on cellular respiration with explanations.",
	},
	{
		id: "codebase-onboarding",
		sticker: "brand",
		icon: Code2,
		category: "Engineering & Architecture",
		title: "Onboard to codebases & docs",
		description: "Trace dependencies across RFCs and API references.",
		query:
			"What retry mechanisms and error codes does the payment webhook router implement?",
	},
	{
		id: "market-reports",
		sticker: "orange",
		icon: BarChart3,
		category: "Finance & Strategy",
		title: "Summarize executive reports",
		description: "Synthesize 10-Ks into executive briefs and takeaways.",
		query:
			"Extract YoY gross margins and EBITDA guidance revisions across our top 3 competitors.",
	},
];

export function UseCasesSection() {
	return (
		<section id="use-cases" className="relative scroll-mt-20 py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<div className="type-eyebrow shadow-level-1 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-2.5 py-1 text-brand dark:bg-zinc-900">
						<span>Built for high-density work</span>
					</div>

					<h2 className="type-heading-1 mt-4 text-ink">
						Designed for anyone who works with dense information.
					</h2>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
					{USE_CASES.map((useCase, index) => (
						<motion.div
							key={useCase.id}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.45, delay: index * 0.1 }}
							className="flex"
						>
							<IllustrationTile
								sticker={useCase.sticker}
								icon={useCase.icon}
								eyebrow={useCase.category}
								title={useCase.title}
								description={useCase.description}
								className="w-full"
								footer={
									<div className="rounded-lg border border-hairline bg-canvas-soft p-3 dark:bg-zinc-800/60">
										<div className="type-eyebrow flex items-center gap-1.5 text-ink-muted">
											<MessageCircle className="size-3 text-brand" />
											<span>Typical query</span>
										</div>
										<p className="type-caption mt-1 italic text-ink-secondary">
											&ldquo;{useCase.query}&rdquo;
										</p>
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
