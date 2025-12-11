import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@my-saas/components"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@my-saas/components": require("path").resolve(
        __dirname,
        "./packages/my-saas-components/src"
      ),
    };
    return config;
  },
};

export default nextConfig;
