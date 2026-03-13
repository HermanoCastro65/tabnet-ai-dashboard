import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">Dashboard</h1>

          <p className="text-gray-700">
            O dashboard será gerado automaticamente após o processamento dos
            dados pelo backend Python.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
