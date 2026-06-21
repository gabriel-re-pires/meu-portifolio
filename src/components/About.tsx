import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LanguageContext";
import { avatarByTheme } from "@/assets/character";

const TECH_NAMES = [
  "Flutter", "Dart", "TypeScript", "React", "Python", "JavaScript", "Android",
  "Git", "Figma", "VS Code", "Arduino", "Firebase", "Linux", "Unity", "Raspberry Pi", "EasyEDA",
];

const About = () => {
  const { theme } = useTheme();
  const { t } = useLang();
  const avatar = avatarByTheme[theme];

  return (
    <section className="section" id="sobre">
      <div className="wrap">
        <div className="section-head">
          <div className="label">{t("about.label")}</div>
          <h2>{t("about.title")}</h2>
        </div>

        <div className="about-grid">
          <div className="box id-card">
            <div className="id-frame">
              <div className="tag-corner">ID:01</div>
              <div className="char-holder" style={{ ["--avatar" as string]: `url(${avatar})` } as React.CSSProperties}>
                <img className="avatar-img" src={avatar} alt="Personagem — Gabriel" />
              </div>
            </div>
            <div className="id-meta">
              {t("about.metaClass")}: <b>{t("about.eduV")}</b><br />
              {t("about.metaAge")}: <b>22</b>
            </div>
          </div>

          <div className="about-body">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <div className="stats">
              <div className="box stat"><div className="k">{t("about.stackK")}</div><div className="v">{t("about.stackV")}</div></div>
              <div className="box stat"><div className="k">{t("about.focusK")}</div><div className="v">{t("about.focusV")}</div></div>
              <div className="box stat"><div className="k">{t("about.eduK")}</div><div className="v">{t("about.eduV")}</div></div>
            </div>
          </div>
        </div>

        <div className="tech-wrap">
          <div className="tech-grid">
            {TECH_NAMES.map((tech) => (
              <div key={tech} className="tech">{tech}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
