import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://samehelzamly.netlify.app'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sameh Elzamly | Full-Stack Developer',
    template: '%s | Sameh Elzamly',
  },
  description:
    'Full-Stack Developer specializing in React.js, Next.js, Node.js, and .NET. Experience delivering production-grade systems for government, military, and startup sectors.',
  keywords: [
    'Sameh Elzamly',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    '.NET Developer',
    'Node.js Developer',
    'Web Developer Egypt',
    'Cairo Developer',
  ],
  authors: [{ name: 'Sameh Elzamly', url: siteUrl }],
  creator: 'Sameh Elzamly',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Sameh Elzamly | Full-Stack Developer',
    description:
      'Full-Stack Developer specializing in React.js, Next.js, Node.js, and .NET. Experience delivering production-grade systems for government, military, and startup sectors.',
    siteName: 'Sameh Elzamly Portfolio',
    images: [
      {
        url: '/images/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Sameh Elzamly - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sameh Elzamly | Full-Stack Developer',
    description:
      'Full-Stack Developer specializing in React.js, Next.js, Node.js, and .NET.',
    images: ['/images/hero-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  themeColor: '#fefcfb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}