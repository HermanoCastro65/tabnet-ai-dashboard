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
  title?: string
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
]

export default function AutoStackedBarChart({ data, dimension, metrics, title }: Props) {
  const filteredMetrics = metrics.filter((m) => m.toLowerCase() !== 'total')

  const chartData = data.filter((row) => String(row[dimension]).toLowerCase() !== 'total')

  return (
    <div className="w-full h-[700px] bg-white rounded-xl p-10 shadow-lg">
      <h3 className="text-lg font-semibold mb-6">{title || `Distribuição por ${dimension}`}</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 120 }}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey={dimension}
            angle={-35}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 12 }}
          />

          <YAxis tick={{ fontSize: 12 }} />

          <Tooltip />

          <Legend verticalAlign="top" height={50} />

          {filteredMetrics.map((metric, index) => (
            <Bar
              key={metric}
              dataKey={metric}
              stackId="stack"
              fill={colors[index % colors.length]}
              barSize={18}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
