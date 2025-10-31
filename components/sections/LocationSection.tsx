'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section id="location" ref={ref} className="relative bg-neutral-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-neutral-600" />
          </div>
          <h2 className="text-neutral-900 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4">
            {t.location.title}
          </h2>
          <p className="text-neutral-600 text-base sm:text-xl font-light max-w-2xl mx-auto px-4">
            {t.location.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden"
        >
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8899999999998!2d-8.1361!3d41.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd245c8e5c5c5c5c5%3A0xabcdef1234567890!2sR.%20Fernando%20Pessoa%20149%2C%204600-079%20Amarante%2C%20Portugal!5e0!3m2!1spt!2spt!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-70 contrast-125"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12 text-white">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl sm:text-3xl mb-3 sm:mb-4">{t.location.city}</h3>
              <p className="text-white/90 font-light leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t.location.description}
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
                <div>
                  <p className="text-white/60 uppercase tracking-wider text-[10px] sm:text-xs mb-1">{t.location.fromPorto}</p>
                  <p className="font-light">{t.location.fromPortoValue}</p>
                </div>
                <div>
                  <p className="text-white/60 uppercase tracking-wider text-[10px] sm:text-xs mb-1">{t.location.altitude}</p>
                  <p className="font-light">{t.location.altitudeValue}</p>
                </div>
                <div>
                  <p className="text-white/60 uppercase tracking-wider text-[10px] sm:text-xs mb-1">{t.location.climate}</p>
                  <p className="font-light">{t.location.climateValue}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="https://maps.google.com/?q=R. Fernando Pessoa 149, 4600-079 Amarante, Portugal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-300 px-8 py-3 sm:px-12 sm:py-4 text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-light"
          >
            {t.location.directions}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
