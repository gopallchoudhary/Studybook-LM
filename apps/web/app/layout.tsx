import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { env } from "~/env";
import { GlobalProviders } from "~/providers/global";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
	title: {
		default: "Studybook LM · Grounded AI research & learning workspace",
		template: "%s · Studybook LM",
	},
	description:
		"Studybook LM turns your PDFs, web pages, YouTube lectures, and notes into grounded answers with verifiable citations — plus instant summaries, flashcards, and quizzes.",
	applicationName: "Studybook LM",
	keywords: [
		"AI research assistant",
		"grounded citations",
		"notebook",
		"study tools",
		"flashcards",
		"PDF chat",
	],
	alternates: { canonical: "/" },
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${geistMono.variable}`}
			suppressHydrationWarning
		>
			<body>
				<GlobalProviders>{children}</GlobalProviders>
			</body>
		</html>
	);
}
