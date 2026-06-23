import { useCallback, useEffect, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import ProjectImage from "./ProjectImage";

const BASE = import.meta.env.BASE_URL;

// Extrai o ID de um link do YouTube (shorts, watch ou youtu.be). Retorna null se não for YouTube.
const youTubeId = (url: string): string | null => {
  const m = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
  return m ? m[1] : null;
};

export type Media = { type: "image" | "video"; src: string };

export type GalleryProject = {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  media: Media[];
  techStack: string[];
  highlights: string[];
  links: { label: string; href: string; primary?: boolean }[];
  category?: string;
  group?: boolean;
  detailHref?: string;
  logo?: boolean;
};

type Props = {
  project: GalleryProject;
  onClose: () => void;
  onMore?: () => void;
  moreLabel?: string;
  moreInside?: boolean;
};

const ProjectModal = ({ project, onClose, onMore, moreLabel, moreInside }: Props) => {
  const { t } = useLang();
  const media = project.media.length ? project.media : [{ type: "image" as const, src: project.thumbnail }];
  const [idx, setIdx] = useState(0);
  const current = media[Math.min(idx, media.length - 1)];

  const go = useCallback(
    (d: number) => setIdx((i) => (i + d + media.length) % media.length),
    [media.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, onClose]);

  return (
    <div className="proj-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="proj-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="proj-modal-close" onClick={onClose} aria-label={t("modal.close")}>✕</button>

        <div className="proj-modal-grid">
          <div className="proj-media">
            <div className={`proj-media-main${project.logo && current.src === project.thumbnail ? " is-logo" : ""}`}>
              {current.type === "video" ? (
                youTubeId(current.src) ? (
                  <iframe
                    key={current.src}
                    src={`https://www.youtube.com/embed/${youTubeId(current.src)}`}
                    title={project.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video key={current.src} src={`${BASE}${current.src}`} poster={`${BASE}${project.thumbnail}`} controls />
                )
              ) : (
                <ProjectImage key={current.src} src={current.src} name={project.name} />
              )}
              {media.length > 1 && (
                <>
                  <button type="button" className="proj-media-nav prev" onClick={() => go(-1)} aria-label={t("modal.prev")}>‹</button>
                  <button type="button" className="proj-media-nav next" onClick={() => go(1)} aria-label={t("modal.next")}>›</button>
                </>
              )}
            </div>

            {media.length > 1 && (
              <div className="proj-media-strip">
                {media.map((m, i) => (
                  <button
                    key={`${m.type}-${m.src}`}
                    type="button"
                    className={`proj-media-thumb${i === idx ? " active" : ""}`}
                    onClick={() => setIdx(i)}
                    aria-label={`${i + 1}`}
                  >
                    <ProjectImage src={m.type === "video" ? project.thumbnail : m.src} name={project.name} showName={false} />
                    {m.type === "video" && <span className="proj-media-play">▶</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="proj-info">
            <h3>{project.name}</h3>
            {project.group && <div className="proj-team">{t("modal.team")}</div>}
            <p className="proj-info-desc">{project.fullDescription}</p>

            {project.techStack.length > 0 && (
              <div className="proj-info-block">
                <h4>{t("modal.tech")}</h4>
                <div className="tags">
                  {project.techStack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            )}

            {project.highlights.length > 0 && (
              <div className="proj-info-block">
                <h4>{t("modal.highlights")}</h4>
                <ul>
                  {project.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
            )}

            {(project.links.length > 0 || (onMore && moreInside)) && (
              <div className="proj-actions">
                {project.links.map((l) => (
                  <a key={l.href} className={`btn${l.primary ? "" : " btn--ghost"}`} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
                {onMore && moreInside && (
                  <button type="button" className="btn" onClick={onMore}>{moreLabel ?? t("modal.moreProject")}</button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {onMore && !moreInside && (
        <button
          type="button"
          className="proj-modal-more"
          onClick={(e) => {
            e.stopPropagation();
            onMore();
          }}
        >
          {moreLabel ?? t("modal.more")}
        </button>
      )}
    </div>
  );
};

export default ProjectModal;
