export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">TabNet AI Dashboard</h1>

        <p className="text-xl mb-10 opacity-90">
          Transforme planilhas do TabNet / DataSUS em dashboards interativos,
          análises exploratórias e insights gerados por inteligência artificial.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Enviar Dataset
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
            Explorar Dashboard
          </button>
        </div>
      </div>
    </section>
  )
}
