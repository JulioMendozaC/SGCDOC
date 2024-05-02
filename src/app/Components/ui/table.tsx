'use client'
import { useState } from "react"
import Modal from "./modal"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'


export const Table = ({ children, Tabledata, columns }: any) => {


  const [isOpen, setIsOpen] = useState(false)

  const table = useReactTable({
    data: Tabledata,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <button
        className="bg-blue-500 p-2 m-2"
        onClick={() => setIsOpen(true)}
      >agregra</button>
      <div className="p-2">
        <table className="min-w-full divide-y divide-gray-300 mb-4">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>
    </div>
  )
}

export default Table
