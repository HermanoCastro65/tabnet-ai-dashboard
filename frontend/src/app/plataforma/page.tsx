import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Plataforma() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Plataforma TabNet AI
          </h1>

          <p className="text-gray-700 mb-10">
            Envie um dataset do TabNet para gerar dashboards automáticos e
            análises inteligentes.
          </p>

          <button
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold
            hover:bg-primaryDark
            active:bg-highlight
            transition"
          >
            Enviar Dataset
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}
