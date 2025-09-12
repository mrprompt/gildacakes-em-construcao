import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-marsala to-marsala-light rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                <img src="/gildacakes-logo.png" alt="G" />
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">Gilda Cakes</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-marsala transition-colors duration-300 font-medium"
            >
              Sobre a Gilda Cakes
            </button>
            <a 
              href="http://www.facebook.com/gildacakes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-marsala transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/gildacakesfloripa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-marsala transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <Button 
              variant="default"
              onClick={() => scrollToSection("contato")}
              className="bg-marsala hover:bg-marsala-light text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover-lift"
            >
              <Phone size={16} className="mr-2" />
              Entrar em Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-marsala transition-colors duration-300 font-medium"
              >
                Sobre a Gilda Cakes
              </button>
              <div className="flex items-center justify-center space-x-6 py-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-marsala transition-colors duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-marsala transition-colors duration-300"
                >
                  <Instagram size={24} />
                </a>
              </div>
              <div className="px-4">
                <Button 
                  variant="default"
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-marsala hover:bg-marsala-light text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  <Phone size={16} className="mr-2" />
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;