/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com",
        port: "",
        pathname: "/s.cdpn.io/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
