'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
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

export default function AutoStackedBarChart({
  data,
  dimension,
  metrics,
}: Props) {
  const filteredMetrics = metrics.filter((m) => m.toLowerCase() !== 'total')

  return (
    <div className="w-full h-[400px] bg-white rounded-xl p-4 shadow">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey={dimension}
            tick={{ fontSize: 12 }}
            interval={0}
            angle={-30}
            textAnchor="end"
          />

          <YAxis />

          <Tooltip />

          <Legend />

          {filteredMetrics.map((metric, index) => (
            <Bar
              key={metric}
              dataKey={metric}
              stackId="stack"
              fill={colors[index % colors.length]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
