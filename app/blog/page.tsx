import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CTASection } from '@/components/sections'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const metadata: Metadata = {
  title: 'Blog — AI Automation Insights',
  description:
    'Practical articles on AI automation, computer vision, and building intelligent systems for business operations.',
  alternates: { canonical: 'https://buteforce.com/blog' },
}

interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

function getPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(file => {
      const content = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { data } = matter(content)
      return {
        slug: data.slug || file.replace(/\.mdx?$/, ''),
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || '',
        tags: data.tags || [],
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <>
      <Nav />

      <main className="pt-32 pb-0 bg-surface min-h-screen">
        <div className="max-w-site mx-auto px-6 lg:px-10">

          <div className="mb-16 pb-16 border-b border-surface-border">
            <p className="section-label mb-4">Blog</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h1 className="text-display-lg font-display font-bold text-ink heading-relaxed max-w-[11ch]">
                AI in practice.
                <br />
                <span className="text-ink-faint">Not in theory.</span>
              </h1>
              <p className="font-body text-ink-muted max-w-xs leading-relaxed">
                Practical articles on building AI systems that actually work in production.
              </p>
            </div>
          </div>

          {posts.length === 0 ? (
            /* Empty state — shows while agent-generated posts build up */
            <div className="py-20 text-center">
              <p className="font-mono text-xs tracking-widest uppercase text-ink-faint mb-4">
                Coming soon
              </p>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">
                First posts dropping shortly.
              </h2>
              <p className="font-body text-ink-muted max-w-sm mx-auto leading-relaxed">
                We're publishing practical guides on AI automation, computer vision,
                and building intelligent systems. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-24">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-surface-warm border border-surface-border rounded-card overflow-hidden hover:border-ink/20 hover:shadow-sm transition-all"
                >
                  {/* Top accent line */}
                  <div className="h-[2px] bg-surface-border overflow-hidden">
                    <div className="h-full bg-yellow w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  </div>

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3">
                      {post.tags[0] && (
                        <span className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-surface rounded-full text-ink-faint border border-surface-border">
                          {post.tags[0]}
                        </span>
                      )}
                      {post.date && (
                        <span className="font-mono text-[10px] tracking-wide text-ink-faint">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short', day: 'numeric', year: 'numeric'
                          })}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-base text-ink heading-card group-hover:text-ink-soft transition-colors flex-1">
                      {post.title}
                    </h3>

                    {/* Description */}
                    {post.description && (
                      <p className="font-body text-sm text-ink-muted leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    )}

                    {/* Read more */}
                    <div className="flex items-center gap-1 font-mono text-xs tracking-wide text-ink-faint group-hover:text-ink transition-colors mt-auto pt-4 border-t border-surface-border">
                      Read article
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <CTASection />
      </main>

      <Footer />
    </>
  )
}

