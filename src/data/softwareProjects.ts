export type SoftwareProject = {
  id: number;
  category: "ia" | "web" | "dados";
  name: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  screenshots: string[];
  techStack: string[];
  highlights: string[];
  githubLink: string;
  siteLink?: string;
};

export const softwareProjects: SoftwareProject[] = [
  {
    id: 11,
    category: "web",
    name: "EnglishUp",
    shortDescription: "Plataforma web para aprendizado de inglês.",
    fullDescription:
      "Plataforma com trilhas de estudo e recursos interativos para prática de inglês.",
    // CAMINHOS ATUALIZADOS (removido "dist/"):
    thumbnail: "englishup/photo-1.jpg",
    screenshots: [
      "englishup/photo-1.jpg",
      "englishup/photo-2.jpg",
      "englishup/photo-3.jpg",
    ],
    techStack: ["React", "TypeScript", "Tailwind"],
    highlights: ["Layout responsivo", "UX focada em estudo", "Deploy em produção"],
    githubLink: "https://github.com/Artur-Brasileiro/English-Hub",
    siteLink: "https://playenglishup.com.br/",
  },
  {
    id: 1,
    category: "ia",
    name: "Chatbot com React",
    shortDescription: "Chatbot integrado com IA simples.",
    fullDescription:
      "Aplicação web com interface de chat e integração com lógica de IA para respostas automatizadas.",
    // CAMINHOS ATUALIZADOS (removido "dist/"):
    thumbnail: "chatbot/photo-1.jpg",
    screenshots: [
      "chatbot/photo-1.jpg",
      "chatbot/photo-2.jpg",
    ],
    techStack: ["React", "JavaScript", "CSS"],
    highlights: ["Interface conversacional", "Integração com IA", "Estrutura modular"],
    githubLink: "https://github.com/Artur-Brasileiro/Chatbot-React",
  },
];