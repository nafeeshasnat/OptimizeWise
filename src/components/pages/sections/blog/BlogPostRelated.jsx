import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

function calculateRelevanceScore(currentPost, otherPost) {
  let score = 0;
  
  // Calculate tag overlap
  const commonTags = currentPost.tags.filter(tag => 
    otherPost.tags.includes(tag)
  );
  score += commonTags.length * 2; // Weight tag matches more heavily
  
  // Add points for same category
  if (currentPost.category === otherPost.category) {
    score += 1;
  }
  
  return score;
}

export function BlogPostRelated({ currentPost }) {
  // Get all posts except the current one and calculate their relevance scores
  const relatedPosts = blogPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      ...post,
      relevanceScore: calculateRelevanceScore(currentPost, post)
    }))
    // Sort by relevance score (highest first)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    // Take top 3 most relevant posts
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[hsl(var(--theme-accent))] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                  
                  {/* Show matching tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags
                      .filter(tag => currentPost.tags.includes(tag))
                      .map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline"
                          className="text-[hsl(var(--theme-accent))] border-[hsl(var(--theme-accent))]"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}