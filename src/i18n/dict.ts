export type Lang = "pt" | "zh" | "en" | "ja";

/** Texto localizado nos 4 idiomas (usado também nos dados dos projetos). */
export type Localized = { pt: string; zh: string; en: string; ja: string };

/** Ordem exibida no seletor de idioma. */
export const LANGS: { id: Lang; label: string; short: string }[] = [
  { id: "pt", label: "Português", short: "BR" },
  { id: "zh", label: "中文", short: "中" },
  { id: "en", label: "English", short: "EN" },
  { id: "ja", label: "日本語", short: "日" },
];

export const dict: Record<string, Localized> = {
  // --- Navbar ---
  "nav.about": { pt: "Sobre", zh: "关于", en: "About", ja: "私について" },
  "nav.projects": { pt: "Projetos", zh: "项目", en: "Projects", ja: "プロジェクト" },
  "nav.certs": { pt: "Certificações", zh: "证书", en: "Certifications", ja: "資格・認定" },
  "nav.contact": { pt: "Contato", zh: "联系", en: "Contact", ja: "お問い合わせ" },
  "nav.theme": { pt: "Mudar cor do tema", zh: "更换主题颜色", en: "Change theme color", ja: "テーマカラーを変更" },
  "nav.language": { pt: "Idioma", zh: "语言", en: "Language", ja: "言語" },

  // --- Hero ---
  "hero.role": { pt: "Engenheiro & Desenvolvedor Fullstack", zh: "工程师 & 全栈开发者", en: "Engineer & Fullstack Developer", ja: "エンジニア & フルスタック開発者" },
  "hero.tag": {
    pt: "Construindo aplicações para moldar o futuro — unindo software, hardware e boas interfaces.",
    zh: "构建塑造未来的应用——融合软件、硬件与优秀的界面。",
    en: "Building applications to shape the future — uniting software, hardware and great interfaces.",
    ja: "未来を形づくるアプリを構築 — ソフトウェア、ハードウェア、優れたインターフェースを融合。",
  },
  "hero.viewProjects": { pt: "▶ Ver Projetos", zh: "▶ 查看项目", en: "▶ View Projects", ja: "▶ プロジェクトを見る" },
  "hero.contact": { pt: "Contato", zh: "联系", en: "Contact", ja: "お問い合わせ" },

  // --- Sobre ---
  "about.label": { pt: "// Sobre_mim", zh: "// 关于我", en: "// about_me", ja: "// 私について" },
  "about.title": { pt: "Transformando Ideias", zh: "将创意变为现实", en: "Turning Ideas Into Reality", ja: "アイデアをカタチに" },
  "about.p1": {
    pt: "Olá, eu sou um Engenheiro da Computação com experiência prática no desenvolvimento de projetos multidisciplinares. Meus projetos unem o desenvolvimento de sites e aplicativos com a eletrônica, criando pontes entre o mundo digital e o físico.",
    zh: "你好，我是一名计算机工程师，拥有开发多学科项目的实践经验。我的项目将网站和应用开发与电子技术相结合，连接数字世界与物理世界。",
    en: "Hi, I'm a Computer Engineer with hands-on experience building multidisciplinary projects. My work blends web and app development with electronics, bridging the digital and physical worlds.",
    ja: "こんにちは、私は学際的なプロジェクトの開発経験を持つコンピュータエンジニアです。私の制作はウェブ・アプリ開発とエレクトロニクスを融合し、デジタルと物理の世界をつなぎます。",
  },
  "about.p2": {
    pt: "Tenho facilidade em transitar entre diferentes tecnologias para encontrar a melhor solução para cada problema. Meu foco é projetar sistemas robustos no back-end, eficientes no hardware e amigáveis para o usuário final.",
    zh: "我能够在不同技术之间灵活切换，为每个问题找到最佳解决方案。我专注于设计后端稳健、硬件高效、对终端用户友好的系统。",
    en: "I move easily between different technologies to find the best solution for each problem. My focus is designing systems that are robust on the back-end, efficient in hardware, and friendly for the end user.",
    ja: "さまざまな技術を行き来し、各課題に最適な解決策を見つけることが得意です。バックエンドが堅牢で、ハードウェアが効率的、エンドユーザーに優しいシステムの設計に注力しています。",
  },
  "about.stackK": { pt: "Stack", zh: "技术栈", en: "Stack", ja: "スタック" },
  "about.stackV": { pt: "TypeScript & Dart", zh: "TypeScript & Dart", en: "TypeScript & Dart", ja: "TypeScript & Dart" },
  "about.focusK": { pt: "Foco", zh: "专注", en: "Focus", ja: "フォーカス" },
  "about.focusV": { pt: "Web & Mobile", zh: "Web & Mobile", en: "Web & Mobile", ja: "Web & Mobile" },
  "about.eduK": { pt: "Formação", zh: "学历", en: "Education", ja: "学歴" },
  "about.eduV": { pt: "Eng. Computação", zh: "计算机工程", en: "Computer Eng.", ja: "コンピュータ工学" },
  "about.metaClass": { pt: "CLASSE", zh: "职业", en: "CLASS", ja: "クラス" },
  "about.metaAge": { pt: "IDADE", zh: "年龄", en: "AGE", ja: "年齢" },

  // --- Projetos (home) ---
  "projects.label": { pt: "// Explore", zh: "// 探索", en: "// explore", ja: "// 探索" },
  "projects.title": { pt: "Meus Projetos", zh: "我的项目", en: "My Projects", ja: "私のプロジェクト" },
  "projects.softwareDesc": { pt: "IA, Web e Apps.", zh: "AI、Web 和应用。", en: "AI, Web & Apps.", ja: "AI・Web・アプリ。" },
  "projects.hardwareDesc": { pt: "IoT e Eletrônica.", zh: "物联网与电子。", en: "IoT & Electronics.", ja: "IoT・エレクトロニクス。" },
  "projects.featured": { pt: "Destaques", zh: "精选", en: "Featured", ja: "注目" },

  // --- Galeria de projetos ---
  "gallery.back": { pt: "← Voltar para Projetos", zh: "← 返回项目", en: "← Back to Projects", ja: "← プロジェクトへ戻る" },
  "gallery.softwareIntro": {
    pt: "Aplicações de IA, web e dados. Clique em um projeto para ver as imagens e os detalhes.",
    zh: "AI、Web 与数据应用。点击项目查看图片和详情。",
    en: "AI, web and data applications. Click a project to see images and details.",
    ja: "AI・Web・データのアプリ。プロジェクトをクリックして画像と詳細をご覧ください。",
  },
  "gallery.hardwareIntro": {
    pt: "Projetos de eletrônica e IoT. Clique em um projeto para ver o vídeo, as imagens e os detalhes.",
    zh: "电子与物联网项目。点击项目查看视频、图片和详情。",
    en: "Electronics and IoT projects. Click a project to see the video, images and details.",
    ja: "エレクトロニクスとIoTのプロジェクト。プロジェクトをクリックして動画・画像・詳細をご覧ください。",
  },
  "gallery.all": { pt: "Todos", zh: "全部", en: "All", ja: "すべて" },
  "gallery.details": { pt: "Ver detalhes →", zh: "查看详情 →", en: "View details →", ja: "詳細を見る →" },
  "gallery.empty": { pt: "Nenhum projeto nesta categoria ainda.", zh: "此分类暂无项目。", en: "No projects in this category yet.", ja: "このカテゴリにはまだプロジェクトがありません。" },
  "gallery.video": { pt: "▶ Vídeo", zh: "▶ 视频", en: "▶ Video", ja: "▶ 動画" },
  "gallery.photos": { pt: "fotos", zh: "张图片", en: "photos", ja: "枚" },

  // --- Categorias ---
  "cat.ia": { pt: "IA", zh: "AI", en: "AI", ja: "AI" },
  "cat.web": { pt: "Web", zh: "Web", en: "Web", ja: "Web" },
  "cat.dados": { pt: "Dados", zh: "数据", en: "Data", ja: "データ" },
  "cat.desktop": { pt: "Desktop", zh: "桌面应用", en: "Desktop", ja: "デスクトップ" },

  // --- Modal de projeto ---
  "modal.tech": { pt: "Tecnologias", zh: "技术", en: "Technologies", ja: "技術" },
  "modal.highlights": { pt: "Destaques", zh: "亮点", en: "Highlights", ja: "ハイライト" },
  "modal.team": { pt: "★ Projeto em equipe", zh: "★ 团队项目", en: "★ Team project", ja: "★ チームプロジェクト" },
  "modal.more": { pt: "Mais Projetos ›", zh: "更多项目 ›", en: "More Projects ›", ja: "他のプロジェクト ›" },
  "modal.moreProject": { pt: "Ver mais ›", zh: "查看更多 ›", en: "View more ›", ja: "もっと見る ›" },
  "modal.close": { pt: "Fechar", zh: "关闭", en: "Close", ja: "閉じる" },
  "modal.prev": { pt: "Anterior", zh: "上一个", en: "Previous", ja: "前へ" },
  "modal.next": { pt: "Próximo", zh: "下一个", en: "Next", ja: "次へ" },
  "project.viewOnline": { pt: "Ver Online", zh: "在线查看", en: "View Live", ja: "オンラインで見る" },
  "project.viewGithub": { pt: "Ver no GitHub", zh: "在 GitHub 查看", en: "View on GitHub", ja: "GitHubで見る" },

  // --- Certificações ---
  "edu.label": { pt: "// Minhas", zh: "// 我的", en: "// my", ja: "// 私の" },
  "edu.title": { pt: "Certificações", zh: "证书", en: "Certifications", ja: "資格・認定" },

  // --- Contato ---
  "contact.heading": { pt: "Envie uma Mensagem", zh: "发送消息", en: "Send a Message", ja: "メッセージを送る" },
  "contact.name": { pt: "Nome", zh: "姓名", en: "Name", ja: "お名前" },
  "contact.namePh": { pt: "Seu nome", zh: "您的姓名", en: "Your name", ja: "お名前" },
  "contact.email": { pt: "Email", zh: "邮箱", en: "Email", ja: "メール" },
  "contact.emailPh": { pt: "seu.email@exemplo.com", zh: "your.email@example.com", en: "your.email@example.com", ja: "your.email@example.com" },
  "contact.message": { pt: "Mensagem", zh: "留言", en: "Message", ja: "メッセージ" },
  "contact.messagePh": { pt: "Sua mensagem...", zh: "您的留言...", en: "Your message...", ja: "メッセージ..." },
  "contact.send": { pt: "Enviar Mensagem", zh: "发送消息", en: "Send Message", ja: "メッセージを送信" },
  "contact.sending": { pt: "Enviando...", zh: "发送中...", en: "Sending...", ja: "送信中..." },
  "contact.success": { pt: "Mensagem enviada! Responderei em breve.", zh: "消息已发送！我会尽快回复。", en: "Message sent! I'll reply soon.", ja: "メッセージを送信しました！すぐに返信します。" },
  "contact.error": { pt: "Ocorreu um erro. Tente novamente.", zh: "出错了，请重试。", en: "Something went wrong. Please try again.", ja: "エラーが発生しました。もう一度お試しください。" },

  // --- Footer ---
  "footer.sub": { pt: "Desenvolvedor Fullstack", zh: "全栈开发者", en: "Fullstack Developer", ja: "フルスタック開発者" },
  "footer.rights": { pt: "Todos os direitos reservados", zh: "保留所有权利", en: "All rights reserved", ja: "全著作権所有" },

  // --- 404 ---
  "nf.text": { pt: "Página não encontrada", zh: "页面未找到", en: "Page not found", ja: "ページが見つかりません" },
  "nf.home": { pt: "Voltar ao Início", zh: "返回首页", en: "Back to Home", ja: "ホームへ戻る" },
};
