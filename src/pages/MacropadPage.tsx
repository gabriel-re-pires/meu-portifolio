import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { macropadBase } from "@/data/macropad";
import ProjectImage from "@/components/ProjectImage";

const MacropadPage = () => {
  const { lang, t } = useLang();
  const [idx, setIdx] = useState(0);

  const shots = macropadBase.screenshots;
  const current = shots[Math.min(idx, shots.length - 1)];

  return (
    <div className="proj-page macropad-page">
      <div className="wrap">
        <Link to="/" state={{ targetId: "projetos" }} className="proj-back">{t("gallery.back")}</Link>

        <div className="proj-head">
          <h2 className="proj-title">{macropadBase.name}</h2>
          {macropadBase.group && <div className="proj-team" style={{ marginTop: 12 }}>{t("modal.team")}</div>}
          <p className="proj-intro">{macropadBase.fullDescription[lang]}</p>
        </div>

        <div className="box mp-media">
          <div className="proj-media-main">
            <ProjectImage key={current} src={current} name={macropadBase.name} />
          </div>
          {shots.length > 1 && (
            <div className="proj-media-strip">
              {shots.map((s, i) => (
                <button
                  key={s}
                  type="button"
                  className={`proj-media-thumb${i === idx ? " active" : ""}`}
                  onClick={() => setIdx(i)}
                  aria-label={`${i + 1}`}
                >
                  <ProjectImage src={s} name={macropadBase.name} showName={false} />
                </button>
              ))}
            </div>
          )}
        </div>

        {macropadBase.techStack.length > 0 && (
          <div className="mp-tech">
            <h4>{t("modal.tech")}</h4>
            <div className="tags">
              {macropadBase.techStack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </div>
        )}

        <div className="proj-sections">
          {macropadBase.sections.map((s) => (
            <div key={s.title.pt} className="proj-section">
              <h3>{s.title[lang]}</h3>
              <p>{s.body[lang]}</p>
              {s.image && (
                <div className="proj-section-media">
                  <ProjectImage src={s.image} name={s.title[lang]} showName={false} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MacropadPage;
