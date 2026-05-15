"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowDown, CheckCircle2, AlertCircle, TrendingUp, Laptop } from "lucide-react";

export default function CDSPropuesta() {
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <Image 
            src="/cds-logo.png"
            alt="CDS Patagonia Logo"
            width={220}
            height={220}
            className="grayscale brightness-150 contrast-100 opacity-90 object-contain"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center space-y-8"
        >
          <span className="text-xs tracking-[0.6em] text-buey-orange font-bold uppercase">Expedición al éxito inmobiliario</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-[-0.08em] leading-none uppercase italic">
            CDS <br className="md:hidden" /> PATAGONIA
          </h1>
          <p className="text-xl md:text-2xl font-serif italic font-light opacity-60 tracking-tight">
            Auditoría y Estrategia de Ascenso.
          </p>
        </motion.div>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <span className="text-[8px] uppercase tracking-[0.5em]">Deslizar para iniciar</span>
          <ArrowDown size={14} />
        </div>
      </section>

      {/* 2. QUIÉNES SOMOS */}
      <section className="min-h-screen flex items-center px-8 md:px-24 py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              EL GUÍA EN EL <br />
              <span className="text-buey-orange">TERRITORIO</span> DIGITAL
            </h2>
          </motion.div>
          <motion.div {...fadeIn} className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-buey-white/70">
            <p>
              En <strong>BUEY SHERPA</strong> no gestionamos redes; trazamos rutas de inversión. Somos una agencia de <strong>Marketing de Altura</strong> nacida en la Patagonia, especializada en convertir proyectos complejos en activos de deseo.
            </p>
            <div className="grid grid-cols-1 gap-6 pt-8">
              <div className="flex gap-4 items-start border-l border-buey-orange/30 pl-6">
                <TrendingUp className="text-buey-orange mt-1" size={20} />
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Estrategia Integral</h4>
                  <p className="text-sm opacity-50">Visión de 360° sobre el negocio inmobiliario.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start border-l border-buey-orange/30 pl-6">
                <Laptop className="text-buey-orange mt-1" size={20} />
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Tecnología de Punta</h4>
                  <p className="text-sm opacity-50">Arquitectura digital optimizada para la conversión.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. AUDITORÍA */}
      <section className="min-h-screen px-8 md:px-24 py-32 border-y border-white/5">
        <div className="max-w-5xl mx-auto space-y-24">
          <motion.div {...fadeIn} className="text-center space-y-8">
            <h2 className="text-4xl md:text-7xl font-serif italic font-light tracking-tighter">Diagnóstico de Superficie</h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed text-buey-white/70">
              Auditamos el territorio digital de <strong>CDS Patagonia</strong> bajo un objetivo doble: consolidar el liderazgo del desarrollador frente a la competencia y maximizar la fuerza de venta de sus activos estratégicos. Con la mirada puesta en la exclusividad de <strong>Pueblo Carao</strong> y <strong>Pharos</strong>, trazamos esta hoja de ruta técnica.
            </p>
            <p className="text-sm md:text-lg opacity-40 uppercase tracking-[0.4em]">Auditando cdspatagonia.com</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Velocidad de Respuesta", desc: "Carga lenta que penaliza la experiencia móvil del inversor premium." },
              { title: "Dilución de Producto", desc: "Pharos y Pueblo Carao se pierden en una arquitectura genérica." },
              { title: "SEO Silencioso", desc: "La web no captura búsquedas de inversión específicas en la región." },
              { title: "Fuga de Leads", desc: "No existe una ruta de conversión clara (Landing Pages) para capturar interesados." }
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

      {/* 4. ESTRATEGIA */}
      <section className="min-h-screen flex items-center px-8 md:px-24 py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center grayscale pointer-events-none">
          <h1 className="text-[25rem] font-black leading-none">ESTRATEGIA</h1>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
          <motion.div {...fadeIn} className="space-y-12">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              DOBLE <br />
              <span className="text-buey-orange italic font-serif font-light">RUTA</span>
            </h2>
            <div className="space-y-8">
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">1. Autoridad Inmobiliaria</h3>
                <p className="text-base opacity-60 font-light leading-relaxed">Posicionar a CDS Patagonia como el referente indiscutido de solvencia y expertise de suelo en la región.</p>
              </div>
              <div className="p-8 border border-buey-orange/50 bg-buey-orange/5">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">2. Venta de Activos</h3>
                <p className="text-base opacity-90 font-light leading-relaxed">Venta acelerada y quirúrgica de las unidades en Pharos y los lotes en Pueblo Carao.</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="flex items-center">
            <div className="aspect-[4/5] bg-white/5 w-full border border-white/5 relative group overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070"
                alt="Estrategia de Altura"
                fill
                className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-buey-dark via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. PHAROS & CARAO */}
      <section className="min-h-screen px-8 md:px-24 py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto space-y-32">
          <motion.div {...fadeIn} className="text-center space-y-6">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight">Experiencias Inmersivas</h2>
            <p className="text-lg md:text-2xl font-serif italic opacity-60">Storytelling Audiovisual de Alto Impacto</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div {...fadeIn} className="space-y-8 group">
              <div className="aspect-[16/10] bg-white/5 border border-white/5 relative overflow-hidden">
                <Image 
                  src="/pharos-01.jpeg"
                  alt="Pharos - Vivir en el viñedo"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter">PHAROS</h3>
                <p className="text-lg font-serif italic text-buey-orange">"Vivir en el viñedo"</p>
                <p className="text-base font-light opacity-60 leading-relaxed">No vendemos departamentos; vendemos la primera residencia vitivinícola de la Patagonia. Una pieza de diseño única en el corazón de Esquel.</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-8 group">
              <div className="aspect-[16/10] bg-white/5 border border-white/5 relative overflow-hidden">
                <Image 
                  src="/pueblo-carao.jpg"
                  alt="Pueblo Carao - Refugio en la inmensidad"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter">PUEBLO CARAO</h3>
                <p className="text-lg font-serif italic text-buey-orange">"Tu refugio en la inmensidad"</p>
                <p className="text-base font-light opacity-60 leading-relaxed">Un masterplan que se siente como un destino, no como una subdivisión. Tierras con propósito en el territorio más deseado.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. PROPUESTA TÉCNICA */}
      <section className="min-h-screen px-8 md:px-24 py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <motion.div {...fadeIn} className="md:w-1/2 space-y-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
              INFRAESTRUCTURA <br />
              <span className="text-buey-orange">EFICIENTE</span>
            </h2>
            <ul className="space-y-6">
              {[
                "Desarrollo de Landing Pages Premium para conversión.",
                "Producción de Storytelling Audiovisual de autor.",
                "Optimización SEO continua para inversión inmobiliaria.",
                "Tracking de datos y gestión de campañas publicitarias."
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
              Aseguramos la constancia en cada etapa del proyecto; aportamos la creatividad y la técnica para alcanzar las cumbres más elevadas. Nuestra meta es tu dirección.
            </p>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-40">Propuesta de Servicio</span>
              <span className="text-xs font-bold text-buey-orange tracking-widest">ED. 01 / CDS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CIERRE */}
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
