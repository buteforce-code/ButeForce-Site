import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enables static generation where possible
  output: 'standalone',

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
    ]
  },

  // Redirects
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
