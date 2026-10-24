import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "assets/brand-logo.png");

const square = (size) =>
	sharp(source).resize(size, size, {
		fit: "contain",
		background: { r: 0, g: 0, b: 0, alpha: 0 },
	});

const outputs = [
	{ path: resolve(root, "app/icon.png"), size: 48, format: "png" },
	{ path: resolve(root, "app/apple-icon.png"), size: 180, format: "png" },
	{ path: resolve(root, "public/brand-logo.png"), size: 256, format: "png" },
];

for (const { path, size, format } of outputs) {
	await mkdir(dirname(path), { recursive: true });
	await square(size)
		.toFormat(format, format === "webp" ? { quality: 90 } : undefined)
		.toFile(path);
	console.log(`generated ${path} (${size}px ${format})`);
}
