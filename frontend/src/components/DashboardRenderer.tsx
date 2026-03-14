'use client'

import { DashboardSpec } from '../types/dashboard'

import {
  AutoBarChart,
  AutoStackedBarChart,
  AutoLineChart,
  AutoPieChart,
} from './charts'

type Props = {
  dashboard: DashboardSpec
  data: Record<string, any>[]
}

export default function DashboardRenderer({ dashboard, data }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {dashboard.charts.map((chart, index) => {
        switch (chart.type) {
          case 'bar':
            return (
              <AutoBarChart
                key={index}
                data={data}
                dimension={chart.dimension}
                metrics={chart.metrics}
              />
            )

          case 'stacked_bar':
            return (
              <AutoStackedBarChart
                key={index}
                data={data}
                dimension={chart.dimension}
                metrics={chart.metrics}
              />
            )

          case 'line':
            return (
              <AutoLineChart
                key={index}
                data={data}
                dimension={chart.dimension}
                metrics={chart.metrics}
              />
            )

          case 'pie':
            return (
              <AutoPieChart
                key={index}
                data={data}
                dimension={chart.dimension}
                metrics={chart.metrics}
              />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
