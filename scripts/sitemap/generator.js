import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function generateSitemapXML(routes, config) {
    const stream = new SitemapStream({ hostname: config.hostname });

    try {
        const sitemap = await streamToPromise(
            Readable.from(routes).pipe(stream)
        ).then(data => data.toString());

        return sitemap;
    } catch (error) {
        throw new Error(`Error generating sitemap: ${error.message}`);
    }
}