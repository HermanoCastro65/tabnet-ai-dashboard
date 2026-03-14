export interface DatasetMetadata {
  title: string
  indicator: string
  location: string
  metric: string
  row_dimension: string
  column_dimension: string
  [key: string]: string
}

export interface DatasetUploadResponse {
  dataset_id: string
  metadata: DatasetMetadata
  rows: number
  columns: number
}

export interface DatasetPreviewResponse {
  dataset_id: string
  metadata?: DatasetMetadata
  columns: string[]
  preview: Record<string, number | string | null>[]
}
