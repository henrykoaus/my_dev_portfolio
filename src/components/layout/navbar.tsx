
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Briefcase, Code, User, MessageSquare, Brain, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/', icon: <User className="h-5 w-5" /> }, // Targets hero section implicitly
  { name: 'About', href: '/#about', icon: <User className="h-5 w-5" /> },
  { name: 'Projects', href: '/#projects', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Skills', href: '/#skills', icon: <Code className="h-5 w-5" /> },
  { name: 'Contact', href: '/#contact', icon: <MessageSquare className="h-5 w-5" /> },
  { name: 'AI Suggester', href: '/ai-tools', icon: <Brain className="h-5 w-5" /> },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === '/') {
        setActiveHash(window.location.hash || '#hero');
      } else {
        setActiveHash(''); // Clear hash if not on homepage to avoid highlighting section links
      }
    };

    handleHashChange(); 
    window.addEventListener('hashchange', handleHashChange);

    let elementsToObserve: HTMLElement[] = [];
    if (pathname === '/') {
      const sectionIds = ['hero']; 
      navItems.forEach(item => {
        if (item.href.startsWith('/#')) {
          const id = item.href.substring(2);
          if (id && !sectionIds.includes(id)) {
            sectionIds.push(id);
          }
        }
      });
      elementsToObserve = sectionIds
        .map(id => document.getElementById(id))
        .filter(el => el !== null) as HTMLElement[];
    }


    if (elementsToObserve.length === 0 && pathname !== '/') {
       setActiveHash(''); // Ensure hash is cleared if no sections to observe (e.g. on /ai-tools)
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }
    
    if (elementsToObserve.length === 0 && pathname === '/') {
        // If on homepage but no specific sections found (should not happen with hero always there)
        // still listen for hash changes for direct navigation.
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }


    const observer = new IntersectionObserver(
      (entries) => {
        let intersectedEntryFound = false;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
            intersectedEntryFound = true;
            break; 
          }
        }
        if (!intersectedEntryFound && pathname === '/' && window.scrollY < window.innerHeight * 0.1) {
           setActiveHash('#hero');
        }
      },
      { threshold: 0.5, rootMargin: "-64px 0px -30% 0px" } 
    );

    elementsToObserve.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      elementsToObserve.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [pathname]);


  const isLinkActive = (href: string) => {
    if (pathname === '/') { 
      if (href === '/') { 
        return activeHash === '#hero' || activeHash === '' || activeHash === '#';
      }
      if (href.startsWith('/#')) { 
        return activeHash === href.substring(1); 
      }
    }
    // For distinct pages like /ai-tools, active if pathname matches and no hash fragment is active for a section
    return pathname === href && (activeHash === '' || !navItems.some(item => item.href.endsWith(activeHash) && item.href.startsWith('/#')));
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

  const ThemeToggleSwitch = ({ id }: { id: string }) => (
    <div className="flex items-center space-x-2">
      <Sun className="h-5 w-5 text-yellow-500" aria-hidden="true" />
      <Switch
        id={id}
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
      />
      <Moon className="h-5 w-5 text-slate-500" aria-hidden="true" />
    </div>
  );
  
  const MobileThemeToggleSwitch = ({ id }: { id: string }) => (
    <div className="flex items-center space-x-1">
      <Sun className="h-4 w-4 text-yellow-500" aria-hidden="true" />
      <Switch
        id={id}
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="h-5 w-9 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input [&>span]:h-4 [&>span]:w-4 [&>span[data-state=checked]]:translate-x-4 [&>span[data-state=unchecked]]:translate-x-0"
        aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
      />
      <Moon className="h-4 w-4 text-slate-500" aria-hidden="true" />
    </div>
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
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="ml-6">
              <ThemeToggleSwitch id="theme-toggle-desktop" />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <div className="mr-2">
                <MobileThemeToggleSwitch id="theme-toggle-mobile-header" />
            </div>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0 bg-background">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
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
                    <div className="p-4 border-t">
                        <MobileThemeToggleSwitch id="theme-toggle-mobile-sheet" />
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
