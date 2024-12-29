import { Badge } from '@/components/ui/badge';

export function BlogPostContent({ post }) {
  // Convert markdown-style content to formatted content
  const formattedContent = post.content
    .split('\n')
    .map((line, index) => {
      // Handle headings
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      }
      
      // Handle lists
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2">
            {line.replace('- ', '')}
          </li>
        );
      }
      
      // Handle numbered lists
      if (line.match(/^\d+\./)) {
        return (
          <li key={index} className="ml-6 mb-2">
            {line.replace(/^\d+\./, '').trim()}
          </li>
        );
      }
      
      // Handle regular paragraphs
      if (line.trim()) {
        return (
          <p key={index} className="mb-4 text-gray-600 leading-relaxed">
            {line}
          </p>
        );
      }
      
      return null;
    })
    .filter(Boolean);

  return (
    <article className="bg-white rounded-xl shadow-sm">
      <div className="mx-auto px-8 py-12">
        <div className="space-y-4">
          {formattedContent}
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">TAGS</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
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
      </div>
    </article>
  );
}