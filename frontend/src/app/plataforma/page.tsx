import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Plataforma() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Plataforma TabNet AI</h1>

          <p className="text-xl opacity-90">
            Transforme dados do DataSUS em dashboards interativos e análises
            inteligentes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow hover:border-yellow-400 border transition">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Upload de Dataset
            </h3>

            <p className="text-gray-600">
              Envie planilhas do TabNet para análise automática.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:border-yellow-400 border transition">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Análise com IA
            </h3>

            <p className="text-gray-600">
              Identificação automática de tendências epidemiológicas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:border-yellow-400 border transition">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Dashboards
            </h3>

            <p className="text-gray-600">
              Visualização interativa de dados de saúde pública.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
