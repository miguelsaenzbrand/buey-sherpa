"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MorettiCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Destilería Moretti: Gin & Tonic en la Cumbre",
    "description": "Lanzamiento y posicionamiento de Gintonic en lata para Destilería Moretti en Bariloche.",
    "thumbnailUrl": [
      "https://bueysherpa.com/moretti-thumb.png"
    ],
    "uploadDate": "2022-05-27",
    "embedUrl": "https://player.vimeo.com/video/714600218"
  };

  return (
    <main className="min-h-screen bg-buey-dark text-buey-white selection:bg-buey-orange selection:text-buey-dark font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header / Navigation */}
      <nav className="p-8 md:p-12">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Volver al refugio
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-8 md:px-24 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase">CASE STUDY // MARKETING ESTRATÉGICO</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mt-6 leading-tight uppercase">
            Gin & Tonic en la Cumbre
          </h1>
          <h2 className="text-xl md:text-2xl font-serif italic font-light mt-8 opacity-80 max-w-2xl">
            Lanzamiento y posicionamiento de Gintonic en lata para Destilería Moretti.
          </h2>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="w-full px-4 md:px-24 mb-32">
        <div className="aspect-video bg-white/5 relative overflow-hidden border border-white/5">
          <iframe 
            src="https://player.vimeo.com/video/714600218?badge=0&autopause=0&player_id=0&app_id=58479" 
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            title="Destilería Moretti - Lua Bar"
          ></iframe>
        </div>
      </section>

      {/* Strategy & Solution */}
      <section className="px-8 md:px-24 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-white/5">
        <div className="space-y-8">
          <h3 className="text-xs tracking-[0.5em] uppercase opacity-40 font-mono">El Desafío</h3>
          <p className="text-lg md:text-xl font-light leading-relaxed text-buey-white/70">
            Destilería Moretti, creadores del premiado Gin Buenos Aires, buscaba introducir su innovador formato de Gintonic en lata en el mercado de la Patagonia. El reto era crear una experiencia de marca que estuviera a la altura de la calidad del producto y generara impacto inmediato en prensa y consumidores locales.
          </p>
        </div>
        <div className="space-y-8">
          <h3 className="text-xs tracking-[0.5em] uppercase opacity-40 font-mono">La Solución</h3>
          <p className="text-lg md:text-xl font-light leading-relaxed text-buey-white/70">
            Aplicando nuestra metodología de <strong>Marketing de Altura</strong>, diseñamos una producción integral en Bariloche. Como <strong>agencia de marketing en Patagonia</strong>, elegimos Lua Bar para crear una experiencia de marca disruptiva que garantizara visibilidad y relevancia en el mercado local.
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-8 md:px-24 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 block">Cliente</span>
            <span className="text-lg font-medium tracking-tight">Destilería Moretti</span>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 block">Ubicación</span>
            <span className="text-lg font-medium tracking-tight">Lua Bar, Bariloche</span>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 block">Servicios</span>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 border border-buey-orange/30 text-buey-orange text-[10px] tracking-widest uppercase">Estrategia</span>
              <span className="px-3 py-1 border border-buey-orange/30 text-buey-orange text-[10px] tracking-widest uppercase">Prensa</span>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 block">Evento</span>
            <span className="text-lg font-medium tracking-tight">Producción Integral</span>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-48 px-8 flex flex-col items-center text-center space-y-12">
        <h4 className="text-3xl md:text-5xl font-serif italic font-light opacity-80">
          ¿Listo para trazar tu propia ruta?
        </h4>
        <Link 
          href="/#contacto" 
          className="bg-buey-white text-buey-dark px-12 py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-buey-orange transition-all duration-300"
        >
          Iniciar expedición
        </Link>
      </footer>
    </main>
  );
}
