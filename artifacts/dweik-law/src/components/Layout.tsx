import { ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <Link 
      href={href} 
      className={`text-xs md:text-sm tracking-[0.1em] uppercase transition-colors duration-500 pb-1 border-b whitespace-nowrap ${
        isActive 
          ? 'border-primary text-primary' 
          : 'border-transparent text-muted-foreground hover:text-foreground'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-primary selection:text-primary-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <Link href="/" className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl tracking-wide uppercase text-foreground leading-none">
              Dweik
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mt-1">
              Law Firm
            </span>
          </Link>
          
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/legacy">The Legacy</NavLink>
            <NavLink href="/attorneys">Attorneys</NavLink>
            <NavLink href="/practice-areas">Practice Areas</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>

      <footer className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <span className="font-serif text-3xl tracking-wide uppercase leading-none block mb-2">
                Dweik
              </span>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary block mb-8">
                Law Firm
              </span>
              <p className="text-sm text-secondary-foreground/70 max-w-sm leading-relaxed">
                A multi-generational institution of legal excellence in Jordan. Providing authoritative counsel and commanding appellate advocacy since 1967.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6 border-b border-white/10 pb-4 inline-block">Offices</h4>
              <address className="not-italic text-sm text-secondary-foreground/70 space-y-2">
                <p>Amman, Hashemite Kingdom of Jordan</p>
                <p>By Appointment Only</p>
              </address>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6 border-b border-white/10 pb-4 inline-block">Direct</h4>
              <div className="text-sm text-secondary-foreground/70 space-y-2">
                <p>Inquiries</p>
                <Link href="/contact" className="text-primary hover:text-white transition-colors">
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/50 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Dweik Law Firm. All rights reserved.</p>
            <p>Founded 1967</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
