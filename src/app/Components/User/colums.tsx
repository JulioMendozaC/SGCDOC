'use client'
export type Payment = {
  "accessorKey": string,
  "header": string,
  cell?: any

}

export const columns: Payment[] = [
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }: any) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },

  {
    accessorKey: "email",
    header: "Correo"
  },

]
