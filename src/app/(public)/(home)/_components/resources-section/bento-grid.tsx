import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { InputIcon } from "@radix-ui/react-icons";
import {
  Calendar,
  Factory,
  GitCompareArrows,
  RotateCcwClock,
  ShoppingBag,
} from "lucide-react";

const features = [
  {
    Icon: Factory,
    name: "Cadastro de fornecedores",
    description:
      "Armazene os dados dos fornecedores, encontre seus contatos rapidamente e acesse os respectivos sites sem precisar procurar em várias fontes",
    href: "/",
    cta: "Ver mais",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: ShoppingBag,
    name: "Gestão de pedidos",
    description:
      "Registre os pedidos e acompanhe seus status, mantendo o histórico organizado para consultar o que já foi realizado e o que ainda precisa de atenção.",
    href: "/",
    cta: "Ver mais",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Calendar,
    name: "Próximos pedidos",
    description:
      "Organize os pedidos que ainda serão realizados para não depender da memória ou de anotações dispersas.",
    href: "/",
    cta: "Ver mais",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: RotateCcwClock,
    name: "Histórico e acompanhamento",
    description:
      "Consulte pedidos anteriores e seus respectivos status para acompanhar a evolução das encomendas ao longo do tempo.",
    href: "/",
    cta: "Ver mais",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GitCompareArrows,
    name: "Comparação de preços",
    description:
      "Compare os preços entre fornecedores, identifique as melhores oportunidades e tome decisões de compra mais inteligentes, economizando tempo e dinheiro.",
    href: "/",
    cta: "Ver mais",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function UseBentoGrid() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
