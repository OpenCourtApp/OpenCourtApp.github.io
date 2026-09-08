import type { NextConfig } from "next";

// Site raiz (https://opencourtapp.github.io/): servido da "/", sem subpath.
// O workflow do Pages injeta NEXT_PUBLIC_BASE_PATH="" e o withBase()
// em lib/site.ts segue válido (prefixo vazio).
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  },
};

export default nextConfig;
