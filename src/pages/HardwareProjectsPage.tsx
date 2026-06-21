import { useMemo } from "react";
import { hardwareProjects } from "@/data/hardwareProjects";
import ProjectGallery from "@/components/ProjectGallery";
import { hardwareToGallery } from "@/lib/projectMappers";
import { useLang } from "@/contexts/LanguageContext";

const HardwareProjectsPage = () => {
  const { lang, t } = useLang();
  const projects = useMemo(() => hardwareProjects.map((p) => hardwareToGallery(p, lang, t)), [lang, t]);

  return (
    <ProjectGallery
      title="// Hardware"
      intro={t("gallery.hardwareIntro")}
      projects={projects}
    />
  );
};

export default HardwareProjectsPage;
