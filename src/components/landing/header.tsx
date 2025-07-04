
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Brush } from 'lucide-react';
import React from 'react';

const navLinks = [
  { href: '#explore', label: 'Explore' },
  { href: '#features', label: 'Features' },
  { href: '/collaboration-assistant', label: 'AI Assistant' },
  { href: '#about', label: 'About' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Brush className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            Canvas<span className="text-secondary">Converge</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground">
            <Link href="/signup">Sign Up Free</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border/40 pt-6 flex flex-col gap-4">
                 <Button variant="ghost" asChild>
                    <Link href="/login">Log In</Link>
                 </Button>
                 <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground">
                    <Link href="/signup">Sign Up Free</Link>
                 </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
