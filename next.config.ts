import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enables static generation where possible
  output: 'standalone',

  // Prevent trailing-slash redirect chains that confuse Googlebot
  trailingSlash: false,

  // Image domains for external sources
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com' },
    ],
  },

  // Headers for security + SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',        value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',      value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Block search engines from indexing API routes
        source: '/api/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      {
        // Long-term cache for immutable static assets
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache public media for 7 days
        source: '/(images|media|videos)/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
    ]
  },

  // Rewrites mapping for TinaCMS Admin Dashboard
  async rewrites() {
    return [
      { source: '/admin', destination: '/admin/index.html' },
      { source: '/admin/:path*', destination: '/admin/index.html' },
    ]
  },

  // Redirects
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      // Normalise trailing slashes for pages Google found with redirect errors
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/about/',   destination: '/about',   permanent: true },
      { source: '/work/',    destination: '/work',    permanent: true },
      { source: '/lp/ai-audit/', destination: '/lp/ai-audit', permanent: true },
      { source: '/blog/',    destination: '/blog',    permanent: true },
      { source: '/services/', destination: '/services', permanent: true },
    ]
  },
}

export default nextConfig
