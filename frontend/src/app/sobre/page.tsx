import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'

import image1 from '../../assets/image 1.png'
import image2 from '../../assets/image 2.png'

export default function Sobre() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-background animate-fadeIn">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-10 text-primary text-center">Sobre o Projeto</h1>

          <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-center max-w-3xl mx-auto">
            <p>
              O <strong>TabNet AI Dashboard</strong> é uma plataforma desenvolvida para facilitar a
              análise de dados públicos do sistema
              <strong> DataSUS / TabNet</strong>.
            </p>

            <p>
              A aplicação permite que o usuário envie até
              <strong> 3 planilhas CSV geradas pelo TabNet</strong> e automaticamente transforme
              esses dados em
              <strong> tabelas e dashboards interativos</strong>.
            </p>

            <p>
              A plataforma processa os dados e gera visualizações que permitem explorar rapidamente
              indicadores de saúde pública através de
              <strong> tabelas estruturadas e gráficos interativos</strong>.
            </p>

            <p>
              O objetivo do projeto é simplificar o acesso e a análise de dados epidemiológicos,
              tornando informações públicas mais acessíveis para estudantes, pesquisadores e
              profissionais da área da saúde.
            </p>

            <p>
              Projeto desenvolvido no curso de
              <strong> Engenharia de Computação</strong>.
            </p>
          </div>

          {/* CARDS DAS IMAGENS */}

          <div className="mt-20 flex flex-col md:flex-row gap-12 items-start justify-center">
            {/* CARD 1 */}

            <div
              className="
              bg-gradient-to-b
              from-gray-100
              to-gray-300
              rounded-xl
              p-4
              shadow-md
              transition-all
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              hover:ring-2
              hover:ring-highlight/40
              max-w-xl
              "
            >
              <Image
                src={image1}
                alt="Dashboard com tabelas geradas automaticamente"
                className="rounded-lg"
              />

              <p className="text-sm text-gray-700 mt-4 text-center">
                Dashboard gerado automaticamente a partir de planilhas do TabNet.
              </p>
            </div>

            {/* CARD 2 (mais baixo) */}

            <div
              className="
              bg-gradient-to-b
              from-gray-100
              to-gray-300
              rounded-xl
              p-4
              shadow-md
              transition-all
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              hover:ring-2
              hover:ring-highlight/40
              md:mt-20
              max-w-xl
              "
            >
              <Image
                src={image2}
                alt="Gráficos interativos gerados pelo sistema"
                className="rounded-lg"
              />

              <p className="text-sm text-gray-700 mt-4 text-center">
                Visualizações gráficas interativas geradas automaticamente pelo sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
