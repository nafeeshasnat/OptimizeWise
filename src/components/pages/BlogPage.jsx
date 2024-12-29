import { BlogHero } from './sections/blog/BlogHero';
import { BlogGrid } from './sections/blog/BlogGrid';
import { BlogNewsletter } from './sections/blog/BlogNewsletter';

export function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  );
}