'use client'

import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DataTable from '../../components/table/DataTable'
import { useDataset } from '../../hooks/useDataset'

export default function Dashboard() {
  const [datasetId, setDatasetId] = useState<string | null>(null)

  useEffect(() => {
    const id = localStorage.getItem('dataset_id')
    if (id) setDatasetId(id)
  }, [])

  const { data, isLoading, error } = useDataset(datasetId || '')

  return (
    <>
      <Navbar />

      <section className="py-24 bg-background animate-fadeIn">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-10 text-center">
            Dashboard
          </h1>

          {!datasetId && (
            <p className="text-center text-gray-600">
              Nenhum dataset carregado
            </p>
          )}

          {isLoading && (
            <p className="text-center text-gray-600">Carregando dados...</p>
          )}

          {error && (
            <p className="text-center text-red-500">Erro ao carregar dataset</p>
          )}

          {data && (
            <div className="overflow-x-auto">
              <DataTable columns={data.columns} data={data.preview} />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
