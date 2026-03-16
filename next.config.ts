import type { NextConfig } from "next";
import path from "path";

// Custom domain (venusglobal.com.hk) — assets are served from root, no basePath needed.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
