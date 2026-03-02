import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Globe } from "lucide-react";
import profileImg from "@/assets/avatar.png";

// Seus ícones
const techs = [
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "GitHub", icon: "https://pngimg.com/uploads/github/github_PNG90.png" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code, label: "Stack", value: "TypeScript & Dart" },
    { icon: Globe, label: "Foco", value: "Web & Mobile" },
    { icon: GraduationCap, label: "Formação", value: "Eng. Computação" },
  ];

  return (
    <section id="sobre" className="py-24 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass neon-border">
              <img src={profileImg} alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <p className="font-mono text-sm text-primary mb-3 uppercase tracking-wider">Sobre mim</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformando ideias em <span className="gradient-text">experiências digitais</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sou estudante do 9º período de Engenharia da Computação...
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card rounded-xl p-4 text-center">
                  <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/*CARROSSEL INFINITO */}
        <div className="mt-24">
            <div className="relative w-full overflow-hidden mask-gradient">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex animate-infinite-scroll">
                    
                    {/* LISTA 1 */}
                    {techs.map((tech, i) => (
                        <div key={`list-1-${i}`} className="flex-shrink-0 mx-8 flex flex-col items-center gap-3 group cursor-default">
                            <div className="w-11 h-11 flex items-center justify-center transition-all duration-300">
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name} 
                                    className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                                />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}

                    {/* LISTA 2 */}
                    {techs.map((tech, i) => (
                        <div key={`list-2-${i}`} className="flex-shrink-0 mx-8 flex flex-col items-center gap-3 group cursor-default">
                            <div className="w-11 h-11 flex items-center justify-center transition-all duration-300">
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name} 
                                    className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                                />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;