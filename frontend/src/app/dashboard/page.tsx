'use client'

import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DataTable from '../../components/table/DataTable'
import MetadataPanel from '../../components/dashboard/MetadataPanel'
import { useDataset } from '../../hooks/useDataset'
import DashboardRenderer from '@/components/DashboardRenderer'
import { generateDashboard } from '@/modules/generator/dashboardGenerator'

function DatasetSection({ datasetId, metadata }: { datasetId: string; metadata: any }) {
  const { data, isLoading, error } = useDataset(datasetId)

  const dashboard =
    data &&
    generateDashboard({
      columns: data.columns,
      data: data.preview,
      metadata,
    })

  return (
    <div className="mb-24">
      {metadata && <MetadataPanel metadata={metadata} />}

      {isLoading && <p className="text-center text-gray-600">Carregando dados...</p>}

      {error && <p className="text-center text-red-500">Erro ao carregar dataset</p>}

      {data && (
        <>
          {/* TABELA */}
          <DataTable columns={data.columns} data={data.preview} />

          {/* GRÁFICOS */}
          {dashboard && (
            <div className="mt-12">
              <DashboardRenderer dashboard={dashboard} data={data.preview} />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function Dashboard() {
  const [datasetIds, setDatasetIds] = useState<string[]>([])
  const [metadatas, setMetadatas] = useState<any[]>([])

  useEffect(() => {
    const idsStored = localStorage.getItem('dataset_ids')
    const metasStored = localStorage.getItem('dataset_metadatas')

    if (idsStored) {
      setDatasetIds(JSON.parse(idsStored))
    } else {
      const singleId = localStorage.getItem('dataset_id')
      if (singleId) setDatasetIds([singleId])
    }

    if (metasStored) {
      setMetadatas(JSON.parse(metasStored))
    } else {
      const singleMeta = localStorage.getItem('dataset_metadata')
      if (singleMeta) setMetadatas([JSON.parse(singleMeta)])
    }
  }, [])

  return (
    <>
      <Navbar />

      <section className="py-24 bg-background animate-fadeIn">
        <div className="max-w-[1400px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-12 text-center">Dashboard</h1>

          {datasetIds.map((id, index) => (
            <DatasetSection key={id} datasetId={id} metadata={metadatas[index] || null} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
