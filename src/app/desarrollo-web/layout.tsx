import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo Web & Arquitectura Digital | BUEY SHERPA",
  description: "Construimos herramientas digitales que funcionan con la precisión de un reloj. El desarrollo web en BUEY SHERPA prioriza la velocidad, la seguridad y una experiencia de usuario impecable.",
  keywords: ["Diseño web", "arquitectura web", "páginas web", "websites"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
