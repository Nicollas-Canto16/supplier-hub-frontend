"use client";

import { PrivateTemplate } from "@/app/templates/private-template";
import { DataPickerMain } from "@/components/select/data-picker0main";
import { SelectMain } from "@/components/select/select-main";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { randomUUID } from "crypto";
import { ArrowLeft, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type orderItem = {
  description: string;
  quantity: number;
  unitaryValue: number;
};

const fornecedores = [
  { value: "zip", label: "zip" },
  { value: "64sticker", label: "64sticker" },
];

const prioridade = [
  { value: "media", label: "media" },
  { value: "alta", label: "alta" },
  { value: "Normal", label: "Normal" },
];

export default function NovoPedido() {
  const [item, setItem] = useState<orderItem[]>([
    { description: "", quantity: 1, unitaryValue: 0 },
  ]);

  function AddItem() {
    setItem((prev) => [
      ...prev,
      {
        description: "",
        quantity: 1,
        unitaryValue: 0,
      },
    ]);
  }

  function removeItem(index: number) {
    setItem((prev) => prev.filter((_, i) => i !== index));
  }

  function updateItem(
    index: number,
    field: keyof Omit<orderItem, "id">,
    value: string,
  ) {
    setItem((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]:
                field === "description"
                  ? value
                  : field === "quantity"
                    ? Number(value)
                    : Number(value),
            }
          : item,
      ),
    );
  }

  function updatetotal() {
    useEffect(() => {
      return;
    }, [item]);
  }


  return (
    <PrivateTemplate>
      <Link href={"/pedidos"} className="flex">
        <ArrowLeft /> Voltar para pedidos
      </Link>
      <div>
        <form action="">
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Novo Pedido</FieldLegend>
              <FieldDescription>
                Preencha os dados para registrar um pedido
              </FieldDescription>
              <FieldGroup>
                <FieldLegend>Informações do pedido</FieldLegend>
                <div className="flex grid-cols-2 gap-10">
                  <Field>
                    <FieldLabel>Fornecedor</FieldLabel>
                    <SelectMain
                      label="Fornecedores"
                      content={fornecedores}
                      placeholder="Selecione um Fornecedor"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Prioridade</FieldLabel>
                    <SelectMain
                      label="Fornecedores"
                      content={prioridade}
                      defaultValue="Normal"
                    />
                  </Field>
                </div>
                <div className="flex grid-cols-2 gap-10">
                  <Field>
                    <FieldLabel>Date do pedido</FieldLabel>
                    <DataPickerMain />
                  </Field>

                  <Field>
                    <FieldLabel>Previsão de entrega</FieldLabel>
                    <DataPickerMain />
                  </Field>
                </div>
              </FieldGroup>

              <FieldGroup>
                <div className="flex justify-between">
                  <FieldLegend>Items do pedido</FieldLegend>
                  <Button onClick={AddItem}>Adicionar Item +</Button>
                </div>
                {item.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex grid-cols-4 gap-10 items-center"
                    >
                      <Field>
                        <FieldLabel>Descrição</FieldLabel>
                        <Input
                          id="description"
                          type="text"
                          placeholder="Camiseta preta - m"
                          onChange={(e) =>
                            updateItem(index, "description", e.target.value)
                          }
                        />
                      </Field>
                      <Field className="w-sm">
                        <FieldLabel>Quantidade</FieldLabel>
                        <Input
                          id="quantity"
                          type="number"
                          placeholder="1"
                          onChange={(e) =>
                            updateItem(index, "quantity", e.target.value)
                          }
                        />
                      </Field>
                      <Field className="w-sm">
                        <FieldLabel>Valor unitário</FieldLabel>
                        <InputGroup>
                          <InputGroupAddon>
                            <InputGroupText>R$</InputGroupText>
                          </InputGroupAddon>
                          <InputGroupInput
                            id="unitary-value"
                            type="number"
                            min={0}
                            step={0.01}
                            placeholder="0,00"
                            onChange={(e) =>
                              updateItem(index, "unitaryValue", e.target.value)
                            }
                          />
                        </InputGroup>
                      </Field>
                      <Field className="w-sm">
                        <FieldLabel>Valor total</FieldLabel>
                        <Input id="total-value" disabled value={} />
                      </Field>
                      <Button
                        onClick={() => removeItem(index)}
                        className="hover:text-red-500"
                        variant={"ghost"}
                      >
                        <Trash />
                      </Button>
                    </div>
                  );
                })}
                <Field>
                  <FieldLabel>Date do pedido</FieldLabel>
                  <Textarea
                    id="observation"
                    placeholder="Digite as observações do pedido"
                    rows={4}
                    className="resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </div>
    </PrivateTemplate>
  );
}
