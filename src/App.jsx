import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useScroll, useTransform } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

// Import components
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ImpactSection from '@/components/ImpactSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const { toast } = useToast();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'problem', 'solution'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCTAClick = (action) => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan",
      description: "Jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Aigra - Solusi Inovatif Pengeringan Pasca Panen</title>
        <meta name="description" content="Aigra menyediakan teknologi pengeringan pasca panen yang inovatif untuk meningkatkan kualitas dan nilai jual hasil pertanian. Solusi terdepan untuk petani modern." />
        <meta property="og:title" content="Aigra - Solusi Inovatif Pengeringan Pasca Panen" />
        <meta property="og:description" content="Teknologi pengeringan pasca panen yang revolusioner untuk meningkatkan kualitas dan nilai jual hasil pertanian Anda." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          handleCTAClick={handleCTAClick}
          headerOpacity={headerOpacity}
        />

        <HeroSection 
          heroY={heroY}
          scrollToSection={scrollToSection}
          handleCTAClick={handleCTAClick}
        />

        <ProblemSection />

        <SolutionSection />

        <Footer handleCTAClick={handleCTAClick} />

        <Toaster />
      </div>
    </>
  );
}

export default App;