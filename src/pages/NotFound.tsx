import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLang();
  return (
    <div className="nf">
      <h1>404</h1>
      <p>{t("nf.text")}</p>
      <Link to="/" className="btn">{t("nf.home")}</Link>
    </div>
  );
};

export default NotFound;
