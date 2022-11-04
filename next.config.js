/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['spoonacular.com', 'edamam-product-images.s3.amazonaws.com'],
  }
}

module.exports = nextConfig
