import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        encre: "#14223F",
        tampon: "#C2352B",
        papier: "#F5F0E4",
        trait: "#D9D1BE",
        gris: "#5E5B53",
      },
      fontFamily: {
        titre: ["var(--font-titre)", "Georgia", "serif"],
        texte: ["var(--font-texte)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
