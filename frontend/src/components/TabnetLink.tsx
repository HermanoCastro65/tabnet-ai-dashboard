import Image from 'next/image'
import tabnetLogo from '../assets/tabnet-logo.png'

export default function TabnetLink() {
  return (
    <div className="mt-16 text-center bg-gray-900 py-10 rounded-xl">
      <p className="text-gray-200 mb-6">
        Ainda não possui os dados? Gere suas planilhas diretamente no TabNet.
      </p>

      <a
        href="https://datasus.saude.gov.br/informacoes-de-saude-tabnet/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition transform hover:scale-105"
      >
        <Image
          src={tabnetLogo}
          alt="Acessar TabNet"
          className="mx-auto h-20 w-auto hover:scale-110 hover:drop-shadow-lg"
          priority
        />
      </a>
    </div>
  )
}
