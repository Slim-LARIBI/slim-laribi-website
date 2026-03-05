/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
}

export default nextConfig
