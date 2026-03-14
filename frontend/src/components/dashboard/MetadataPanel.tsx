'use client'

import { metadataLabels } from '@/utils/metadataLabels'

interface Props {
  metadata: Record<string, any>
}

export default function MetadataPanel({ metadata }: Props) {
  if (!metadata) return null

  return (
    <div className="mb-12">
      {/* Header principal */}

      <div className="bg-primary text-white rounded-xl shadow-lg p-8 mb-6">
        <h2 className="text-3xl font-bold mb-2">
          {metadata.title || 'Dataset'}
        </h2>

        <p className="text-blue-100">
          {metadata.description || metadata.metric}
        </p>
      </div>

      {/* Informações */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(metadata).map(([key, value]) => {
          if (key === 'title') return null

          const label =
            metadataLabels[key] ||
            key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

          return (
            <div
              key={key}
              className="
              bg-white
              rounded-lg
              p-4
              shadow
              border
              border-gray-200
              "
            >
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {label}
              </p>

              <p className="text-primaryDark font-semibold mt-1">
                {String(value)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
