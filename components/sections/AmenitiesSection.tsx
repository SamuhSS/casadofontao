'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Waves, Wine, Home, Utensils, Map } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AmenitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Waves,
      key: 'pool',
      image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Utensils,
      key: 'gastronomy',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Wine,
      key: 'wine',
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Home,
      key: 'suites',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Map,
      key: 'trails',
      image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ] as const;

  return (
    <section id="amenities" ref={ref} className="relative bg-neutral-900 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-neutral-400 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light mb-3 sm:mb-4">
            {t.amenities.category}
          </p>
          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
            {t.amenities.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            const amenityData = t.amenities.items[amenity.key];
            return (
              <motion.div
                key={amenity.key}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative overflow-hidden bg-neutral-800 h-[350px] sm:h-[400px]"
              >
                <div className="absolute inset-0 bg-black">
                  <img
                    src={amenity.image}
                    alt={amenityData.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 mb-3 sm:mb-4" />
                  <h3 className="text-white font-serif text-xl sm:text-2xl mb-2 sm:mb-3">
                    {amenityData.title}
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed text-sm sm:text-base">
                    {amenityData.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
