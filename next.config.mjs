/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Para GitHub Pages: basePath = nome do repositório (ex: /landing-page-tech-skills)
  ...(process.env.BASE_PATH && {
    basePath: process.env.BASE_PATH,
    assetPrefix: process.env.BASE_PATH + '/',
  }),
}

export default nextConfig
