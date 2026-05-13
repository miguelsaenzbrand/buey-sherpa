"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AudiovisualPage() {
  return (
    <main className="min-h-screen bg-buey-dark text-buey-white p-8 md:p-24 selection:bg-buey-orange selection:text-buey-dark font-sans">
      <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity mb-24 group">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Volver al refugio
      </Link>

      <section className="max-w-4xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase">CUMBRE 02</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4 leading-none uppercase">
            AUDIOVISUAL
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif italic font-light mt-8 opacity-90">
            Narrativa Visual: La potencia de una historia bien contada.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-buey-white/70"
        >
          <p>
            En un mundo saturado de imágenes, la diferencia está en la intención. Nuestra producción audiovisual nace en la Patagonia para proyectarse globalmente, capturando la esencia de cada proyecto con una estética única.
          </p>
          <p>
            Desde documentales de territorio hasta contenido comercial de alto impacto, operamos con equipos de última generación y una visión artística que prioriza la autenticidad sobre el artificio.
          </p>
        </motion.div>

      </section>
    </main>
  );
}
