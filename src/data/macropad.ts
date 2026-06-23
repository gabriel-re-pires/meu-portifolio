import { Localized } from "@/i18n/dict";

type Section = { title: Localized; body: Localized; image?: string };

// Macropad Inteligente — listado em Hardware e Software, com página dedicada (/macropad).
export const macropadBase = {
  name: "Macropad Inteligente",
  shortDescription: {
    pt: "Teclado auxiliar customizado, do circuito ao software.",
    zh: "定制辅助键盘，从电路到软件。",
    en: "Custom macro keypad, from circuit to software.",
    ja: "回路からソフトまで自作の補助キーパッド。",
  } as Localized,
  fullDescription: {
    pt: "Um teclado auxiliar customizado do zero, unindo design de circuito impresso, eletrônica embarcada e desenvolvimento de software multiplataforma.",
    zh: "一款从零打造的定制辅助键盘，融合印刷电路设计、嵌入式电子与跨平台软件开发。",
    en: "A custom auxiliary keyboard built from scratch, uniting printed-circuit design, embedded electronics and cross-platform software development.",
    ja: "ゼロから作り上げた自作の補助キーボード。プリント基板設計、組み込みエレクトロニクス、クロスプラットフォームのソフトウェア開発を融合。",
  } as Localized,
  thumbnail: "projetos/macropad/01.webp",
  screenshots: ["projetos/macropad/01.webp"],
  techStack: ["EasyEDA", "C/C++", "Python", "OLED", "Impressão 3D"],
  highlights: [] as Localized[],
  sections: [
    {
      title: {
        pt: "A Ideia do Projeto",
        zh: "项目理念",
        en: "The Idea Behind the Project",
        ja: "プロジェクトの構想",
      },
      body: {
        pt: "A motivação por trás deste projeto é criar uma ferramenta que realmente se adapte ao fluxo de trabalho do usuário, em vez de ser apenas um teclado genérico com atalhos fixos. Ao integrar um display OLED e desenvolver uma aplicação desktop inteligente, o Macropad saberá exatamente o que você está fazendo. Se você abrir o seu editor de código, as 18 teclas e a tela assumem funções de compilação, debug e formatação. Se você alternar para o navegador, os atalhos mudam instantaneamente. O grande desafio e diferencial deste projeto é construir a ponte completa: desenhar a própria placa, fabricar o protótipo, realizar a soldagem dos componentes e garantir que os códigos (C++ e Python) conversem perfeitamente com o sistema operacional.",
        zh: "这个项目的初衷是打造一款真正适应用户工作流程的工具，而不仅仅是带固定快捷键的通用键盘。通过集成 OLED 显示屏并开发智能桌面应用，Macropad 能准确知道你正在做什么。打开代码编辑器时，18 个按键和屏幕即切换为编译、调试和格式化功能；切换到浏览器时，快捷键会即时改变。这个项目真正的挑战与亮点在于搭建完整的链路：自行设计电路板、制作原型、焊接元件，并确保代码（C++ 和 Python）与操作系统完美配合。",
        en: "The motivation behind this project is to create a tool that truly adapts to the user's workflow, instead of being just a generic keyboard with fixed shortcuts. By integrating an OLED display and developing a smart desktop application, the Macropad knows exactly what you're doing. Open your code editor and the 18 keys and the screen take on build, debug and format functions. Switch to the browser and the shortcuts change instantly. The real challenge and differentiator of this project is building the complete bridge: designing the board itself, fabricating the prototype, soldering the components, and making sure the code (C++ and Python) talks perfectly with the operating system.",
        ja: "このプロジェクトの動機は、固定ショートカットだけの汎用キーボードではなく、ユーザーのワークフローに本当に適応するツールを作ることです。OLEDディスプレイを統合し、インテリジェントなデスクトップアプリを開発することで、Macropadはあなたが何をしているかを正確に把握します。コードエディタを開けば、18個のキーと画面はビルド・デバッグ・整形の機能になります。ブラウザに切り替えれば、ショートカットも瞬時に変わります。このプロジェクトの大きな挑戦であり差別化点は、完全な橋渡しを構築すること——基板そのものを設計し、試作を製造し、部品をはんだ付けし、コード（C++ とPython）がOSと完璧に連携することを保証することです。",
      },
      image: "projetos/macropad/02.webp",
    },
    {
      title: {
        pt: "Fase 1 — Esquemático e Roteamento",
        zh: "阶段 1 — 原理图与布线",
        en: "Phase 1 — Schematic & Routing",
        ja: "フェーズ1 — 回路図と配線",
      },
      body: {
        pt: "Elaboração do esquemático e roteamento completo da placa no EasyEDA. O layout foi cuidadosamente planejado para acomodar as 18 teclas mecânicas e o display OLED de forma ergonômica.",
        zh: "在 EasyEDA 中完成原理图绘制和整块电路板的布线。布局经过精心规划，以符合人体工学的方式容纳 18 个机械按键和 OLED 显示屏。",
        en: "Drawing the schematic and the complete board routing in EasyEDA. The layout was carefully planned to fit the 18 mechanical keys and the OLED display ergonomically.",
        ja: "EasyEDAで回路図の作成と基板全体の配線を実施。18個のメカニカルキーとOLEDディスプレイを人間工学的に配置できるよう、レイアウトを入念に計画しました。",
      },
      image: "projetos/macropad/03.webp",
    },
    {
      title: {
        pt: "Fase 2 — Fabricação e Chegada da PCB",
        zh: "阶段 2 — PCB 制造与到货",
        en: "Phase 2 — PCB Fabrication & Arrival",
        ja: "フェーズ2 — PCBの製造と到着",
      },
      body: {
        pt: "Os arquivos Gerber foram enviados à JLCPCB e a placa foi fabricada. O protótipo chegou ao Brasil, pronto para a etapa de montagem.",
        zh: "Gerber 文件被发送至 JLCPCB 进行制造。原型板抵达巴西，准备进入组装阶段。",
        en: "The Gerber files were sent to JLCPCB and the board was manufactured. The prototype arrived in Brazil, ready for the assembly stage.",
        ja: "GerberファイルをJLCPCBに送り、基板を製造。試作品がブラジルに到着し、組み立て工程の準備が整いました。",
      },
    },
    {
      title: {
        pt: "Fase 3 — Montagem da Placa",
        zh: "阶段 3 — 电路板组装",
        en: "Phase 3 — Board Assembly",
        ja: "フェーズ3 — 基板の組み立て",
      },
      body: {
        pt: "Com a PCB em mãos, foi feita a montagem: soldagem dos diodos, dos switches mecânicos, do microcontrolador e a conexão do display OLED. A placa está montada e funcional — o próximo passo é a criação da case em impressão 3D.",
        zh: "拿到 PCB 后进行组装：焊接二极管、机械轴体、微控制器，并连接 OLED 显示屏。电路板已组装完成且功能正常——下一步是用 3D 打印制作外壳。",
        en: "With the PCB in hand, assembly was done: soldering the diodes, the mechanical switches, the microcontroller, and connecting the OLED display. The board is assembled and functional — the next step is creating the case with 3D printing.",
        ja: "PCBを手にして組み立てを実施：ダイオード、メカニカルスイッチ、マイコンのはんだ付けと、OLEDディスプレイの接続。基板は組み立て完了し動作可能です——次の工程は3Dプリントによるケース製作です。",
      },
    },
    {
      title: {
        pt: "Fase 4 — Criação da Case (Impressão 3D)",
        zh: "阶段 4 — 外壳制作（3D 打印）",
        en: "Phase 4 — Case Design (3D Printing)",
        ja: "フェーズ4 — ケース製作（3Dプリント）",
      },
      body: {
        pt: "Modelagem e impressão 3D de uma case sob medida para abrigar a placa montada, protegendo a eletrônica e dando ao Macropad um acabamento final ergonômico e compacto.",
        zh: "建模并 3D 打印量身定制的外壳，用以容纳组装好的电路板，保护电子元件，并赋予 Macropad 符合人体工学的紧凑外观。",
        en: "Modeling and 3D printing a custom case to house the assembled board, protecting the electronics and giving the Macropad an ergonomic, compact final finish.",
        ja: "組み立てた基板を収めるためのカスタムケースをモデリングし3Dプリント。電子部品を保護し、Macropadに人間工学的でコンパクトな仕上がりを与えます。",
      },
    },
    {
      title: {
        pt: "Fase 5 — Desenvolvimento C++ e Python",
        zh: "阶段 5 — C++ 与 Python 开发",
        en: "Phase 5 — C++ and Python Development",
        ja: "フェーズ5 — C++ とPythonの開発",
      },
      body: {
        pt: "Criação do código em C++ para o firmware (varredura da matriz e controle do display) e desenvolvimento do software em Python para o computador, responsável por detectar a janela ativa e enviar os contextos corretos ao Macropad.",
        zh: "编写 C++ 固件代码（矩阵扫描与显示控制），并为电脑开发 Python 软件，负责检测当前活动窗口并向 Macropad 发送正确的情境。",
        en: "Writing the C++ code for the firmware (matrix scanning and display control) and developing the Python software for the computer, responsible for detecting the active window and sending the correct contexts to the Macropad.",
        ja: "ファームウェア用のC++コード（マトリクススキャンとディスプレイ制御）を作成し、PC側のPythonソフトを開発。アクティブなウィンドウを検出し、適切なコンテキストをMacropadに送信します。",
      },
    },
  ] as Section[],
  group: true,
  detailHref: "/macropad",
};
