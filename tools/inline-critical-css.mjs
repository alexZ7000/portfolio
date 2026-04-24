import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BROWSER_DIR = join(__dirname, '..', 'dist', 'portfolio', 'browser');

const STYLE_LINK_RE =
    /<link[^>]*\brel=["']stylesheet["'][^>]*\bhref=["']([^"']+\.css)["'][^>]*>/gi;

async function inlineFor(htmlPath) {
    let html;
    try {
        html = await readFile(htmlPath, 'utf8');
    } catch {
        return { path: htmlPath, skipped: true };
    }

    const matches = [...html.matchAll(STYLE_LINK_RE)];
    if (!matches.length) return { path: htmlPath, inlined: 0 };

    let next = html;
    let bytesInlined = 0;
    for (const m of matches) {
        const href = m[1];
        const cssPath = join(BROWSER_DIR, href.replace(/^\/+/, ''));
        let css;
        try {
            css = await readFile(cssPath, 'utf8');
        } catch {
            continue;
        }
        bytesInlined += Buffer.byteLength(css, 'utf8');
        const styleTag = `<style>${css}</style>`;
        next = next.replace(m[0], styleTag);
    }

    await writeFile(htmlPath, next, 'utf8');
    return { path: htmlPath, inlined: matches.length, bytes: bytesInlined };
}

async function run() {
    let entries;
    try {
        entries = await readdir(BROWSER_DIR, { withFileTypes: true });
    } catch (err) {
        console.warn('[inline-css] browser dir not found, skipping:', err.message);
        return;
    }

    const htmlFiles = entries
        .filter((e) => e.isFile() && e.name.endsWith('.html'))
        .map((e) => join(BROWSER_DIR, e.name));

    for (const file of htmlFiles) {
        const result = await inlineFor(file);
        if (result.skipped) continue;
        if (result.inlined) {
            console.log(
                `[inline-css] ${file} <- inlined ${result.inlined} stylesheet(s), ${(result.bytes / 1024).toFixed(1)} KB`,
            );
        } else {
            console.log(`[inline-css] ${file} <- no stylesheets to inline`);
        }
    }
}

run().catch((err) => {
    console.error('[inline-css] failed:', err);
    process.exit(1);
});
