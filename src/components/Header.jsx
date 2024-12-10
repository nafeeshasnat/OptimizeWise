import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-[#1E73BE]">OptimizeWise</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#1E73BE]',
                location.pathname === item.href ? 'text-[#1E73BE]' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white ml-4">
            Get a Free Consultation
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white border-t z-50">
            <nav className="container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2 transition-colors hover:text-[#1E73BE]',
                    location.pathname === item.href ? 'text-[#1E73BE]' : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white mt-4">
                Get a Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}