import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "cn";
import { EyeClosed } from "lucide-react";

const LoginText = {
  title: "Login",
  description: "Realize login para ter acesso a ferramenta",
};

export default function Login() {
  return (
    <div className="h-screen w-screen flex flex-col  gap-10 justify-center items-center">
      <div className="absolute inset-x-0 -z-10 bg-background flex h-[500px] w-full h-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl font-bold w-xl">{LoginText.title}</h1>
        </div>
        <div>
          <p className="w-xl text-secondary-foreground">
            {LoginText.description}
          </p>
        </div>
      </div>

      <form action="">
        <div className="flex flex-col gap-5 w-xl h-2xl bg-background border border-secondary rounded-md p-5">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="exemplo@email.com" />
          </Field>
          <Field>
            <FieldLabel htmlFor="Senha">Senha</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="senha"
                type="password"
                placeholder="******"
              />
              <InputGroupAddon align={"inline-end"}>
                <EyeClosed />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Button type="submit">Entrar</Button>
        </div>
      </form>
    </div>
  );
}
