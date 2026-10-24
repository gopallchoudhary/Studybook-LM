import type { ElementType, ReactNode } from "react";
import { cn } from "~/lib/utils";

export type StickerColor =
	| "sky"
	| "purple"
	| "pink"
	| "orange"
	| "teal"
	| "green"
	| "brand";

const STICKER: Record<StickerColor, { band: string; icon: string; dot: string }> =
	{
		sky: {
			band: "bg-sticker-sky/15",
			icon: "text-sticker-sky",
			dot: "bg-sticker-sky",
		},
		purple: {
			band: "bg-sticker-purple/25",
			icon: "text-sticker-purple-deep dark:text-sticker-purple",
			dot: "bg-sticker-purple",
		},
		pink: {
			band: "bg-sticker-pink/12",
			icon: "text-sticker-pink",
			dot: "bg-sticker-pink",
		},
		orange: {
			band: "bg-sticker-orange/12",
			icon: "text-sticker-orange",
			dot: "bg-sticker-orange",
		},
		teal: {
			band: "bg-sticker-teal/15",
			icon: "text-sticker-teal",
			dot: "bg-sticker-teal",
		},
		green: {
			band: "bg-sticker-green/12",
			icon: "text-sticker-green",
			dot: "bg-sticker-green",
		},
		brand: {
			band: "bg-brand/12",
			icon: "text-brand",
			dot: "bg-brand",
		},
	};

export const stickerTones = STICKER;

type IllustrationTileProps = {
	sticker: StickerColor;
	icon: ElementType;
	marker?: string;
	eyebrow?: string;
	title: string;
	description?: string;
	footer?: ReactNode;
	className?: string;
};

export function IllustrationTile({
	sticker,
	icon: Icon,
	marker,
	eyebrow,
	title,
	description,
	footer,
	className,
}: IllustrationTileProps) {
	const tone = STICKER[sticker];

	return (
		<div
			className={cn(
				"group shadow-level-1 flex flex-col overflow-hidden rounded-xl border border-hairline bg-white transition-all duration-200 hover:-translate-y-0.5 dark:bg-zinc-900",
				className,
			)}
		>
			<div className={cn("relative grid h-28 place-items-center", tone.band)}>
				{marker ? (
					<span className="absolute right-4 top-3 font-mono text-sm font-semibold text-ink-muted">
						{marker}
					</span>
				) : null}

				<span
					className={cn(
						"grid size-14 place-items-center rounded-xl bg-white shadow-level-1 dark:bg-zinc-900",
						tone.icon,
					)}
				>
					<Icon className="size-7" />
				</span>
			</div>

			<div className="flex flex-1 flex-col p-6">
				{eyebrow ? (
					<span className="type-eyebrow uppercase tracking-wider text-ink-muted">
						{eyebrow}
					</span>
				) : null}

				<h3 className={cn("type-heading-3 text-ink", eyebrow && "mt-1")}>
					{title}
				</h3>

				{description ? (
					<p className="type-body-sm mt-2 text-ink-secondary">{description}</p>
				) : null}

				{footer ? (
					<div className="mt-auto pt-6">
						<div className="border-t border-hairline pt-4">{footer}</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
