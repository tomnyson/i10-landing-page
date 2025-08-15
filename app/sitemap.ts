import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hyundai-i10-sales.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://hyundai-i10-sales.vercel.app/#hero',
      lastModified: new Date(),
      changeFrequency: 'daily', 
      priority: 0.9,
    },
    {
      url: 'https://hyundai-i10-sales.vercel.app/#benefits',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://hyundai-i10-sales.vercel.app/#gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://hyundai-i10-sales.vercel.app/#specs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://hyundai-i10-sales.vercel.app/#social-proof',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://hyundai-i10-sales.vercel.app/#faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://hyundai-i10-sales.vercel.app/#location',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://hyundai-i10-sales.vercel.app/#contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}
