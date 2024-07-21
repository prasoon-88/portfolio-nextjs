/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    domains: ["yt3.googleusercontent.com"],
  },
};

export default nextConfig;
