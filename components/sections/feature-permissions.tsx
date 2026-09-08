import { FeatureBleed } from "@/components/ui/feature-bleed";
import { withBase } from "@/lib/site";

export function FeaturePermissions() {
  return (
    <FeatureBleed
      id="equipe"
      eyebrow="Equipe & permissões"
      title="Cada pessoa no seu papel."
      lede="Convide por link. Você define a função — Gestor, Professor ou Representante — e quem entra não pode mudar isso por conta própria."
      points={[
        "Convites por link, com a função já definida",
        "Status de cada convite: pendente ou ativo",
        "Permissões fixadas por quem convida",
      ]}
      src={withBase("/group-collaborators.png")}
      alt="Tela de colaboradores com funções e status dos convites"
    />
  );
}
