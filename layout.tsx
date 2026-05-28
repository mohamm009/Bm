export const metadata = {
  title: 'BM Business Manager',
  description: 'Professionelles Business-Verwaltungs-System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0, background: '#0A0A0F', color: '#E8EDF5', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
