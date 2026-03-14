import axios from 'axios'
import { DatasetPreviewResponse } from '../types/dataset'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export async function fetchDatasetPreview(
  datasetId: string,
): Promise<DatasetPreviewResponse> {
  const res = await api.get(`/dataset/${datasetId}/preview`)

  return res.data
}
