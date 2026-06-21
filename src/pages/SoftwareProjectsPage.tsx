import { useMemo } from "react";
import { softwareProjects } from "@/data/softwareProjects";
import ProjectGallery from "@/components/ProjectGallery";
import { softwareToGallery } from "@/lib/projectMappers";
import { useLang } from "@/contexts/LanguageContext";

const CATEGORY_IDS = ["ia", "web", "dados", "desktop"];
const present = new Set<string>(softwareProjects.map((p) => p.category));
const presentCats = CATEGORY_IDS.filter((id) => present.has(id));

const SoftwareProjectsPage = () => {
  const { lang, t } = useLang();
  const projects = useMemo(() => softwareProjects.map((p) => softwareToGallery(p, lang, t)), [lang, t]);
  const categories = presentCats.map((id) => ({ id, label: t(`cat.${id}`) }));

  return (
    <ProjectGallery
      title="// Software"
      intro={t("gallery.softwareIntro")}
      projects={projects}
      categories={categories}
    />
  );
};

export default SoftwareProjectsPage;
