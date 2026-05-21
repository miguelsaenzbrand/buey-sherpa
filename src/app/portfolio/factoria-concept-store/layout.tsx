import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inauguración Factoría: Concept Store | BUEY SHERPA",
  description: "Case study con Factoría Concept Store en Bariloche. Explorá nuestro portfolio de Buey Sherpa.",
  keywords: ["marketing case study", "video", "eventos", "bariloche", "diseño de interiores", "interiorisimo", "mulitmarca", "estetica", "marketing"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
