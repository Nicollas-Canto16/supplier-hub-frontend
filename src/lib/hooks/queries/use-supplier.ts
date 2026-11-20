import { useQuery } from "@tanstack/react-query";

export type Supplier = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  instagram: string;
  site: string;
  description: string;
  category: string;
  contact_name: string;
  created_at: Date;
  updated_at: Date;
  is_active: boolean;
};

export type FilterData = {
  value: string;
  field: string;
};

type SupplierFilters = {
  name?: string;
  email?: string;
  instagram?: string;
  category?: string;
  is_active?: boolean;
};

interface GetSupplierProps {
  page: number;
  pagesize?: number;
  orderBy?: string;
  search?: string;
  filters?: SupplierFilters;
}

const response: GetSuppliersResponse ={
  suppliers:data.
}

export async function getSuppliers({
  page,
  pagesize,
  orderby,
  search,
  filters,
}:GetSupplierProps):Promise<GetSuppliersResponse> {
  const {data} = await api
}

export function UseSupplier(params: GetSupplierProps) {
  return useQuery({
    queryKey: [
      "suppliers",
      params.pagesize,
      params.page,
      params.orderBy,
      params.search,
      params.filters,
    ],
    queryFn: () => getSuppliers(params),
  });
}
