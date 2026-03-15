import { DatasetAnalysis, ChartSpec } from '@/types/dashboard'

function getChartTitle(dimension: string): string {
  const d = dimension.toLowerCase()

  if (d.includes('munic')) return 'Top Municípios'

  if (d.includes('faixa')) return 'Distribuição por Faixa Etária'

  if (d.includes('sexo')) return 'Distribuição por Sexo'

  if (d.includes('ano') || d.includes('mês') || d.includes('mes')) return 'Evolução Temporal'

  return `Distribuição por ${dimension}`
}

export function planVisualizations(analysis: DatasetAnalysis): ChartSpec[] {
  const charts: ChartSpec[] = []

  const title = getChartTitle(analysis.dimension)

  switch (analysis.datasetType) {
    case 'single_metric':
      charts.push({
        type: 'bar',
        dimension: analysis.dimension,
        metrics: analysis.metrics,
        title,
      })
      break

    case 'multi_metric':
      charts.push({
        type: 'stacked_bar',
        dimension: analysis.dimension,
        metrics: analysis.metrics,
        title,
      })
      break

    case 'time_series':
      charts.push({
        type: 'line',
        dimension: analysis.dimension,
        metrics: analysis.metrics,
        title,
      })
      break

    case 'distribution':
      charts.push({
        type: 'pie',
        dimension: analysis.dimension,
        metrics: analysis.metrics,
        title,
      })
      break
  }

  return charts
}
