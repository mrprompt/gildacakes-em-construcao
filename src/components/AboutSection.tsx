import { Card } from "@/components/ui/card";
import { Cake, CakeSlice, Heart, MapPin, Star } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: <Cake className="w-8 h-8 text-marsala" />,
      title: "Bolos Artísticos",
      description: "Criações únicas e personalizadas para tornar sua celebração inesquecível."
    },
    {
      icon: <Heart className="w-8 h-8 text-marsala" />,
      title: "Bolos Espatulados",
      description: "Variedade de doces artesanais feitos com ingredientes selecionados."
    },
    {
      icon: <Star className="w-8 h-8 text-marsala" />,
      title: "Bolos Scrapbook",
      description: "Cada produto é uma obra de arte, feita com carinho e dedicação."
    },
    {
      icon: <CakeSlice className="w-8 h-8 text-marsala" />,
      title: "Naked Cakes",
      description: "Bolos feitos com carinho e atenção aos detalhes."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre a 
            <span className="bg-gradient-to-r from-marsala to-gold bg-clip-text text-transparent ml-3">
              Gilda Cakes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde 2000 a doceira Gilda Ferreira conquista todos os paladares com suas Tortas, Bolos e Doces. 
            Cada um carrega em si um segredo aprendido em algum canto do Brasil por onde já passou. 
            Experimente e descubra!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in fade-in-delay-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Confeitaria Artesanal de Excelência
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na <strong className="text-gold">Gilda Cakes</strong>, cada bolo é uma obra de arte única, 
                criada especialmente para suas celebrações mais importantes. Nossa paixão pela confeitaria 
                artesanal se reflete na qualidade excepcional de cada produto.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especializamo-nos em <strong className="text-marsala">bolos personalizados para aniversários</strong>, 
                casamentos e eventos especiais, sempre utilizando ingredientes premium e técnicas artesanais 
                refinadas ao longo dos anos.
              </p>
            </div>

            {/* Gilda's Bio */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-marsala to-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Gilda - Confeiteira Artesanal</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    "Com mais de 15 anos de experiência, crio cada bolo com muito amor e dedicação. 
                    Atendo toda a <strong className="text-gold">Grande Florianópolis</strong> com entregas 
                    personalizadas e atendimento exclusivo para cada cliente."
                  </p>
                  <div className="flex items-center mt-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-marsala mr-1" />
                    <span>Atendendo toda a Grande Florianópolis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-6 fade-in fade-in-delay-2">
            <h3 className="text-2xl font-bold text-foreground text-center lg:text-left">
              Nossos Serviços
            </h3>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-lift transition-all duration-300 hover:shadow-lg hover:shadow-marsala/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Special Features */}
            <div className="bg-gradient-to-r from-marsala/10 to-gold/10 rounded-2xl p-6 border border-marsala/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-marsala">25+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;