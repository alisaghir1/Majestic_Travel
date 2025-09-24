/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fcwxgmxdzrpogafoaoub.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Enable static generation for dynamic routes
  output: 'standalone',
  // Optimize for production deployment
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;

