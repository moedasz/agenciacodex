import sharp from "sharp";
import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_DIR = path.join(PUBLIC_DIR, "img");

const TARGETS = [
    {
        src: "hero-mobile.webp",
        slug: "hero-mobile",
        widths: [480, 768, 1080],
        formats: ["avif", "webp"],
        quality: { avif: 55, webp: 72 },
    },
    {
        src: "hero-desktop.webp",
        slug: "hero-desktop",
        widths: [1024, 1440, 1920],
        formats: ["avif", "webp"],
        quality: { avif: 55, webp: 72 },
    },
    {
        src: "operations-room.webp",
        slug: "operations-room",
        widths: [768, 1200, 1512],
        formats: ["avif", "webp"],
        quality: { avif: 55, webp: 72 },
    },
    {
        src: "logoagencia.png",
        slug: "logoagencia",
        widths: [150, 300, 450],
        formats: ["avif", "webp", "png"],
        quality: { avif: 70, webp: 85, png: 90 },
    },
    {
        src: "cover-team.webp",
        slug: "cover-team",
        widths: [1200],
        formats: ["webp"],
        quality: { webp: 75 },
    },
];

async function fileExists(p) {
    try {
        await stat(p);
        return true;
    } catch {
        return false;
    }
}

async function run() {
    await mkdir(OUT_DIR, { recursive: true });
    const report = [];

    for (const t of TARGETS) {
        const srcPath = path.join(PUBLIC_DIR, t.src);
        if (!(await fileExists(srcPath))) {
            console.warn(`skip (missing): ${t.src}`);
            continue;
        }
        const input = await readFile(srcPath);
        const meta = await sharp(input).metadata();
        const originalSize = input.byteLength;
        console.log(
            `\n${t.src}  ${meta.width}x${meta.height}  ${(originalSize / 1024).toFixed(1)} KiB`,
        );

        for (const w of t.widths) {
            const targetW = Math.min(w, meta.width ?? w);
            for (const fmt of t.formats) {
                const outName = `${t.slug}-${w}.${fmt}`;
                const outPath = path.join(OUT_DIR, outName);
                let pipeline = sharp(input).resize({ width: targetW, withoutEnlargement: true });
                if (fmt === "avif") {
                    pipeline = pipeline.avif({ quality: t.quality.avif ?? 55, effort: 6 });
                } else if (fmt === "webp") {
                    pipeline = pipeline.webp({ quality: t.quality.webp ?? 72, effort: 6 });
                } else if (fmt === "png") {
                    pipeline = pipeline.png({ quality: t.quality.png ?? 90, compressionLevel: 9 });
                }
                const buf = await pipeline.toBuffer();
                await writeFile(outPath, buf);
                console.log(
                    `  -> ${outName.padEnd(32)} ${(buf.byteLength / 1024).toFixed(1).padStart(7)} KiB`,
                );
                report.push({ src: t.src, out: outName, width: w, fmt, bytes: buf.byteLength });
            }
        }
    }

    const reportPath = path.join(OUT_DIR, "_report.json");
    await writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(`\nReport written to ${reportPath}`);
}

run().catch((e) => {
    console.error(e);
    process.exit(1);
});
