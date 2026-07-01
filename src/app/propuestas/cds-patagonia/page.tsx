"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowDown, Leaf, Zap, UtensilsCrossed, Beer,
  Home, Sprout, Waves, Sun, BookOpen, Wifi,
  Fish, Trees, TrendingUp, ChevronRight, Circle
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface MetricCardProps {
  label: string;
  value: string;
  sub?: string;
  delay?: number;
}

interface UnitProps {
  num: string;
  title: string;
  sub: string;
  icon: React.ReactNode;
  delay?: number;
}

interface BizUnitProps {
  title: string;
  capex: string;
  lineal: { ventas: string; opex: string; ganancia: string; roi: string };
  circular: { ventas: string; opex: string; ganancia: string; roi: string };
  note: string;
  delay?: number;
}

// ─── Fade-in wrapper ─────────────────────────────────────────────────────────

const Fade = ({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Section label (kicker) ───────────────────────────────────────────────────

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] uppercase tracking-[0.4em] text-[#FF4F00] mb-6 font-medium">
    {children}
  </p>
);

// ─── Thin divider ─────────────────────────────────────────────────────────────

const Divider = () => <div className="border-t border-white/5 my-0" />;

// ─── Metric card ─────────────────────────────────────────────────────────────

const MetricCard = ({ label, value, sub, delay = 0 }: MetricCardProps) => (
  <Fade delay={delay}>
    <div className="border border-white/8 p-6 rounded-sm">
      <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-3">{label}</p>
      <p className="text-3xl font-light text-[#F5F5F5] tracking-tight">{value}</p>
      {sub && <p className="text-xs text-white/40 mt-2 leading-relaxed">{sub}</p>}
    </div>
  </Fade>
);

// ─── Business unit row ────────────────────────────────────────────────────────

const UnitRow = ({ num, title, sub, icon, delay = 0 }: UnitProps) => (
  <Fade delay={delay}>
    <div className="flex items-start gap-4 py-5 border-b border-white/5 group">
      <span className="text-[#FF4F00] text-[10px] tracking-widest font-medium w-6 pt-0.5 shrink-0">{num}</span>
      <div className="text-white/30 mt-0.5 shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-[#F5F5F5] font-light">{title}</p>
        <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{sub}</p>
      </div>
    </div>
  </Fade>
);

// ─── Lineal vs Circular comparison card ──────────────────────────────────────

const BizUnitCard = ({ title, capex, lineal, circular, note, delay = 0 }: BizUnitProps) => (
  <Fade delay={delay} className="border border-white/8 rounded-sm overflow-hidden">
    {/* Header */}
    <div className="px-6 py-5 border-b border-white/8 flex items-center justify-between gap-4">
      <div>
        <p className="text-[9px] uppercase tracking-[0.35em] text-[#FF4F00] mb-1">Unidad de negocio</p>
        <p className="text-lg font-light text-[#F5F5F5] tracking-tight">{title}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-[9px] uppercase tracking-[0.25em] text-white/30 mb-1">CapEx</p>
        <p className="text-base font-light text-[#F5F5F5]">{capex}</p>
      </div>
    </div>
    {/* Two columns */}
    <div className="grid grid-cols-2 divide-x divide-white/8">
      {/* Lineal */}
      <div className="px-6 py-5">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-4">Modelo lineal</p>
        {[
          ["Ventas anuales", lineal.ventas],
          ["OpEx", lineal.opex],
          ["Ganancia neta", lineal.ganancia],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between items-baseline py-2 border-b border-white/5 last:border-0">
            <span className="text-xs text-white/40">{k}</span>
            <span className="text-sm text-[#F5F5F5] font-light">{v}</span>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-white/8">
          <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1">ROI</p>
          <p className="text-2xl font-light text-white/50">{lineal.roi}</p>
        </div>
      </div>
      {/* Circular */}
      <div className="px-6 py-5 bg-white/[0.02]">
        <p className="text-[9px] uppercase tracking-[0.3em] text-[#FF4F00] mb-4">Modelo circular</p>
        {[
          ["Ventas anuales", circular.ventas],
          ["OpEx", circular.opex],
          ["Ganancia neta", circular.ganancia],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between items-baseline py-2 border-b border-white/5 last:border-0">
            <span className="text-xs text-white/40">{k}</span>
            <span className="text-sm text-[#F5F5F5] font-light">{v}</span>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-white/8">
          <p className="text-[9px] uppercase tracking-widest text-[#FF4F00] mb-1">ROI</p>
          <p className="text-2xl font-light text-[#F5F5F5]">{circular.roi}</p>
        </div>
      </div>
    </div>
    {/* Note */}
    <div className="px-6 py-4 border-t border-white/8 bg-white/[0.01]">
      <p className="text-xs text-white/40 leading-relaxed italic">{note}</p>
    </div>
  </Fade>
);

// ─── Leontief interactive ─────────────────────────────────────────────────────

const LeontiefExplainer = () => {
  const [active, setActive] = useState<string | null>(null);

  const explanations: Record<string, string> = {
    x: "x es el vector de producción total: cuánto tiene que producir cada unidad para satisfacer toda la demanda, tanto externa como interna. En Pueblo Carao, le dice a la Cervecería cuántos litros fabricar esta semana para abastecer al Hotel, al Pub y a distribución, contando también lo que ella misma consume en su proceso.",
    I: "I es la referencia neutral del sistema — matemáticamente tiene 1s en la diagonal y 0s en el resto. Es el punto de partida antes de tener en cuenta que las unidades se consumen entre sí. Sin ella, la ecuación no puede calcular cuánto sobra para la demanda externa después de descontar el consumo interno.",
    A: "A es la matriz de coeficientes técnicos: cada celda dice cuánto de la producción de una unidad necesita otra para producir una unidad propia. Por ejemplo: para que el Restaurante sirva 1 L de cerveza, necesita 1 L de la Cervecería. Para que la Granja produzca 1 kg de vegetales, necesita agua enriquecida de la Acuicultura.",
    IA: "(I−A) representa el sistema neto: la producción que sobra después de que cada unidad satisfaga sus necesidades internas. Si la Cervecería produce 1.500 L pero necesita 150 para sus propios procesos, el neto disponible para demanda externa es 1.350 L. Esta resta captura ese concepto para todas las unidades simultáneamente.",
    inv: "La inversa ⁻¹ es el corazón de la ecuación. Cuando aumenta la demanda en el Pub, no solo afecta a la Cervecería — también afecta a la Granja, a la Energía, al Restaurante. La inversa captura ese efecto dominó completo: cuánta producción total se necesita en todo el sistema ante un aumento de demanda en un solo nodo.",
    d: "d es el vector de demanda externa: lo que piden huéspedes, residentes y clientes de distribución — personas fuera del sistema circular. Es el único input que viene de afuera. Todo lo demás es interno. d es la señal de arranque: es la demanda real del mercado que pone el sistema en movimiento.",
  };

  const terms = [
    { key: "x", sym: "x", name: "Producción total" },
    { key: "I", sym: "I", name: "Matriz identidad" },
    { key: "A", sym: "A", name: "Coeficientes técnicos" },
    { key: "IA", sym: "(I−A)", name: "Sistema neto" },
    { key: "inv", sym: "⁻¹", name: "Efecto dominó" },
    { key: "d", sym: "d", name: "Demanda externa" },
  ];

  return (
    <div className="space-y-6">
      {/* Equation */}
      <div className="border border-white/8 rounded-sm px-6 py-8 text-center">
        <p className="font-mono text-3xl md:text-4xl font-light text-[#F5F5F5] tracking-wider mb-2">
          x = (I − A)<sup className="text-xl">−1</sup> · d
        </p>
        <p className="text-xs text-white/30 tracking-widest uppercase mt-3">
          Producción total = matriz inversa de coeficientes técnicos × demanda externa
        </p>
      </div>

      {/* Terms grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {terms.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(active === t.key ? null : t.key)}
            className={`text-left border rounded-sm px-4 py-4 transition-all duration-200 ${
              active === t.key
                ? "border-[#FF4F00]/50 bg-[#FF4F00]/5"
                : "border-white/8 hover:border-white/20"
            }`}
          >
            <p className="font-mono text-lg text-[#FF4F00] mb-1">{t.sym}</p>
            <p className="text-xs text-white/60">{t.name}</p>
          </button>
        ))}
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-l-2 border-[#FF4F00]/40 pl-5 py-2"
          >
            <p className="text-sm text-white/70 leading-relaxed">{explanations[active]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Leontief simulator ───────────────────────────────────────────────────────

const LeontiefSimulator = () => {
  const [hr, setHr] = useState(650);
  const [pub, setPub] = useState(400);
  const [dist, setDist] = useState(250);

  const totalD = hr + pub + dist;
  const intCoef = 0.1;
  const xCerv = Math.round(totalD / (1 - intCoef));
  const capacity = 1500;
  const cocciones = Math.ceil(xCerv / 1350);
  const isBottleneck = xCerv > capacity;
  const surplus = isBottleneck ? 0 : capacity - xCerv;

  const bagazo = Math.round(xCerv * 0.25);
  const calorRes = Math.round(xCerv * 0.012);
  const levaduras = Math.round(xCerv * 0.02);

  const sliders = [
    { label: "Hotel + Restaurante (L/sem)", value: hr, set: setHr, min: 100, max: 1800, step: 50 },
    { label: "Pub Carao (L/sem)", value: pub, set: setPub, min: 50, max: 900, step: 25 },
    { label: "Distribución regional (L/sem)", value: dist, set: setDist, min: 0, max: 600, step: 25 },
  ];

  return (
    <div className="border border-white/8 rounded-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-white/8">
        <p className="text-[9px] uppercase tracking-[0.35em] text-[#FF4F00] mb-1">Simulador</p>
        <p className="text-base font-light text-[#F5F5F5]">
          Cervecería Carao como nodo de la matriz
        </p>
        <p className="text-xs text-white/40 mt-1 leading-relaxed">
          Ajustá la demanda externa (d) y observá cómo la producción requerida (x) y los flujos circulares se recalculan en tiempo real.
        </p>
      </div>

      {/* Sliders */}
      <div className="px-6 py-5 space-y-5 border-b border-white/8">
        {sliders.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-2">
              <label className="text-xs text-white/40">{s.label}</label>
              <span className="text-xs text-[#F5F5F5] font-light">{s.value.toLocaleString()} L</span>
            </div>
            <input
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={s.value}
              onChange={(e) => s.set(Number(e.target.value))}
              className="w-full h-px bg-white/20 appearance-none cursor-pointer accent-[#FF4F00]"
            />
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8 border-b border-white/8">
        {[
          {
            label: "Producción requerida (x)",
            value: `${xCerv.toLocaleString()} L`,
            highlight: isBottleneck,
          },
          { label: "Cocciones / semana", value: `${cocciones}`, highlight: false },
          {
            label: "Excedente disponible",
            value: isBottleneck ? "Sin excedente" : `${surplus.toLocaleString()} L`,
            highlight: false,
          },
          {
            label: "Capacidad instalada",
            value: isBottleneck ? "⚠ Límite" : "OK",
            highlight: isBottleneck,
          },
        ].map((r) => (
          <div key={r.label} className={`px-4 py-4 ${r.highlight ? "bg-red-950/30" : ""}`}>
            <p className="text-[10px] text-white/30 mb-1 leading-tight">{r.label}</p>
            <p
              className={`text-lg font-light ${
                r.highlight ? "text-red-400" : "text-[#F5F5F5]"
              }`}
            >
              {r.value}
            </p>
          </div>
        ))}
      </div>

      {/* Circular flows */}
      <div className="px-6 py-5">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-4">
          Flujos circulares generados por esa producción
        </p>
        <div className="space-y-2">
          {[
            {
              sub: "Bagazo de malta",
              vol: `${bagazo.toLocaleString()} kg/sem`,
              dest: "Granja — Tambo + gallinas",
              val: `USD ${Math.round((bagazo * 0.44 * 52) / 1000)}k/año`,
            },
            {
              sub: "Calor residual",
              vol: `${calorRes} kWh equiv.`,
              dest: "Granja — Invernadero",
              val: `USD ${Math.round(calorRes * 0.08 * 52)}/año`,
            },
            {
              sub: "Levaduras residuales",
              vol: `${levaduras} kg/sem`,
              dest: "Granja — Compost/huerta",
              val: `USD ${Math.round(levaduras * 1.2 * 52)}/año`,
            },
            {
              sub: "Botellas retornables",
              vol: "Sistema cerrado",
              dest: "Pub + Hotel",
              val: "Packaging sustituido",
            },
          ].map((f) => (
            <div
              key={f.sub}
              className="grid grid-cols-4 gap-2 text-xs py-2 border-b border-white/5 last:border-0"
            >
              <span className="text-white/60 font-medium">{f.sub}</span>
              <span className="text-[#F5F5F5] font-light">{f.vol}</span>
              <span className="text-white/40">{f.dest}</span>
              <span className="text-white/40 text-right">{f.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PuebloCaraoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -60]);

  const units: UnitProps[] = [
    { num: "U1", title: "Hotel 5★ y Residencias", sub: "Pieza ancla · vidriera del sistema", icon: <Home size={14} /> },
    { num: "U2", title: "Micro-cervecería y Pub", sub: "Residuo cero · bagazo al ganado", icon: <Beer size={14} /> },
    { num: "U3", title: "Granja, Huerta y Tambo", sub: "Motor biológico · alimentos km 0", icon: <Sprout size={14} /> },
    { num: "U4", title: "Tambo y Ovejas", sub: "Leche, quesos, lana · pastoreo controlado", icon: <Leaf size={14} /> },
    { num: "U5", title: "Viñedo y Bodega", sub: "Vinos de altura · orujo al spa", icon: <Circle size={14} /> },
    { num: "U6", title: "Restaurante", sub: "Mercado interno · gastroturismo premium", icon: <UtensilsCrossed size={14} /> },
    { num: "U7", title: "Plataforma Energética", sub: "Solar + biomasa + micro-hidro", icon: <Sun size={14} /> },
    { num: "U8", title: "Caballerizas y Ecuestre", sub: "Estiércol al compost · cuero artesanal", icon: <Trees size={14} /> },
    { num: "U9", title: "Bienestar y Co-working", sub: "Estadías largas · anti-estacional", icon: <Wifi size={14} /> },
    { num: "U10", title: "Acuicultura y Pesca", sub: "Acuaponía · nutrientes a la huerta", icon: <Fish size={14} /> },
    { num: "U11", title: "Vivero Nativo y Carbono", sub: "Reforestación · bonos de carbono certificados", icon: <Trees size={14} /> },
    { num: "U12", title: "Academia Carao", sub: "Oficios · talento local · prestigio académico", icon: <BookOpen size={14} /> },
  ];

  const savings = [
    { cat: "Alimento animal", driver: "Bagazo cervecería", pct: "30–40%" },
    { cat: "Fertilizantes", driver: "Compost + estiércol", pct: "90–100%" },
    { cat: "Logística de alimentos", driver: "Km 0 huerta/tambo", pct: "60–80%" },
    { cat: "Energía eléctrica", driver: "Solar + biomasa", pct: "70–95%" },
    { cat: "Calefacción", driver: "Biomasa de poda", pct: "60–90%" },
    { cat: "Agua de riego", driver: "Aguas grises + lluvia", pct: "80–100%" },
    { cat: "Insumos cosmética/spa", driver: "Orujo de vid + leche", pct: "40–60%" },
    { cat: "Jardinería mecanizada", driver: "Pastoreo ovejas", pct: "50–70%" },
  ];

  const stories = [
    {
      title: '"De la pala al plato"',
      body: "El huésped sigue la ruta del compost de su cena hasta el tomate que se servirá esa noche.",
    },
    {
      title: '"Lana del paisaje"',
      body: "Los suéteres de la tienda se hilaron de las ovejas que el huésped vio en el sendero.",
    },
    {
      title: '"Botella infinita"',
      body: "Cerveza en botella retornable, grabada para el huésped en vendimias y esquilas.",
    },
    {
      title: '"Mapa vivo"',
      body: "Acceso a un mapa interactivo: kg de bagazo entregados, litros de leche procesados hoy.",
    },
  ];

  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">

      {/* ── Back link ────────────────────────────────────────────────────── */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft size={12} />
          BUEY SHERPA
        </Link>
      </div>

      {/* ── Progress dots ─────────────────────────────────────────────────── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          S1 — HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col justify-end px-8 md:px-16 pb-16 relative overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#F5F5F5 1px,transparent 1px),linear-gradient(90deg,#F5F5F5 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div ref={heroRef} style={{ opacity: heroOpacity, y: heroY }}>
          
          {/* Logo container en Hero */}
          <Fade className="mb-12">
            <div className="relative w-44 h-24 bg-white/[0.01] border border-white/5 rounded p-4 flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Image 
                src="/cds-logo.png" 
                alt="CDS Patagonia Logo" 
                fill
                className="object-contain p-4 filter brightness-100 contrast-125"
              />
            </div>
          </Fade>

          <Fade delay={0.1}>
            <h1 className="text-[clamp(4rem,12vw,9rem)] font-light tracking-tighter leading-[0.9] mb-6">
              Pueblo<br />
              <em className="italic text-white/60">Carao</em>
            </h1>
          </Fade>

          <Fade delay={0.2}>
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-xl mb-12">
              Un ecosistema circular de valor en la cordillera patagónica —
              inmobiliario de alta gama, Hotel 5★ y 12 unidades productivas
              integradas en una matriz insumo-producto cerrada.
            </p>
          </Fade>

          <Fade delay={0.3}>
            <div className="flex items-center gap-3 text-xs text-white/30 uppercase tracking-widest">
              <span>Presentación para inversores</span>
              <span className="text-white/10">·</span>
              <span>Compañía Desarrollo Sur</span>
            </div>
          </Fade>
        </motion.div>

        <Fade delay={0.5} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-white/20" />
          </motion.div>
        </Fade>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S2 — CONTEXTO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>El contexto</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Una ventana de oportunidad<br />
              <em className="italic text-white/50">en Esquel</em>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-2xl mb-16">
              Esquel se consolida como destino de cuatro estaciones — La Hoya y el
              Parque Nacional Los Alerces — y el proyecto está adherido a la Ley
              XXIII N°65 de Promoción de Inversiones Turísticas de Chubut, con
              beneficios fiscales y exenciones tributarias.
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <MetricCard label="Superficie del predio" value="~100 ha" sub="Aldea de montaña sobre la costa este de la Laguna Carao, a 6 km de Esquel" />
            <MetricCard label="Hotel 5★" value="76 + 4" sub="Habitaciones y suites del primer hotel cinco estrellas de la cordillera chubutense" delay={0.05} />
            <MetricCard label="Loteo residencial" value="8 Mz." sub="Ocho manzanas con frente a la laguna y laguna paisajística" delay={0.1} />
          </div>

          <Fade>
            <div className="border border-[#FF4F00]/20 rounded-sm px-8 py-8 bg-[#FF4F00]/3">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#FF4F00] mb-4">La tesis central</p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#F5F5F5]">
                Pueblo Carao puede capturar entre un{" "}
                <span className="text-[#FF4F00]">25% y 40% adicional de margen operativo</span>{" "}
                frente a un desarrollo convencional equivalente — no por reducir calidad,
                sino por eliminar la adquisición externa de insumos, la disposición de
                residuos y la logística entre unidades.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S3 — POSICIONAMIENTO COMPETITIVO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>Posicionamiento competitivo</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Por qué Carao <em className="italic text-white/50">gana</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-16">
              En Esquel la licencia social ya no se obtiene solo con cumplimiento
              normativo. Carao se posiciona como la antítesis del modelo extractivo.
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: "Loteos tradicionales",
                propuesta: "Lote + vista",
                ingresos: "Venta única de tierra",
                costos: "Insumos externos, alta logística",
                dim: true,
              },
              {
                label: "Complejos turísticos",
                propuesta: "Alojamiento + amenities",
                ingresos: "Hotelería + servicios",
                costos: "Impacto ambiental medio-alto",
                dim: true,
              },
              {
                label: "Pueblo Carao",
                propuesta: "Pertenencia a un ecosistema regenerativo",
                ingresos: "Inmobiliario + hotelería + producción + experiencias",
                costos: "Sustitución interna · residuo cero",
                dim: false,
              },
            ].map((col, i) => (
              <Fade key={col.label} delay={i * 0.08}>
                <div
                  className={`border rounded-sm p-6 h-full ${
                    !col.dim
                      ? "border-white/20 bg-white/[0.03]"
                      : "border-white/5"
                  }`}
                >
                  {!col.dim && (
                    <p className="text-[9px] uppercase tracking-widest text-[#FF4F00] mb-3">Diferencial</p>
                  )}
                  <p className={`text-sm font-medium mb-6 ${col.dim ? "text-white/30" : "text-[#F5F5F5]"}`}>
                    {col.label}
                  </p>
                  {[
                    ["Propuesta de valor", col.propuesta],
                    ["Fuentes de ingreso", col.ingresos],
                    ["Estructura de costos", col.costos],
                  ].map(([k, v]) => (
                    <div key={k} className="mb-4">
                      <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">{k}</p>
                      <p className={`text-xs leading-relaxed ${col.dim ? "text-white/30" : "text-white/70"}`}>{v}</p>
                    </div>
                  ))}
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S4 — MARCO TEÓRICO + LEONTIEF
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>El marco teórico</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              La rueda Carao:{" "}
              <em className="italic text-white/50">economia circular aplicada</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-2xl mb-12">
              Cada unidad funciona como nodo de una matriz insumo-producto cerrada
              (lógica de Leontief). El residuo de una es la materia prima de otra.
              La matriz no es metafórica: es operativa y valorizada a precios
              internos de transferencia.
            </p>
          </Fade>

          {/* Three principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              {
                icon: <Zap size={16} />,
                title: "Eliminar residuos desde el diseño",
                body: "Toda salida de un proceso tiene un destino predefinido como entrada de otro. No se construye una unidad sin mapear sus flujos.",
              },
              {
                icon: <Leaf size={16} />,
                title: "Mantener materiales en uso",
                body: "Materiales locales, retornables y reutilizables. Inversión en infraestructura de reciclaje propia.",
              },
              {
                icon: <Trees size={16} />,
                title: "Regenerar sistemas naturales",
                body: "Pastoreo holístico, agricultura orgánica, reforestación nativa y restauración de la cuenca como KPI operativo.",
              },
            ].map((p, i) => (
              <Fade key={p.title} delay={i * 0.08}>
                <div className="border border-white/8 rounded-sm p-6">
                  <div className="text-white/30 mb-4">{p.icon}</div>
                  <p className="text-sm font-light text-[#F5F5F5] mb-2">{p.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{p.body}</p>
                </div>
              </Fade>
            ))}
          </div>

          {/* Leontief explainer */}
          <Fade>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/20 mb-6">
              La ecuación detrás del modelo
            </p>
            <LeontiefExplainer />
          </Fade>

          {/* Simulator */}
          <Fade delay={0.1} className="mt-8">
            <LeontiefSimulator />
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S5 — 12 UNIDADES
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>El sistema</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Doce unidades <em className="italic text-white/50">de negocio</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-12">
              6 consolidadas + 6 propuestas. Cada una genera ingreso o sustituye un
              costo, tiene ≥2 conexiones circulares y refuerza la experiencia turística.
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {units.map((u, i) => (
              <UnitRow key={u.num} {...u} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S6 — MATRIZ (simplified visual)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>Matriz insumo-producto</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              La densidad de conexiones{" "}
              <em className="italic text-white/50">es el valor</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-16">
              Energía y Academia son transversales (infraestructura de soporte).
              Hotel y Restaurante captan la demanda externa y monetizan toda la
              cadena hacia atrás.
            </p>
          </Fade>

          {/* Hub visual */}
          <Fade>
            <div className="relative flex items-center justify-center py-12">
              {/* Center */}
              <div className="relative z-10 border border-white/20 rounded-sm px-8 py-5 text-center bg-[#0A0A0A]">
                <p className="text-[9px] uppercase tracking-widest text-[#FF4F00] mb-1">Núcleo</p>
                <p className="text-sm font-light text-[#F5F5F5]">Hotel & Restaurante</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                "Granja", "Cervecería", "Viñedo", "Tambo/Ovejas",
                "Energía", "Acuicultura", "Ecuestre", "Bienestar",
                "Vivero", "Academia"
              ].map((n, i) => (
                <Fade key={n} delay={i * 0.04}>
                  <div className="border border-white/8 rounded-sm px-3 py-3 text-center">
                    <p className="text-xs text-white/40 font-light">{n}</p>
                    <div className="mt-2 flex justify-center gap-1">
                      {Array.from({ length: Math.floor(Math.random() * 3) + 2 }).map((_, j) => (
                        <div key={j} className="w-1 h-1 rounded-full bg-[#FF4F00]/40" />
                      ))}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
            <p className="text-[10px] text-white/20 text-center mt-6 tracking-widest uppercase">
              Los puntos indican número de conexiones circulares activas
            </p>
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S7 — AHORROS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>Cuantificación del upside</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Ahorro por sustitución{" "}
              <em className="italic text-white/50">de insumos externos</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-16">
              Estimaciones de orden de magnitud. Reducción esperada de costos
              operativos por categoría (modelo circular vs. operación convencional).
            </p>
          </Fade>

          <div className="space-y-0 mb-12">
            {savings.map((s, i) => (
              <Fade key={s.cat} delay={i * 0.05}>
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-white/5 items-center">
                  <span className="text-sm text-white/60 font-light">{s.cat}</span>
                  <span className="text-xs text-white/30">{s.driver}</span>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-px bg-[#FF4F00]/50 flex-1"
                      style={{ width: `${parseInt(s.pct) * 0.8}%`, maxWidth: "100%" }}
                    />
                    <span className="text-sm font-light text-[#FF4F00] w-20 text-right">{s.pct}</span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          <Fade>
            <div className="border border-white/8 rounded-sm px-8 py-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="shrink-0">
                <TrendingUp size={32} className="text-[#FF4F00]/50" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#FF4F00] mb-2">Lectura ejecutiva</p>
                <p className="text-2xl font-light text-[#F5F5F5] mb-2">+5 a 10 puntos de margen EBITDA</p>
                <p className="text-sm text-white/40 leading-relaxed">
                  Un hotel 5★ convencional destina 35–45% de su revenue a OpEx directo.
                  Reducir ese bloque 25–40% transforma el proyecto en una plataforma
                  multi-revenue valuada sobre flujo recurrente diversificado, no sobre
                  un único activo hotelero.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S8-10 — UNIDADES DE NEGOCIO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>Business Plans · Lineal vs. Circular</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              El impacto financiero,{" "}
              <em className="italic text-white/50">unidad por unidad</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-16">
              El modelo circular no solo reduce costos — multiplica la rentabilidad
              neta y acelera el retorno de inversión en cada nodo del sistema.
            </p>
          </Fade>

          <div className="space-y-6">
            <BizUnitCard
              title="La Granja, Huerta y Tambo"
              capex="USD 90.000"
              lineal={{ ventas: "USD 60.500", opex: "USD 44.400", ganancia: "USD 16.100", roi: "5,5 años" }}
              circular={{ ventas: "USD 84.000", opex: "USD 29.250", ganancia: "USD 54.750", roi: "1,6 años" }}
              note="El residuo de la cerveza alimenta a los animales y los residuos del hotel fertilizan la huerta: el OpEx cae 34%, la ganancia neta se triplica y el recupero pasa de 5,5 años a 19 meses."
            />
            <BizUnitCard
              title="El Restaurante Farm-to-Table"
              capex="USD 350.000"
              lineal={{ ventas: "USD 1.086.800", opex: "USD 912.000", ganancia: "USD 174.800", roi: "2,0 años" }}
              circular={{ ventas: "USD 1.304.160", opex: "USD 745.000", ganancia: "USD 559.160", roi: "0,6 años" }}
              note='El sello "Farm-to-Table" de circuito cerrado eleva el ticket 20% y las compras internas bajan el OpEx 18%: margen neto del 42,8% y recupero del capital en apenas 7 meses.'
              delay={0.08}
            />
            <BizUnitCard
              title="Granja Integral · Visión consolidada"
              capex="USD 1.019.000"
              lineal={{ ventas: "USD 321.000", opex: "USD 236.045", ganancia: "USD 84.955", roi: "12,0 años" }}
              circular={{ ventas: "USD 401.250", opex: "USD 165.232", ganancia: "USD 236.018", roi: "4,3 años" }}
              note="Un payback de 12 años es inviable en Argentina. El modelo circular desploma el OpEx 30%, sube las ventas 25% por el premium km 0 y el agroturismo, y reduce el recupero a 4,3 años."
              delay={0.16}
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S11 — ACELERACIÓN DEL RECUPERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>El impacto financiero</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Lineal vs. Circular:{" "}
              <em className="italic text-white/50">la diferencia es estructural</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-16">
              Ganancia neta anual por unidad de negocio (USD). El modelo circular
              multiplica la rentabilidad en cada nodo del sistema.
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "La Granja", from: "5,5", to: "1,6" },
              { label: "Restaurante", from: "2,0", to: "0,6" },
              { label: "Granja Integral", from: "12,0", to: "4,3" },
            ].map((r, i) => (
              <Fade key={r.label} delay={i * 0.08}>
                <div className="border border-white/8 rounded-sm p-6">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-4">{r.label}</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-light text-white/20 line-through">{r.from} years</span>
                    <ChevronRight size={14} className="text-white/20" />
                    <span className="text-3xl font-light text-[#F5F5F5]">{r.to} años</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-[#FF4F00] mt-3">
                    Aceleración del recupero
                  </p>
                </div>
              </Fade>
            ))}
          </div>

          <Fade delay={0.24} className="mt-6">
            <div className="border border-white/5 rounded-sm px-8 py-6">
              <p className="text-sm text-white/40 italic leading-relaxed text-center">
                "La sustentabilidad es el negocio más rentable de la mesa."
              </p>
            </div>
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S12 — MASTERPLAN
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>El masterplan</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              El predio como{" "}
              <em className="italic text-white/50">micro-economia viva</em>
            </h2>
            <p className="text-sm text-white/30 text-right mb-12">
              Esquel · Costa este de la Laguna Carao · 6 km del centro
            </p>
          </Fade>

          <div className="space-y-0">
            {[
              "Casco de granja, invernáculo (360 m²) y huerta exterior (1.100 m²)",
              "Plantación de frutillas (1.600 m²) y frambuesas, fruta fina premium",
              "Pasturas 2,3 ha: majada ovina, vacas Jersey, carnero y burro",
              "Campos de lavanda y aromáticas (2.800 m²) como atractor turístico",
              "8 manzanas residenciales con frente a la laguna y laguna paisajística",
            ].map((item, i) => (
              <Fade key={item} delay={i * 0.06}>
                <div className="flex items-start gap-5 py-5 border-b border-white/5">
                  <span className="text-[#FF4F00] text-[10px] tracking-widest shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{item}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S13 — MODELO INMOBILIARIO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>La decisión más importante</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16">
              Tres modelos para capturar{" "}
              <em className="italic text-white/50">el valor inmobiliario</em>
            </h2>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                letter: "A",
                title: "Venta tradicional",
                body: "Venta de lotes a compradores finales. Modelo en marcha.",
                pros: "Flujo de caja rápido · riesgo acotado",
                cons: "Se pierde la apreciación futura · menor control de marca",
                rec: false,
              },
              {
                letter: "B",
                title: "Renta retenida",
                body: "Carao desarrolla y opera viviendas en alquiler temporario, mediano y largo plazo.",
                pros: "Apreciación retenida · recurrencia · control total",
                cons: "Capital alto aguas arriba · retorno a 8–12 años",
                rec: false,
              },
              {
                letter: "C",
                title: "Híbrido",
                body: "Venta 50–60% para financiar obra + 40–50% retenido con rental managed.",
                pros: "Equilibra capital, control y captura de valor futuro",
                cons: "Complejidad operativa media-alta",
                rec: true,
              },
            ].map((m, i) => (
              <Fade key={m.letter} delay={i * 0.08}>
                <div
                  className={`border rounded-sm p-6 h-full relative ${
                    m.rec ? "border-white/20 bg-white/[0.02]" : "border-white/8"
                  }`}
                >
                  {m.rec && (
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#FF4F00] mb-4">
                      Recomendado para análisis
                    </p>
                  )}
                  <p className="text-4xl font-light text-white/10 mb-3">{m.letter}</p>
                  <p className="text-base font-light text-[#F5F5F5] mb-3">{m.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed mb-6">{m.body}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Ventaja</p>
                      <p className="text-xs text-white/50 leading-relaxed">{m.pros}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Riesgo</p>
                      <p className="text-xs text-white/30 leading-relaxed">{m.cons}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S14 — ACTIVO INTANGIBLE / STORYTELLING
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>El activo intangible</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Cada flujo es una historia{" "}
              <em className="italic text-white/50">que vende</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-6">
              La economía circular no es solo eficiencia: es el activo narrativo más
              poderoso del proyecto. Habilita una prima de precio de{" "}
              <span className="text-[#F5F5F5]">10–25%</span> sobre comparables.
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {stories.map((s, i) => (
              <Fade key={s.title} delay={i * 0.08}>
                <div className="border border-white/8 rounded-sm p-6">
                  <p className="text-base font-light text-[#F5F5F5] mb-3 italic">{s.title}</p>
                  <p className="text-sm text-white/40 leading-relaxed">{s.body}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S15 — ROADMAP FASE 2/3
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>Horizonte de futuro</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Roadmap <em className="italic text-white/50">Fase 2 / 3</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-16">
              Estos pilares no son alcance ejecutivo de Fase 1, pero se diseñan desde
              el día uno. Posicionan a Carao en una conversación de la que ningún
              competidor regional participa.
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                fase: "Fase 2",
                title: "Moneda Comunitaria Carao",
                body: "Moneda digital interna no especulativa, respaldada por el ecosistema productivo. Incentiva el consumo interno, remunera trabajo comunitario y captura recurrencia y pertenencia.",
                items: [
                  "Multiplicador de consumo local",
                  "Pagos por reforestación y vendimias",
                  "Saldo acumulable para huéspedes recurrentes",
                ],
              },
              {
                fase: "Fase 3",
                title: "Capa de Inteligencia Artificial",
                body: "Sobre un año de datos reales, optimiza la matriz insumo-producto en tiempo real, fija precios internos dinámicos y personaliza experiencias turísticas.",
                items: [
                  "Predicción de bagazo y demanda del tambo",
                  "Pricing dinámico de transferencia interna",
                  "Mantenimiento predictivo de infraestructura",
                ],
              },
            ].map((f, i) => (
              <Fade key={f.fase} delay={i * 0.1}>
                <div className="border border-white/8 rounded-sm p-8">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#FF4F00] mb-4">{f.fase}</p>
                  <p className="text-xl font-light text-[#F5F5F5] mb-4">{f.title}</p>
                  <p className="text-sm text-white/40 leading-relaxed mb-6">{f.body}</p>
                  <div className="space-y-2">
                    {f.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-[#FF4F00]/50 mt-2 shrink-0" />
                        <p className="text-xs text-white/40 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════
          S16 — PRÓXIMOS PASOS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-28 pb-40">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Kicker>Próximos pasos</Kicker>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16">
              De la tesis <em className="italic text-white/50">a la ejecución</em>
            </h2>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {[
              {
                num: "1",
                period: "1–2 meses",
                title: "Decisiones estratégicas",
                body: "Selección del modelo inmobiliario, validación de las 12 unidades y vehículos de inversión.",
              },
              {
                num: "2",
                period: "2–6 meses",
                title: "Trabajos técnicos",
                body: "Modelo financiero integrado, estudios de prefactibilidad y precios internos de transferencia.",
              },
              {
                num: "3",
                period: "En paralelo",
                title: "Comunicación",
                body: "Relato de marca, identidad del sistema y relaciones institucionales con Municipio y Provincia.",
              },
            ].map((step, i) => (
              <Fade key={step.num} delay={i * 0.08}>
                <div className="border border-white/8 rounded-sm p-6">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl font-light text-[#FF4F00]/30">{step.num}</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/20">{step.period}</span>
                  </div>
                  <p className="text-sm font-light text-[#F5F5F5] mb-2">{step.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{step.body}</p>
                </div>
              </Fade>
            ))}
          </div>

          {/* Closing quote */}
          <Fade>
            <div className="border-t border-white/8 pt-16 text-center">
              <p className="text-xl md:text-2xl font-light text-white/50 italic leading-relaxed max-w-3xl mx-auto mb-12">
                "Transformar un 'amenity sustentable' en una unidad de negocios
                altamente rentable y blindada contra la inflación de costos externos."
              </p>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                Pueblo Carao · Compañía Desarrollo Sur
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 px-8 md:px-16 py-8 flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
          Buey Sherpa · {new Date().getFullYear()}
        </p>
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
          Pueblo Carao · Plan de negocios
        </p>
      </footer>
    </main>
  );
}