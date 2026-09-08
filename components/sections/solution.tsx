import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

const steps = [
  {
    n: "01",
    title: "Cadastre a escola e as quadras",
    desc: "Crie a organização, cadastre cada quadra e convide a equipe por link, já com a função definida.",
  },
  {
    n: "02",
    title: "Reserve sem conflito",
    desc: "Escolha quadra, dia e horário no calendário semanal. O sistema impede reserva em dobro no mesmo horário.",
  },
  {
    n: "03",
    title: "Acompanhe ao vivo",
    desc: "O painel mostra quem está em quadra agora e a ocupação do dia. Mudou algo? A equipe recebe aviso por email.",
  },
];

export function Solution() {
  return (
    <Section id="solucao" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>A solução</Eyebrow>
        <SectionHeading>Do conflito de horário à ordem em 3 passos.</SectionHeading>
        <SectionLede>
          Cada dor do &ldquo;Hoje&rdquo; tem uma resposta direta no OpenCourt:
          o WhatsApp vira calendário único, a planilha vira tempo real e a
          reserva em dobro vira impossibilidade técnica.
        </SectionLede>
      </div>

      <ol className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-xl border border-border bg-card p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Passo {s.n}
            </p>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
