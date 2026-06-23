import { Localized } from "@/i18n/dict";

export type SoftwareProject = {
  id: number;
  category: "ia" | "web" | "dados" | "desktop";
  name: string;
  shortDescription: Localized;
  fullDescription: Localized;
  thumbnail: string;
  screenshots: string[];
  techStack: string[];
  highlights: Localized[];
  githubLink?: string;
  siteLink?: string;
  detailHref?: string;
  group?: boolean;
  logo?: boolean;
  featured?: boolean;
};

export const softwareProjects: SoftwareProject[] = [
  {
    id: 11,
    category: "web",
    name: "EnglishUp",
    shortDescription: {
      pt: "Plataforma web para aprendizado de inglês.",
      zh: "学习英语的 Web 平台。",
      en: "Web platform for learning English.",
      ja: "英語学習のためのWebプラットフォーム。",
    },
    fullDescription: {
      pt: "Plataforma com trilhas de estudo e recursos interativos para a prática de inglês, com layout responsivo e deploy em produção.",
      zh: "提供学习路径和互动资源的英语练习平台，采用响应式布局并已部署上线。",
      en: "A platform with study tracks and interactive resources to practice English, with a responsive layout and production deployment.",
      ja: "学習トラックとインタラクティブな教材で英語を練習できるプラットフォーム。レスポンシブ対応で本番環境にデプロイ済み。",
    },
    thumbnail: "projetos/englishup/01.webp",
    screenshots: ["projetos/englishup/01.webp"],
    techStack: ["React", "TypeScript", "Tailwind"],
    highlights: [
      { pt: "Layout responsivo", zh: "响应式布局", en: "Responsive layout", ja: "レスポンシブレイアウト" },
      { pt: "UX focada em estudo", zh: "以学习为中心的体验", en: "Study-focused UX", ja: "学習に特化したUX" },
      { pt: "Deploy em produção", zh: "生产环境部署", en: "Production deployment", ja: "本番環境へのデプロイ" },
    ],
    githubLink: "https://github.com/Artur-Brasileiro/EnglishUp",
    siteLink: "https://playenglishup.com.br/",
    featured: true,
  },
  {
    id: 13,
    category: "web",
    name: "JouleHub",
    shortDescription: {
      pt: "Análise térmica e de potência de reguladores de tensão.",
      zh: "稳压器的热与功率分析。",
      en: "Thermal and power analysis of voltage regulators.",
      ja: "電圧レギュレータの熱・電力解析。",
    },
    fullDescription: {
      pt: "Plataforma web para projeto e prototipagem de hardware, focada na análise térmica e de potência de reguladores de tensão lineares e chaveados. Calcula a dissipação de calor e a temperatura de junção, com presets de consumo de microcontroladores e alertas de segurança em tempo real.",
      zh: "用于硬件设计与原型开发的 Web 平台，专注于线性和开关稳压器的热与功率分析。计算散热量与结温，提供微控制器功耗预设和实时安全警报。",
      en: "A web platform for hardware design and prototyping, focused on thermal and power analysis of linear and switching voltage regulators. It calculates heat dissipation and junction temperature, with microcontroller consumption presets and real-time safety alerts.",
      ja: "ハードウェア設計・試作のためのWebプラットフォーム。リニア／スイッチング電圧レギュレータの熱・電力解析に特化し、放熱量とジャンクション温度を計算。マイコンの消費電力プリセットとリアルタイムの安全警告を備える。",
    },
    thumbnail: "projetos/joulehub/01.webp",
    screenshots: ["projetos/joulehub/01.webp", "projetos/joulehub/02.webp"],
    techStack: ["Next.js", "TypeScript"],
    highlights: [
      { pt: "Cálculo de dissipação (Pd) e temperatura de junção (Tj)", zh: "计算耗散功率 (Pd) 与结温 (Tj)", en: "Calculates dissipation (Pd) and junction temperature (Tj)", ja: "消費電力 (Pd) とジャンクション温度 (Tj) を計算" },
      { pt: "Presets de consumo de microcontroladores", zh: "微控制器功耗预设", en: "Microcontroller consumption presets", ja: "マイコンの消費電力プリセット" },
      { pt: "Alertas de zona térmica segura em tempo real", zh: "实时安全热区警报", en: "Real-time safe thermal zone alerts", ja: "安全熱領域のリアルタイム警告" },
    ],
    githubLink: "https://github.com/gabriel-re-pires/JouleHub",
    siteLink: "https://gabriel-re-pires.github.io/JouleHub/",
    logo: true,
    featured: false,
  },
  {
    id: 15,
    category: "web",
    name: "ViewCongresso",
    shortDescription: {
      pt: "Plataforma de gestão de eventos acadêmicos.",
      zh: "学术活动管理平台。",
      en: "Platform for managing academic events.",
      ja: "学術イベント管理プラットフォーム。",
    },
    fullDescription: {
      pt: "Plataforma para criar, gerenciar e participar de congressos, simpósios e eventos acadêmicos, com submissão de trabalhos, inscrições, avaliação por pares e emissão de certificados.",
      zh: "用于创建、管理和参与学术会议、研讨会及学术活动的平台，支持论文提交、报名、同行评审和证书发放。",
      en: "A platform to create, manage and take part in conferences, symposiums and academic events, with paper submission, registration, peer review and certificate issuing.",
      ja: "学会・シンポジウム・学術イベントを作成・運営・参加するためのプラットフォーム。論文投稿、参加登録、査読、証明書発行に対応。",
    },
    thumbnail: "projetos/viewcongresso/01.webp",
    screenshots: ["projetos/viewcongresso/01.webp"],
    techStack: ["Next.js", "React", "Supabase"],
    highlights: [
      { pt: "Submissão e avaliação de trabalhos por pares", zh: "论文提交与同行评审", en: "Paper submission and peer review", ja: "論文投稿と査読" },
      { pt: "Inscrições e emissão de certificados", zh: "报名与证书发放", en: "Registration and certificate issuing", ja: "参加登録と証明書発行" },
      { pt: "Gestão completa de eventos acadêmicos", zh: "完整的学术活动管理", en: "Complete academic event management", ja: "学術イベントの総合管理" },
    ],
    siteLink: "https://viewcongresso.com.br/",
    logo: true,
    featured: true,
  },
  {
    id: 12,
    category: "desktop",
    name: "Calculadora de Física",
    shortDescription: {
      pt: "Calculadora de física com resolução passo a passo.",
      zh: "带分步解答的物理计算器。",
      en: "Physics calculator with step-by-step solutions.",
      ja: "段階的に解く物理計算ツール。",
    },
    fullDescription: {
      pt: "Aplicação desktop em Python e PyQt5 que resolve cálculos de física (MRUV, MCU, queda livre, energia e lançamento) exibindo o passo a passo de cada fórmula. Inclui conversor de unidades e temas claro e escuro.",
      zh: "使用 Python 和 PyQt5 开发的桌面应用，可求解物理问题（匀变速直线运动、圆周运动、自由落体、能量与抛体运动），并展示每个公式的分步过程。内置单位换算器和明暗主题。",
      en: "A desktop app in Python and PyQt5 that solves physics problems (uniformly accelerated motion, circular motion, free fall, energy and projectile motion), showing the step-by-step of each formula. Includes a unit converter and light/dark themes.",
      ja: "PythonとPyQt5によるデスクトップアプリ。物理の計算（等加速度運動、円運動、自由落下、エネルギー、放物運動）を各公式のステップを示しながら解く。単位変換と明暗テーマを搭載。",
    },
    thumbnail: "projetos/calculadora-fisica/01.jpg",
    screenshots: ["projetos/calculadora-fisica/01.jpg"],
    techStack: ["Python", "PyQt5"],
    highlights: [
      { pt: "Motor de resolução passo a passo", zh: "分步求解引擎", en: "Step-by-step solver", ja: "ステップごとの解法エンジン" },
      { pt: "Conversor de unidades integrado", zh: "内置单位换算器", en: "Built-in unit converter", ja: "単位変換機能を内蔵" },
      { pt: "Interface com temas claro e escuro", zh: "明暗主题界面", en: "Light and dark theme interface", ja: "明暗テーマ対応のUI" },
    ],
    githubLink: "https://github.com/gabriel-re-pires/Calculadora_de_Fisica",
    featured: false,
  },
  {
    id: 14,
    category: "dados",
    name: "Buscador TCC",
    shortDescription: {
      pt: "Ferramenta de busca de trabalhos de conclusão de curso.",
      zh: "毕业论文检索工具。",
      en: "Search tool for undergraduate theses.",
      ja: "卒業論文の検索ツール。",
    },
    fullDescription: {
      pt: "Ferramenta para pesquisar e localizar trabalhos de conclusão de curso (TCCs), facilitando o acesso e a consulta a trabalhos acadêmicos.",
      zh: "用于检索和查找毕业论文（TCC）的工具，方便访问和查阅学术作品。",
      en: "A tool to search and find undergraduate final theses, making academic work easier to access and consult.",
      ja: "卒業論文（TCC）を検索・発見するためのツール。学術作品へのアクセスと参照を容易にする。",
    },
    thumbnail: "projetos/buscador-tcc/01.jpg",
    screenshots: ["projetos/buscador-tcc/01.jpg"],
    techStack: [],
    highlights: [],
    githubLink: "https://github.com/gabriel-re-pires/Buscador_TCC",
    featured: false,
  },
  {
    id: 1,
    category: "ia",
    name: "Chatbot com React",
    shortDescription: {
      pt: "Chatbot integrado com IA simples.",
      zh: "集成简单 AI 的聊天机器人。",
      en: "Chatbot with simple AI integration.",
      ja: "シンプルなAIを統合したチャットボット。",
    },
    fullDescription: {
      pt: "Aplicação web com interface de chat e integração com lógica de IA para respostas automatizadas.",
      zh: "带聊天界面并集成 AI 逻辑以实现自动回复的 Web 应用。",
      en: "A web app with a chat interface and AI logic integration for automated responses.",
      ja: "チャットUIとAIロジックを統合し、自動応答を行うWebアプリ。",
    },
    thumbnail: "projetos/chatbot/01.webp",
    screenshots: ["projetos/chatbot/01.webp"],
    techStack: ["React", "JavaScript", "CSS"],
    highlights: [
      { pt: "Interface conversacional", zh: "对话式界面", en: "Conversational interface", ja: "会話型インターフェース" },
      { pt: "Integração com IA", zh: "AI 集成", en: "AI integration", ja: "AI統合" },
      { pt: "Estrutura modular", zh: "模块化结构", en: "Modular structure", ja: "モジュール構成" },
    ],
    githubLink: "https://github.com/gabriel-re-pires/ChatBot",
    featured: false,
  },
];
