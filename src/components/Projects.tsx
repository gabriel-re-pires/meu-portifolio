import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { softwareProjects } from "@/data/softwareProjects";
import { hardwareProjects } from "@/data/hardwareProjects";
import { softwareToGallery, hardwareToGallery } from "@/lib/projectMappers";
import ProjectImage from "@/components/ProjectImage";
import ProjectModal, { GalleryProject } from "@/components/ProjectModal";

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const ChipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
  </svg>
);

type FeaturedProject = GalleryProject & { to: string };

const Projects = () => {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const [open, setOpen] = useState<FeaturedProject | null>(null);

  const featured: FeaturedProject[] = useMemo(
    () => [
      ...softwareProjects.filter((p) => p.featured).map((p) => ({ ...softwareToGallery(p, lang, t), to: "/software" })),
      ...hardwareProjects.filter((p) => p.featured).map((p) => ({ ...hardwareToGallery(p, lang, t), to: "/hardware" })),
    ],
    [lang, t]
  );

  return (
    <section className="section" id="projetos">
      <div className="wrap">
        <div className="section-head">
          <div className="label">{t("projects.label")}</div>
          <h2>{t("projects.title")}</h2>
        </div>

        <div className="cats">
          <Link to="/software" className="box cat">
            <div className="ic"><CodeIcon /></div>
            <div className="ct"><h3>Software</h3><p>{t("projects.softwareDesc")}</p></div>
            <div className="arr">›</div>
          </Link>
          <Link to="/hardware" className="box cat">
            <div className="ic"><ChipIcon /></div>
            <div className="ct"><h3>Hardware</h3><p>{t("projects.hardwareDesc")}</p></div>
            <div className="arr">›</div>
          </Link>
        </div>

        {featured.length > 0 && (
          <>
            <div className="feat-title"><span className="st">★</span> {t("projects.featured")} <span className="st">★</span></div>
            <div className="feat-grid">
              {featured.map((p) => (
                <button key={`${p.to}-${p.id}`} type="button" className="box pcard" onClick={() => setOpen(p)}>
                  <div className={`pthumb${p.logo ? " is-logo" : ""}`}>
                    <ProjectImage src={p.thumbnail} name={p.name} />
                  </div>
                  <div className="pbody">
                    <h4>{p.name}</h4>
                    <p>{p.shortDescription}</p>
                    <div className="tags">
                      {p.techStack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {open && (
        <ProjectModal
          project={open}
          onClose={() => setOpen(null)}
          onMore={() => navigate(open.detailHref ?? open.to)}
          moreLabel={open.detailHref ? t("modal.moreProject") : t("modal.more")}
          moreInside={!!open.detailHref}
        />
      )}
    </section>
  );
};

export default Projects;
