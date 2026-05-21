import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDS Patagonia: Auditoría y Estrategia de Ascenso | BUEY SHERPA",
  description: "Porfolio de Buey Sherpa.",
  keywords: ["Marketing de altura", "Agencia de marketing Patagonia", "Marketing Patagonia", "SEO", "Desarrollo Web", "Audiovisual", "Estrategia Digital"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
