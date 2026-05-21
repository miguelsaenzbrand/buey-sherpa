import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Digital Técnico (SEO/SEM) | BUEY SHERPA",
  description: "Estar en internet no es suficiente; hay que ser encontrado por quienes te buscan. Nuestro enfoque técnico en SEO y SEM combina el análisis de datos con una optimización profunda de contenido y arquitectura.",
  keywords: ["SEO", "SEM", "Posicionamiento web", "marketing digital", "marketing técnico", "publicidad online", "redes sociales", "trafico orgánico web"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
