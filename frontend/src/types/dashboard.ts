export type DatasetMetadata = {
  title?: string
  indicator?: string
  location?: string
  period?: string
  metric?: string
  row_dimension?: string
  column_dimension?: string
}

export type Dataset = {
  columns: string[]
  data: Record<string, any>[]
  metadata?: DatasetMetadata
}

export type DatasetAnalysis = {
  dimension: string
  metrics: string[]
  datasetType: 'single_metric' | 'multi_metric' | 'time_series' | 'distribution'
}

export type ChartType = 'bar' | 'stacked_bar' | 'line' | 'pie'

export type ChartSpec = {
  type: ChartType
  dimension: string
  metrics: string[]
  title?: string
}

export type DashboardSpec = {
  charts: ChartSpec[]
  stats: string[]
}
