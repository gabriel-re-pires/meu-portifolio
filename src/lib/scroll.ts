// Utilitarios de rolagem — controle central (sem scroll-behavior global no CSS)

// altura da navbar fixa, usada como offset ao rolar ate uma secao
export const NAV_HEIGHT = 64;

/** Rola ate uma secao (#id) compensando a navbar fixa. */
export function scrollToSection(id: string, smooth = true) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top: Math.max(0, top), behavior: smooth ? "smooth" : "auto" });
}

/** Rola ate o topo da pagina. */
export function scrollToTop(smooth = false) {
  window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
}
