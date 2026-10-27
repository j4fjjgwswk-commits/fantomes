import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

const titre = Fraunces({ subsets: ["latin"], variable: "--font-titre", display: "swap" });
const texte = Figtree({ subsets: ["latin"], variable: "--font-texte", display: "swap" });

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const titrePage = "Fantômes : trouve les abonnements que tu paies sans t'en servir";
const description =
  "Dépose ton relevé, on débusque les prélèvements oubliés. Gratuit pour commencer, ton relevé reste sur ton téléphone.";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: titrePage,
  description,
  openGraph: { title: titrePage, description, type: "website", locale: "fr_FR", siteName: "Fantômes" },
  twitter: { card: "summary_large_image", title: titrePage, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F0E4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body>{children}</body>
    </html>
  );
}
