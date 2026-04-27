/** @type {import('next').NextConfig} */
const nextConfig = {
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
