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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <Image 
            src="/cc-web-logo.png"
            alt="Contra Corriente Logo"
            width={240}
            height={240}
            className="grayscale brightness-150 contrast-100 opacity-90 object-contain"
          />
        </motion.div>

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
            <div className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed text-buey-white/70 space-y-6 text-left md:text-center">
              <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase block text-center mb-4">Diagnóstico y Oportunidades en tu Sitio Web</span>
              <p>
                Realizamos una auditoría técnica profunda sobre la web actual de <strong>Contra Corriente</strong> para entender qué está frenando el crecimiento de las ventas online. Detectamos que, si bien la marca tiene un gran potencial, la estructura actual de la página confunde a Google y puede frustrar a los usuarios.
              </p>
              <p className="text-sm opacity-60 text-center">
                A continuación, resumimos los 3 problemas principales que resolveremos durante el primer mes de trabajo:
              </p>
            </div>
            <p className="text-sm md:text-lg opacity-40 uppercase tracking-[0.4em]">Auditando contracorrientebodega.com</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                num: "01",
                title: "\"Invisible\" ante Google", 
                subtitle: "Falta de títulos y descripciones comerciales",
                desc: "La gran mayoría de las páginas y botellas de la tienda online no tienen configuradas sus etiquetas de presentación (títulos y meta-descripciones), o están duplicadas. Ante los ojos de Google, es como si varios vinos distintos tuvieran la misma etiqueta física.",
                impact: "Google no entiende cuál es el vino correcto para mostrar cuando alguien busca, por ejemplo, \"comprar Pinot Noir de la Patagonia\". Al no tener descripciones atractivas, perdemos la oportunidad de convencer al usuario de hacer clic."
              },
              { 
                num: "02",
                title: "Pérdida de carritos por lentitud", 
                subtitle: "Imágenes pesadas y sin optimizar",
                desc: "Casi la mitad de las imágenes de los productos y del viñedo están subidas \"en crudo\", con un peso excesivo para la web y sin tamaños declarados en el código.",
                impact: "La web se vuelve lenta, especialmente en celulares. Cuando un cliente potencial entra a mirar las botellas, las imágenes tardan en cargar o hacen \"saltos\" en la pantalla. En el e-commerce, cada segundo de demora es un cliente que puede abandonar el carrito de compras."
              },
              { 
                num: "03",
                title: "Contenido pobre para buscadores", 
                subtitle: "Fichas técnicas vacías",
                desc: "Muchas de las páginas de productos tienen menos de 200 palabras de texto. Son fichas técnicas muy vacías.",
                impact: "Google premia a las páginas que informan bien al usuario. Al no contar la historia del terroir de Trevelin, las notas de cata o sugerencias de maridaje, el buscador considera que la página tiene poco valor y la posiciona por debajo de la competencia."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-8 border border-white/5 flex flex-col justify-between hover:border-buey-orange/30 transition-all duration-300"
              >
                <div className="space-y-6">
                  <span className="font-mono text-xs text-buey-orange font-bold block">{item.num} // {item.subtitle}</span>
                  <h4 className="text-xl font-black uppercase tracking-tight leading-tight">{item.title}</h4>
                  <p className="text-sm leading-relaxed opacity-60 font-light">{item.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
                  <span className="text-[10px] tracking-wider uppercase text-buey-orange font-bold block">El Impacto</span>
                  <p className="text-xs leading-relaxed opacity-50 font-light italic">{item.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            {...fadeIn} 
            className="p-8 md:p-12 border border-buey-orange/30 bg-buey-orange/5 max-w-4xl mx-auto space-y-4"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-buey-orange font-bold block">Conclusión para la Estrategia</span>
            <p className="text-sm md:text-base leading-relaxed opacity-80 font-light">
              Resolver estos tres puntos es nuestro paso inicial. Una vez \"saneada\" la web, el sitio no solo cargará más rápido y retendrá más compradores, sino que estará técnicamente listo para recibir toda la autoridad digital que le traspasaremos desde <strong>Patagonia River Guides</strong> y escalar posiciones en Google de forma sólida.
            </p>
          </motion.div>
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
                <p className="text-base opacity-60 font-light leading-relaxed">Posicionar las cuatro páginas de cada variedad y la página de trade bajo términos de búsqueda (keywords) específicos que atraigan clientes. Dirigir conversiones desde esas páginas optimizadas.</p>
              </div>
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter flex items-center gap-3"><Waves size={20} className="text-buey-orange" /> 2. Sinergia de Tráfico (PRG)</h3>
                <p className="text-base opacity-60 font-light leading-relaxed">Trasladar la autoridad de página y dirigir el tráfico de PRG a la web por medio de backlinks.</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="flex items-center">
            <div className="aspect-[4/5] bg-white/5 w-full border border-white/5 relative group overflow-hidden">
              <Image 
                src="/cc-botellas.webp"
                alt="Botellas de Vino Contra Corriente"
                fill
                className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-buey-dark via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. PROPUESTA OPERATIVA Y ABONO */}
      <section className="min-h-screen px-8 md:px-24 py-32 border-t border-white/5 space-y-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24 items-start">
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
            <span className="text-[10px] tracking-[0.4em] uppercase text-buey-orange font-bold block">Propuesta de Servicio</span>
            <h3 className="text-3xl font-black uppercase tracking-tight leading-none">SEO & CONTENIDOS</h3>
            <div className="space-y-4 text-sm opacity-75 font-light leading-relaxed">
              <p><strong>Preparado por:</strong> Agencia Buey Sherpa (bueysherpa.com)</p>
              <p><strong>Para:</strong> Bodega Contra Corriente (contracorrientebodega.com)</p>
              <p><strong>Objetivo Principal:</strong> Incrementar el tráfico orgánico cualificado para impulsar la venta directa de botellas de vino en canales digitales y potenciar las visitas a la bodega.</p>
            </div>
            
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-40">Documentación Técnica</span>
              <span className="text-xs font-bold text-buey-orange tracking-widest">ED. 01 / CC</span>
            </div>
          </motion.div>
        </div>

        {/* DETALLE DEL ABONO Y PRESUPUESTO */}
        <div className="max-w-5xl mx-auto space-y-20">
          <motion.div {...fadeIn} className="space-y-6 text-center md:text-left">
            <span className="text-xs tracking-[0.5em] text-buey-orange font-bold uppercase block">Inversión y Compromiso</span>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Desglose del Abono</h3>
            <p className="max-w-2xl text-base font-light opacity-60 leading-relaxed">
              Detallamos cómo se compone la inversión mensual basándonos en las horas de especialización y las tareas de integración de marcas de nuestro equipo.
            </p>
          </motion.div>

          {/* Tabla de Tarifas */}
          <motion.div {...fadeIn} className="border border-white/10 bg-white/[0.01] overflow-hidden rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 p-6 text-xs uppercase tracking-[0.2em] font-mono opacity-50 bg-white/[0.02] hidden md:grid">
              <div>Componente del Servicio</div>
              <div>Detalle del Trabajo</div>
              <div className="text-right">Costo Mensual (ARS)</div>
            </div>

            <div className="divide-y divide-white/5 text-sm">
              {[
                {
                  title: (
                    <>
                      Estrategia, SEO Técnico <br /> e Integración PRG
                    </>
                  ),
                  detail: "Auditoría mensual, optimización on-page, keyword research de productos, SEO Local y estrategia de traspaso de autoridad desde Patagonia River Guides.",
                  price: "$216.000"
                },
                {
                  title: "Generación de Contenido",
                  detail: "Planificación, investigación de temas de nicho vitivinícola/experiencias y redacción de 2 artículos extensos optimizados.",
                  price: "$132.000"
                },
                {
                  title: "Análisis y Reportes",
                  detail: "Monitoreo de conversiones (ventas), tráfico cruzado entre plataformas y entrega de informe mensual de rendimiento.",
                  price: "$72.000"
                }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4 md:gap-0 items-center">
                  <div className="font-bold uppercase tracking-tight md:pr-4">{row.title}</div>
                  <div className="font-light opacity-60 text-xs md:text-sm leading-relaxed md:pr-8">{row.detail}</div>
                  <div className="font-mono text-buey-orange font-bold text-lg md:text-right">{row.price}</div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="grid grid-cols-1 md:grid-cols-3 p-8 border-t border-white/10 bg-buey-orange/5 items-center gap-4 md:gap-0">
              <div className="text-lg font-black uppercase tracking-tight">Valor Total del Abono</div>
              <div className="text-xs font-light opacity-75">Estrategia, Posicionamiento y Contenido</div>
              <div className="text-2xl font-mono font-black text-buey-orange md:text-right">
                $420.000 <span className="text-xs font-light block md:inline md:ml-1 text-white/50">/ mes</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="text-xs font-mono opacity-40 text-center md:text-right">
            Nota sobre la divisa: Los valores están expresados en pesos argentinos. Este abono mensual equivale aproximadamente a USD 300 / mes.
          </motion.div>

          {/* Términos y Condiciones */}
          <motion.div {...fadeIn} className="p-8 border border-white/5 bg-white/[0.02] rounded-sm space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-tight">Términos y Condiciones</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs leading-relaxed opacity-60 font-light">
              <div className="space-y-2">
                <span className="font-bold text-buey-orange uppercase block">Duración Sugerida</span>
                <p>El SEO es una estrategia de mediano/largo plazo. Se sugiere un compromiso inicial de 6 meses para consolidar el traspaso de autoridad y ver el impacto real en las ventas estables.</p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-buey-orange uppercase block">Forma de Pago</span>
                <p>Transferencia bancaria del 1 al 5 de cada mes por adelantado.</p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-buey-orange uppercase block">Actualización por Inflación</span>
                <p>Los valores se revisarán de forma trimestral según el índice IPC para mantener el equilibrio y la calidad del servicio.</p>
              </div>
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
