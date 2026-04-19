import { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://buteforce.com'
  const now = new Date()

  const staticPages = [
    { url: base,               priority: 1.0,  changeFrequency: 'weekly'  as const },
    { url: `${base}/services`, priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: `${base}/work`,     priority: 0.9,  changeFrequency: 'weekly'  as const },
    { url: `${base}/blog`,     priority: 0.8,  changeFrequency: 'daily'   as const },
    { url: `${base}/faq`,      priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: `${base}/about`,    priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: `${base}/contact`,  priority: 0.8,  changeFrequency: 'monthly' as const },
  ].map(p => ({ ...p, lastModified: now }))

  const caseStudyPages = CASE_STUDIES.map(study => ({
    url: `${base}/work/${study.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...caseStudyPages]
}
