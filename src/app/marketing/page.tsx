"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MarketingPage() {
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
          <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase">CUMBRE 01</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4 leading-none uppercase">
            MARKETING
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif italic font-light mt-8 opacity-90">
            Estrategia Integral: Trazando rutas con propósito.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-buey-white/70"
        >
          <p>
            No creemos en tácticas aisladas, sino en ecosistemas de marca sólidos. El marketing en BUEY SHERPA es la brújula que guía cada acción hacia un objetivo de negocio real. 
          </p>
          <p>
            Analizamos el territorio, entendemos a la audiencia y diseñamos estrategias que combinan la intuición creativa con el rigor analítico. Nuestra meta es construir marcas que no solo ocupen espacio, sino que trasciendan en el tiempo.
          </p>
        </motion.div>

      </section>
    </main>
  );
}
