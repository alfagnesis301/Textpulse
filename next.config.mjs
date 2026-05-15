/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/guides/keyword-density-guide",
        destination: "/guides/keyword-density-what-is-too-much",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
