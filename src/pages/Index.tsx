import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";  
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add fade-in animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Gilda Cakes &lsaquo; Tortas, Bolos e Doces em Florianópolis. (48) 98816-4353</title>
        <meta 
          name="description" 
          content="Confeitaria artesanal especializada em bolos personalizados e doces especiais em Florianópolis. Site em construção - Entre em contato para encomendas."
        />
        <meta name="keywords" content="confeitaria, bolos personalizados, doces artesanais, aniversário, Florianópolis, Gilda Cakes" />
        <meta property="og:title" content="Gilda Cakes - Confeitaria Artesanal" />
        <meta property="og:description" content="Bolos artísticos personalizados e doces especiais. Atendemos toda a Grande Florianópolis." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.gildacakes.com.br" />
      </head>

      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;