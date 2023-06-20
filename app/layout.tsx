import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next13 Poster Movies',
  description: 'โปรแกรมแสดงโปสเตอร์หนังจาก TMDB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer>
          <h4 className="flex flex-col items-center justify-between p-24">พัฒนาโดย หยิกหยอง</h4>
        </footer>
        </body>
    </html>
  )
}
