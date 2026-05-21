import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destilería Moretti: Gin & Tonic en la Cumbre | BUEY SHERPA",
  description: "Lanzamiento y posicionamiento de Gintonic en lata para Destilería Moretti. Producción integral de evento de lanzamiento y posicionamiento de marca en la Patagonia.",
  keywords: ["marketing case study", "video", "eventos", "bariloche", "gintonic", "gin & tonic", "moretti", "destileria moretti", "buenos aires gin", "dj", "marketing"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
