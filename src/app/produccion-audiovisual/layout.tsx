import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producción Audiovisual & Narrativa Visual | BUEY SHERPA",
  description: "En un mundo saturado de imágenes, la diferencia está en la intención. Nuestra producción audiovisual nace en la Patagonia para proyectarse globalmente, capturando la esencia de cada proyecto con una estética única.",
  keywords: ["Producción audiovisual", "audio y video", "videos", "documental", "storytelling", "videos en patagonia"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
