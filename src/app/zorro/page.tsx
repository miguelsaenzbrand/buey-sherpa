"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ZorroPage() {
  const categories = [
    { 
      name: "WRITTEN", 
      class: "md:col-span-2 md:row-span-1",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973"
    },
    { 
      name: "PHOTO", 
      class: "md:col-span-1 md:row-span-2",
      img: "https://images.unsplash.com/photo-1493329006958-31959087094b?q=80&w=2070"
    },
    { 
      name: "VIDEO", 
      class: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070"
    },
    { 
      name: "AUDIO", 
      class: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070"
    },
    { 
      name: "ART", 
      class: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080"
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col min-h-screen font-sans overflow-x-hidden">
      
      {/* Header */}
      <header className="flex justify-between items-baseline mb-24 border-b border-white/5 pb-8">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-serif tracking-tighter italic font-light"
        >
          ZORRO
        </motion.h1>
        <Link 
          href="/" 
          className="text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
        >
          Volver al Refugio <ArrowUpRight size={12} />
        </Link>
      </header>

      {/* Manifesto Section (Hero) */}
      <section className="mb-40 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase">Manifesto</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-[1.15] italic font-light">
            Caminar. Ser curiosos y astutos. Observar sin ser vistos. Entender el territorio. 
            Ser naturaleza en un mundo cambiante. <br />
            <span className="not-italic opacity-50">Ese es el espíritu de ZORRO.</span>
          </h2>
        </motion.div>
      </section>

      {/* Featured Chronicle: Los Alerces */}
      <section className="mb-40 group cursor-crosshair">
        <div className="space-y-10">
          <div className="aspect-[21/9] bg-white/5 w-full relative overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1547407139-3c921a66005c?q=80&w=2070"
              alt="Puma monitoring in Los Alerces"
              fill
              className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-buey-dark/90 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 space-y-2">
              <span className="text-[10px] tracking-[0.5em] uppercase opacity-60 font-bold">Crónica // Territorio</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-6">
              <h3 className="text-5xl md:text-8xl font-serif font-light leading-none tracking-tighter">
                Guardianes del Silencio: <br />
                <span className="italic opacity-90">El rastro del Puma en Los Alerces</span>
              </h3>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end pb-2">
              <p className="text-sm md:text-base leading-relaxed opacity-60 font-light border-l border-buey-orange/30 pl-6">
                Acompañamos a los guardaparques en el monitoreo de fauna crítica en el corazón de la Patagonia. 
                Una inmersión en la paciencia y el respeto absoluto por lo salvaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exploration Grid */}
      <section className="mb-40 space-y-12">
        <div className="flex items-center gap-4">
          <h4 className="text-xs tracking-[0.5em] uppercase opacity-40 font-mono">The Exploration Grid</h4>
          <div className="h-px bg-white/10 flex-grow" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className={`${cat.class} border border-white/5 relative group overflow-hidden min-h-[300px]`}
            >
              <Image 
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover opacity-20 grayscale group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-between bg-buey-dark/40 group-hover:bg-transparent transition-colors">
                <span className="text-[10px] tracking-[0.4em] opacity-40 group-hover:text-buey-orange transition-colors font-bold">0{i+1}</span>
                <h5 className="text-2xl md:text-3xl font-serif italic tracking-tight">{cat.name}</h5>
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight size={20} className="text-buey-orange" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary Article: Piedra Parada */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-bold text-buey-orange font-mono">Alpinismo</span>
          <h3 className="text-4xl md:text-6xl font-serif italic font-light leading-tight tracking-tighter">
            Vértigo en la Estepa: <br />
            La verticalidad de Piedra Parada
          </h3>
          <p className="text-lg opacity-70 leading-relaxed max-w-md font-light">
            Escalada técnica en el corazón de la estepa chubutense. 
            Cuando la roca ígnea dicta las reglas del juego y el viento es el único testigo.
          </p>
          <button className="text-[10px] tracking-[0.4em] uppercase border-b border-white/20 pb-2 hover:border-buey-orange hover:text-buey-orange transition-all font-bold">
            Leer artículo
          </button>
        </div>
        <div className="aspect-square relative overflow-hidden order-1 md:order-2 group">
          <Image 
            src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2003"
            alt="Climbing in Piedra Parada"
            fill
            className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-serif italic text-sm opacity-30 tracking-widest text-center md:text-left">
          ZORRO EDITORIAL <br />
          <span className="text-[10px] font-sans not-italic opacity-60 tracking-[0.2em]">PATAGONIA ARGENTINA</span>
        </p>
        <div className="flex gap-12 font-sans text-[10px] tracking-[0.4em] opacity-40 uppercase font-bold">
          <span className="hover:text-buey-orange cursor-pointer transition-colors">Archive</span>
          <span className="hover:text-buey-orange cursor-pointer transition-colors">Contact</span>
          <span className="hover:text-buey-orange cursor-pointer transition-colors">Newsletter</span>
        </div>
      </footer>
    </div>
  );
}
