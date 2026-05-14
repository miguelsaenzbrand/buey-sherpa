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
    thumbnail: "https://images.unsplash.com/photo-1581429034113-86b44ad332ca?q=80&w=2070",
  },
];
