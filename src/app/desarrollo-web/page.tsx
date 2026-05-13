"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WebPage() {
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
          <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase">CUMBRE 03</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4 leading-none uppercase">
            DESARROLLO
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif italic font-light mt-8 opacity-90">
            Arquitectura Digital: Cimientos sólidos para el futuro.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-buey-white/70"
        >
          <p>
            Construimos herramientas digitales que funcionan con la precisión de un reloj. El desarrollo web en BUEY SHERPA prioriza la velocidad, la seguridad y una experiencia de usuario impecable.
          </p>
          <p>
            Utilizamos tecnologías de vanguardia (Next.js, TypeScript, Tailwind) para asegurar que cada sitio no solo sea estéticamente impactante, sino que esté optimizado para escalar y convertir visitantes en aliados.
          </p>
        </motion.div>

      </section>
    </main>
  );
}
