import { HashRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, Suspense, lazy, useLayoutEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import { NAV_HEIGHT } from "@/lib/scroll";

// Home carrega imediata (primeira pintura); demais paginas viram chunks sob demanda.
const SoftwareProjectsPage = lazy(() => import("@/pages/SoftwareProjectsPage"));
const HardwareProjectsPage = lazy(() => import("@/pages/HardwareProjectsPage"));
const MacropadPage = lazy(() => import("@/pages/MacropadPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// guarda a posicao de scroll de cada entrada do historico (restaura no "voltar")
const scrollMemory = new Map<string, number>();

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.18, ease: "easeIn" } },
};

const Page = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navType = useNavigationType();

  // Posiciona o scroll ANTES do fade-in (sem pulo): secao-alvo, restauracao ou topo.
  useLayoutEffect(() => {
    const targetId = (location.state as { targetId?: string } | null)?.targetId;
    const target = targetId ? document.getElementById(targetId) : null;
    const saved = scrollMemory.get(location.key);

    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    } else if (navType === "POP" && saved != null) {
      window.scrollTo({ top: saved, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    // ao sair desta pagina, memoriza onde o usuario estava
    return () => {
      scrollMemory.set(location.key, window.scrollY);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Index /></Page>} />
          <Route path="/software" element={<Page><SoftwareProjectsPage /></Page>} />
          <Route path="/programacao" element={<Page><SoftwareProjectsPage /></Page>} />
          <Route path="/hardware" element={<Page><HardwareProjectsPage /></Page>} />
          <Route path="/macropad" element={<Page><MacropadPage /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider>
    <LanguageProvider>
      <HashRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </HashRouter>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
