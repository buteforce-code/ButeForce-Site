import { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/lib/data'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function getBlogSlugs(): { slug: string; date: string }[] {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(f => {
      const content = fs.readFileSync(path.join(dir, f), 'utf-8')
      const { data } = matter(content)
      return { data, slug: data.slug || f.replace(/\.mdx?$/, ''), date: data.date }
    })
    .filter(({ data }) => !data.draft && data.date)
    .map(({ slug, date }) => ({ slug, date: new Date(date).toISOString() }))
}

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
    { url: `${base}/lp/ai-audit`, priority: 0.6, changeFrequency: 'monthly' as const },
  ].map(p => ({ ...p, lastModified: now }))

  const caseStudyPages = CASE_STUDIES.map(study => ({
    url: `${base}/work/${study.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = getBlogSlugs().map(({ slug, date }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...caseStudyPages, ...blogPages]
}
