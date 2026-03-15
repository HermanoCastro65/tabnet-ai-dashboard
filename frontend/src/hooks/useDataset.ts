import { useQuery } from '@tanstack/react-query'
import { fetchDatasetPreview } from '@/services/api'

export function useDataset(datasetId: string) {
  return useQuery({
    queryKey: ['dataset', datasetId],
    queryFn: () => fetchDatasetPreview(datasetId),
    enabled: Boolean(datasetId),
  })
}
