# OpenCourt — Landing page

Landing page de apresentação do **OpenCourt**, plataforma web para gestão de
quadras esportivas em escolas e clubes. Reservas, calendário e ocupação em um
só lugar — sem planilha, sem papel, sem conflito de horário.

- **Repositório:** https://github.com/OpenCourtApp/opencourt-landing-page
- **Landing page publicada:** https://opencourtapp.github.io/opencourt-landing-page/

## Problema e solução

**Problema:** a agenda das quadras vive em vários lugares — grupo de
WhatsApp, planilha desatualizada, reserva em dobro no mesmo horário — e ninguém
sabe o que está livre agora.

**Solução:** o OpenCourt centraliza tudo em um calendário único e em tempo
real, com reservas sem conflito, painel de ocupação ao vivo e equipe com
permissões por função (Gestor, Professor, Representante). Como funciona:
1) cadastre a escola e as quadras; 
2) reserve sem conflito; 
3) acompanhe ao vivo.

## Público-alvo

- Gestores escolares (coordenação/direção);
- Professores e treinadores que reservam aulas e treinos;
- Representantes de turma, alunos e times que consultam a agenda.

## Tecnologias utilizadas

- **Next.js 16** (App Router, `output: "export"` para GitHub Pages) + **React 19**
- **Tailwind CSS v4** (tokens OKLCH em escala de cinza)
- **TypeScript**
- **shadcn/ui** (blocos reutilizáveis: Button, Section, Container, Frames)
- **@remixicon/react** (ícones) · **class-variance-authority** (variantes)

## Equipe e responsabilidades

| Integrante     | Função       | Responsabilidades                              |
| -------------- | ------------ | ---------------------------------------------- |
| Breno Valentim | Dev Fullstack | Interface, identidade e deploy da landing page |
| João Pedro     | Dev Fullstack | Estrutura das seções, conteúdo e revisão       |

## Identidade visual

- **Nome:** OpenCourt — usado de forma consistente na navbar, hero, footer e metadata.
- **Logotipo:** marca monocromática em SVG (`components/oc-logo.tsx`,
  `OpenCourtMark` / `OpenCourtLogo` / `OpenCourtWordmark` em `currentColor`) +
  `public/favicon.png`. Motivo de fundo `court-lines` (linhas de quadra).
- **Paleta de cores (monocromática, sem cor de marca):**
  | Papel              | Token        | Claro               | Escuro              |
  | ------------------ | ------------ | ------------------- | ------------------- |
  | Fundo              | `--background` | `oklch(0.99 0 0)`   | `oklch(0.16 0 0)`   |
  | Texto              | `--foreground` | `oklch(0.17 0 0)`   | `oklch(0.985 0 0)`  |
  | Principal (texto)  | `--primary`    | `oklch(0.4 0 0)`    | `oklch(0.72 0 0)`   |
  | CTA sólido         | `--btn`        | `oklch(0.21 0 0)`   | `oklch(0.93 0 0)`   |
  | Secundária / muted | `--secondary`/`--muted`/`--accent` | `oklch(0.96 0 0)` | `oklch(0.27 0 0)` |
  | Borda / input      | `--border`     | `oklch(0.91 0 0)`   | `oklch(1 0 0 / 8%)` |
  | Sucesso / aviso / erro | `--success`/`--warning`/`--destructive` | `oklch(0.51 0.12 155)` / `oklch(0.52 0.12 70)` / `oklch(0.55 0.19 27)` | tons claros equivalentes no `.dark` |
  (ver `app/globals.css` — fonte única de verdade dos tokens)
- **Tipografia:** **DM Sans** para títulos e textos (`next/font/google` em
  `app/layout.tsx`, `display: swap`, `pt-BR`).

## Estrutura da landing page

`#topo` (apresentação: logo, nome, slogan, descrição) → `#sobre` → `#problema`
→ `#solucao` → `#publico` → `#recursos` (funcionalidades em cards) →
`#painel` / calendário / `#permissoes` (demonstrações) → segurança →
`#tecnologias` → `#equipe` → `#planos` → `#faq` → `#cta` (ver código no
GitHub) → footer. Menu de navegação com âncoras (Sobre, Problema, Solução,
Recursos, Equipe, Planos), com versão mobile (hambúrguer).

```
app/
  layout.tsx          # DM Sans, metadata, favicon via withBase
  page.tsx            # compõe as seções na ordem acima
  globals.css         # tokens monocromáticos + base
components/
  oc-logo.tsx         # marca/wordmark (currentColor)
  sections/           # about, solution, audience, hero, problem-solution,
                      # features, feature-*, security, tech, team,
                      # pricing, faq, cta, navbar, footer
  ui/                 # Button, Section, Container, Frames, Shot...
lib/site.ts           # APP_URL, REPO_URL, GITHUB_URL, BASE_PATH, withBase()
public/               # court-bg.png, hero-demo.mp4, group-*.png, favicon.png
.github/workflows/nextjs.yml  # build + deploy no GitHub Pages
```

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npx tsc --noEmit # checagem de tipos
```
