import { PrivateTemplate } from "@/app/templates/private-template";
import { Check, ClipboardList, ShoppingBag, Truck, Users2 } from "lucide-react";
import { CardCategory } from "./_components/card-category";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CardCategorys = [
  {
    title: "Total de fornecedores",
    icon: Users2,
    total: 2,
    period: "Todo o período",
  },
  {
    title: "Total de Pedidos",
    icon: ShoppingBag,
    total: 2,
    period: "Todo o período",
  },
  {
    title: "Pedidos pendentes",
    icon: ClipboardList,
    total: 2,
    period: "Este mês",
  },
  {
    title: "Pedidos em andamento",
    icon: Truck,
    total: 2,
    period: "Este mês",
  },
  {
    title: "Pedidos concluidos",
    icon: Check,
    total: 2,
    period: "Este mês",
  },
];

export default function Inicio() {
  return (
    <PrivateTemplate>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">Olá, Nicollas</h1>
          <p>Que tal dar uma olhada como anda sua operação?</p>
        </div>
        <div>
          <Link href={"/pedido/novo"}>
            <Button>Adicionar Pedido +</Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-around">
        {CardCategorys.map((card) => {
          return (
            <CardCategory
              key={card.title}
              title={card.title}
              icon={card.icon}
              total={card.total}
              period={card.period}
            />
          );
        })}
      </div>
    </PrivateTemplate>
  );
}
