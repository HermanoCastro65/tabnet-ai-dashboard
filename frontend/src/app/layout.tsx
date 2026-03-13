import './globals.css'

export const metadata = {
  title: 'TabNet AI Dashboard',
  description: 'Análise inteligente de dados do DataSUS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
