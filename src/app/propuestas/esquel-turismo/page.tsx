"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EsquelTurismoPropuesta() {
  return (
    <main className="min-h-screen bg-buey-dark text-buey-white selection:bg-buey-orange selection:text-buey-dark font-sans overflow-x-hidden flex flex-col justify-center items-center px-6 relative">
      
      {/* Botón de regreso */}
      <div className="absolute top-12 left-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity">
          <ArrowLeft size={12} /> BUEY SHERPA
        </Link>
      </div>

      <div className="text-center space-y-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase block"
        >
          Diagnóstico y Oportunidades
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-7xl font-serif italic font-light tracking-tighter"
        >
          Esquel Turismo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/40 uppercase tracking-[0.3em] text-[10px]"
        >
          Cargando propuesta...
        </motion.p>
      </div>

    </main>
  );
}