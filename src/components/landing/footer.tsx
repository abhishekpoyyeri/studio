import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  platform: [
    { href: "#", label: "How it Works" },
    { href: "#features", label: "Features" },
    { href: "#", label: "Communities" },
    { href: "#", label: "Events" },
    { href: "#", label: "Marketplace" },
  ],
  resources: [
    { href: "#", label: "Artist Guides" },
    { href: "#", label: "Tutorials" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Success Stories" },
    { href: "#", label: "FAQs" },
  ],
  company: [
    { href: "#", label: "About Us" },
    { href: "#", label: "Our Mission" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Press" },
    { href: "#", label: "Contact" },
  ],
};


export function Footer() {
  return (
    <footer id="about" className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
             <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-headline text-xl font-bold text-primary">
                Canvas<span className="text-background">Converge</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground opacity-80">
              Bridging cultures through creative expression. A global platform for artists to share, learn, and collaborate across borders.
            </p>
            <div className="flex gap-4 mt-6">
                <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-primary transition-colors" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 hover:text-primary transition-colors" /></Link>
                <Link href="#" aria-label="YouTube"><Youtube className="h-6 w-6 hover:text-primary transition-colors" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground opacity-70">
            <p>&copy; {new Date().getFullYear()} Canvas Converge. All rights reserved. | <Link href="#" className="hover:text-primary">Privacy Policy</Link> | <Link href="#" className="hover:text-primary">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
}
