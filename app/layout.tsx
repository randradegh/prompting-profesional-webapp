import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://promptingprofesional.com'),
  title: 'Prompting Profesional: Del Texto al Control Preciso de la IA',
  description: 'Domina las técnicas más avanzadas para obtener exactamente lo que deseas de la inteligencia artificial. Aprende prompting profesional con frameworks como Chain of Thought, Few-Shot Learning y más.',
  keywords: 'prompting, inteligencia artificial, IA, ChatGPT, Claude, Gemini, prompt engineering, curso online',
  authors: [{ name: 'Instructor del Curso' }],
  openGraph: {
    title: 'Prompting Profesional: Del Texto al Control Preciso de la IA',
    description: 'Domina las técnicas más avanzadas para obtener exactamente lo que deseas de la inteligencia artificial.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://promptingprofesional.com',
    siteName: 'Prompting Profesional',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompting Profesional: Del Texto al Control Preciso de la IA',
    description: 'Domina las técnicas más avanzadas para obtener exactamente lo que deseas de la inteligencia artificial.',
    creator: '@promptingpro',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
