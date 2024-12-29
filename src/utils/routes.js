// Update imports to use relative paths
import { blogPosts } from '../data/blogPosts.js';
import { caseStudies } from '../data/caseStudies.js';

// Static routes configuration
export const staticRoutes = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/services', changefreq: 'monthly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/case-studies', changefreq: 'weekly', priority: 0.9 },
    { url: '/blog', changefreq: 'weekly', priority: 0.9 },
];

// Generate dynamic blog routes
export function getBlogRoutes() {
    return blogPosts.map(post => ({
        url: `/blog/${post.slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: post.publishedAt
    }));
}

// Generate dynamic case study routes
export function getCaseStudyRoutes() {
    return caseStudies.map(study => ({
        url: `/case-studies/${study.slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
    }));
}