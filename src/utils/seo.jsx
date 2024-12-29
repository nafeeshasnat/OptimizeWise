import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const DEFAULT_SEO = {
    title: 'OptimizeWise - CRO & A/B Testing Services',
    description: 'Data-driven CRO and A/B testing services to improve conversion rates and drive business growth',
    image: 'https://optimizewise.com/og-image.jpg',
    siteUrl: 'https://optimizewise.com',
    keywords: 'CRO, conversion rate optimization, A/B testing, digital optimization',
};

/**
 * SEO component for managing meta tags
 * @param {Object} props - Component props
 * @param {string} [props.title] - Page title
 * @param {string} [props.description] - Page description
 * @param {string} [props.image] - OG image URL
 * @param {boolean} [props.article] - Whether the page is an article
 * @param {string} [props.keywords] - SEO keywords
 */
export function SEO({
    title = DEFAULT_SEO.title,
    description = DEFAULT_SEO.description,
    image = DEFAULT_SEO.image,
    article = false,
    keywords = DEFAULT_SEO.keywords,
}) {
    const { pathname } = useLocation();

    const seo = {
        title: title || DEFAULT_SEO.title,
        description: description || DEFAULT_SEO.description,
        image: `${image || DEFAULT_SEO.image}`,
        url: `${DEFAULT_SEO.siteUrl}${pathname}`,
        keywords: keywords || DEFAULT_SEO.keywords,
    };

    const schemaOrgJSONLD = article
        ? {
            '@context': 'http://schema.org',
            '@type': 'Article',
            headline: seo.title,
            description: seo.description,
            image: seo.image,
            url: seo.url,
        }
        : {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: 'OptimizeWise',
            url: DEFAULT_SEO.siteUrl,
            logo: `${DEFAULT_SEO.siteUrl}/logo.png`,
            description: DEFAULT_SEO.description,
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
            },
            sameAs: [
                'https://twitter.com/optimizewise',
                'https://linkedin.com/company/optimizewise',
            ],
        };

    return (
        <Helmet>
            {/* General tags */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="keywords" content={seo.keywords} />
            <link rel="canonical" href={seo.url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            {/* Schema.org tags */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Helmet>
    );
}