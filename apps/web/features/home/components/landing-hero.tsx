"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, FileCheck2, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { HeroConvergingVisual } from "./hero-converging-visual";
import { StickerConstellation } from "./sticker-constellation";

const PROOF = [
	{ icon: ShieldCheck, label: "Grounded answers", tone: "text-sticker-green" },
	{ icon: FileCheck2, label: "Verified citations", tone: "text-sticker-sky" },
	{ icon: Sparkles, label: "Studio artifacts", tone: "text-sticker-pink" },
	{ icon: Lock, label: "Private workspace", tone: "text-sticker-teal" },
];

export function LandingHero() {
	const scrollToHowItWorks = (e: React.MouseEvent) => {
		e.preventDefault();
		document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="relative overflow-hidden bg-night pb-20 pt-12 text-white md:pb-28 md:pt-20">
			<StickerConstellation />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<motion.div
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35 }}
						className="type-eyebrow inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white backdrop-blur-md"
					>
						<Sparkles className="size-3" />
						<span>AI Research & Learning Workspace</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.08 }}
						className="type-display-1 mt-6 text-white"
					>
						Turn scattered sources into{" "}
						<span className="text-sticker-sky">grounded understanding.</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.16 }}
						className="type-body-md mx-auto mt-6 max-w-xl text-white/70"
					>
						Every answer traces back to your own PDFs, lectures, and notes.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.24 }}
						className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4"
					>
						<Link
							href="/sign-up"
							className="type-button shadow-level-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-zinc-900 transition-all hover:bg-white/90 active:scale-[0.9] sm:w-auto"
						>
							<span>Start for free</span>
							<ArrowRight className="size-4" />
						</Link>

						<a
							href="#how-it-works"
							onClick={scrollToHowItWorks}
							className="type-button inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.9] sm:w-auto"
						>
							<span>See how it works</span>
							<span className="text-white/60">↓</span>
						</a>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.35 }}
					className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
				>
					{PROOF.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.label}
								className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 backdrop-blur-md"
							>
								<Icon className={`size-4 ${item.tone}`} />
								<span className="type-caption text-white/80">
									{item.label}
								</span>
							</div>
						);
					})}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 0.4 }}
					className="mt-14 sm:mt-18"
				>
					<HeroConvergingVisual />
				</motion.div>
			</div>
		</section>
	);
}
