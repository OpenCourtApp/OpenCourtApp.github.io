import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

const members = [
  {
    initials: "BV",
    name: "Breno Valentim",
    role: "Dev Fullstack",
    desc: "Interface, identidade e deploy da landing page.",
  },
  {
    initials: "JP",
    name: "João Pedro",
    role: "Dev Fullstack",
    desc: "Estrutura das seções, conteúdo e revisão.",
  },
];

export function Team() {
  return (
    <Section id="equipe" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Equipe</Eyebrow>
        <SectionHeading>Quem construiu.</SectionHeading>
        <SectionLede>
          Equipe responsável pela identidade visual e pela landing page do
          OpenCourt.
        </SectionLede>
      </div>

      <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <div
              aria-hidden="true"
              className="mx-auto flex size-12 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold"
            >
              {m.initials}
            </div>
            <h3 className="mt-4 font-semibold">{m.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
