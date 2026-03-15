import './globals.css'
import ReactQueryProvider from '../providers/ReactQueryProvider'

export const metadata = {
  title: 'TabNet AI Dashboard',
  description: 'Análise inteligente de dados do DataSUS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
