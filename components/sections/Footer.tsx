'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer id="footer" className="relative bg-neutral-900 text-white pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6">Casa do Fontão</h3>
              <p className="text-white/70 font-light leading-relaxed max-w-md mb-6 sm:mb-8 text-sm sm:text-base">
                {t.footer.description}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-light">{t.footer.contactTitle}</h4>
            <div className="space-y-3 sm:space-y-4 text-white/70 font-light text-sm sm:text-base">
              <a
                href="mailto:geral.casadofontao@gmail.com"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span>geral.casadofontao@gmail.com</span>
              </a>
              <a
                href="https://wa.me/351926448247"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span>+351 926 448 247</span>
              </a>
              <a
                href="https://maps.google.com/?q=R. Fernando Pessoa 149, 4600-079 Amarante, Portugal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span>
                  R. Fernando Pessoa 149<br />
                  4600-079 Amarante<br />
                  Portugal
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-light">{t.footer.quickLinksTitle}</h4>
            <nav className="space-y-2 sm:space-y-3 text-white/70 font-light text-sm sm:text-base">
              <a href="#about" className="block hover:text-white transition-colors">
                {t.footer.aboutUs}
              </a>
              <a href="#amenities" className="block hover:text-white transition-colors">
                {t.nav.amenities}
              </a>
              <a href="#location" className="block hover:text-white transition-colors">
                {t.nav.location}
              </a>
              <a href="#hero" className="block hover:text-white transition-colors">
                {t.footer.bookNow}
              </a>
            </nav>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6 sm:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-white/50 text-xs sm:text-sm font-light">
            <p>© {currentYear} Casa do Fontão. {t.footer.rights}</p>
            <div className="flex gap-4 sm:gap-6 text-center">
              <a href="#" className="hover:text-white transition-colors">
                {t.footer.privacyPolicy}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t.footer.termsOfService}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
