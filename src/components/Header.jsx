import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection, 
  handleCTAClick, 
  headerOpacity 
}) => {
  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'problem', label: 'Masalah' },
    { id: 'solution', label: 'Solusi' },
  ];

  return (
    <motion.header 
      style={{ opacity: headerOpacity }}
      className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center">
              <img src="/src/img/logo.png" alt="" />
            </div>
            <span className="text-2xl font-bold gradient-text">Aigra</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-green-100"
          >
            <nav className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 text-sm font-medium transition-colors hover:text-green-600 ${
                    activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => handleCTAClick('demo')}
                  className="border-green-200 text-green-700 hover:bg-green-50"
                >
                  Demo Gratis
                </Button>
                <Button 
                  onClick={() => handleCTAClick('contact')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Hubungi Kami
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;