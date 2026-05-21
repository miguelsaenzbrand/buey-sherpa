import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDS Patagonia: Auditoría y Estrategia de Ascenso | BUEY SHERPA",
  description: "Propuesta de marketing y hoja de ruta técnica para consolidar el liderazgo del desarrollador y maximizar la fuerza de ventas de Pueblo Carao y Pharos.",
  keywords: ["Marketing de altura", "Agencia de marketing Patagonia", "Marketing Patagonia", "SEO", "Desarrollo Web", "Audiovisual", "Estrategia Digital"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
