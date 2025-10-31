'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section id="about" ref={ref} className="relative bg-neutral-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-neutral-500 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light">
                {t.about.category}
              </p>
              <h2 className="text-neutral-900 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                {t.about.title}
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
              <p>
                {t.about.paragraph1}
              </p>
              <p>
                <span className="font-medium text-neutral-900">{t.about.paragraph2}</span>
              </p>
              <p>
                {t.about.paragraph3}
              </p>
              <p>
                {t.about.paragraph4}
              </p>
              <p>
                {t.about.paragraph5}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="pt-6 sm:pt-8"
            >
              <div className="w-12 sm:w-16 h-px bg-neutral-300" />
              <p className="mt-3 sm:mt-4 text-neutral-600 italic font-light text-sm sm:text-base">
                {t.about.quote}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[700px] mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-neutral-200">
              <img
                src="https://res.cloudinary.com/dskiy8y8c/image/upload/v1761946518/497457218_620834410970605_5837680254791781448_n_h0spay.jpg"
                alt="Casa do Fontão interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-neutral-800 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
