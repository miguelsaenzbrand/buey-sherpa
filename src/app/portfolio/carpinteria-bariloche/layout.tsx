import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cáceres & Addams: Oficio y Materia | BUEY SHERPA",
  description: "Storytelling para una carpintería de autor en San Carlos de Bariloche. Un recorrido por el proceso artesanal y la filosofía del trabajo con madera.",
  keywords: ["markeitng case study", "video", "storytelling", "publicidad", "estrategia de marketing", "marketing patagonia", "carpintería", "bariloche", "documental"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
