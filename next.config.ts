import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/granat-demo",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
