import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inauguración Factoría: Concept Store | BUEY SHERPA",
  description: "Producción de barra de coctelería y cobertura audiovisual para el evento de apertura de Factoría Concept Store en Bariloche.",
  keywords: ["marketing case study", "video", "eventos", "bariloche", "diseño de interiores", "interiorisimo", "mulitmarca", "estetica", "marketing"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
