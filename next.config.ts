import type { NextConfig } from "next";

// Verifica se o build está rodando dentro do ambiente do GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// Subpath do GitHub Pages (https://<org>.github.io/<repo>/).
// Na Vercel fica vazio — site servido da raiz.
const basePath = isGithubActions ? "/opencourt-landing-page" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // O basePath só será aplicado no GitHub Pages! Na Vercel ele fica vazio/falso.
  basePath: isGithubActions ? "/opencourt-landing-page" : undefined,
  // Expõe o prefixo ao client para prefixar manualmente assets de /public
  // (<video>, backgroundImage, metadata icons), que o Next não prefixa sozinho.
  // Shell env tem precedência (usado no workflow do Pages via steps.pages.outputs.base_path)
  // e sobrevive à injeção do configure-pages.
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NEXT_PUBLIC_BASE_PATH ?? basePath,
  },
};

export default nextConfig;
