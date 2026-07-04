import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esquel Turismo: Estrategia de Posicionamiento Digital | BUEY SHERPA",
  description: "Propuesta de posicionamiento y desarrollo de marca digital para Esquel Turismo.",
  keywords: ["Marketing de altura", "Agencia de marketing Patagonia", "Marketing Patagonia", "Esquel Turismo", "SEO", "Desarrollo Web", "Estrategia Digital"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}