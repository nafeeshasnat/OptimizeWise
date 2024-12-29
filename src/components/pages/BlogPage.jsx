import { BlogHero } from './sections/blog/BlogHero';
import { BlogGrid } from './sections/blog/BlogGrid';
import { BlogNewsletter } from './sections/blog/BlogNewsletter';
import { SEO } from '@/utils/seo.jsx';

export function BlogPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="CRO & A/B Testing Blog | OptimizeWise"
        description="Expert insights, guides, and case studies on Conversion Rate Optimization and A/B testing strategies."
        keywords="CRO blog, A/B testing blog, conversion optimization, digital marketing"
      />
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  );
}