import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-dvh flex-col items-center justify-center bg-canvas px-6 text-center">
			<p className="type-eyebrow font-semibold tracking-widest text-brand">
				404
			</p>
			<h1 className="type-heading-1 mt-3 text-ink">
				This page went missing.
			</h1>
			<p className="type-body-md mt-3 max-w-md text-ink-secondary">
				The page you&apos;re looking for doesn&apos;t exist or may have been
				moved.
			</p>
			<Link
				href="/"
				className="focus-ring type-button mt-8 inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-white transition-colors hover:bg-brand-active"
			>
				Back home
			</Link>
		</main>
	);
}
