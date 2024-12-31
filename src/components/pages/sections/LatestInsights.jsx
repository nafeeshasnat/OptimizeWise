import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

export function LatestInsights() {
  // Get the 3 most recent blog posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="container">
        <div className="flex justify-between md:items-end mb-12 flex-col md:flex-row gap-5 md:gap-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Stay ahead with our latest findings and success stories
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" size="lg">
              View All Posts
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[hsl(var(--theme-accent))] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-[hsl(var(--theme-accent))]">
                    Read More →
                  </Button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}