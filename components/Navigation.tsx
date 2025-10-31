'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingDialog from '@/components/BookingDialog';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.amenities, href: '#amenities' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.contact, href: '#footer' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-light"
            >
              {t.nav.book}
            </button>
            <LanguageToggle />
          </div>

          <a
            href="#hero"
            className="absolute left-1/2 transform -translate-x-1/2 text-white text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light whitespace-nowrap"
          >
            Casa do Fontão
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-light flex items-center gap-1 sm:gap-2"
          >
            <span className="hidden xs:inline">{t.nav.menu}</span> <Menu className="w-4 h-4" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 lg:right-12 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="h-full flex flex-col justify-center items-center">
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white text-4xl lg:text-5xl font-light tracking-wider hover:text-white/70 transition-colors font-serif"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </>
  );
}
