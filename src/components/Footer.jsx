import { Button } from '@/components/ui/button';
import { Laptop, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  { label: 'Why CRO', href: '/why-cro' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'ROI Calculator', href: '/#calculator' }
];

const company = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/careers' }
];

const services = [
  { label: 'A/B Testing', href: '/services#testing' },
  { label: 'User Research', href: '/services#research' },
  { label: 'Analytics Setup', href: '/services#analytics' },
  { label: 'CRO Training', href: '/services#training' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Laptop className="h-6 w-6 text-[#1E73BE]" />
              <span className="font-bold text-2xl text-[#1E73BE]">OptimizeWise</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Transform your digital experience with data-driven CRO and A/B testing services.
              Get expert optimization strategies that deliver measurable results.
            </p>
            <Link to={'/contact'}>
              <Button className="bg-[hsl(var(--theme-accent))] hover:bg-[#1E73BE] text-white hover:text-white">
                Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-[#1E73BE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-[#1E73BE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-[#1E73BE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} OptimizeWise. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}