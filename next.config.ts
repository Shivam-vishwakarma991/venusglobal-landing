import type { NextConfig } from "next";
import path from "path";

// When running in GitHub Actions, GITHUB_REPOSITORY is "owner/repo-name".
// Strip the owner prefix to get just the repo name for the basePath.
// If you use a custom domain (venusglobal.com.hk) via CNAME, basePath stays "".
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "";

// A custom domain means GitHub Pages serves from root — no basePath needed.
const useCustomDomain = process.env.CUSTOM_DOMAIN === "true";

const basePath = useCustomDomain ? "" : repoName;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
