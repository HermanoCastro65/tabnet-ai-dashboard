import Link from 'next/link'

export default function UploadCTA() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Comece a explorar dados de saúde
      </h2>

      <p className="text-gray-600 mb-8">
        Envie uma planilha do TabNet e gere automaticamente dashboards e
        análises com IA.
      </p>

      <Link href="/plataforma">
        <button
          className="bg-primary text-white px-8 py-4 rounded-lg font-semibold
          hover:bg-primaryDark
          active:bg-highlight
          transition"
        >
          Usar Plataforma
        </button>
      </Link>
    </section>
  )
}
