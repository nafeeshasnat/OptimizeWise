import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

export function BlogPostHero({ post }) {
  return (
    <div className="relative py-24 bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/50" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center text-sm text-gray-300">
              <Calendar className="h-4 w-4 mr-1" />
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm text-gray-300">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}