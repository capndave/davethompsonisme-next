/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // redirect any call to source to the about page
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
