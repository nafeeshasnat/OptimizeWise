import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Laptop, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const services = [
  {
    title: "A/B Testing Services",
    href: "/services/ab-testing",
    description: "Data-driven experimentation to optimize conversion rates"
  },
  {
    title: "User Research",
    href: "/services/user-research",
    description: "Deep insights into user behavior and preferences"
  },
  {
    title: "Analytics Setup",
    href: "/services/analytics-setup",
    description: "Professional configuration of analytics tools"
  },
  {
    title: "Technical Implementation",
    href: "/services/technical-implementation",
    description: "Expert implementation of testing tools"
  },
  {
    title: "All Services",
    href: "/services",
    description: "Explore all of our services"
  }
];

const navItems = [
  { label: 'Why CRO', href: '/why-cro' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
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
          <Laptop className="h-6 w-6 text-[#1E73BE]" />
          <span className="font-bold text-2xl text-[#1E73BE]">OptimizeWise</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#1E73BE]',
                  location.pathname === item.href ? 'text-[#1E73BE]' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>

              {/* Add Services Dropdown after Case Studies */}
              {item.label === 'Case Studies' && (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-[#1E73BE] bg-transparent hover:!bg-transparent"><Link
                        to={'/services'}
                        className={cn(
                          'text-sm font-medium transition-colors hover:text-[#1E73BE]',
                          location.pathname.indexOf('/services') > -1 ? 'text-[#1E73BE]' : 'text-muted-foreground'
                        )}
                      >Services</Link></NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                          {services.map((service) => (
                            <li key={service.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={service.href}
                                  className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    service.href === '/services' ? 'hidden' : ''
                                  )}
                                >
                                  <div className={cn("text-sm font-medium leading-none", location.pathname === service.href ? 'text-[#1E73BE]' : 'text-muted-foreground')}>{service.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {service.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </React.Fragment>
          ))}

          <Link to={'/contact'}>
            <Button className="bg-[hsl(var(--theme-accent))] hover:bg-[#1E73BE] text-white hover:text-white">
              Schedule a Call
            </Button>
          </Link>
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
            <nav className="container py-6 flex flex-col gap-4 bg-white shadow-lg">
              {navItems.map((item) => (
                <React.Fragment key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium py-2 transition-colors hover:text-[#1E73BE]',
                      location.pathname === item.href ? 'text-[#1E73BE]' : 'text-muted-foreground'
                    )}
                  >
                    {item.label}
                  </Link>

                  {/* Add Services Dropdown after Case Studies */}
                  {item.label === 'Case Studies' && (
                    <div className="py-2 border-t">
                      <div className="text-sm font-medium text-gray-500 mb-2">Services</div>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn("block py-2 text-lg font-medium hover:text-[#1E73BE]",
                            location.pathname === service.href ? 'text-[#1E73BE]' : 'text-muted-foreground')
                          }
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              <Link to={'/contact'}>
                <Button className="bg-[hsl(var(--theme-accent))] hover:bg-[#1E73BE] text-white hover:text-white mt-4">
                  Schedule a Call
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}