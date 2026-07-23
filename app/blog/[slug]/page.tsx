import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CTASection } from '@/components/sections'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  params: Promise<{ slug: string }>
}

function getAllSlugs(): string[] {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(f => {
      const content = fs.readFileSync(path.join(dir, f), 'utf-8')
      const { data } = matter(content)
      return data.slug || f.replace(/\.mdx?$/, '')
    })
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

function getPost(slug: string) {
  const dir = path.join(process.cwd(), 'content/blog')
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : []

  for (const file of files) {
    if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue
    const content = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data, content: body } = matter(content)
    const postSlug = data.slug || file.replace(/\.mdx?$/, '')
    if (postSlug === slug) return { meta: data, body }
  }
  return null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const ogImage = post.meta.image || 'https://buteforce.com/og-share.png'

  return {
    title: `${post.meta.title} | Buteforce`,
    description: post.meta.description,
    alternates: { canonical: `https://buteforce.com/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.date,
      authors: ['Dhyaneshwaran'],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    dateModified: post.meta.dateModified || post.meta.date,
    author: {
      '@type': 'Person',
      '@id': 'https://buteforce.com/#founder',
      name: 'Dhyaneshwaran',
      jobTitle: 'Founder & AI Architect',
      url: 'https://www.linkedin.com/in/dhyankarthik/',
      worksFor: { '@type': 'Organization', name: 'Buteforce', url: 'https://buteforce.com' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Buteforce',
      url: 'https://buteforce.com',
      logo: { '@type': 'ImageObject', url: 'https://buteforce.com/buteforce-wordmark.svg' },
    },
    url: `https://buteforce.com/blog/${slug}`,
    mainEntityOfPage: `https://buteforce.com/blog/${slug}`,
    keywords: Array.isArray(post.meta.tags) ? post.meta.tags.join(', ') : undefined,
    inLanguage: 'en-IN',
    ...(post.meta.image ? { image: post.meta.image } : {}),
  }

  // FAQPage rich result — rendered when the post frontmatter carries `faqs: [{question, answer}]`
  // (the blog agent's schema step injects these). Inert when absent.
  const faqs = Array.isArray(post.meta.faqs) ? post.meta.faqs : []
  const faqSchema = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs
          .filter((f: any) => f && f.question && f.answer)
          .map((f: any) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
      }
    : null

  const wordCount = post.body.split(/\s+/).length
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && faqSchema.mainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Nav />

      <main className="pt-32 pb-0 bg-surface">

        {/* Article header */}
        <header className="pb-12 border-b border-surface-border">
          <div className="max-w-prose-wide mx-auto px-6 lg:px-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link href="/blog" className="font-mono text-xs tracking-widest uppercase text-ink-faint hover:text-ink transition-colors">
                Blog
              </Link>
              {post.meta.tags?.[0] && (
                <>
                  <span className="text-surface-border">/</span>
                  <span className="font-mono text-xs tracking-widest uppercase text-ink-faint">
                    {post.meta.tags[0]}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-4 mb-6">
              {post.meta.date && (
                <span className="font-mono text-xs tracking-wide text-ink-faint">
                  {new Date(post.meta.date).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                  })}
                </span>
              )}
              <span className="font-mono text-[10px] tracking-wide text-ink-faint">
                {readTime} min read
              </span>
            </div>

            <h1 className="font-display font-bold text-display-md text-ink mb-6 heading-relaxed max-w-[16ch]">
              {post.meta.title}
            </h1>

            {post.meta.description && (
              <p className="font-body text-xl text-ink-muted leading-relaxed">
                {post.meta.description}
              </p>
            )}
          </div>
        </header>

        {/* Article body */}
        <article className="py-12">
          <div className="max-w-prose-wide mx-auto px-6 lg:px-10">
            <div className="prose-buteforce">
              <MDXRemote source={post.body} />
            </div>
          </div>
        </article>

        {/* Author block */}
        <div className="border-t border-surface-border py-10">
          <div className="max-w-prose-wide mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-surface-border bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src="/buteforce-mark.png"
                  alt="Buteforce logo"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <p className="font-display font-bold text-base text-ink">Dhyaneshwaran</p>
                <p className="font-mono text-xs text-ink-faint tracking-wide">
                  Founder & AI Architect, Buteforce ·{' '}
                  <a
                    href="https://www.linkedin.com/in/dhyankarthik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-ink transition-colors"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="font-mono text-[10px] text-ink-faint tracking-wide mt-1">
                  AI-assisted research · human-reviewed and edited before publishing
                </p>
              </div>
              <Link href="/contact" className="ml-auto btn-primary text-xs py-2 px-4">
                Work with us →
              </Link>
            </div>
          </div>
        </div>

        <CTASection />
      </main>

      <Footer />
    </>
  )
}
