"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "~/components/brand-logo";

export function LandingFooter() {
	return (
		<footer className="border-t border-hairline bg-canvas-soft py-12 text-ink-secondary dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
					{/* Brand Info (6 cols) */}
					<div className="md:col-span-6">
						<Link
							href="/"
							className="focus-ring inline-flex items-center gap-2 rounded-md font-bold tracking-tight text-ink dark:text-white"
						>
							<BrandLogo className="size-12 rounded-md" size={28} />
							<span className="type-title font-bold tracking-tight">
								Studybook LM
							</span>
						</Link>

						<p className="type-caption mt-3.5 max-w-sm leading-relaxed text-ink-muted dark:text-zinc-400">
							An AI-powered research and learning workspace. Create notebooks,
							add PDFs, websites, YouTube lectures, and notes to synthesize
							grounded answers with verifiable citations.
						</p>
					</div>

					{/* Product Links (3 cols) */}
					<div className="md:col-span-3">
						<h4 className="type-eyebrow font-bold uppercase tracking-wider text-ink dark:text-zinc-100">
							Product
						</h4>
						<ul className="type-caption mt-3.5 space-y-2.5">
							<li>
								<a
									href="#how-it-works"
									className="focus-ring rounded-sm text-ink-secondary transition-colors hover:text-ink dark:text-zinc-400 dark:hover:text-white"
								>
									How It Works
								</a>
							</li>
							<li>
								<a
									href="#before-after"
									className="focus-ring rounded-sm text-ink-secondary transition-colors hover:text-ink dark:text-zinc-400 dark:hover:text-white"
								>
									Before & After
								</a>
							</li>
							<li>
								<a
									href="#use-cases"
									className="focus-ring rounded-sm text-ink-secondary transition-colors hover:text-ink dark:text-zinc-400 dark:hover:text-white"
								>
									Use Cases
								</a>
							</li>
							<li>
								<a
									href="#pricing"
									className="focus-ring rounded-sm text-ink-secondary transition-colors hover:text-ink dark:text-zinc-400 dark:hover:text-white"
								>
									Pricing Plans
								</a>
							</li>
						</ul>
					</div>

					{/* Account (3 cols) */}
					<div className="md:col-span-3">
						<h4 className="type-eyebrow font-bold uppercase tracking-wider text-ink dark:text-zinc-100">
							Account
						</h4>
						<ul className="type-caption mt-3.5 space-y-2.5">
							<li>
								<Link
									href="/login"
									className="focus-ring rounded-sm text-ink-secondary transition-colors hover:text-ink dark:text-zinc-400 dark:hover:text-white"
								>
									Sign In
								</Link>
							</li>
							<li>
								<Link
									href="/sign-up"
									className="focus-ring rounded-sm text-ink-secondary transition-colors hover:text-ink dark:text-zinc-400 dark:hover:text-white"
								>
									Create Account
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard"
									className="focus-ring rounded-sm text-ink-secondary transition-colors hover:text-ink dark:text-zinc-400 dark:hover:text-white"
								>
									Workspace Dashboard
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="type-caption mt-10 border-t border-hairline pt-5 text-ink-muted dark:border-zinc-800 dark:text-zinc-500 sm:flex sm:items-center sm:justify-between">
					<p>
						© {new Date().getFullYear()} Studybook LM. Grounded AI workspace.
					</p>
					<p className="mt-1 sm:mt-0">Read deeply. Remember more.</p>
				</div>
			</div>
		</footer>
	);
}
