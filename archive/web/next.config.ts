import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We intentionally have a second package.json at the repo root that hosts
  // a tiny `serve` script for the legacy Webflow export under /webflow.
  // This pins Turbopack's workspace root to /web so it stops warning.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
