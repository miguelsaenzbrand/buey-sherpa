import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Digital Técnico (SEO/SEM) | BUEY SHERPA",
  description: "Marketing técnico en argentina. Somos especialistas en SEO y SEM. Trabajamos organicamiente en posicionar tu web. Contactanos para comenzar el ascenso.",
  keywords: ["SEO", "SEM", "Posicionamiento web", "marketing digital", "marketing técnico", "publicidad online", "redes sociales", "trafico orgánico web"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
