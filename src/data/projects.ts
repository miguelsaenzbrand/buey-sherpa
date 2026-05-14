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
    thumbnail: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070", // Placeholder for Gin/Event
  },
];
