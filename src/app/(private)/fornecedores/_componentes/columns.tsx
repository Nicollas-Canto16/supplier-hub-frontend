"use client";

import { DataTableFeatures } from "@/components/data-table/data-table-feature";
import { createColumnHelper } from "@tanstack/react-table";

export type Supplier = {
  name: string;
  email: string;
  phone: string;
  address: string;
  instagram: string;
  site: string;
  description: string;
  category: string;
  contactName: string;
};

const columnHelper = createColumnHelper<DataTableFeatures, Supplier>();

export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Nome",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("phone", {
    header: "Telefone",
  }),
  columnHelper.accessor("address", {
    header: "Endereço",
  }),
  columnHelper.accessor("instagram", {
    header: "Instagram",
  }),
  columnHelper.accessor("site", {
    header: "Site",
  }),
  columnHelper.accessor("description", {
    header: "descrição",
  }),
  columnHelper.accessor("contactName", {
    header: "Nome para contato",
  }),
]);
