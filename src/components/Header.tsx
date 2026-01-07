'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { useLanguage } from '@/components/LanguageProvider';

// Translations for header
const translations = {
  requestConsultation: {
    en: 'Request a Free Consultation',
    es: 'Solicitar Consulta Gratis',
  },
  allServices: {
    en: 'All Services',
    es: 'Todos los Servicios',
  },
  closeMenu: {
    en: 'Close menu',
    es: 'Cerrar menú',
  },
  openMenu: {
    en: 'Open menu',
    es: 'Abrir menú',
  },
  home: { en: 'Home', es: 'Inicio' },
  about: { en: 'About', es: 'Nosotros' },
  services: { en: 'Services', es: 'Servicios' },
  contact: { en: 'Contact', es: 'Contacto' },
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Handle scroll to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top or scrolling up
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const getNavLabel = (label: string) => {
    const key = label.toLowerCase() as keyof typeof translations;
    if (translations[key]) {
      return t(translations[key]);
    }
    return label;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="px-4 sm:px-6 lg:px-8 py-4" aria-label="Main navigation">
        {/* Desktop Layout - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 items-center">
          {/* Left - Logo (flush left, no pill) */}
          <div className="flex justify-start">
            <Link 
              href="/" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Yet Counseling - Home"
            >
              <Image
                src="/images/logo-yet.png"
                alt="Yet"
                width={80}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center - Navigation (exactly centered) */}
          <div className="flex justify-center">
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-2 rounded-full shadow-soft">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative">
                  {'children' in link && link.children ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-warm-700 hover:text-primary-600 hover:bg-primary-50/50'
                        }`}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                      >
                        {getNavLabel(link.label)}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                          >
                            <div className="bg-white rounded-2xl shadow-soft-lg border border-warm-100 py-2 min-w-[220px]">
                              <Link
                                href={link.href}
                                className="block px-4 py-2.5 text-sm text-warm-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                              >
                                {t(translations.allServices)}
                              </Link>
                              <div className="border-t border-warm-100 my-1" />
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-4 py-2.5 text-sm transition-colors ${
                                    isActive(child.href)
                                      ? 'text-primary-600 bg-primary-50'
                                      : 'text-warm-700 hover:text-primary-600 hover:bg-primary-50'
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-warm-700 hover:text-primary-600 hover:bg-primary-50/50'
                      }`}
                    >
                      {getNavLabel(link.label)}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - CTA (flush right) */}
          <div className="flex justify-end">
            <Link href="/contact#consultation" className="btn-primary text-sm shadow-soft">
              {t(translations.requestConsultation)}
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="hover:opacity-80 transition-opacity"
            aria-label="Yet Counseling - Home"
          >
            <Image
              src="/images/logo-yet.png"
              alt="Yet"
              width={70}
              height={35}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Menu Button */}
          <button
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-soft text-warm-700 hover:bg-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? t(translations.closeMenu) : t(translations.openMenu)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden mt-4"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-soft-lg p-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    {'children' in link && link.children ? (
                      <>
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                            isActive(link.href)
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-warm-700 hover:text-primary-600 hover:bg-primary-50/50'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {getNavLabel(link.label)}
                        </Link>
                        <div className="pl-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                                isActive(child.href)
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-warm-600 hover:text-primary-600 hover:bg-primary-50/50'
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                          isActive(link.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-warm-700 hover:text-primary-600 hover:bg-primary-50/50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {getNavLabel(link.label)}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact#consultation"
                    className="btn-primary w-full text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(translations.requestConsultation)}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
