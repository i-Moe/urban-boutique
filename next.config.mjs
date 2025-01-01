import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Mantém modo estrito do React (recomendado)
  images: {
    domains: [],  // Adicione domínios de imagens externas aqui
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(process.cwd(), "src"),  // Alias para facilitar imports
    };
    return config;
  },
};

export default nextConfig;
