import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ValuePropsCTA() {
  return (
    <div className="text-center">
      <Link to="/why-cro">
        <Button
          className="bg-[hsl(var(--theme-accent))] hover:bg-[#1E73BE] text-white hover:text-white px-2 md:px-6"
        >
          Learn Why CRO is Essential for Growth <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}