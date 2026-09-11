import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath =
  githubPages && !repository.endsWith(".github.io") ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: githubPages,
  images: { unoptimized: true },
};

export default nextConfig;
