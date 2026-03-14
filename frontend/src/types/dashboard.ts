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

export type ChartSpec = {
  type: 'bar' | 'stacked_bar' | 'line' | 'pie'
  dimension: string
  metrics: string[]
}

export type DashboardSpec = {
  charts: ChartSpec[]
  stats: string[]
}
