import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BASE_URL = 'https://buteforce.com'

interface FeedPost {
  slug: string
  title: string
  description: string
  date: string
}

function getPosts(): FeedPost[] {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8')
      const { data } = matter(raw)
      // Frontmatter dates arrive as strings OR Date objects depending on
      // YAML quoting — normalize to ISO strings so sorting is reliable.
      const date = data.date ? new Date(data.date).toISOString() : ''
      return {
        slug: data.slug || f.replace(/\.mdx?$/, ''),
        title: data.title || '',
        description: data.description || '',
        date,
        draft: Boolean(data.draft),
      }
    })
    .filter(p => !p.draft && p.date && p.title)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ slug, title, description, date }) => ({ slug, title, description, date }))
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export const dynamic = 'force-static'

export function GET(): Response {
  const posts = getPosts()

  const items = posts
    .map(post => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`)
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Buteforce Blog</title>
    <link>${BASE_URL}/blog</link>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>AI automation, computer vision, and industrial AI — from Buteforce, Chennai.</description>
    <language>en-IN</language>
    <lastBuildDate>${posts.length ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
