'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={toggleLanguage}
      className="text-white/90 hover:text-white transition-colors text-sm tracking-[0.2em] uppercase font-light"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'PT' : 'EN'}
    </motion.button>
  );
}
