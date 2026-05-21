import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producción Audiovisual & Narrativa Visual | BUEY SHERPA",
  description: "Creamos contenido visual que conecta y emociona. Producción audiovisual profesional en la Patagonia: videos corporativos, reels y campañas. Mirá el portafolio.",
  keywords: ["Producción audiovisual", "audio y video", "videos", "documental", "storytelling", "videos en patagonia"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
