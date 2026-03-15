'use client'

import { useRef, useState } from 'react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface Props {
  columns: string[]
  data: any[]
}

export default function DataTable({ columns, data }: Props) {
  const columnDefs: ColumnDef<any>[] = columns.map((col) => ({
    accessorKey: col,
    header: col,
  }))

  const table = useReactTable({
    data,
    columns: columnDefs,
    getCoreRowModel: getCoreRowModel(),
  })

  const scrollRef = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current
    if (!container) return

    setIsDragging(true)
    setStartX(e.pageX)
    setScrollLeft(container.scrollLeft)
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const container = scrollRef.current
    if (!container) return

    e.preventDefault()

    const walk = (e.pageX - startX) * 1.5
    container.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="mt-10">
      <div
        ref={scrollRef}
        className="table-scroll overflow-auto max-h-[70vh] w-fit max-w-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <table className="border-collapse text-sm bg-white shadow-md border border-gray-200">
          <thead className="bg-primary text-white shadow-md">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left font-semibold whitespace-nowrap bg-primary sticky top-0 z-50"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`
                  ${i % 2 === 0 ? 'bg-background' : 'bg-white'}
                  hover:bg-highlight/20
                  transition
                `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-3 text-gray-700 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
