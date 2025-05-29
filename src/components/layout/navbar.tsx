"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Code, User, MessageSquare, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/', icon: <User className="h-5 w-5" /> },
  { name: 'About', href: '/#about', icon: <User className="h-5 w-5" /> },
  { name: 'Projects', href: '/#projects', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Skills', href: '/#skills', icon: <Code className="h-5 w-5" /> },
  { name: 'Contact', href: '/#contact', icon: <MessageSquare className="h-5 w-5" /> },
  { name: 'AI Tools', href: '/ai-tools', icon: <Brain className="h-5 w-5" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange(); // Set initial hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Intersection observer for section highlighting
    const sections = navItems
      .filter(item => item.href.startsWith('/#'))
      .map(item => document.getElementById(item.href.substring(2)));
      
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" } // Adjust rootMargin as needed
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [pathname]);


  const isLinkActive = (href: string) => {
    if (href.startsWith('/#')) {
      // For anchor links on the homepage
      return pathname === '/' && activeHash === href.substring(1);
    }
    // For page links
    return pathname === href;
  };
  
  const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150",
        isLinkActive(href)
          ? "bg-accent text-accent-foreground"
          : "text-foreground hover:bg-accent/10 hover:text-accent",
      )}
      aria-current={isLinkActive(href) ? 'page' : undefined}
    >
      {children}
    </Link>
  );

  const MobileNavLink = ({ href, name, icon, onClick }: { href: string, name: string, icon: React.ReactNode, onClick?: () => void }) => (
     <SheetClose asChild>
        <Link
        href={href}
        onClick={onClick}
        className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium transition-colors duration-150 w-full text-left",
            isLinkActive(href)
            ? "bg-accent text-accent-foreground"
            : "text-foreground hover:bg-accent/10 hover:text-accent",
        )}
        aria-current={isLinkActive(href) ? 'page' : undefined}
        >
        {icon}
        {name}
        </Link>
     </SheetClose>
  );


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary transition-transform hover:scale-105">
              Devfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0 bg-background">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                        <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            Devfolio
                        </Link>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" aria-label="Close menu">
                                <X className="h-6 w-6 text-foreground" />
                            </Button>
                        </SheetClose>
                    </div>
                    <div className="flex-grow p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <MobileNavLink 
                            key={item.name} 
                            href={item.href} 
                            name={item.name} 
                            icon={item.icon}
                            onClick={() => setIsMobileMenuOpen(false)} 
                        />
                    ))}
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
