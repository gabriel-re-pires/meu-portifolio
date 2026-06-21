import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, dict } from "@/i18n/dict";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "portfolio-lang";

const isLang = (v: unknown): v is Lang => v === "pt" || v === "zh" || v === "en" || v === "ja";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) return saved;
    }
    return "pt";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const t = useCallback((key: string) => dict[key]?.[lang] ?? dict[key]?.pt ?? key, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang deve ser usado dentro de LanguageProvider");
  return ctx;
};
