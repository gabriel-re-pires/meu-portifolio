import { Localized } from "@/i18n/dict";
import { macropadBase } from "./macropad";

export type HardwareProject = {
  id: number;
  name: string;
  shortDescription: Localized;
  fullDescription: Localized;
  thumbnail: string;
  screenshots: string[];
  techStack: string[];
  highlights: Localized[];
  githubLink?: string;
  videoSrc?: string;
  detailHref?: string;
  group?: boolean;
  featured?: boolean;
};

export const hardwareProjects: HardwareProject[] = [
  {
    id: 3,
    name: "Analisador de Espectro de Áudio",
    shortDescription: {
      pt: "Visualização de espectro em tempo real.",
      zh: "实时频谱可视化。",
      en: "Real-time audio spectrum visualization.",
      ja: "リアルタイムのスペクトラム表示。",
    },
    fullDescription: {
      pt: "Projeto com ESP32-S3 para captura e processamento de áudio com exibição em display OLED.",
      zh: "基于 ESP32-S3 的项目，用于采集和处理音频并在 OLED 显示屏上显示。",
      en: "An ESP32-S3 project for capturing and processing audio with an OLED display.",
      ja: "ESP32-S3を用いて音声を取り込み・処理し、OLEDディスプレイに表示するプロジェクト。",
    },
    thumbnail: "projetos/espectro/01.jpg",
    screenshots: [
      "projetos/espectro/01.jpg",
      "projetos/espectro/02.jpg",
      "projetos/espectro/03.jpg",
      "projetos/espectro/04.jpg",
    ],
    techStack: ["ESP32-S3", "OLED", "C/C++"],
    highlights: [
      { pt: "Leitura em tempo real", zh: "实时读取", en: "Real-time readout", ja: "リアルタイム読み取り" },
      { pt: "Projeto compacto", zh: "紧凑设计", en: "Compact build", ja: "コンパクトな設計" },
      { pt: "Visualização clara", zh: "清晰的可视化", en: "Clear visualization", ja: "見やすい表示" },
    ],
    githubLink: "https://github.com/Artur-Brasileiro/Analisador-Espectro",
    videoSrc: "projetos/espectro/video.mp4",
    featured: false,
  },
  {
    id: 4,
    name: "Deauther Didático (2.4 e 5GHz)",
    shortDescription: {
      pt: "Desautenticação de redes em ambiente controlado.",
      zh: "在受控环境中进行网络去认证。",
      en: "Network deauthentication in a controlled environment.",
      ja: "管理された環境でのネットワーク認証解除。",
    },
    fullDescription: {
      pt: "Dispositivo didático para estudar Wi-Fi em ambiente controlado, com foco em segurança de redes e aprendizado prático.",
      zh: "用于在受控环境中研究 Wi-Fi 的教学设备，专注于网络安全与实践学习。",
      en: "An educational device for studying Wi-Fi in a controlled environment, focused on network security and hands-on learning.",
      ja: "管理された環境でWi-Fiを学ぶための教育用デバイス。ネットワークセキュリティと実践的な学習に重点。",
    },
    thumbnail: "projetos/deauther/01.jpg",
    screenshots: [
      "projetos/deauther/01.jpg",
      "projetos/deauther/02.jpg",
      "projetos/deauther/03.jpg",
      "projetos/deauther/04.jpg",
    ],
    techStack: ["BW-16", "OLED", "C/C++", "Impressão 3D"],
    highlights: [
      { pt: "Uso didático", zh: "教学用途", en: "Educational use", ja: "教育用途" },
      { pt: "Placa customizada", zh: "定制电路板", en: "Custom board", ja: "カスタム基板" },
      { pt: "Design compacto", zh: "紧凑设计", en: "Compact design", ja: "コンパクトな設計" },
    ],
    githubLink: "https://github.com/gabriel-re-pires/Deauther_BW16_5GHz",
    videoSrc: "projetos/deauther/video.mp4",
    featured: false,
  },
  {
    id: 5,
    ...macropadBase,
    featured: true,
  },
];
