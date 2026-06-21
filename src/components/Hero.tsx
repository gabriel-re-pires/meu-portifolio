import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { heroByTheme } from "@/assets/character";
import { scrollToSection } from "@/lib/scroll";
import { useLang } from "@/contexts/LanguageContext";

const WORDS = ["OI, EU SOU", "你好, 我是", "HI, I AM", "こんにちは, 私は"];

const STARS = [
  { top: "18%", left: "12%", o: false },
  { top: "30%", left: "46%", o: true },
  { top: "64%", left: "24%", o: false },
  { top: "22%", left: "78%", o: false },
  { top: "72%", left: "64%", o: true },
];

const Hero = () => {
  const { theme } = useTheme();
  const { t } = useLang();
  const [text, setText] = useState("");

  useEffect(() => {
    let w = 0;
    let i = 0;
    let del = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const cur = WORDS[w];
      setText(cur.substring(0, i));
      let delay = 95;
      if (!del && i < cur.length) {
        i++;
      } else if (!del && i === cur.length) {
        del = true;
        delay = 1500;
      } else if (del && i > 0) {
        i--;
        delay = 45;
      } else {
        del = false;
        w = (w + 1) % WORDS.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="hero" id="hero">
      {STARS.map((s, i) => (
        <span key={i} className={s.o ? "star o" : "star"} style={{ top: s.top, left: s.left }} />
      ))}
      <div className="wrap">
        <div>
          <div className="hero-greet">
            <span id="typer">{text}</span>
            <span className="cursor" />
          </div>
          <h1>
            GABRIEL R. <span className="accent">PIRES</span>
          </h1>
          <p className="role">{t("hero.role")}</p>
          <p className="tag">{t("hero.tag")}</p>
          <div className="hero-actions">
            <button type="button" className="btn" onClick={() => scrollToSection("projetos")}>
              {t("hero.viewProjects")}
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => scrollToSection("contato")}>
              {t("hero.contact")}
            </button>
          </div>
          <div className="press-start">- Press Start -</div>
        </div>
        <div className="hero-art">
          <div className="hero-char-box">
            <img className="hero-char" src={heroByTheme[theme]} alt="Personagem pixel — Gabriel" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
