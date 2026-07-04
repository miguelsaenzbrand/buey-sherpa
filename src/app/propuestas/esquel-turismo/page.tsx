"use client";

import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowDown,
  Lock,
  Gauge,
  Wrench,
  Layers,
  Radar,
  Compass,
  Target,
  LineChart,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface Eje {
  tag: string;
  title: string;
  icon: any;
  desc: string;
  points: string[];
}

interface Fase {
  n: string;
  name: string;
  icon: any;
  objetivo: string;
  entregable: string;
}

interface Principle {
  icon: any;
  title: string;
  desc: string;
}

interface Kpi {
  label: string;
  desc: string;
}

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const EJES: Eje[] = [
  {
    tag: "Eje A",
    title: "Técnico",
    icon: Wrench,
    desc: "Ordenar, acelerar y sanear la base sobre la que se construye todo lo demás.",
    points: [
      "Core Web Vitals y performance",
      "Corrección de errores y datos estructurados",
      "Accesibilidad y base para internacionalización",
    ],
  },
  {
    tag: "Eje B",
    title: "Estratégico",
    icon: Compass,
    desc: "Trazar y ejecutar el plan para ganar posicionamiento frente a la competencia.",
    points: [
      "Análisis de keywords y competencia",
      "Arquitectura de contenidos por clusters",
      "Amplificación en medios y audiovisual",
    ],
  },
];

const PRINCIPLES: Principle[] = [
  {
    icon: LineChart,
    title: "Medición como columna vertebral",
    desc: "No es un módulo final: se instala desde el día uno y atraviesa todo el trabajo.",
  },
  {
    icon: Target,
    title: "Cada fase, un resultado presentable",
    desc: "Entregables concretos para mostrar al equipo, a la gestión y al sector privado.",
  },
  {
    icon: Users,
    title: "El privado, como aliado medible",
    desc: "La medición se vuelve un servicio que fortalece la relación con los operadores.",
  },
];

const FASES: Fase[] = [
  {
    n: "00",
    name: "Cimientos",
    icon: Gauge,
    objetivo: "Instrumentar la medición y fijar el punto de partida.",
    entregable: "El primer tablero con la foto real del sitio y de la competencia.",
  },
  {
    n: "01",
    name: "Saneamiento & Mapa",
    icon: Wrench,
    objetivo: "Ordenar la web y trazar el mapa competitivo de oportunidades.",
    entregable: "Sitio optimizado y un mapa de keywords frente a cada competidor.",
  },
  {
    n: "02",
    name: "Arquitectura",
    icon: Layers,
    objetivo: "Construir los activos de contenido que posicionan y derivan.",
    entregable: "Nueva arquitectura publicada y un embudo de derivación medible.",
  },
  {
    n: "03",
    name: "Impacto",
    icon: Radar,
    objetivo: "Medir reservas e impacto real, y amplificar lo que funciona.",
    entregable: "Reporte de impacto de punta a punta, cruzado con arribos.",
  },
];

const KPIS: Kpi[] = [
  { label: "Share of Search", desc: "Cuánto terreno ganamos frente a los otros destinos patagónicos." },
  { label: "Posiciones por cluster", desc: "Visibilidad orgánica en cada tema estratégico." },
  { label: "Leads derivados", desc: "Usuarios calificados que enviamos al sector privado." },
  { label: "Reservas atribuidas", desc: "El impacto económico real, no solo el click." },
  { label: "Impacto en arribos", desc: "La correlación entre lo digital y el movimiento del destino." },
  { label: "Performance técnica", desc: "Velocidad y salud del sitio, medidas antes y después." },
];

const STATS: { k: string; l: string; d: string }[] = [
  { k: "02", l: "Ejes de trabajo", d: "Técnico y estratégico" },
  { k: "04", l: "Fases con entregables", d: "De los cimientos al impacto" },
  { k: "01", l: "Objetivo", d: "Medir el retorno real" },
];

const PANEL_ROWS: { label: string; width: number }[] = [
  { label: "Derivaciones del destino", width: 70 },
  { label: "Consultas a WhatsApp", width: 52 },
  { label: "Reservas atribuidas", width: 34 },
];

