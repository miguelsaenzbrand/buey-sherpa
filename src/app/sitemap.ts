import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bueysherpa.com';

  const services = [
    '/marketing',
    '/produccion-audiovisual',
    '/desarrollo-web',
    '/marketing-tecnico',
  ];

  const portfolio = [
    '/portfolio/carpinteria-bariloche',
    '/portfolio/destileria-moretti',
    '/portfolio/factoria-concept-store',
  ];

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...services.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...portfolio.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return routes;
}
