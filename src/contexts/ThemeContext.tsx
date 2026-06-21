import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "orange" | "red" | "blue" | "pink";

const ORDER: Theme[] = ["orange", "red", "blue", "pink"];

type ThemeCtx = {
  theme: Theme;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeCtx>({
  theme: "orange",
  cycleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState(0);
  const theme = ORDER[index];

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const cycleTheme = () => setIndex((i) => (i + 1) % ORDER.length);

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
