'use client'

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

type Props = {
  data: Record<string, any>[]
  dimension: string
  metrics: string[]
}

const colors = [
  '#2563eb',
  '#16a34a',
  '#dc2626',
  '#ca8a04',
  '#9333ea',
  '#0891b2',
]

export default function AutoPieChart({ data, dimension, metrics }: Props) {
  const metric = metrics[0]

  const pieData = data.map((row) => ({
    name: row[dimension],
    value: row[metric],
  }))

  return (
    <div className="w-full h-[400px] bg-white rounded-xl p-4 shadow">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={140}
            label
          >
            {pieData.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
