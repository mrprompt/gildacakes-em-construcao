import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import heroImage from "@/assets/hero-cake.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><g fill='%23ffffff' fill-opacity='0.1'><circle cx='20' cy='20' r='2'/></g></svg>")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Novo Site em
                <span className="block bg-gradient-to-r from-marsala to-gold bg-clip-text text-transparent">
                  Construção
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Estamos preparando algo especial para você! Enquanto isso, 
                <strong className="text-gold"> entre em contato</strong> para encomendar 
                seus bolos artísticos personalizados.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-marsala hover:bg-marsala-light text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover-lift shadow-lg"
              >
                <Phone size={20} className="mr-2" />
                Entre em Contato Agora
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in fade-in-delay-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
              <img 
                src={heroImage}
                alt="Bolo artístico da Gilda Cakes - confeitaria artesanal"
                className="w-full h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm text-background px-4 py-2 rounded-full font-semibold text-sm">
                ✨ Bolos Artísticos
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-marsala/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;