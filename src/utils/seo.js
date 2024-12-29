// Generate dynamic meta tags for pages
export function generateMetaTags(page) {
    const baseUrl = 'https://optimizewise.com';
    const defaultDescription = 'Data-driven CRO and A/B testing services to improve conversion rates and drive business growth';
    const defaultImage = `${baseUrl}/og-image.jpg`;

    const pageTitles = {
        home: 'CRO & A/B Testing Services | Optimize Your Conversion Rate',
        services: 'Professional CRO Services | OptimizeWise',
        about: 'About Us | OptimizeWise - CRO Experts',
        contact: 'Contact OptimizeWise | Get a Free Consultation',
        caseStudies: 'CRO Case Studies & Success Stories | OptimizeWise',
        blog: 'CRO Insights & Resources | OptimizeWise Blog'
    };

    return {
        title: pageTitles[page] || pageTitles.home,
        description: defaultDescription,
        ogImage: defaultImage,
        canonicalUrl: `${baseUrl}${page === 'home' ? '' : `/${page}`}`,
        robots: 'index, follow'
    };
}

// Generate structured data for different page types
export function generateStructuredData(type, data = {}) {
    const baseData = {
        "@context": "https://schema.org",
        "@type": type,
        "name": "OptimizeWise",
        "url": "https://optimizewise.com"
    };

    switch (type) {
        case "Organization":
            return {
                ...baseData,
                "logo": "https://optimizewise.com/logo.png",
                "sameAs": [
                    "https://linkedin.com/company/optimizewise",
                    "https://twitter.com/optimizewise"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-555-5555",
                    "contactType": "customer service",
                    "email": "contact@optimizewise.com"
                }
            };
        case "Article":
            return {
                ...baseData,
                "@type": "Article",
                "headline": data.title,
                "author": {
                    "@type": "Person",
                    "name": data.author
                },
                "datePublished": data.publishedAt,
                "image": data.image
            };
        default:
            return baseData;
    }
}