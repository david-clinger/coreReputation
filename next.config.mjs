/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't run ESLint during builds (runs in CI/CD separately)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type checking happens in development, not during builds
    ignoreBuildErrors: true,
  },
  // Optimize for low-memory environments (1GB droplets)
  experimental: {
    // Reduce memory usage during build
    workerThreads: false,
    cpus: 1,
  },
  // Reduce bundle size
  swcMinify: true,
};
