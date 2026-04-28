import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './styles.css'

export const metadata = {
  description: 'Product design portfolio showcasing innovative 3D printed designs.',
  title: 'Luke Rathunde | Product Design',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}