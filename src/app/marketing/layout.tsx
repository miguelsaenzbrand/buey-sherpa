import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Estratégico & Estrategia Integral | BUEY SHERPA",
  description: "No creemos en tácticas aisladas, sino en ecosistemas de marca sólidos. El marketing en BUEY SHERPA es la brújula que guía cada acción hacia un objetivo de negocio real.",
  keywords: ["Marketing", "marketing argentina", "marketing patagonia", "estrategia de marketing", "estrategia de marketing patagonia"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
