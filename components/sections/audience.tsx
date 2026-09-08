import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

const audiences = [
  {
    title: "Gestores escolares",
    desc: "Coordenação e direção que precisam de ordem nos horários e de saber quem usa cada quadra.",
  },
  {
    title: "Professores e treinadores",
    desc: "Quem reserva aula, treino ou evento e precisa ver na hora o que está livre.",
  },
  {
    title: "Representantes e atletas",
    desc: "Alunos e times que consultam a agenda e evitam o vai-e-volta no WhatsApp.",
  },
];

export function Audience() {
  return (
    <Section id="publico" className="border-b border-border">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Público-alvo</Eyebrow>
        <SectionHeading>Feito para quem vive a quadra.</SectionHeading>
        <SectionLede>
          Escolas, clubes e redes esportivas que dividem poucos espaços entre
          muitas pessoas — e não podem perder horário com ruído.
        </SectionLede>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {audiences.map((a) => (
          <div
            key={a.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold">{a.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
