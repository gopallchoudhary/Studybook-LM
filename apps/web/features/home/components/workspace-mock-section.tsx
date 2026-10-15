"use client";

import type { ElementType } from "react";
import { motion } from "motion/react";
import {
	BookOpen,
	CheckCircle2,
	FileCode,
	FileText,
	Globe,
	HelpCircle,
	Network,
	Sparkles,
	Video,
} from "lucide-react";

const SOURCES: { icon: ElementType; name: string; tone: string; bg: string }[] = [
	{
		icon: FileText,
		name: "Research.pdf",
		tone: "text-sticker-teal",
		bg: "bg-sticker-teal/12",
	},
	{
		icon: Video,
		name: "Lecture · 42:10",
		tone: "text-sticker-pink",
		bg: "bg-sticker-pink/12",
	},
	{
		icon: Globe,
		name: "Article.html",
		tone: "text-sticker-sky",
		bg: "bg-sticker-sky/15",
	},
	{
		icon: FileCode,
		name: "Notes.md",
		tone: "text-sticker-purple-deep dark:text-sticker-purple",
		bg: "bg-sticker-purple/20",
	},
];

const ARTIFACTS: {
	icon: ElementType;
	label: string;
	tone: string;
	bg: string;
}[] = [
	{
		icon: BookOpen,
		label: "12 flashcards",
		tone: "text-sticker-pink",
		bg: "bg-sticker-pink/10",
	},
	{
		icon: HelpCircle,
		label: "5-question quiz",
		tone: "text-sticker-green",
		bg: "bg-sticker-green/10",
	},
	{
		icon: Network,
		label: "Mind map",
		tone: "text-sticker-purple-deep dark:text-sticker-purple",
		bg: "bg-sticker-purple/15",
	},
];

function Citation({ n }: { n: number }) {
	return (
		<span className="mx-0.5 rounded-xs bg-brand/15 px-1 font-semibold text-brand">
			{`[${n}]`}
		</span>
	);
}

export function WorkspaceMockSection() {
	return (
		<section id="see-it" className="relative scroll-mt-20 py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<div className="type-eyebrow shadow-level-1 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-2.5 py-1 text-brand dark:bg-zinc-900">
						<span>One workspace, end to end</span>
					</div>

					<h2 className="type-heading-1 mt-4 text-ink">
						Ask anything. See exactly where it came from.
					</h2>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5 }}
					className="mx-auto mt-14 max-w-5xl"
				>
					<div className="shadow-level-2 overflow-hidden rounded-2xl border border-hairline bg-white dark:bg-zinc-900">
						<div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
							<div className="flex gap-1.5">
								<span className="size-2.5 rounded-full bg-sticker-pink/70" />
								<span className="size-2.5 rounded-full bg-sticker-orange/70" />
								<span className="size-2.5 rounded-full bg-sticker-green/70" />
							</div>
							<span className="type-caption text-ink-faint">
								Studybook LM · Neuroscience 201
							</span>
						</div>

						<div className="grid lg:grid-cols-[260px_1fr]">
							<aside className="border-b border-hairline p-4 lg:border-b-0 lg:border-r">
								<p className="type-eyebrow uppercase tracking-wider text-ink-faint">
									Sources
								</p>
								<ul className="mt-3 space-y-2">
									{SOURCES.map((source, index) => {
										const Icon = source.icon;
										return (
											<motion.li
												key={source.name}
												initial={{ opacity: 0, x: -8 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.35, delay: index * 0.08 }}
												className="flex items-center gap-2.5 rounded-lg border border-hairline bg-canvas-soft/60 px-2.5 py-2 dark:bg-zinc-800/60"
											>
												<span
													className={`grid size-7 shrink-0 place-items-center rounded-md ${source.bg} ${source.tone}`}
												>
													<Icon className="size-3.5" />
												</span>
												<span className="type-caption truncate text-ink-secondary">
													{source.name}
												</span>
											</motion.li>
										);
									})}
								</ul>
							</aside>

							<div className="p-4 sm:p-6">
								<div className="ml-auto max-w-md rounded-2xl rounded-br-md border border-hairline bg-canvas-soft px-4 py-2.5 dark:bg-zinc-800">
									<p className="type-body-sm text-ink">
										How does long-term potentiation work?
									</p>
								</div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.45, delay: 0.25 }}
									className="mt-4"
								>
									<div className="flex items-center gap-2">
										<span className="grid size-6 place-items-center rounded-md bg-brand text-white">
											<Sparkles className="size-3" />
										</span>
										<span className="type-eyebrow text-ink-muted">
											Grounded answer
										</span>
										<span className="type-caption ml-auto inline-flex items-center gap-1 font-semibold text-sticker-green">
											<CheckCircle2 className="size-3.5" />
											Verified
										</span>
									</div>

									<p className="type-body-sm mt-2.5 text-ink-secondary">
										Repeated stimulation strengthens the synapse, raising the
										postsynaptic response
										<Citation n={1} /> through NMDA receptor activation and
										calcium influx
										<Citation n={2} />.
									</p>

									<div className="mt-5 border-t border-hairline pt-4">
										<p className="type-eyebrow uppercase tracking-wider text-ink-faint">
											Generated artifacts
										</p>
										<div className="mt-2.5 flex flex-wrap gap-2">
											{ARTIFACTS.map((artifact) => {
												const Icon = artifact.icon;
												return (
													<span
														key={artifact.label}
														className={`type-caption inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium ${artifact.bg} ${artifact.tone}`}
													>
														<Icon className="size-3" />
														{artifact.label}
													</span>
												);
											})}
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
