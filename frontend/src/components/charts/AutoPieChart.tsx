'use client'

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

type Props = {
  data: Record<string, any>[]
  dimension: string
  metrics: string[]
}

const colors = [
  '#005CA9',
  '#003E73',
  '#1E88E5',
  '#FFC107',
  '#3A8FD9',
  '#2A6FB0',
  '#4FA3E3',
  '#FFD54F',
  '#6BB6F0',
  '#1C5FA0',
]

export default function AutoPieChart({ data, dimension, metrics }: Props) {
  const metric = metrics.find((m) => m.toLowerCase() !== 'total') as string

  const pieData = data
    .filter((row) => row[dimension]?.toLowerCase() !== 'total')
    .map((row) => ({
      name: row[dimension],
      value: row[metric],
    }))

  return (
    <div className="w-full h-[650px] bg-white rounded-xl p-8 shadow">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={180} label>
            {pieData.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
