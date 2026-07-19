import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SITE_URL } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aditya Bharti | Software Developer',
    template: '%s',
  },
  description: 'Computer Science student specializing in AI Systems, Mobile Development, and Blockchain. Open to internships and collaborations.',
  keywords: ['Aditya Bharti', 'Software Developer', 'Flutter', 'AI', 'Blockchain', 'Portfolio'],
  authors: [{ name: 'Aditya Bharti' }],
  openGraph: {
    title: 'Aditya Bharti | Software Developer',
    description: 'Computer Science student specializing in AI Systems, Mobile Development, and Blockchain.',
    type: 'website',
    images: ['/hero.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="page-transition flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
