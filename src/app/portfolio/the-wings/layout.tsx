import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Wings: Espartanos | BUEY SHERPA",
  description: "Un micro documental que nos muestra en primera persona a Coco Oderigo explicando el proyecto Espartanos.",
  keywords: ["marketing case study", "video", "storytelling", "documental", "espartanos", "rugby", "reinserción", "the wings"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}