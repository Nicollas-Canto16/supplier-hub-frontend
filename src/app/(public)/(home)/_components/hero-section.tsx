import { ArrowRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Safari } from "../../../../components/ui/safari";
import { PublicTemplateSection } from "@/app/templates/public-template-section";

const HeroSectionText = {
  title: "Seus fornecedores organizados e seus pedidos sob controle.",
  description:
    "Gerencie contatos, acompanhe encomendas e mantenha seus próximos pedidos organizados em um só lugar. Menos informação espalhada, mais controle da sua operação",
};

export function HeroSection() {
  return (
    <PublicTemplateSection>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(240,240,240,0.25),transparent_100%)]"></div>
      <div className="w-4xl flex flex-col gap-3">
        <h1 className="text-5xl font-bold w-3xl">{HeroSectionText.title} </h1>
        <p className="w-2xl text-secondary-foreground">
          {HeroSectionText.description}
        </p>
        <div className="flex justify-start">
          <Button>Começar agora</Button>
          <Button variant={"ghost"} className="underline underline-offset-2">
            Conhecer recursos
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="w-3xl">
        <Safari url="magicui.design" />
      </div>
    </PublicTemplateSection>
  );
}
