import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

export function About() {
  return (
    <Section id="sobre" className="border-b border-border">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Sobre o projeto</Eyebrow>
        <SectionHeading>Uma agenda única para as quadras da escola.</SectionHeading>
        <SectionLede>
          O OpenCourt é uma plataforma web para gestão de quadras esportivas em
          escolas e clubes. Ele centraliza reservas, calendário e ocupação em
          um só lugar — com o objetivo de eliminar a planilha desatualizada, o
          grupo de WhatsApp e o conflito de horário.
        </SectionLede>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold">Objetivo</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Dar à equipe visibilidade total do que está livre, ocupado ou
            reservado — em tempo real, do celular ou do computador.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold">Contexto</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Escolas e clubes onde vários professores, turmas e times disputam
            os mesmos espaços, sem uma fonte única de verdade para os horários.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold">Características</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Painel ao vivo, calendário semanal, reservas sem conflito e equipe
            com permissões por função.
          </p>
        </div>
      </div>
    </Section>
  );
}
