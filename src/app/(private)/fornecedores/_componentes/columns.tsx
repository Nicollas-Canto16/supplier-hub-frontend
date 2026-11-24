"use client";

import { DataTableFeatures } from "@/components/data-table/data-table-feature";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { z } from "zod";

export const dataSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  instagram: z.string(),
  site: z.string(),
  description: z.string(),
  category: z.string(),
  contactName: z.string(),
});

export type Supplier = z.infer<typeof dataSchema>;

export const columns: ColumnDef<Supplier>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="w-[300px]">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Contato",
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "address",
    header: "Endereço",
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("address")}</div>,
  },
  {
    accessorKey: "instagram",
    header: "Instagram",
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("instagram")}</div>,
  },
  {
    accessorKey: "site",
    header: "Site",
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("site")}</div>,
  },
  {
    accessorKey: "description",
    header: "Descricao",
    cell: ({ row }) => <div className="w-[300px]">{row.getValue("description")}</div>,
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("category")}</div>,
  },
  {
    accessorKey: "scontactNameite",
    header: "Nome para Contato",
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("contactName")}</div>,
  },
];
