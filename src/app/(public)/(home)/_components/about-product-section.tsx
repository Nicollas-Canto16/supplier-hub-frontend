import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarClock, ClipboardList, Users2 } from "lucide-react";

const AboutProductSectionText = {
  title:
    "Tudo o que você precisa para gerenciar seus fornecedores em um só lugar.",
  description:
    "O Supplier Hub centraliza as informações dos seus fornecedores e organiza o acompanhamento das encomendas, desde o planejamento de um novo pedido até o registro de sua conclusão. Em vez de depender de anotações, planilhas e links salvos em diferentes lugares, você mantém tudo acessível em um único ambiente.",
};

const AboutProductSectionCard = [
  {
    icon: <Users2 />,
    title: "Fornecedor",
    description: "Contatos e informações centralizadas.",
  },
  {
    icon: <ClipboardList />,
    title: "Encomendas",
    description: "Pedidos organizados por status.",
  },
  {
    icon: <CalendarClock />,
    title: "Pendências",
    description: "Próximos pedidos à vista.",
  },
];

export function AboutProductSection() {
  return (
    <div id="ProductSection" className="flex flex-col pt-30 gap-10">
      <div className="flex justify-around">
        <div>
          <h1 className="text-4xl font-bold w-2xl">
            {AboutProductSectionText.title}
          </h1>
        </div>
        <div>
          <p className="w-2xl text-secondary-foreground">
            {AboutProductSectionText.description}
          </p>
        </div>
      </div>
      <div className="flex justify-around">
        {AboutProductSectionCard.map((card) => (
          <Card key={card.title} className="w-xs">
            <CardHeader>
              <CardTitle> {card.icon}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
