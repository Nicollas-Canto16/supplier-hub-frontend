import { Footer } from "@/components/footer/footer";
import { Header } from "../../components/header/header";

type TemplatePublicProps = {
  children: React.ReactNode;
};

export function TemplatePublic({ children }: TemplatePublicProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
