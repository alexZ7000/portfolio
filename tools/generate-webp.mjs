import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'src', 'assets');
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await walk(full)));
        } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
            files.push(full);
        }
    }
    return files;
}

async function generate() {
    const files = await walk(ROOT);
    if (!files.length) {
        console.log('[webp] no raster images found under src/assets');
        return;
    }

    let converted = 0;
    let skipped = 0;

    for (const file of files) {
        const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp');

        if (existsSync(webpPath)) {
            const [src, out] = await Promise.all([stat(file), stat(webpPath)]);
            if (out.mtimeMs >= src.mtimeMs) {
                skipped++;
                continue;
            }
        }

        await sharp(file).webp({ quality: 82, effort: 6 }).toFile(webpPath);
        converted++;
        console.log(`[webp] ${file} → ${webpPath}`);
    }

    console.log(`[webp] done. converted=${converted} skipped=${skipped}`);
}

generate().catch((err) => {
    console.error('[webp] failed:', err);
    process.exit(1);
});
