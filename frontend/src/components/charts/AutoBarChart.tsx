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
  const metric = metrics[0]

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

          <Bar dataKey={metric} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
