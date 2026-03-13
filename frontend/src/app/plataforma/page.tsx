'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Plataforma() {
  const router = useRouter()

  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState('')

  function validateFiles(newFiles: File[]) {
    const csvFiles = newFiles.filter((file) =>
      file.name.toLowerCase().endsWith('.csv'),
    )

    if (csvFiles.length !== newFiles.length) {
      setError('Apenas arquivos CSV são permitidos.')
      return
    }

    const existingNames = files.map((f) => f.name)

    for (const file of csvFiles) {
      if (existingNames.includes(file.name)) {
        setError('Arquivos duplicados não são permitidos.')
        return
      }
    }

    if (files.length + csvFiles.length > 3) {
      setError('Máximo de 3 arquivos CSV.')
      return
    }

    setError('')
    setFiles((prev) => [...prev, ...csvFiles])
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    const selected: File[] = Array.from(e.target.files)
    validateFiles(selected)
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragActive(false)

    const dropped: File[] = Array.from(e.dataTransfer.files)
    validateFiles(dropped)
  }

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragActive(true)
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragActive(false)
  }

  function removeFile(index: number) {
    const updated = files.filter((_, i) => i !== index)
    setFiles(updated)
    setError('')
  }

  function generateDashboard() {
    router.push('/dashboard')
  }

  return (
    <>
      <Navbar />

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Plataforma TabNet AI
          </h1>

          <p className="text-gray-700 mb-10">
            Envie até 3 arquivos CSV do TabNet para gerar dashboards
            automáticos.
          </p>

          {/* Upload */}

          <div
            onDrop={handleDrop}
            onDragOver={handleDrag}
            onDragLeave={handleDragLeave}
            className={`
              border-2
              border-dashed
              rounded-xl
              p-16
              transition
              ${dragActive ? 'border-yellow-400 bg-yellow-50' : 'border-gray-300'}
            `}
          >
            <p className="text-lg mb-6 text-gray-700">
              Arraste arquivos CSV aqui
            </p>

            <p className="text-gray-500 mb-6">ou</p>

            <label
              className="
              bg-primary
              text-white
              px-6
              py-3
              rounded-lg
              cursor-pointer
              hover:bg-primaryDark
              active:bg-highlight
              transition
              "
            >
              Selecionar arquivos
              <input
                type="file"
                accept=".csv"
                multiple
                onChange={handleFile}
                className="hidden"
              />
            </label>

            {/* Lista arquivos */}

            {files.length > 0 && (
              <div className="mt-8 text-left">
                <p className="font-semibold mb-4 text-gray-700">
                  Arquivos selecionados:
                </p>

                <ul className="space-y-3">
                  {files.map((file, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
                    >
                      <span className="text-green-700">{file.name}</span>

                      <button
                        onClick={() => removeFile(index)}
                        className="text-red-500 font-bold hover:text-red-700"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* erro */}

            {error && <p className="mt-6 text-red-600 font-medium">{error}</p>}
          </div>

          {/* botão gerar dashboard */}

          {files.length > 0 && (
            <div className="mt-10">
              <button
                onClick={generateDashboard}
                className="
                bg-primary
                text-white
                px-8
                py-4
                rounded-lg
                font-semibold
                hover:bg-primaryDark
                active:bg-highlight
                transition
                "
              >
                Gerar Dashboard
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
