import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export function BlogNewsletter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-[hsl(var(--theme-accent))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-[hsl(var(--theme-accent))]" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest insights, tips, and trends in CRO and A/B testing delivered straight to your inbox.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-[hsl(var(--theme-accent))] hover:bg-[hsl(var(--theme-accent))]/90 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}