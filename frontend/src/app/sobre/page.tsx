import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Sobre() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-background animate-fadeIn">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Sobre o Projeto
          </h1>

          <p className="text-gray-700 mb-6">
            O TabNet AI Dashboard é uma plataforma desenvolvida para facilitar a
            análise de dados públicos do sistema DataSUS.
          </p>

          <p className="text-gray-700 mb-6">
            O objetivo é transformar planilhas complexas em dashboards
            interativos e análises automatizadas com inteligência artificial.
          </p>

          <p className="text-gray-700">
            Projeto desenvolvido no curso de Engenharia de Computação.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