/* -------------------------------------------------------------------------- */
/*  Motion helpers                                                            */
/* -------------------------------------------------------------------------- */

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Kicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40">
      <span className="text-[#FF4F00]">{index}</span>
      <span className="h-px w-8 bg-white/10" />
      <span>{label}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function EsquelTurismoPropuesta() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#FF4F00] selection:text-[#0A0A0A]">
        {/* ---------------------------------------------------------------- */}
        {/*  HERO                                                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 md:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 45% at 50% 0%, rgba(255,79,0,0.10) 0%, rgba(10,10,10,0) 70%)",
            }}
          />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] opacity-40 transition-opacity hover:opacity-100"
            >
              <ArrowLeft size={12} /> BUEY SHERPA
            </Link>
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40">
              <Lock size={11} /> Confidencial
            </span>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <Reveal>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40">
                <span className="text-[#FF4F00]">Propuesta de trabajo</span>
                <span className="h-px w-8 bg-white/10" />
                <span>Secretaría de Turismo de Esquel</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-8 max-w-4xl font-serif text-5xl font-light leading-[1.02] tracking-tighter md:text-7xl">
                Posicionamiento, medición e{" "}
                <span className="italic text-[#FF4F00]">impacto</span> para Esquel.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60">
                Una hoja de ruta para ganar la Patagonia con método. Trabajo
                organizado, medible y con entregables concretos en cada fase.
              </p>
            </Reveal>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-between pb-10">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/30">
              <ArrowDown size={12} /> Recorrer la propuesta
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              Marketing de altura
            </span>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  STAT BAND                                                       */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-white/5 px-6 md:px-10">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-white/5 md:grid-cols-3 md:divide-x md:divide-y-0">
            {STATS.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.1} className="px-2 py-14 md:px-10">
                <div className="font-serif text-6xl font-light tracking-tighter text-[#FF4F00] md:text-7xl">
                  {s.k}
                </div>
                <div className="mt-4 text-sm text-white/80">{s.l}</div>
                <div className="mt-1 text-xs text-white/40">{s.d}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  01 — CONTEXTO                                                   */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-white/5 px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <Kicker index="01" label="El punto de partida" />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12">
              <Reveal delay={0.1} className="md:col-span-7">
                <h2 className="font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
                  Un destino con activos únicos, compitiendo{" "}
                  <span className="italic">sin brújula</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.2} className="md:col-span-5 md:pt-2">
                <p className="text-base leading-relaxed text-white/60">
                  Esquel tiene lo que otros destinos envidian: Los Alerces, La
                  Trochita, La Hoya. Pero compite contra plazas más grandes de la
                  Patagonia sin poder medir con precisión qué esfuerzo genera
                  resultados —y con conversiones que se completan, fuera de su
                  vista, en el sector privado.
                </p>
                <p className="mt-6 text-base leading-relaxed text-white/40">
                  El problema no es el diseño ni los atractivos. Es la falta de un
                  sistema que conecte cada acción con un resultado demostrable.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  02 — FILOSOFÍA                                                  */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-white/5 px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <Kicker index="02" label="Nuestra filosofía" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-12 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tighter md:text-6xl">
                Medir primero.{" "}
                <span className="italic text-[#FF4F00]">Transformar</span> después.
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/5 md:grid-cols-3">
              {PRINCIPLES.map((principle, i) => (
                <Reveal key={principle.title} delay={i * 0.1} className="bg-white/[0.015] p-8 md:p-10">
                  <principle.icon size={20} strokeWidth={1.5} className="text-[#FF4F00]" />
                  <h3 className="mt-6 text-lg font-medium">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{principle.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  03 — EJES                                                       */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-white/5 px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <Kicker index="03" label="Cómo trabajamos" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-12 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tighter md:text-6xl">
                Dos ejes, una <span className="italic">columna vertebral</span>.
              </h2>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              {EJES.map((eje, i) => (
                <Reveal key={eje.title} delay={i * 0.1}>
                  <div className="group h-full border border-white/5 bg-white/[0.015] p-8 transition-colors duration-500 hover:border-white/15 md:p-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#FF4F00]">
                        {eje.tag}
                      </span>
                      <eje.icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/40 transition-colors duration-500 group-hover:text-white/80"
                      />
                    </div>
                    <h3 className="mt-8 font-serif text-3xl font-light tracking-tight">
                      {eje.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/50">{eje.desc}</p>
                    <ul className="mt-8 space-y-3 border-t border-white/5 pt-6">
                      {eje.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-sm text-white/70">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#FF4F00]" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-col items-start justify-between gap-4 border border-dashed border-[#FF4F00]/30 bg-[#FF4F00]/[0.03] p-6 md:flex-row md:items-center md:p-8">
                <div className="flex items-center gap-4">
                  <Gauge size={18} strokeWidth={1.5} className="text-[#FF4F00]" />
                  <span className="text-sm font-medium">Medición · capa transversal</span>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-white/50">
                  Atraviesa ambos ejes de principio a fin. Es lo que vuelve
                  demostrable cada resultado —y lo que nos diferencia.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  04 — FASES                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-white/5 px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <Kicker index="04" label="La hoja de ruta" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-12 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tighter md:text-6xl">
                Un recorrido en{" "}
                <span className="italic text-[#FF4F00]">cuatro fases</span>.
              </h2>
            </Reveal>

            <div className="mt-16 border-t border-white/5">
              {FASES.map((f, i) => (
                <Reveal key={f.n} delay={i * 0.05}>
                  <div className="group grid grid-cols-1 gap-6 border-b border-white/5 py-10 transition-colors duration-500 hover:bg-white/[0.015] md:grid-cols-12 md:gap-8 md:py-12">
                    <div className="md:col-span-2">
                      <span className="font-serif text-5xl font-light tracking-tighter text-white/20 transition-colors duration-500 group-hover:text-[#FF4F00] md:text-6xl">
                        {f.n}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-3">
                        <f.icon size={16} strokeWidth={1.5} className="text-white/40" />
                        <h3 className="font-serif text-2xl font-light tracking-tight md:text-3xl">
                          {f.name}
                        </h3>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-white/50">{f.objetivo}</p>
                    </div>
                    <div className="md:col-span-6 md:border-l md:border-white/5 md:pl-8">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
                        Entregable
                      </span>
                      <p className="mt-3 text-base leading-relaxed text-white/80">{f.entregable}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  05 — KPIS                                                       */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-white/5 px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <Kicker index="05" label="Resultados presentables" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-12 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tighter md:text-6xl">
                Todo lo que hacemos,{" "}
                <span className="italic">se puede mostrar</span>.
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/5 sm:grid-cols-2 lg:grid-cols-3">
              {KPIS.map((k, i) => (
                <Reveal key={k.label} delay={(i % 3) * 0.08} className="bg-white/[0.015] p-8 md:p-10">
                  <span className="font-serif text-2xl font-light tracking-tighter text-[#FF4F00]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-base font-medium">{k.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{k.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  06 — DIFERENCIAL                                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-white/5 px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <Kicker index="06" label="El diferencial" />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-6">
                <Reveal delay={0.1}>
                  <h2 className="font-serif text-3xl font-light leading-tight tracking-tight md:text-5xl">
                    Una plataforma para demostrarle{" "}
                    <span className="italic text-[#FF4F00]">resultados</span> al
                    sector privado.
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-8 text-base leading-relaxed text-white/60">
                    Más allá del posicionamiento, construimos el sistema que le
                    permite a cada operador ver cuánto negocio le aporta el
                    destino. Un activo que ninguna campaña tradicional ofrece.
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-white/40">
                    El detalle completo lo reservamos para la conversación.
                  </p>
                </Reveal>
              </div>

              <div className="md:col-span-6">
                <Reveal delay={0.2}>
                  <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                        Panel de operador
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF4F00]">
                        Vista conceptual
                      </span>
                    </div>
                    <div className="mt-6 space-y-5">
                      {PANEL_ROWS.map((row) => (
                        <div key={row.label}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/70">{row.label}</span>
                            <span className="text-white/30">—</span>
                          </div>
                          <div className="mt-2 h-1 w-full overflow-hidden bg-white/5">
                            <div
                              className="h-full bg-[#FF4F00]/50"
                              style={{ width: `${row.width}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  CIERRE                                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-white/5 px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <Kicker index="07" label="El siguiente paso" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-12 max-w-4xl font-serif text-4xl font-light leading-[1.05] tracking-tighter md:text-7xl">
                Trabajo organizado, medible y con{" "}
                <span className="italic text-[#FF4F00]">entregables</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/50">
                No vendemos tráfico ni promesas. Instalamos el sistema que vuelve
                demostrable el retorno del marketing de Esquel —y, sobre esa base,
                ganamos terreno.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  FOOTER                                                          */}
        {/* ---------------------------------------------------------------- */}
        <footer className="border-t border-white/5 px-6 py-10 md:px-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] opacity-40 transition-opacity hover:opacity-100"
            >
              <ArrowLeft size={12} /> BUEY SHERPA
            </Link>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              Documento confidencial · Marketing de altura
            </span>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}