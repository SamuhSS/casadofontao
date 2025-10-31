'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source
            src="https://res.cloudinary.com/dskiy8y8c/video/upload/v1761945636/Casa_do_Font%C3%A3o_background_jgk27h.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-3 sm:mb-4"
        >
          <p className="text-white/80 text-[9px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 leading-tight tracking-wide px-4"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl font-light tracking-wide leading-relaxed px-4"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 sm:bottom-12"
        >
          <a
            href="#transition"
            className="text-white/60 hover:text-white transition-all duration-300 flex flex-col items-center gap-1 sm:gap-2"
          >
            <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-light">{t.hero.discover}</span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
