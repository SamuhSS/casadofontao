'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TransitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section id="transition" ref={ref} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img
          src="https://res.cloudinary.com/dskiy8y8c/image/upload/v1761947843/Bike_ezprkw.png"
          alt="Biking experience"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="space-y-8 sm:space-y-12"
        >
          <h2 className="text-white font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider">
            {t.transition.title}
          </h2>

          <p className="text-white/90 text-base sm:text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide px-4">
            {t.transition.description}
          </p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 text-white border border-white/30 px-6 py-3 sm:px-8 sm:py-4 hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-light backdrop-blur-sm"
          >
            {t.transition.cta}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
