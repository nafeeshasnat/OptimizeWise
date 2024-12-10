import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export function ServiceCard({ image, title, description }) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="w-16 h-16 mb-4">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="link" className="p-0 h-auto text-[#1E73BE]">
          Learn More →
        </Button>
      </CardContent>
    </Card>
  );
}