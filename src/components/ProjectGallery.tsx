import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import ProjectModal, { GalleryProject } from "./ProjectModal";
import ProjectImage from "./ProjectImage";

type Props = {
  title: string;
  intro?: string;
  projects: GalleryProject[];
  categories?: { id: string; label: string }[];
};

const ProjectGallery = ({ title, intro, projects, categories }: Props) => {
  const { t } = useLang();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const showFilters = !!categories && categories.length > 1;

  const shown = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  const active = projects.find((p) => p.id === openId) ?? null;

  return (
    <div className="proj-page">
      <div className="wrap">
        <Link to="/" state={{ targetId: "projetos" }} className="proj-back">{t("gallery.back")}</Link>

        <div className="proj-head">
          <h2 className="proj-title">{title}</h2>
          {intro && <p className="proj-intro">{intro}</p>}
        </div>

        {showFilters && (
          <div className="proj-filters">
            <button type="button" className={`proj-filter${filter === "all" ? " active" : ""}`} onClick={() => setFilter("all")}>
              {t("gallery.all")}
            </button>
            {categories!.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`proj-filter${filter === c.id ? " active" : ""}`}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {shown.length > 0 ? (
          <div className="proj-gallery">
            {shown.map((p) => {
              const hasVideo = p.media.some((m) => m.type === "video");
              const imgCount = p.media.filter((m) => m.type === "image").length;
              return (
                <button key={p.id} type="button" className="box proj-card" onClick={() => setOpenId(p.id)}>
                  <div className={`proj-card-thumb${p.logo ? " is-logo" : ""}`}>
                    <ProjectImage src={p.thumbnail} name={p.name} />
                    {hasVideo && <span className="proj-card-badge">{t("gallery.video")}</span>}
                    {!hasVideo && imgCount > 1 && <span className="proj-card-badge">{imgCount} {t("gallery.photos")}</span>}
                  </div>
                  <div className="proj-card-body">
                    <h3>{p.name}</h3>
                    <p>{p.shortDescription}</p>
                    <div className="tags">
                      {p.techStack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                  </div>
                  <span className="proj-card-cta">{t("gallery.details")}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <p className="proj-empty">{t("gallery.empty")}</p>
        )}
      </div>

      {active && (
        <ProjectModal
          project={active}
          onClose={() => setOpenId(null)}
          onMore={active.detailHref ? () => navigate(active.detailHref!) : undefined}
          moreLabel={t("modal.moreProject")}
          moreInside={!!active.detailHref}
        />
      )}
    </div>
  );
};

export default ProjectGallery;
