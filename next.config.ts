import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Keep builds green in Vercel even if eslint config changes upstream.
    // (You can still run `npm run lint` locally/CI.)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
