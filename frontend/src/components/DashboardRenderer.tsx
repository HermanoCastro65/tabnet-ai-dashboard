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
    <div className="w-full space-y-16">
      {dashboard.charts.map((chart, index) => {
        switch (chart.type) {
          case 'bar':
            return (
              <div key={index} className="w-full">
                <AutoBarChart
                  data={data}
                  dimension={chart.dimension}
                  metrics={chart.metrics}
                />
              </div>
            )

          case 'stacked_bar':
            return (
              <div key={index} className="w-full">
                <AutoStackedBarChart
                  data={data}
                  dimension={chart.dimension}
                  metrics={chart.metrics}
                  title={chart.title}
                />
              </div>
            )

          case 'line':
            return (
              <div key={index} className="w-full">
                <AutoLineChart
                  data={data}
                  dimension={chart.dimension}
                  metrics={chart.metrics}
                />
              </div>
            )

          case 'pie':
            return (
              <div key={index} className="w-full">
                <AutoPieChart
                  data={data}
                  dimension={chart.dimension}
                  metrics={chart.metrics}
                />
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
