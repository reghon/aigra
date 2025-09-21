import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Zap, Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ heroY, scrollToSection, handleCTAClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden lg:pb-12">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y: heroY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Teknologi Pengeringan Terdepan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Revolusi
              <span className="block text-yellow-300">Pasca Panen</span>
              Indonesia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed"
            >
              Aigra merupakan Smart Drying Machine berbasis Artificial Intelligence untuk hasil panen berkualitas tinggi.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10+</div>
                <div className="text-sm text-green-100">Mitra dan Client</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-green-100">Tingkat Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">62.5%</div>
                <div className="text-sm text-green-100">Peningkatan Profit</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="floating-animation">
              <img  
                alt="Teknologi pengeringan AgriDry modern"
                className="w-full h-auto rounded-2xl shadow-2xl"
                src="/jagung.jpg" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll untuk melihat lebih</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;