import { PublicTemplateSection } from "@/app/templates/public-template-section";
import { UseBentoGrid } from "./bento-grid";
const ResourcesSectionText = {
  title: "Recursos",
};
export function ResourcesSection() {
  return (
    <PublicTemplateSection>
      <h1 id="ResourceSection" className="text-5xl font-bold w-3xl">
        {ResourcesSectionText.title}{" "}
      </h1>
      <div>
        <UseBentoGrid />
      </div>
    </PublicTemplateSection>
  );
}
