export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  href: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    id: "carpinteria-bariloche",
    title: "Oficio y Materia",
    client: "Cáceres & Addams",
    description: "Storytelling para una carpintería de autor en San Carlos de Bariloche.",
    tags: ["estrategia", "video"],
    href: "/portfolio/carpinteria-bariloche",
    thumbnail: "/carpinteria-thumb.png",
  },
  {
    id: "destileria-moretti",
    title: "Gin & Tonic en la Cumbre",
    client: "Destilería Moretti",
    description: "Producción integral de evento de lanzamiento y posicionamiento de marca en la Patagonia.",
    tags: ["estrategia"],
    href: "/portfolio/destileria-moretti",
    thumbnail: "/moretti-thumb.png",
  },
  {
    id: "factoria-concept-store",
    title: "Inauguración Factoría",
    client: "Factoría: Concept Store",
    description: "Producción de barra de coctelería y cobertura audiovisual para evento de apertura.",
    tags: ["estrategia", "video"],
    href: "/portfolio/factoria-concept-store",
    thumbnail: "/factoria-thumb.png",
  },
  {
    id: "the-wings",
    title: "The Wings",
    client: "Espartanos",
    description: "Un micro documental que nos muestra en primera persona a Coco Oderigo explicando el proyecto Espartanos.",
    tags: ["video"],
    href: "/portfolio/the-wings",
    thumbnail: "/the-wings-thumb.png",
  },
];
