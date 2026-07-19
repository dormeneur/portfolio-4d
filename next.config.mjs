/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/hire-me", destination: "/contact", permanent: true },
      { source: "/skills", destination: "/about#skills", permanent: true },
      { source: "/resume", destination: "/experience#resume", permanent: true },
    ]
  },
}

export default nextConfig
