import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: "./empty-module.ts",
      },
    },
  },
  webpack: (config) => {
    config.resolve.fallback = { canvas: false };
    return config;
  },
  server: {
    https: {
      key: fs.readFileSync(path.join(__dirname, "localhost-key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "localhost.pem")),
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/pdf24/:path*",
        destination: "https://filetools13.pdf24.org/:path*",
      },
    ];
  },
};

export default nextConfig;
