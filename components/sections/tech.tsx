import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

const stack = [
  {
    title: "Next.js 16 + React 19",
    desc: "App Router com export estático para o GitHub Pages.",
  },
  {
    title: "Tailwind CSS v4",
    desc: "Tokens OKLCH em escala de cinza, espelhados do app.",
  },
  {
    title: "TypeScript",
    desc: "Tipagem de ponta a ponta nas seções e componentes.",
  },
  {
    title: "shadcn/ui",
    desc: "Blocos reutilizáveis (Button, Section, Container, Frames).",
  },
  {
    title: "@remixicon/react",
    desc: "Ícones da interface e das seções.",
  },
  {
    title: "class-variance-authority",
    desc: "Variantes de componentes com tipos.",
  },
];

export function Tech() {
  return (
    <Section id="tecnologias" className="border-b border-border">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Tecnologias</Eyebrow>
        <SectionHeading>A mesma stack do produto.</SectionHeading>
        <SectionLede>
          Landing e app falam uma língua visual e técnica só — o que muda na
          identidade aparece nos dois lugares.
        </SectionLede>
      </div>

      <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((t) => (
          <li
            key={t.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold">{t.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{t.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
