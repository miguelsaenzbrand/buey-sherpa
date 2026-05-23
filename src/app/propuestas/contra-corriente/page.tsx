"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowDown, CheckCircle2, AlertCircle, Waves, Wine } from "lucide-react";

export default function ContraCorrientePropuesta() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen bg-buey-dark text-buey-white selection:bg-buey-orange selection:text-buey-dark font-sans overflow-x-hidden">
      
      {/* 1. PORTADA */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative border-b border-white/5">
        <div className="absolute top-12 left-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity">
            <ArrowLeft size={12} /> BUEY SHERPA
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center space-y-8"
        >
          <span className="text-xs tracking-[0.6em] text-buey-orange font-bold uppercase">Plan de Posicionamiento SEO & Conversión</span>
          <h1 className="text-5xl md:text-[8rem] font-black tracking-[-0.08em] leading-none uppercase italic">
            CONTRA <br className="md:hidden" /> CORRIENTE
          </h1>
          <p className="text-xl md:text-2xl font-serif italic font-light opacity-60 tracking-tight">
            Auditoría de Tráfico y Estrategia de Altura.
          </p>
        </motion.div>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <span className="text-[8px] uppercase tracking-[0.5em]">Deslizar para iniciar</span>
          <ArrowDown size={14} />
        </div>
      </section>

      {/* 2. CONTEXTO Y DUOPOLIO */}
      <section className="min-h-screen flex items-center px-8 md:px-24 py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeIn}>
            <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase block mb-4">La Alianza</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              BODEGA & <br />
              <span className="text-buey-orange">RIVER GUIDES</span>
            </h2>
          </motion.div>
          <motion.div {...fadeIn} className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-buey-white/70">
            <p>
              Bodega Contra Corriente produce vinos de clima frío de altísima calidad en Trevelin. Esta excelencia convive de manera orgánica con <strong>Patagonia River Guides</strong>, el servicio de lodges de pesca con mosca más exclusivo del hemisferio sur.
            </p>
            <p>
              El objetivo de <strong>BUEY SHERPA</strong> es unificar estas dos potencias en una estrategia digital integrada. Canalizaremos la autoridad internacional de PRG para alimentar el tráfico y acelerar de manera directa las ventas de la bodega.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. AUDITORÍA */}
      <section className="min-h-screen px-8 md:px-24 py-32 border-y border-white/5">
        <div className="max-w-5xl mx-auto space-y-24">
          <motion.div {...fadeIn} className="text-center space-y-8">
            <h2 className="text-4xl md:text-7xl font-serif italic font-light tracking-tighter">Diagnóstico de Superficie</h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed text-buey-white/70">
              Auditamos el ecosistema digital de la bodega para identificar por qué un producto de calidad de exportación no se refleja en su volumen de transacciones web. Diseñamos este mapa técnico para corregir las fricciones y posicionar a la bodega en los motores de búsqueda.
            </p>
            <p className="text-sm md:text-lg opacity-40 uppercase tracking-[0.4em]">Auditando contracorrientebodega.com</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Silencio de Marca (SEO)", desc: "Falta de optimización para palabras clave de alta intención como 'Vinos de Trevelin' o 'Pinot Noir Patagonia'." },
              { title: "Sinergia Inactiva", desc: "El tráfico internacional premium que llega a Patagonia River Guides no es redirigido de manera eficiente a la e-commerce de la bodega." },
              { title: "Experiencia de Compra", desc: "Fricciones en el checkout y falta de un flujo inmersivo que transmita el valor real de una botella premium." },
              { title: "Local SEO Invisible", desc: "Baja optimización en Google Maps para turistas que recorren la Ruta 40 y buscan bodegas en Trevelin/Esquel." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-10 border border-white/5 space-y-4 hover:border-buey-orange/30 transition-colors"
              >
                <AlertCircle className="text-buey-orange opacity-50" size={20} />
                <h4 className="text-xl font-bold uppercase tracking-tighter">{item.title}</h4>
                <p className="text-sm leading-relaxed opacity-60 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LA HOJA DE RUTA */}
      <section className="min-h-screen flex items-center px-8 md:px-24 py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center grayscale pointer-events-none">
          <h1 className="text-[25rem] font-black leading-none">RUTAS</h1>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
          <motion.div {...fadeIn} className="space-y-12">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              ESTRATEGIA <br />
              <span className="text-buey-orange italic font-serif font-light">SEO</span>
            </h2>
            <div className="space-y-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter flex items-center gap-3"><Wine size={20} className="text-buey-orange" /> 1. SEO de Alta Gama</h3>
                <p className="text-base opacity-60 font-light leading-relaxed">Posicionar las variedades estrella (Pinot Noir, Gewürztraminer) bajo términos de búsqueda premium que atraigan a coleccionistas y amantes del vino.</p>
              </div>
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter flex items-center gap-3"><Waves size={20} className="text-buey-orange" /> 2. Sinergia de Tráfico (PRG)</h3>
                <p className="text-base opacity-60 font-light leading-relaxed">Capturar el tráfico calificado del lodge de pesca y transformarlo en embajadores y compradores recurrentes del club de vinos.</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="flex items-center">
            <div className="aspect-[4/5] bg-white/5 w-full border border-white/5 relative group overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070"
                alt="Viñedo de Clima Frío"
                fill
                className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-buey-dark via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. PROPUESTA OPERATIVA */}
      <section className="min-h-screen px-8 md:px-24 py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <motion.div {...fadeIn} className="md:w-1/2 space-y-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
              ACCIONES <br />
              <span className="text-buey-orange">CLAVE</span>
            </h2>
            <ul className="space-y-6">
              {[
                "Rediseño y optimización SEO de la tienda online (E-commerce).",
                "Embudo de captación cruzada con Patagonia River Guides.",
                "Estrategia de posicionamiento local para turismo vitivinícola.",
                "Creación de contenido y Storytelling sobre viñedos de clima frío."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center text-lg font-light opacity-80 border-b border-white/5 pb-4">
                  <CheckCircle2 size={18} className="text-buey-orange flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeIn} className="md:w-1/2 bg-white/[0.02] p-12 border border-white/10 space-y-8">
            <h3 className="text-2xl font-serif italic font-light">Compromiso BUEY SHERPA</h3>
            <p className="text-base leading-relaxed font-light opacity-60">
              Aportamos la potencia técnica y la visión de territorio necesarias para llevar los vinos de Trevelin al mercado global. Trazamos la ruta del posicionamiento orgánico.
            </p>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-40">Propuesta de Servicio</span>
              <span className="text-xs font-bold text-buey-orange tracking-widest">ED. 01 / CC</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CIERRE */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center space-y-16">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl md:text-7xl font-serif italic font-light tracking-tighter mb-8">¿Iniciamos la expedición?</h2>
          <Link 
            href="/#contacto" 
            className="bg-buey-white text-buey-dark px-12 py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-buey-orange transition-all duration-300 inline-block"
          >
            Iniciar ascenso
          </Link>
        </motion.div>
        
        <div className="flex flex-col items-center gap-2 opacity-30">
          <p className="font-mono text-[10px] tracking-widest uppercase">BUEY SHERPA // MARKETING DE ALTURA</p>
          <p className="text-[8px] tracking-[0.2em] uppercase">Patagonia, Argentina</p>
        </div>
      </section>

    </main>
  );
}
