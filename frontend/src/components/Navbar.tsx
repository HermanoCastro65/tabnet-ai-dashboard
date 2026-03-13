import Image from 'next/image'
import logo from '../assets/logo.svg'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo clicável */}

        <Link href="/plataforma" className="flex items-center">
          <Image
            src={logo}
            alt="TabNet AI Dashboard"
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Menu */}

        <div className="space-x-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-yellow-500 transition">
            Início
          </Link>

          <Link href="/plataforma" className="hover:text-yellow-500 transition">
            Plataforma
          </Link>

          <Link href="/sobre" className="hover:text-yellow-500 transition">
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  )
}
