import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-gradient-to-t from-deep-brown to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6 fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-marsala to-marsala-light rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Gilda Cakes</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Confeitaria artesanal especializada em bolos personalizados e doces especiais. 
              Transformando seus momentos especiais em memórias doces e inesquecíveis.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/gildacakes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-marsala rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
                aria-label="Facebook da Gilda Cakes"
              >
                <Facebook size={20} className="text-foreground hover:text-white" />
              </a>
              <a 
                href="https://instagram.com/gildacakes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
                aria-label="Instagram da Gilda Cakes"
              >
                <Instagram size={20} className="text-foreground hover:text-background" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 fade-in fade-in-delay-1">
            <h3 className="text-xl font-bold text-foreground">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-marsala mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">(48) 99999-9999</p>
                  <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-marsala mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">contato@gildacakes.com.br</p>
                  <p className="text-sm text-muted-foreground">Resposta em até 2 horas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-marsala mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Grande Florianópolis - SC</p>
                  <p className="text-sm text-muted-foreground">Entregamos em toda a região</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-marsala mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Seg - Sáb: 8h às 18h</p>
                  <p className="text-sm text-muted-foreground">Domingo: Sob consulta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6 fade-in fade-in-delay-2">
            <h3 className="text-xl font-bold text-foreground">Entre em Contato</h3>
            <p className="text-muted-foreground">
              Pronto para encomendar seu bolo dos sonhos? Entre em contato conosco e 
              vamos criar algo especial juntos!
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full bg-marsala hover:bg-marsala-light text-white font-semibold py-3 rounded-xl transition-all duration-300 hover-lift"
                onClick={() => window.open('https://wa.me/5548999999999', '_blank')}
              >
                <Phone size={18} className="mr-2" />
                WhatsApp
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="w-full border-gold text-gold hover:bg-gold hover:text-background font-semibold py-3 rounded-xl transition-all duration-300 hover-lift"
                onClick={() => window.location.href = 'mailto:contato@gildacakes.com.br'}
              >
                <Mail size={18} className="mr-2" />
                E-mail
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-marsala/10 border border-marsala/20 rounded-xl p-4">
              <p className="text-sm text-marsala font-medium mb-1">🚨 Pedidos Urgentes</p>
              <p className="text-xs text-muted-foreground">
                Para pedidos com menos de 48h de antecedência, entre em contato via WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 Gilda Cakes. Todos os direitos reservados. | 
              <span className="text-gold ml-1">Confeitaria Artesanal Premium</span>
            </p>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={scrollToTop}
                className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                Voltar ao topo ↑
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="h-1 bg-gradient-to-r from-marsala via-gold to-marsala"></div>
    </footer>
  );
};

export default Footer;