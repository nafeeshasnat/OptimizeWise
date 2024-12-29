import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { staticRoutes, getBlogRoutes, getCaseStudyRoutes } from '../src/utils/routes.js';
import { sitemapConfig } from './sitemap/config.js';
import { generateSitemapXML } from './sitemap/generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateSitemap() {
    try {
        // Combine all routes
        const allRoutes = [
            ...staticRoutes,
            ...getBlogRoutes(),
            ...getCaseStudyRoutes()
        ];

        // Generate sitemap XML
        const sitemap = await generateSitemapXML(allRoutes, sitemapConfig);

        // Write sitemap to file
        const outputPath = join(__dirname, '../public/sitemap.xml');
        writeFileSync(outputPath, sitemap);
        console.log('✓ Sitemap generated successfully!');

    } catch (error) {
        console.error('✗ Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();