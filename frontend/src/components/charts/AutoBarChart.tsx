'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

type Props = {
  data: Record<string, any>[]
  dimension: string
  metrics: string[]
}

export default function AutoBarChart({ data, dimension, metrics }: Props) {
  const metric = metrics.find((m) => m.toLowerCase() !== 'total') as string

  const sorted = [...data].sort((a, b) => (b[metric] || 0) - (a[metric] || 0))

  const chartData = sorted.slice(0, 15)

  return (
    <div className="w-full h-[650px] bg-white rounded-xl p-8 shadow">
      <h3 className="text-lg font-semibold mb-6">Top Municípios</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
        >
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

          <Bar dataKey={metric} fill="#005CA9" barSize={22} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
