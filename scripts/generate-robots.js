import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://optimizewise.com/sitemap.xml

# Crawl-delay
Crawl-delay: 10

# Disallow patterns
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.xml$
`;

try {
    writeFileSync(join(__dirname, '../public/robots.txt'), robotsTxt);
    console.log('robots.txt generated successfully!');
} catch (error) {
    console.error('Error generating robots.txt:', error);
    process.exit(1);
}