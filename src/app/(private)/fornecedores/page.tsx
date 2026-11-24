import { PrivateTemplate } from "@/app/templates/private-template";
import { DataTable } from "@/components/data-table/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns, Supplier } from "./_componentes/columns";
import { useRouter } from "next/navigation";
import { useListingQueryState } from "@/lib/hooks/use-listing-query-state";
import {
  UseSupplier,
  useSupplierFilters,
} from "@/lib/hooks/queries/use-supplier";
import { email } from "zod";

export default async function Fornecedores() {
  const router = useRouter();
  const { orderby, search, pagination, searchParams, setPagination } =
    useListingQueryState();

  const is_active_param = searchParams.get("is_active");
  const is_active =
    is_active_param === "true"
      ? true
      : is_active_param === "false"
        ? false
        : undefined;

  const filters = {
    is_active,
  };

  const { data, refetch, isLoading, isFetching } = UseSupplier({
    page: pagination.pageIndex,
    pagesize: pagination.pageSize,
    orderBy: orderby ?? "name.desc",
    search: search ?? "",
    filters: filters,
  });

  const { data: filterOptions } = useSupplierFilters({ filters: filters });

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
        <DataTable
          columns={columns}
          data={
            data?.suppliers.map((supplier) => ({
              name: supplier.name,
              email: supplier.email,
              phone: supplier.phone,
              address: supplier.address,
              instagram: supplier.instagram,
              site: supplier.site,
              description: supplier.description,
              category: supplier.category,
              contact_name: supplier.contact_name,
              is_active: supplier.is_active,
            })) ?? []
          }
          total={data?.total ?? 0}
          pagination={pagination}
          setPagination={setPagination}
          onReload={refetch}
          isLoading={isLoading || isFetching}
        />
      </div>
    </PrivateTemplate>
  );
}
