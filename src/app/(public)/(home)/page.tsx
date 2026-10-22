import { TemplatePublic } from "@/app/templates/public-template";
import { HeroSection } from "@/app/(public)/(home)/_components/hero-section";
import { AboutProductSection } from "./_components/about-product-section";
import { Separator } from "@/components/ui/separator";
import { ResourcesSection } from "./_components/resources-section/resources-section";

export default function Home() {
  return (
    <TemplatePublic>
      <HeroSection />
      <AboutProductSection />
      <Separator className="my-10" />
      <ResourcesSection />
    </TemplatePublic>
  );
}
