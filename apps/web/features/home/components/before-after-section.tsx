"use client";

import React from "react";
import { motion } from "motion/react";
import {
	XCircle,
	CheckCircle2,
	FileText,
	Globe,
	AlertTriangle,
	Sparkles,
	BookOpen,
	Check,
} from "lucide-react";

export function BeforeAfterSection() {
	return (
		<section id="before-after" className="relative scroll-mt-20 py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<div className="type-eyebrow shadow-level-1 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-2.5 py-1 text-brand dark:bg-zinc-900">
						<span>Before & After</span>
					</div>

					<h2 className="type-heading-1 mt-4 text-ink">
						From document chaos to grounded clarity.
					</h2>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
					<motion.div
						initial={{ opacity: 0, x: -16 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.45 }}
						className="shadow-level-1 flex flex-col justify-between rounded-xl border border-red-200/80 bg-white p-6 dark:border-red-900/40 dark:bg-zinc-900 sm:p-7"
					>
						<div>
							<div className="flex items-center justify-between">
								<span className="type-eyebrow inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-2.5 py-1 text-red-700 dark:bg-red-950/60 dark:text-red-300">
									<XCircle className="size-3.5" />
									Without Studybook LM
								</span>
								<span className="type-caption text-ink-faint">
									The Tab Nightmare
								</span>
							</div>

							<h3 className="type-heading-3 mt-4 text-ink">
								Scattered tabs, lost citations, hallucinated answers
							</h3>

							<div className="relative mt-6 h-56 w-full overflow-hidden rounded-lg border border-hairline bg-canvas-soft p-4 dark:bg-zinc-800/40">
								<div className="absolute left-6 top-4 w-[85%] -rotate-2 rounded-lg border border-hairline bg-white p-3 shadow-xs dark:bg-zinc-800">
									<div className="type-caption flex items-center gap-2 font-semibold text-ink-muted">
										<FileText className="size-3.5 text-ink-faint" />
										<span>Quarterly_Report_2025_Final_v2.pdf</span>
									</div>
									<div className="mt-2 h-1.5 w-3/4 rounded-full bg-hairline" />
								</div>

								<div className="absolute left-10 top-14 w-[85%] rotate-1 rounded-lg border border-hairline bg-white p-3 shadow-xs dark:bg-zinc-800">
									<div className="type-caption flex items-center gap-2 font-semibold text-ink-muted">
										<Globe className="size-3.5 text-ink-faint" />
										<span>34 open Chrome research tabs...</span>
									</div>
									<div className="mt-2 h-1.5 w-1/2 rounded-full bg-hairline" />
								</div>

								<div className="absolute left-8 top-26 w-[88%] -rotate-1 rounded-lg border border-red-200 bg-white p-3.5 shadow-level-1 dark:border-red-900/40 dark:bg-zinc-800">
									<div className="type-caption flex items-center gap-2 font-bold text-red-600 dark:text-red-400">
										<AlertTriangle className="size-3.5 shrink-0" />
										<span>Generic AI hallucination: &quot;Source not found&quot;</span>
									</div>
									<p className="type-caption mt-1 text-ink-muted">
										Flipping between 5 files to verify which claim came from where.
									</p>
								</div>
							</div>

							<ul className="type-body-sm mt-6 space-y-2 text-ink-secondary">
								<li className="flex items-center gap-2">
									<span className="size-1.5 rounded-full bg-red-400" />
									<span>Manual copy-pasting, lost context</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="size-1.5 rounded-full bg-red-400" />
									<span>No way to verify accuracy</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="size-1.5 rounded-full bg-red-400" />
									<span>Hours hand-building notes</span>
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 16 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.45, delay: 0.12 }}
						className="shadow-level-1 flex flex-col justify-between rounded-xl border border-brand/30 bg-white p-6 dark:border-sticker-sky/30 dark:bg-zinc-900 sm:p-7"
					>
						<div>
							<div className="flex items-center justify-between">
								<span className="type-eyebrow inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-brand dark:bg-brand/15">
									<CheckCircle2 className="size-3.5 text-sticker-green" />
									With Studybook LM
								</span>
								<span className="type-eyebrow font-bold text-sticker-green">
									100% Grounded
								</span>
							</div>

							<h3 className="type-heading-3 mt-4 text-ink">
								Unified notebooks, streaming citations, instant study tools
							</h3>

							<div className="relative mt-6 rounded-lg border border-hairline bg-canvas-soft p-4 dark:bg-zinc-800">
								<div className="flex items-center justify-between border-b border-hairline pb-2">
									<div className="flex items-center gap-2">
										<Sparkles className="size-3.5 text-brand" />
										<span className="type-body-sm font-semibold text-ink">
											Synthesized Research Answer
										</span>
									</div>
									<span className="type-eyebrow rounded-xs bg-sticker-green/15 px-2 py-0.5 font-bold text-sticker-green">
										Verified
									</span>
								</div>

								<p className="type-body-sm mt-3 text-ink-secondary">
									&quot;The benchmark shows an 84% speedup in cross-document
									synthesis{" "}
									<span className="rounded-xs bg-brand/15 px-1 py-0.2 font-bold text-brand">
										[1]
									</span>{" "}
									while citation accuracy reaches 99.2% through dense vector
									re-ranking{" "}
									<span className="rounded-xs bg-brand/15 px-1 py-0.2 font-bold text-brand">
										[2]
									</span>
									.&quot;
								</p>

								<div className="mt-4 flex flex-wrap items-center gap-2 border-t border-hairline pt-3">
									<span className="type-eyebrow text-ink-faint">
										Generated:
									</span>
									<span className="type-caption inline-flex items-center gap-1 rounded-md bg-sticker-pink/10 px-2 py-0.5 font-medium text-sticker-pink">
										<BookOpen className="size-2.5" /> 12 Flashcards
									</span>
									<span className="type-caption inline-flex items-center gap-1 rounded-md bg-sticker-green/10 px-2 py-0.5 font-medium text-sticker-green">
										<Check className="size-2.5" /> 5-Question Quiz
									</span>
								</div>
							</div>

							<ul className="type-body-sm mt-6 space-y-2 text-ink-secondary">
								<li className="flex items-center gap-2">
									<CheckCircle2 className="size-3.5 shrink-0 text-sticker-green" />
									<span>Click a citation to jump to its chunk</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="size-3.5 shrink-0 text-sticker-green" />
									<span>Fast, accurate vector search</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="size-3.5 shrink-0 text-sticker-green" />
									<span>Artifacts generated automatically</span>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
