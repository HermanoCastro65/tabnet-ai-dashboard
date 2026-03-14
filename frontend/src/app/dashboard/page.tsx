'use client'

import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DataTable from '../../components/table/DataTable'
import MetadataPanel from '../../components/dashboard/MetadataPanel'
import { useDataset } from '../../hooks/useDataset'

export default function Dashboard() {
  const [datasetId, setDatasetId] = useState<string | null>(null)
  const [metadata, setMetadata] = useState<any>(null)

  useEffect(() => {
    const id = localStorage.getItem('dataset_id')
    const meta = localStorage.getItem('dataset_metadata')

    if (id) setDatasetId(id)

    if (meta) {
      try {
        setMetadata(JSON.parse(meta))
      } catch {}
    }
  }, [])

  const { data, isLoading, error } = useDataset(datasetId || '')

  return (
    <>
      <Navbar />

      <section className="py-24 bg-background animate-fadeIn">
        <div className="max-w-[1400px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-12 text-center">
            Dashboard
          </h1>

          {/* METADATA */}

          {metadata && <MetadataPanel metadata={metadata} />}

          {/* LOADING */}

          {isLoading && (
            <p className="text-center text-gray-600">Carregando dados...</p>
          )}

          {/* ERRO */}

          {error && (
            <p className="text-center text-red-500">Erro ao carregar dataset</p>
          )}

          {/* TABELA */}

          {data && <DataTable columns={data.columns} data={data.preview} />}
        </div>
      </section>

      <Footer />
    </>
  )
}
