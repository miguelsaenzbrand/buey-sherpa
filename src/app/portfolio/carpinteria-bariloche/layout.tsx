import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cáceres & Addams: Oficio y Materia | BUEY SHERPA",
  description: "Case study con Cáceres & Addam's en Bariloche. Explorá nuestro portfolio de Buey Sherpa.",
  keywords: ["markeitng case study", "video", "storytelling", "publicidad", "estrategia de marketing", "marketing patagonia", "carpintería", "bariloche", "documental"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
