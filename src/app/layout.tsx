import './globals.css'
import { Header } from '../components'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='display-flex justify-content-center'>
          {children}
        </main>
      </body>

    </html>
  )
}
