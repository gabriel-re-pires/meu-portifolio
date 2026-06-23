import type { Theme } from "@/contexts/ThemeContext";

import heroOrange from "./hero-orange.gif";
import heroRed from "./hero-red.gif";
import heroBlue from "./hero-blue.gif";
import heroPink from "./hero-pink.gif";

import avatarOrange from "./avatar-orange.webp";
import avatarRed from "./avatar-red.webp";
import avatarBlue from "./avatar-blue.webp";
import avatarPink from "./avatar-pink.webp";

export const heroByTheme: Record<Theme, string> = {
  orange: heroOrange,
  red: heroRed,
  blue: heroBlue,
  pink: heroPink,
};

export const avatarByTheme: Record<Theme, string> = {
  orange: avatarOrange,
  red: avatarRed,
  blue: avatarBlue,
  pink: avatarPink,
};
