"use client";

import { motion } from "framer-motion";

export default function Home() {
  const cumbres = [
    { id: "01", title: "MARKETING", desc: "ESTRATEGIA INTEGRAL" },
    { id: "02", title: "PRODUCCIÓN AUDIOVISUAL", desc: "NARRATIVA VISUAL" },
    { id: "03", title: "DESARROLLO WEB", desc: "ARQUITECTURA DIGITAL" },
    { id: "04", title: "MARKETING DIGITAL TÉCNICO", desc: "SEO / SEM" },
  ];

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
            POTENCIA DIRIGIDA.<br />
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
              <div key={item.id} className="group cursor-crosshair border-b border-white/5 pb-8 last:border-0">
                <p className="font-mono text-sm md:text-base tracking-wider flex flex-col md:flex-row md:items-center gap-2 md:gap-4 transition-all group-hover:translate-x-2">
                  <span className="text-buey-orange font-bold">{item.id}. {item.title}</span>
                  <span className="opacity-30 hidden md:block">//</span>
                  <span className="opacity-60 uppercase">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
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
