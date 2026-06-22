import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LanguageContext";
import { scrollToSection, scrollToTop } from "@/lib/scroll";

const LINKS = [
  { key: "nav.about", id: "sobre" },
  { key: "nav.projects", id: "projetos" },
  { key: "nav.certs", id: "certificacoes" },
  { key: "nav.contact", id: "contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cycleTheme } = useTheme();
  const { t } = useLang();

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

          <button type="button" className="hamb" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
