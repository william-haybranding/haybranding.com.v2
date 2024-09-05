/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // Adicionando o domínio do Cloudinary
  },
};

export default nextConfig;
