import './globals.css'
import type { Metadata } from 'next'
import { Poppins} from 'next/font/google'

const inter = Poppins({  weight:["400", "500", "600", "700", "800"],subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ivgam | Artyom Galay',
  description: "An Official Artyom's Portfolio",
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
