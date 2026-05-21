import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Estratégico & Estrategia Integral | BUEY SHERPA",
  description: "Agencia de marketing integral en la Patagonia. Impulsamos tu marca con diseño web, SEO, SEM y producción audiovisual de alto impacto. ¡Hablemos hoy!",
  keywords: ["Marketing", "marketing argentina", "marketing patagonia", "estrategia de marketing", "estrategia de marketing patagonia"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
