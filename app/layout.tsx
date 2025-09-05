import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simbiotic - Time to make symbiosis.',
  description: 'We blend strategy, creativity, and technology to spark business growth.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' }
    ]
  },
  openGraph: {
    title: 'Simbiotic - Time to make symbiosis.',
    description: 'We blend strategy, creativity, and technology to spark business growth.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Simbiotic - Time to make symbiosis.'
      }
    ],
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}
