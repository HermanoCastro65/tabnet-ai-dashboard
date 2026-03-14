import { DatasetAnalysis, ChartSpec } from '@/types/dashboard'

export function planVisualizations(analysis: DatasetAnalysis): ChartSpec[] {
  const charts: ChartSpec[] = []

  switch (analysis.datasetType) {
    case 'single_metric':
      charts.push({
        type: 'bar',
        dimension: analysis.dimension,
        metrics: analysis.metrics,
      })
      break

    case 'multi_metric':
      charts.push({
        type: 'stacked_bar',
        dimension: analysis.dimension,
        metrics: analysis.metrics,
      })
      break

    case 'time_series':
      charts.push({
        type: 'line',
        dimension: analysis.dimension,
        metrics: analysis.metrics,
      })
      break

    case 'distribution':
      charts.push({
        type: 'pie',
        dimension: analysis.dimension,
        metrics: analysis.metrics,
      })
      break
  }

  return charts
}
