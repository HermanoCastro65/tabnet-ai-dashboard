'use client'

import {
  LineChart,
  Line,
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

const colors = ['#2563eb', '#16a34a', '#dc2626', '#9333ea']

export default function AutoLineChart({ data, dimension, metrics }: Props) {
  return (
    <div className="w-full h-[400px] bg-white rounded-xl p-4 shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={dimension} />

          <YAxis />

          <Tooltip />

          <Legend />

          {metrics.map((metric, index) => (
            <Line
              key={metric}
              type="monotone"
              dataKey={metric}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
