import { GalleryProject } from "@/components/ProjectModal";
import { SoftwareProject } from "@/data/softwareProjects";
import { HardwareProject } from "@/data/hardwareProjects";
import { Lang } from "@/i18n/dict";

type T = (key: string) => string;

// Convertem os dados brutos em projetos prontos para a galeria/modal, já no idioma atual.
export const softwareToGallery = (p: SoftwareProject, lang: Lang, t: T): GalleryProject => ({
  id: p.id,
  name: p.name,
  shortDescription: p.shortDescription[lang],
  fullDescription: p.fullDescription[lang],
  thumbnail: p.thumbnail,
  category: p.category,
  detailHref: p.detailHref,
  group: p.group,
  logo: p.logo,
  media: p.screenshots.map((s) => ({ type: "image" as const, src: s })),
  techStack: p.techStack,
  highlights: p.highlights.map((h) => h[lang]),
  links: [
    ...(p.siteLink ? [{ label: t("project.viewOnline"), href: p.siteLink, primary: true }] : []),
    ...(p.githubLink ? [{ label: t("project.viewGithub"), href: p.githubLink }] : []),
  ],
});

export const hardwareToGallery = (p: HardwareProject, lang: Lang, t: T): GalleryProject => ({
  id: p.id,
  name: p.name,
  shortDescription: p.shortDescription[lang],
  fullDescription: p.fullDescription[lang],
  thumbnail: p.thumbnail,
  detailHref: p.detailHref,
  group: p.group,
  media: [
    ...p.screenshots.map((s) => ({ type: "image" as const, src: s })),
    ...(p.videoSrc ? [{ type: "video" as const, src: p.videoSrc }] : []),
  ],
  techStack: p.techStack,
  highlights: p.highlights.map((h) => h[lang]),
  links: [
    ...(p.githubLink ? [{ label: t("project.viewGithub"), href: p.githubLink }] : []),
  ],
});
