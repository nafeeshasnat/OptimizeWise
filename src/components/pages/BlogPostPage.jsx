import { useParams } from 'react-router-dom';
import { BlogPostHero } from './sections/blog/BlogPostHero';
import { BlogPostContent } from './sections/blog/BlogPostContent';
import { BlogPostRelated } from './sections/blog/BlogPostRelated';
import { blogPosts } from '@/data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogPostHero post={post} />
      <div className="container py-16">
        <BlogPostContent post={post} />
      </div>
      <BlogPostRelated currentPost={post} />
    </div>
  );
}