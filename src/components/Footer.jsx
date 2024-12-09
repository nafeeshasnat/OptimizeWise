import { Button } from '@/components/ui/button';
import { Laptop, Mail, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] py-16">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Laptop className="h-6 w-6 text-[#1E73BE]" />
            <span className="font-bold text-2xl text-[#1E73BE]">OptimizeWise</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Data-driven CRO for sustainable growth.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Services', 'About', 'Case Studies', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-muted-foreground hover:text-[#1E73BE] hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {['Blog', 'Guides', 'ROI Calculator', 'Whitepapers'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-muted-foreground hover:text-[#1E73BE] hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact & Social</h3>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Mail className="h-4 w-4" /> contact@optimizewise.com
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 border-t pt-8">
        <p className="text-sm text-center text-muted-foreground">
          © {currentYear} OptimizeWise. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}