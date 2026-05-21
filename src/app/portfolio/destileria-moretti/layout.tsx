import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destilería Moretti: Gin & Tonic en la Cumbre | BUEY SHERPA",
  description: "Case study con Destilería Moretti. Explorá nuestro portfolio de Buey Sherpa.",
  keywords: ["marketing case study", "video", "eventos", "bariloche", "gintonic", "gin & tonic", "moretti", "destileria moretti", "buenos aires gin", "dj", "marketing"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
