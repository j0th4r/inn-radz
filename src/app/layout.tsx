import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const miracle = localFont({
  src: '../../public/fonts/miracle.otf',
  variable: '--font-miracle',
  weight: '400',
})

const helveticaNeue = localFont({
  src: '../../public/fonts/helvetica-neue.otf',
  variable: '--font-helvetica-neue',
  weight: '100 700',
})

export const metadata: Metadata = {
  title: "Inn Rad'z - Luxury Hotel & Apartments",
  description:
    "Experience luxury and comfort at Inn Rad'z, located in Gaisano, Butuan City. Premium rooms and apartments with exceptional service since 2016.",
  keywords: 'hotel, luxury, Butuan City, accommodation, apartments, rooms',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${miracle.variable} ${helveticaNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
