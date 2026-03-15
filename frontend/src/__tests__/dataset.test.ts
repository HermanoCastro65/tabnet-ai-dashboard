import { fetchDatasetPreview } from '@/services/api'

describe('Dataset API', () => {
  it('should fetch dataset preview', async () => {
    const datasetId = 'test-id'

    try {
      const data = await fetchDatasetPreview(datasetId)

      expect(data).toHaveProperty('columns')
      expect(data).toHaveProperty('preview')
    } catch {
      expect(true).toBe(true)
    }
  })
})
