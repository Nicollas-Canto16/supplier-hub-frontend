import { FetchManyResponse } from "@/lib/dto/fetch-many-response";
import { api } from "@/lib/services/api";
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

export async function getOneSupplier(id: number): Promise<Supplier> {
  const { data: supplier } = await api.get<Supplier>(`suppliers/${id}`);
  return supplier;
}

type GetSuppliersResponse = {
  suppliers: Supplier[];
  page: number;
  pagesize: number;
  total: number;
};

type SupplierFilters = {
  name?: string;
  email?: string;
  instagram?: string;
  category?: string;
  is_active?: boolean;
};

export type GetFiltersSuppliersRequest = {
  search?: string;
  filters?: SupplierFilters;
};
type GetFiltersSuppliersResponse = {
  name: FilterData[];
  email: FilterData[];
};

interface GetSupplierProps {
  page: number;
  pagesize?: number;
  orderBy?: string;
  search?: string;
  filters?: SupplierFilters;
}

export async function getSuppliers({
  page,
  pagesize,
  orderBy,
  search,
  filters,
}: GetSupplierProps): Promise<GetSuppliersResponse> {
  const { data } = await api.get<FetchManyResponse<Supplier>>("/suppliers", {
    params: { page: page, pagesize, orderBy, search, ...filters },
  });

  const response: GetSuppliersResponse = {
    suppliers: data.data.map((supplier) => supplier),
    pagesize: data.pagesize,
    page: data.page,
    total: data.total,
  };
  return response;
}

export async function getSupplierFilters({
  search,
  filters,
}: GetFiltersSuppliersRequest): Promise<GetFiltersSuppliersResponse> {
  const { data } = await api.get<GetFiltersSuppliersResponse>(
    "/suppliers/filters",
    { params: { search, filters } },
  );
  return data;
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

export function useSupplierFilters(params: GetFiltersSuppliersRequest) {
  return useQuery({
    queryKey: ["suppliers-filters", params.search, params.filters],
    queryFn: () => getSupplierFilters(params),
  });
}
