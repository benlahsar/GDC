import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'groupdigitalconcept.com',
      pathname: '/**'
    },],
  },
  reactCompiler: true,
};

export default nextConfig;
