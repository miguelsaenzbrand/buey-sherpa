"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Play, Video } from "lucide-react";
import { projects } from "../../data/projects";

export default function AudiovisualPage() {
  const filteredProjects = projects.filter(p => p.tags.includes("video"));

  // ID de Vimeo para el Reel
  const vimeoReelId = "714590180"; // Reemplazar con el ID del reel definitivo

  return (
    <main className="min-h-screen bg-buey-dark text-buey-white p-8 md:p-24 selection:bg-buey-orange selection:text-buey-dark font-sans">
      <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity mb-24 group">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Volver al refugio
      </Link>

      <section className="max-w-5xl space-y-16">
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
          transition={{ delay: 0.2, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 text-lg md:text-xl font-light leading-relaxed text-buey-white/70"
        >
          <div className="md:col-span-7 space-y-6">
            <p>
              En un mundo saturado de imágenes, la diferencia está en la intención. Nuestra producción audiovisual nace en la Patagonia para proyectarse globalmente, capturando la esencia de cada proyecto con una estética única.
            </p>
            <p>
              Desde documentales de territorio hasta contenido comercial de alto impacto, operamos con equipos de última generación y una visión artística que prioriza la autenticidad sobre el artificio.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center border-l border-white/5 pl-8 py-4 space-y-4">
            <span className="text-xs tracking-[0.3em] text-buey-orange font-mono uppercase">// EL ENFOQUE</span>
            <p className="text-sm text-buey-white/50 leading-relaxed font-mono">
              Ojo técnico y contacto profundo con el territorio. Nos adentramos en la geografía y en la realidad de cada proyecto para registrar la esencia humana con un rigor cinematográfico.
            </p>
          </div>
        </motion.div>

        {/* ─── SECCIÓN REEL (NUEVO COMPONENTE) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-16 border-t border-white/5 space-y-12"
        >
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.5em] text-buey-orange font-bold uppercase">
              <Video size={14} className="animate-pulse" />
              <span>REALIZACIÓN // DOCUMENTAL</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-light tracking-tight">
              Reel
            </h3>
            <p className="text-base md:text-lg text-buey-white/70 font-light leading-relaxed">
              Reel de trabajos de realización audiovisual en formato documental y micro-documental para medios periodísticos. Una mirada del territorio y la coyuntura, en todos los rincones de Argentina.
            </p>
          </div>

          {/* Reproductor de Video para el Reel */}
          <div className="aspect-video bg-white/[0.02] border border-white/5 relative group overflow-hidden shadow-2xl">
            <iframe 
              src={`https://player.vimeo.com/video/${vimeoReelId}?badge=0&autopause=0&player_id=0&app_id=58479&color=FF4F00`} 
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              title="Reel Documental - Buey Sherpa"
            ></iframe>
          </div>
        </motion.div>

        {/* Portfolio Section */}
        {filteredProjects.length > 0 && (
          <div className="pt-24 border-t border-white/5 space-y-16">
            <h3 className="text-xs tracking-[0.5em] uppercase opacity-30 font-mono">Proyectos de Autor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={project.href} className="group space-y-6">
                  <div className="aspect-video bg-white/5 border border-white/5 overflow-hidden relative">
                    {project.thumbnail && (
                      <Image 
                        src={project.thumbnail} 
                        alt={project.title}
                        fill
                        className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-buey-orange/0 group-hover:bg-buey-orange/5 transition-colors duration-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] tracking-[0.4em] uppercase text-buey-orange font-bold">{project.client}</span>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <h4 className="text-2xl font-black tracking-tight uppercase group-hover:text-buey-white transition-colors">{project.title}</h4>
                    <p className="text-sm opacity-50 line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}