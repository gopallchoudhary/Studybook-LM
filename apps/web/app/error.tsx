"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="flex min-h-dvh flex-col items-center justify-center bg-canvas px-6 text-center">
			<p className="type-eyebrow font-semibold tracking-widest text-brand">
				Something went wrong
			</p>
			<h1 className="type-heading-1 mt-3 text-ink">
				We hit an unexpected error.
			</h1>
			<p className="type-body-md mt-3 max-w-md text-ink-secondary">
				Try again — and if it keeps happening, head back home.
			</p>
			<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
				<button
					type="button"
					onClick={reset}
					className="focus-ring type-button inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-white transition-colors hover:bg-brand-active"
				>
					Try again
				</button>
				<Link
					href="/"
					className="focus-ring type-button inline-flex items-center justify-center rounded-md bg-brand/10 px-6 py-3 text-brand transition-colors hover:bg-brand/15"
				>
					Back home
				</Link>
			</div>
		</main>
	);
}
