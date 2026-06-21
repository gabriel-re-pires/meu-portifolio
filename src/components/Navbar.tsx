import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LanguageContext";
import { LANGS } from "@/i18n/dict";
import { scrollToSection, scrollToTop } from "@/lib/scroll";

const LINKS = [
  { key: "nav.about", id: "sobre" },
  { key: "nav.projects", id: "projetos" },
  { key: "nav.certs", id: "certificacoes" },
  { key: "nav.contact", id: "contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cycleTheme } = useTheme();
  const { lang, setLang, t } = useLang();

  const goTo = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { targetId: id } });
      return;
    }
    scrollToSection(id);
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname !== "/") navigate("/");
    else scrollToTop(true);
  };

  const currentShort = LANGS.find((l) => l.id === lang)?.short ?? "PT";

  return (
    <nav className={open ? "open" : ""}>
      <div className="wrap">
        <button type="button" className="logo" onClick={goHome}>
          <span className="chip" />GRP<b>_</b>
        </button>
        <div className="nav-right">
          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.id} onClick={() => goTo(l.id)}>{t(l.key)}</a>
            ))}
          </div>

          <button
            type="button"
            className="theme-dot"
            aria-label={t("nav.theme")}
            title={t("nav.theme")}
            onClick={cycleTheme}
          />

          <div className="lang">
            <button
              type="button"
              className="lang-btn"
              aria-label={t("nav.language")}
              title={t("nav.language")}
              onClick={() => setLangOpen((o) => !o)}
            >
              {currentShort} ▾
            </button>
            {langOpen && (
              <>
                <div className="lang-backdrop" onClick={() => setLangOpen(false)} />
                <div className="lang-menu">
                  {LANGS.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      className={l.id === lang ? "active" : ""}
                      onClick={() => {
                        setLang(l.id);
                        setLangOpen(false);
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button type="button" className="hamb" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
