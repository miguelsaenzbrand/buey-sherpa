"use client";

import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import Link from "next/link";
import { sendEmail } from "./actions";

export default function Home() {
  const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  const cumbres = [
    { id: "01", title: "MARKETING", desc: "ESTRATEGIA INTEGRAL", href: "/marketing" },
    { id: "02", title: "PRODUCCIÓN AUDIOVISUAL", desc: "NARRATIVA VISUAL", href: "/produccion-audiovisual" },
    { id: "03", title: "DESARROLLO WEB", desc: "ARQUITECTURA DIGITAL", href: "/desarrollo-web" },
    { id: "04", title: "MARKETING DIGITAL TÉCNICO", desc: "SEO / SEM", href: "/marketing-tecnico" },
  ];

  async function handleSubmit(formData: FormData) {
    setStatus(null);
    startTransition(async () => {
      const result = await sendEmail(formData);
      setStatus(result);
      if (result.success) {
        (document.getElementById("contact-form") as HTMLFormElement).reset();
      }
    });
  }

  return (
    <main className="min-h-screen bg-buey-dark text-buey-white flex flex-col items-center selection:bg-buey-orange selection:text-buey-dark overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center w-full px-6">
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "-0.05em" }}
          animate={{ opacity: 1, letterSpacing: "-0.02em" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-black text-center"
        >
          BUEY SHERPA
        </motion.h1>
      </section>

      {/* About Section */}
      <section className="w-full border-t border-buey-white/10 py-32 px-10 bg-buey-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black leading-tight">
              EL BUEY <br />
              <span className="text-buey-orange">//</span> EL GUÍA
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-buey-white">
              Fuerza para el ascenso, sabiduría para la ruta.
            </h3>
            <p className="max-w-xl text-lg leading-[1.8] text-buey-white/70 font-light">
              Creemos en el trabajo silencioso que produce resultados exponenciales. Aseguramos la constancia en cada etapa del proyecto; aportamos la creatividad y la técnica para alcanzar las cumbres más elevadas.
            </p>
            <p className="text-lg italic tracking-wide text-buey-white/90">
              Tu meta es nuestra dirección; el camino lo recorremos juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="w-full px-6 py-32 flex justify-center border-y border-buey-white/5">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-light tracking-[0.4em] text-buey-orange uppercase leading-relaxed">
            MARKETING DE ALTURA.<br />
            VISIÓN INTEGRAL.<br />
            HACIA LA CIMA.
          </p>
        </motion.div>
      </section>

      {/* CUMBRES Section */}
      <section className="w-full max-w-4xl px-6 py-40 md:py-64">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-xs tracking-[0.5em] uppercase opacity-50 font-mono mb-16">CUMBRES</h2>
          
          <div className="space-y-8">
            {cumbres.map((item) => (
              <Link key={item.id} href={item.href} className="block group cursor-crosshair border-b border-white/5 pb-8 last:border-0">
                <p className="font-mono text-sm md:text-base tracking-wider flex flex-col md:flex-row md:items-center gap-2 md:gap-4 transition-all group-hover:translate-x-2">
                  <span className="text-buey-orange font-bold">{item.id}. {item.title}</span>
                  <span className="opacity-30 hidden md:block">//</span>
                  <span className="opacity-60 uppercase">{item.desc}</span>
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT Section */}
      <section className="w-full border-t border-buey-white/10 py-32 px-10 bg-buey-dark">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic font-light mb-20"
          >
            Comencemos el ascenso
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {/* Lado Izquierdo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-light leading-relaxed text-buey-white/80 max-w-sm">
                  Cuéntanos tu proyecto; nosotros trazamos la ruta.
                </p>
              </div>
              
              <div className="space-y-4 font-mono text-sm tracking-widest uppercase">
                <div className="space-y-1">
                  <span className="opacity-40 block text-[10px]">Email</span>
                  <a href="mailto:hola@bueysherpa.com" className="hover:text-buey-orange transition-colors">
                    hola@bueysherpa.com
                  </a>
                </div>
                <div className="space-y-1 pt-4">
                  <span className="opacity-40 block text-[10px]">Ubicación</span>
                  <p>Patagonia, Argentina</p>
                </div>
              </div>
            </motion.div>
            
            {/* Lado Derecho - Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form id="contact-form" action={handleSubmit} className="space-y-10">
                <div className="space-y-1 relative">
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="Nombre"
                    required
                    className="w-full bg-transparent border-b border-buey-white/20 py-4 outline-none focus:border-buey-orange transition-colors placeholder:text-buey-white/20"
                  />
                </div>
                <div className="space-y-1 relative">
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-buey-white/20 py-4 outline-none focus:border-buey-orange transition-colors placeholder:text-buey-white/20"
                  />
                </div>
                <div className="space-y-1 relative">
                  <textarea 
                    name="message" 
                    rows={4}
                    placeholder="¿Cuál es el objetivo de tu próximo proyecto?"
                    required
                    className="w-full bg-transparent border-b border-buey-white/20 py-4 outline-none focus:border-buey-orange transition-colors placeholder:text-buey-white/20 resize-none"
                  ></textarea>
                </div>
                
                <div className="flex flex-col gap-4">
                  <button 
                    type="submit" 
                    disabled={isPending}
                    className="w-fit bg-buey-white text-buey-dark px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-buey-orange hover:text-buey-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? "Enviando..." : "Iniciar expedición"}
                  </button>

                  {status?.success && (
                    <p className="text-buey-orange text-sm font-mono tracking-wider">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p>
                  )}
                  {status?.error && (
                    <p className="text-red-500 text-sm font-mono tracking-wider">{status.error}</p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENTES Section */}
      <section className="w-full border-t border-buey-white/10 py-24 px-10 bg-buey-dark">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs tracking-[0.5em] uppercase opacity-50 font-mono"
          >
            Clientes
          </motion.h2>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Link 
              href="/propuestas/cds-patagonia"
              className="text-2xl md:text-3xl font-serif italic font-light hover:text-buey-orange transition-colors duration-300"
            >
              CDS Patagonia
            </Link>
            <Link 
              href="/propuestas/contra-corriente"
              className="text-2xl md:text-3xl font-serif italic font-light hover:text-buey-orange transition-colors duration-300"
            >
              Contra Corriente
            </Link>
            <Link 
              href="#"
              className="text-2xl md:text-3xl font-serif italic font-light hover:text-buey-orange transition-colors duration-300"
            >
              Dublin Dogos RFC
            </Link>
            <Link 
              href="https://revistazorro.ar"
              target="_blank"
              className="text-2xl md:text-3xl font-serif italic font-light hover:text-buey-orange transition-colors duration-300"
            >
              Revista Zorro
            </Link>
            <Link 
              href="#"
              className="text-2xl md:text-3xl font-serif italic font-light hover:text-buey-orange transition-colors duration-300"
            >
              Mercado Austral
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="w-full p-12 mt-auto flex justify-center">
        <div className="font-mono text-[10px] tracking-[0.3em] opacity-20 uppercase">
          BS © 2024
        </div>
      </footer>

    </main>
  );
}
