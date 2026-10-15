"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";

const STARTER_FEATURES = [
	"5 research notebooks",
	"PDF, YouTube & web sources",
	"Cited vector search",
	"Basic flashcards & summaries",
	"Community support",
];

const PRO_FEATURES = [
	"Unlimited notebooks",
	"Long-term memory",
	"Unlimited Studio artifacts",
	"Live web search",
	"Priority flagship models",
];

export function PricingSection() {
	return (
		<section id="pricing" className="relative scroll-mt-20 py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<div className="type-eyebrow shadow-level-1 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-2.5 py-1 text-brand dark:bg-zinc-900">
						<span>Simple Pricing</span>
					</div>

					<h2 className="type-heading-1 mt-4 text-ink">
						Start for free. Scale when you need more power.
					</h2>
				</div>

				<div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.45 }}
						className="shadow-level-1 flex flex-col justify-between rounded-xl border border-hairline bg-white p-6 dark:bg-zinc-900 sm:p-7"
					>
						<div>
							<div className="flex items-center justify-between">
								<span className="type-eyebrow uppercase tracking-wider text-ink-muted">
									Starter Plan
								</span>
								<span className="type-eyebrow rounded-full bg-canvas-soft px-2.5 py-0.5 text-ink-secondary dark:bg-zinc-800 dark:text-zinc-300">
									Free Forever
								</span>
							</div>

							<div className="mt-4 flex items-baseline gap-1">
								<span className="type-heading-1 text-ink">$0</span>
								<span className="type-caption text-ink-muted">/ forever</span>
							</div>

							<ul className="type-body-sm mt-6 space-y-3 border-t border-hairline pt-6 text-ink-secondary">
								{STARTER_FEATURES.map((feature) => (
									<li key={feature} className="flex items-center gap-2.5">
										<Check className="size-4 shrink-0 text-sticker-green" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="mt-8">
							<Link
								href="/sign-up"
								className="type-button inline-flex w-full items-center justify-center gap-2 rounded-md border border-hairline bg-canvas-soft py-2.5 text-ink transition-all hover:bg-white hover:border-ink-faint dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
							>
								<span>Get started free</span>
								<ArrowRight className="size-4" />
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.45, delay: 0.1 }}
						className="shadow-level-2 relative flex flex-col justify-between rounded-xl border border-hairline bg-white p-6 dark:bg-zinc-900 sm:p-7"
					>
						<div className="absolute -top-3 right-6">
							<span className="type-eyebrow inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 font-bold text-white shadow-xs">
								<Sparkles className="size-3" />
								Featured
							</span>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<span className="type-eyebrow font-bold uppercase tracking-wider text-brand">
									Researcher Pro
								</span>
							</div>

							<div className="mt-4 flex items-baseline gap-1">
								<span className="type-heading-1 text-ink">$12</span>
								<span className="type-caption text-ink-muted">/ month</span>
							</div>

							<ul className="type-body-sm mt-6 space-y-3 border-t border-hairline pt-6 text-ink-secondary">
								{PRO_FEATURES.map((feature) => (
									<li key={feature} className="flex items-center gap-2.5">
										<Check className="size-4 shrink-0 text-brand" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="mt-8">
							<Link
								href="/sign-up"
								className="type-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-white transition-all hover:bg-brand-active active:scale-[0.9]"
							>
								<Zap className="size-4" />
								<span>Start 14-day free trial</span>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
