import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BUEY SHERPA | Marketing de Altura en Patagonia",
  description: "Agencia de marketing en Patagonia especializada en estrategia integral, producción audiovisual y desarrollo web y posicionaiento.Comencemos el ascenso.",
  metadataBase: new URL('https://bueysherpa.com'),
  keywords: ["Marketing de altura", "Agencia de marketing Patagonia", "Marketing Patagonia", "SEO", "Desarrollo Web", "Audiovisual", "Estrategia Digital"],
  openGraph: {
    title: "BUEY SHERPA | Marketing de Altura en Patagonia",
    description: "Fuerza para el ascenso, sabiduría para la ruta. Estrategia integral y producción de contenido desde la Patagonia.",
    url: "https://bueysherpa.com",
    siteName: "BUEY SHERPA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUEY SHERPA | Marketing de Altura",
    description: "Fuerza para el ascenso, sabiduría para la ruta. Estrategia integral y producción de contenido.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <GoogleAnalytics gaId="G-BJ77JJ4330" />
    </html>
  );
}
