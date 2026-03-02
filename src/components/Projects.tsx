import { Code2, Cpu, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectCategories = [
    {
      icon: Code2,
      title: "Software",
      description: "IA, Web e Apps.",
      color: "text-primary",
      bgHover: "group-hover:bg-primary/5",
      link: "/software",
    },
    {
      icon: Cpu,
      title: "Hardware",
      description: "IoT e Eletrônica.",
      color: "text-accent",
      bgHover: "group-hover:bg-accent/5",
      link: "/hardware",
    },
  ];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-primary mb-3 uppercase tracking-wider">
            Explorar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            MEUS PROJETOS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectCategories.map((category, index) => (
            <Link to={category.link} key={index} className="block group">
              <Card
                className={`
                  h-full p-8 md:p-12 
                  aspect-[4/3] md:aspect-square 
                  flex flex-col items-center justify-center text-center
                  bg-card/50 backdrop-blur-sm border-border 
                  transition-all duration-500 
                  hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow
                  relative overflow-hidden
                  ${category.bgHover}
                `}
              >
                {/* Círculo decorativo atrás do ícone */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <category.icon 
                    className={`w-20 h-20 ${category.color} relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`} 
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-3xl font-bold mb-3 tracking-tight">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-[250px]">
                  {category.description}
                </p>

                <Button 
                  className="
                    rounded-full px-8 py-6 text-md font-semibold
                    bg-primary text-primary-foreground shadow-glow
                    hover:bg-primary hover:brightness-110 hover:scale-105
                    transition-all duration-300
                  "
                >
                  Ver Projetos 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;