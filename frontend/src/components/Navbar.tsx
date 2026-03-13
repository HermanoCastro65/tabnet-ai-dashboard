export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">
          TabNet AI Dashboard
        </div>

        <div className="space-x-6 text-gray-600">
          <a className="hover:text-primary cursor-pointer">Início</a>

          <a className="hover:text-primary cursor-pointer">Plataforma</a>

          <a className="hover:text-primary cursor-pointer">Sobre</a>
        </div>
      </div>
    </nav>
  )
}
