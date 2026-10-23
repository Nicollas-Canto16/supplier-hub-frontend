import {
  GitCompareArrows,
  LayoutDashboard,
  ShoppingBag,
  SquareArrowRightExit,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

const sidebarLinks = [
  {
    name: "Visão geral",
    url: "/inicio",
    icon: LayoutDashboard,
  },
  {
    name: "Fornecedores",
    url: "/fornecedores",
    icon: Users2,
  },
  {
    name: "Pedidos",
    url: "/pedidos",
    icon: ShoppingBag,
  },
  {
    name: "Comparar",
    url: "/comparar",
    icon: GitCompareArrows,
  },
];

export function Sidebar() {
  return (
    <div className="w-3xs border-r border-secondary h-screen p-3 flex flex-col justify-between">
      <div className="">
        <p>Supplier-hub</p>
      </div>
      <div className="flex flex-col gap-5">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              className="flex items-center gap-2"
              key={link.name}
              href={link.url}
            >
              <Icon />
              <p className="text-lg">{link.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-3 items">
        <Avatar>
          <AvatarFallback>NC</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold">Nicollas Canto</p>
          <p className="text-xs text-secondary-foreground">
            nicollascanto161006@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
