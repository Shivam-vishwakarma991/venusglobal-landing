import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages
  output: "export",

  // If deploying to https://<user>.github.io/<repo-name>/
  // set basePath to "/<repo-name>" and uncomment below.
  // Leave empty if using a custom domain (venusglobal.com.hk).
  // basePath: "/venusglobal-landing",

  // next/image doesn't work in static export without a loader
  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
