/** External links used across the landing page. */
export const APP_URL = "https://opencourtapp.vercel.app";
export const REPO_URL =
  "https://github.com/OpenCourtApp/OpenCourtApp.github.io";
export const GITHUB_URL = REPO_URL;

/**
 * Prefixo do subpath no GitHub Pages ("/opencourt-landing-page").
 * Vazio na Vercel / dev local (site servido da raiz).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixa assets de `/public` com o basePath (Image não faz isso sozinho no export estático). */
export function withBase(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
