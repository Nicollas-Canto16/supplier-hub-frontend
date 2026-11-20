import { PrivateTemplate } from "@/app/templates/private-template";
import { DataTable } from "@/components/data-table/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns, Supplier } from "./_componentes/columns";

async function getData(): Promise<Supplier[]>{
  return data[]
};

export default async function Fornecedores() {
  const data = await getData();

  return (
    <PrivateTemplate>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Fornecedores</h1>
          </div>
          <div>
            <Link href={"/fornecedor/novo"}>
              <Button>Adicionar Fornecedor +</Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </PrivateTemplate>
  );
}
