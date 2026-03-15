import { Dataset, DatasetAnalysis } from '@/types/dashboard'

function isNumericColumn(data: Record<string, any>[], column: string): boolean {
  return data.every((row) => typeof row[column] === 'number')
}

export function analyzeDataset(dataset: Dataset): DatasetAnalysis {
  const { columns, data } = dataset

  const numericColumns = columns.filter((col) => isNumericColumn(data, col))

  const dimensionColumns = columns.filter((col) => !numericColumns.includes(col))

  const dimension = dimensionColumns[0]

  const metrics = numericColumns.filter((col) => col.toLowerCase() !== 'total')

  let datasetType: DatasetAnalysis['datasetType'] = 'single_metric'

  if (metrics.length > 1) datasetType = 'multi_metric'

  if (dimension?.toLowerCase().includes('ano')) datasetType = 'time_series'

  if (dimension?.toLowerCase().includes('sexo')) datasetType = 'distribution'

  return {
    dimension,
    metrics,
    datasetType,
  }
}
