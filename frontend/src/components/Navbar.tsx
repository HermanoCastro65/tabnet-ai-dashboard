import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}

        <div className="flex items-center">
          <Image
            src={logo}
            alt="TabNet AI Dashboard"
            className="h-14 w-auto"
            priority
          />
        </div>

        {/* Menu */}

        <div className="space-x-8 text-gray-600 font-medium">
          <a className="hover:text-primary cursor-pointer">Início</a>

          <a className="hover:text-primary cursor-pointer">Plataforma</a>

          <a className="hover:text-primary cursor-pointer">Sobre</a>
        </div>
      </div>
    </nav>
  )
}
