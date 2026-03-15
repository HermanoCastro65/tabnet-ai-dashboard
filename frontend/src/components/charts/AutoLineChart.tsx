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

const colors = [
  '#005CA9',
  '#1E88E5',
  '#003E73',
  '#FFC107',
  '#3A8FD9',
  '#2A6FB0',
  '#4FA3E3',
  '#FFD54F',
]

export default function AutoLineChart({ data, dimension, metrics }: Props) {
  const filteredMetrics = metrics.filter((m) => m.toLowerCase() !== 'total')

  return (
    <div className="w-full h-[650px] bg-white rounded-xl p-8 shadow">
      <h3 className="text-lg font-semibold mb-6">Evolução Temporal</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={dimension} interval="preserveStartEnd" tick={{ fontSize: 12 }} />

          <YAxis tick={{ fontSize: 12 }} />

          <Tooltip />

          <Legend verticalAlign="top" height={50} />

          {filteredMetrics.map((metric, index) => (
            <Line
              key={metric}
              type="monotone"
              dataKey={metric}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
