import './globals.css'
import {
  Noto_Sans as Noto
} from 'next/font/google'

const noto = Noto({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-noto' })

export const metadata = {
  title: 'Olivas Digital',
  description: 'Um desafio da Olivas Digital, feito por Cristofe Albuquerque.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={noto.className}>{children}</body>
    </html>
  )
}
