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
  },
];
