"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SEOPage() {
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
          <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase">CUMBRE 04</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4 leading-none uppercase">
            SEO / SEM
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif italic font-light mt-8 opacity-90">
            Marketing Técnico: Visibilidad donde realmente importa.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-buey-white/70"
        >
          <p>
            Estar en internet no es suficiente; hay que ser encontrado por quienes te buscan. Nuestro enfoque técnico en SEO y SEM combina el análisis de datos con una optimización profunda de contenido y arquitectura. 
          </p>
          <p>
            No buscamos solo tráfico, buscamos relevancia. A través de auditorías técnicas, investigación de palabras clave y campañas SEM quirúrgicas, posicionamos tu marca en la cima de los resultados de búsqueda.
          </p>
        </motion.div>

      </section>
    </main>
  );
}
