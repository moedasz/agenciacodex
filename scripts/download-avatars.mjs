import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "public", "img", "avatars");

const AVATARS = [
    { slug: "women-44", url: "https://randomuser.me/api/portraits/thumb/women/44.jpg" },
    { slug: "men-32", url: "https://randomuser.me/api/portraits/thumb/men/32.jpg" },
    { slug: "men-75", url: "https://randomuser.me/api/portraits/thumb/men/75.jpg" },
    { slug: "men-22", url: "https://randomuser.me/api/portraits/thumb/men/22.jpg" },
    { slug: "women-68", url: "https://randomuser.me/api/portraits/thumb/women/68.jpg" },
    { slug: "women-52", url: "https://randomuser.me/api/portraits/thumb/women/52.jpg" },
    { slug: "women-33", url: "https://randomuser.me/api/portraits/thumb/women/33.jpg" },
    { slug: "women-17", url: "https://randomuser.me/api/portraits/thumb/women/17.jpg" },
    { slug: "men-45", url: "https://randomuser.me/api/portraits/thumb/men/45.jpg" },
    { slug: "men-67", url: "https://randomuser.me/api/portraits/thumb/men/67.jpg" },
];

async function run() {
    await mkdir(OUT_DIR, { recursive: true });

    for (const a of AVATARS) {
        const res = await fetch(a.url);
        if (!res.ok) throw new Error(`${a.url} → ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        const base = sharp(buf).resize({ width: 96, height: 96, fit: "cover" });
        const webp = await base.clone().webp({ quality: 78, effort: 6 }).toBuffer();
        const avif = await base.clone().avif({ quality: 60, effort: 6 }).toBuffer();
        await writeFile(path.join(OUT_DIR, `${a.slug}.webp`), webp);
        await writeFile(path.join(OUT_DIR, `${a.slug}.avif`), avif);
        console.log(
            `${a.slug.padEnd(12)}  webp ${(webp.byteLength / 1024).toFixed(1)}KiB  avif ${(avif.byteLength / 1024).toFixed(1)}KiB`,
        );
    }
}

run().catch((e) => {
    console.error(e);
    process.exit(1);
});
