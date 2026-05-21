import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo Web & Arquitectura Digital | BUEY SHERPA",
  description: "Desarrollamos web más allá de un código perfecto. Adaptamos tu estrategia de márketing a una arquitectura web ágil y lista para trepar. Contanos tu proyecto.",
  keywords: ["Diseño web", "arquitectura web", "páginas web", "websites"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
