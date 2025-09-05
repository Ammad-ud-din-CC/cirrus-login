/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/external-assets/:path*", // Match all requests to the external-assets folder
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allow access from any origin
          },
        ],
      },
    ];
  },
};

export default nextConfig;
