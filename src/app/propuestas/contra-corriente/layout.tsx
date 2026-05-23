import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contra Corriente: Auditoría de Tráfico y Estrategia SEO | BUEY SHERPA",
  description: "Propuesta de posicionamiento orgánico y aceleración de ventas digitales para Bodega Contra Corriente y Patagonia River Guides.",
  keywords: ["SEO", "Marketing de altura", "Bodega Trevelin", "Vinos de la Patagonia", "Fly Fishing Patagonia"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
