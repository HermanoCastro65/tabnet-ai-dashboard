import { Dataset, DashboardSpec } from '@/types/dashboard'
import { analyzeDataset } from '../analyzer/datasetAnalyzer'
import { planVisualizations } from '../planner/visualizationPlanner'

export function generateDashboard(dataset: Dataset): DashboardSpec {
  const analysis = analyzeDataset(dataset)

  const charts = planVisualizations(analysis)

  return {
    charts,
    stats: analysis.metrics,
  }
}
