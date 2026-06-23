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
    ],
    techStack: ["ESP32-S3", "OLED", "C/C++"],
    highlights: [
      { pt: "Leitura em tempo real", zh: "实时读取", en: "Real-time readout", ja: "リアルタイム読み取り" },
      { pt: "Projeto compacto", zh: "紧凑设计", en: "Compact build", ja: "コンパクトな設計" },
      { pt: "Visualização clara", zh: "清晰的可视化", en: "Clear visualization", ja: "見やすい表示" },
    ],
    githubLink: "https://github.com/Artur-Brasileiro/Analisador-Espectro",
    videoSrc: "https://youtu.be/S4FoTu5aA84",
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
    id: 6,
    name: "Robô Seguidor de Linha",
    shortDescription: {
      pt: "Carrinho autônomo com ESP32 e controle Xbox.",
      zh: "搭载 ESP32 与 Xbox 手柄的自主小车。",
      en: "Autonomous car with ESP32 and Xbox control.",
      ja: "ESP32とXboxコントローラーの自律走行カー。",
    },
    fullDescription: {
      pt: "Versão repaginada de um carrinho seguidor de linha com ESP32: sensores infravermelhos TCRT5000 para o modo autônomo e um modo manual via joystick Xbox Series X por Bluetooth (estilo Forza). Conta com farol de LED, bateria Li-ion recarregável (2× TP4056 em série) e cases impressas em 3D. Driver L298N controlado por PWM direto nos pinos IN, sem usar ENA/ENB.",
      zh: "基于 ESP32 重新打造的循线小车：TCRT5000 红外传感器用于自主模式，并支持通过蓝牙的 Xbox Series X 手柄手动驾驶（Forza 风格）。配有 LED 大灯、可充电锂电池（2× TP4056 串联）和 3D 打印外壳。L298N 驱动通过 IN 引脚直接 PWM 控制，不使用 ENA/ENB。",
      en: "A revamped line-following car powered by an ESP32: TCRT5000 infrared sensors for autonomous mode plus a manual mode driven by an Xbox Series X controller over Bluetooth (Forza-style). It features an LED headlight, a rechargeable Li-ion battery (2× TP4056 in series) and 3D-printed cases. The L298N driver is controlled by PWM directly on the IN pins, without using ENA/ENB.",
      ja: "ESP32で刷新したライントレースカー：TCRT5000赤外線センサーによる自律モードに加え、Bluetooth経由のXbox Series Xコントローラーで操作する手動モード（Forza風）を搭載。LEDヘッドライト、充電式Li-ionバッテリー（2× TP4056直列）、3Dプリントケースを備える。L298NドライバーはENA/ENBを使わず、INピンへのPWMで直接制御。",
    },
    thumbnail: "projetos/seglinha/01.webp",
    screenshots: [
      "projetos/seglinha/01.webp",
      "projetos/seglinha/02.webp",
    ],
    techStack: ["ESP32", "C/C++", "L298N", "Bluetooth", "Impressão 3D"],
    highlights: [
      { pt: "Modo autônomo + manual", zh: "自主 + 手动模式", en: "Autonomous + manual modes", ja: "自律＋手動モード" },
      { pt: "Controle Xbox por Bluetooth", zh: "蓝牙 Xbox 手柄控制", en: "Xbox control over Bluetooth", ja: "BluetoothのXbox操作" },
      { pt: "Bateria Li-ion recarregável", zh: "可充电锂电池", en: "Rechargeable Li-ion battery", ja: "充電式Li-ionバッテリー" },
    ],
    githubLink: "https://github.com/gabriel-re-pires/Rob-Seguidor-de-Linha",
    videoSrc: "https://youtube.com/shorts/KOMsR1Fa0WY?feature=share",
    featured: false,
  },
  {
    id: 5,
    ...macropadBase,
    featured: true,
  },
];
