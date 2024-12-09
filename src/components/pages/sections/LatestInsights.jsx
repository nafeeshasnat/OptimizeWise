import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const posts = [
  {
    title: 'The Future of CRO: AI-Driven Testing',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we approach conversion optimization.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    category: 'Trends',
    readTime: '5 min read',
  },
  {
    title: 'E-commerce Case Study: 200% Revenue Increase',
    excerpt: 'Learn how we helped an e-commerce client double their revenue through strategic A/B testing.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
    category: 'Case Study',
    readTime: '8 min read',
  },
  {
    title: '2024 CRO Benchmarks Report',
    excerpt: 'Comprehensive analysis of conversion rates across industries with actionable insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Research',
    readTime: '12 min read',
  },
];

export function LatestInsights() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay ahead with our latest findings and success stories
            </p>
          </div>
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1E73BE] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-[#1E73BE]">
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}