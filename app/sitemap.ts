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

  // Fixed dates — update these when content actually changes.
  // DO NOT use `new Date()` for static pages; it tricks Googlebot into
  // re-crawling everything on every deploy, wasting crawl budget.
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                  priority: 1.0, changeFrequency: 'weekly',  lastModified: new Date('2026-04-18') },
    { url: `${base}/services`,    priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-04-15') },
    { url: `${base}/work`,        priority: 0.9, changeFrequency: 'weekly',  lastModified: new Date('2026-04-18') },
    { url: `${base}/blog`,        priority: 0.8, changeFrequency: 'daily',   lastModified: new Date('2026-04-18') },
    { url: `${base}/faq`,         priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-04-15') },
    { url: `${base}/about`,       priority: 0.7, changeFrequency: 'monthly', lastModified: new Date('2026-04-01') },
    { url: `${base}/contact`,     priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-04-01') },
    { url: `${base}/lp/ai-audit`, priority: 0.6, changeFrequency: 'monthly', lastModified: new Date('2026-04-15') },
  ]

  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map(study => ({
    url: `${base}/work/${study.slug}`,
    lastModified: new Date('2026-04-15'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = getBlogSlugs().map(({ slug, date }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...caseStudyPages, ...blogPages]
}
