"use client"

import { Button } from "@/components/ui/button";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between px-20 py-6">
        <div>
          <p>Supplier-hub</p>
        </div>
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => {
              document
                .getElementById("ProductSection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            variant={"ghost"}
          >
            Produto
          </Button>
          <Button  onClick={() => {
              document
                .getElementById("ResourceSection")
                ?.scrollIntoView({ behavior: "smooth" });
            }} variant={"ghost"}>Recursos</Button>
          {/* <Button variant={"ghost"}>Preços</Button> */}
          <Button variant={"ghost"}>FAQ</Button>
          <Separator orientation="vertical" />
          <Link href={"/login"}>
            <PulsatingButton variant="ripple">Entrar</PulsatingButton>
          </Link>
        </div>
      </div>
      <Separator />
    </header>
  );
}
