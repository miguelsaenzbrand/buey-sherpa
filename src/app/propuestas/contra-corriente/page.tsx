"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ChevronRight, BarChart2, Shield, Search, FileText, Activity } from "lucide-react";

export default function ContraCorrientePropuesta() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const pillars = [
    {
      icon: <Activity className="text-buey-orange w-6 h-6" />,
      title: "Optimización de la Salud Estructural y Rendimiento",
      description: "Para que Google priorice a la bodega frente a sus competidores, el sitio debe ser impecable a los ojos del buscador.",
      points: [
        {
          label: "Optimización de Parámetros de Rankeo",
          text: "Llevaremos a cabo una reestructuración interna corrigiendo deficiencias técnicas críticas en las etiquetas de metadatos. Esto es un factor directo de posicionamiento que determina cómo Google interpreta y muestra el sitio en los resultados de búsqueda.",
        },
        {
          label: "Velocidad y Experiencia de Usuario",
          text: "Maximizaremos la velocidad de carga y la salud general de la plataforma. Google penaliza los sitios lentos; al acelerar la página, garantizamos que los usuarios permanezcan más tiempo y que los algoritmos nos otorguen una mejor puntuación de relevancia.",
        },
      ],
    },
    {
      icon: <Shield className="text-buey-orange w-6 h-6" />,
      title: "Solución de Indexación y Arquitectura",
      description: "Garantizamos visibilidad y un flujo de navegación eficiente tanto para usuarios como para rastreadores.",
      points: [
        {
          label: "Visibilidad Garantizada",
          text: "Corregiremos cualquier fricción que impida a los motores de búsqueda rastrear la totalidad de la web. Resolveremos los problemas de indexación para asegurar que cada rincón de la tienda online y de la historia de la bodega sea visible.",
        },
        {
          label: "Navegación Eficiente",
          text: "Rediseñaremos la arquitectura interna del sitio para que tanto el usuario como Google encuentren los productos en la menor cantidad de clics posibles, guiando el tráfico directamente hacia el carrito de compras.",
        },
      ],
    },
    {
      icon: <BarChart2 className="text-buey-orange w-6 h-6" />,
      title: "Incremento de la Autoridad de Página (Page Authority)",
      description: "¿Qué es la Autoridad de Página? En el entorno digital, es el indicador de prestigio y confianza que Google le asigna a una web. Funciona como la 'reputación' de la marca en internet: a mayor autoridad, mayores puestos.",
      points: [
        {
          label: "Transferencia de Prestigio",
          text: "Incrementaremos este indicador para Bodega Contra Corriente mediante una estrategia de backlinks (enlaces externos) de alta calidad. Atraeremos transferencia de autoridad desde plataformas de alta relevancia, consolidando la confianza del sitio ante los buscadores.",
        },
      ],
    },
    {
      icon: <Search className="text-buey-orange w-6 h-6" />,
      title: "Inteligencia de Mercado y Competencia",
      description: "Descubrimos la intención de búsqueda exacta de tu público objetivo y analizamos las ventanas que deja la competencia.",
      points: [
        {
          label: "Estudio de Intención de Búsqueda",
          text: "Analizaremos las palabras y conceptos exactos que utilizan los compradores de vino premium a nivel nacional. Optimizaremos cada sección para capturar esa demanda activa y rankear por los términos más rentables.",
        },
        {
          label: "Superación de la Competencia Nacional",
          text: "Monitorearemos y estudiaremos las estrategias de las bodegas competidoras en Argentina. El objetivo es identificar sus debilidades y ventanas de oportunidad para posicionar a Contra Corriente por encima de ellas en las búsquedas estratégicas.",
        },
      ],
    },
    {
      icon: <FileText className="text-buey-orange w-6 h-6" />,
      title: "Desarrollo de Activos de Contenido Mensual",
      description: "Creamos contenido de alto valor diseñado para atraer a diferentes tipos de audiencias calificadas.",
      points: [
        {
          label: "Atracción de Tráfico Cualificado",
          text: "Desarrollaremos dos (2) piezas de contenido informativo de alto valor por mes.",
        },
        {
          label: "Embudo de Ventas Orgánico",
          text: "Cada contenido estará diseñado bajo una estrategia de palabras clave diversificada. Esto capturará usuarios en diferentes etapas de interés (desde entusiastas del turismo en Trevelin hasta buscadores de Pinot Noir o Chardonnay de la Patagonia) y los redirigirá orgánicamente hacia las páginas de venta de producto para cerrar la conversión.",
        },
      ],
    },
    {
      icon: <CheckCircle2 className="text-buey-orange w-6 h-6" />,
      title: "Monitoreo de Rendimiento y Transparencia",
      description: "Medición constante basada en el rendimiento y la generación de valor real para el negocio.",
      points: [
        {
          label: "Reportes Mensuales de Impacto",
          text: "Proveeremos informes detallados mes a mes para evaluar la evolución del proyecto. No mediremos métricas de vanidad, sino datos reales de negocio: crecimiento de la autoridad, evolución del tráfico orgánico y comportamiento hacia las páginas de conversión de ventas.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-buey-dark text-buey-white selection:bg-buey-orange selection:text-buey-dark font-sans overflow-x-hidden relative pb-32">
      
      {/* Botón de regreso */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-50">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity">
          <ArrowLeft size={12} /> BUEY SHERPA
        </Link>
      </div>

      <div className="max-w-5xl px-6 md:px-12 py-20 mx-auto space-y-32">
        
        {/* HERO HEADER */}
        <section className="pt-16 md:pt-24 space-y-12 border-b border-white/5 pb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] tracking-[0.5em] text-buey-orange font-bold uppercase block">
                Propuesta de Posicionamiento Estratégico
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-none">
                Diagnóstico de Superficie <br/>
                <span className="italic font-normal text-white/95">y Propuesta de Ascenso</span>
              </h1>
              <p className="text-sm tracking-[0.3em] text-white/50 uppercase font-mono">
                BODEGA CONTRA CORRIENTE
              </p>
            </div>
            
            <div className="relative w-40 h-24 self-start md:self-auto bg-white/[0.02] border border-white/5 rounded p-4 flex items-center justify-center">
              <Image 
                src="/cc-web-logo.png" 
                alt="Bodega Contra Corriente Logo" 
                fill
                className="object-contain p-4 filter brightness-100 contrast-125"
              />
            </div>
          </div>

          {/* OBJETIVO PRINCIPAL */}
          <div className="bg-white/[0.01] border border-white/5 rounded-lg p-6 md:p-8 space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-buey-orange font-bold uppercase block">
              Objetivo Principal
            </span>
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-medium tracking-tight">
                Posicionamiento Estratégico Digital
              </h3>
              <p className="text-white/70 text-sm md:text-base max-w-3xl leading-relaxed">
                Maximizar la visibilidad digital, incrementar el tráfico cualificado hacia la plataforma web y acelerar la conversión de ventas directas.
              </p>
            </div>
          </div>
        </section>

        {/* 1. VISIÓN ESTRATÉGICA */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.4em] text-buey-orange uppercase font-bold block">
                01. Visión Estratégica
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight">
                El Camino hacia la Cumbre Digital
              </h2>
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              En el mercado actual, un gran producto necesita canales digitales optimizados que reflejen su calidad y exclusividad. Nuestro enfoque para Bodega Contra Corriente no se basa en acciones aisladas, sino en un ecosistema de crecimiento sostenido.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              El mapa de ruta está diseñado para transformar el sitio web de la bodega en su canal de ventas más rentable, atrayendo a consumidores e inversores verdaderamente interesados en la experiencia del vino de clima frío.
            </p>
          </div>
          
          <div className="md:col-span-5 relative h-64 md:h-80 w-full rounded-lg overflow-hidden border border-white/10 group">
            <Image 
              src="/cc-botellas.webp" 
              alt="Bodega Contra Corriente Botellas" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-buey-dark/80 via-transparent to-transparent"></div>
          </div>
        </section>

        {/* 2. PILARES DE LA PROPUESTA */}
        <section className="space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.4em] text-buey-orange uppercase font-bold block">
              02. Pilares de la Propuesta
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight">
              El Plan de Ascenso
            </h2>
            <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
              Estructura sólida de seis pilares técnicos y de contenido enfocados en optimizar la salud del sitio, potenciar el prestigio orgánico y acelerar los canales de ventas directas.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 rounded-lg p-6 md:p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/[0.03] rounded border border-white/5">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-serif font-light tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-white/50 leading-relaxed italic">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-4">
                  {pillar.points.map((point, pIdx) => (
                    <div key={pIdx} className="space-y-1">
                      <span className="text-xs text-buey-orange font-mono uppercase tracking-wider block">
                        // {point.label}
                      </span>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. OBJETIVOS: LA CUMBRE */}
        <section className="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 rounded-xl p-8 md:p-12 space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] text-buey-orange uppercase font-bold block">
              03. Objetivos
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">
              La Cumbre
            </h2>
            <p className="text-white/50 text-sm">
              Al finalizar los ciclos de optimización y despliegue del plan de ascenso, Bodega Contra Corriente experimentará:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="space-y-3 bg-white/[0.01] border border-white/5 rounded-lg p-6">
              <span className="text-2xl font-serif font-light italic text-buey-orange block">
                01
              </span>
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Un canal comercial robusto
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Un sitio web rápido, saludable y sin errores internos, listo para recibir y procesar demanda de forma eficiente.
              </p>
            </div>
            
            <div className="space-y-3 bg-white/[0.01] border border-white/5 rounded-lg p-6">
              <span className="text-2xl font-serif font-light italic text-buey-orange block">
                02
              </span>
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Dominio en búsquedas clave
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Mayor visibilidad ante competidores nacionales, capturando el interés de consumidores que hoy buscan vinos de alta gama en internet.
              </p>
            </div>

            <div className="space-y-3 bg-white/[0.01] border border-white/5 rounded-lg p-6">
              <span className="text-2xl font-serif font-light italic text-buey-orange block">
                03
              </span>
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Crecimiento en ventas directas
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Un flujo constante de tráfico orgánico direccionado estratégicamente hacia las botellas y experiencias que la bodega ofrece.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}