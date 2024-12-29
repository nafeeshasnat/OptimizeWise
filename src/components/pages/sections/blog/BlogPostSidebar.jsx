import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function BlogPostSidebar({ post }) {
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Expert in conversion optimization and A/B testing with over a decade of experience.
          </p>
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Subscribe to Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest insights and updates delivered to your inbox.
          </p>
          <div className="space-y-4">
            <Input placeholder="Enter your email" />
            <Button className="w-full bg-[hsl(var(--theme-accent))] hover:bg-[hsl(var(--theme-accent))]/90 text-white">
              <Mail className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}