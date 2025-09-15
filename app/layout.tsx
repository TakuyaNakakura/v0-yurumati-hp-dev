import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ゆるまち｜まちなか文化祭 - 地域コミュニティの文化イベント',
  description: 'ゆるまちは地域の皆さんが気軽に参加できるまちなか文化祭です。音楽、グルメ、アート、ワークショップなど多彩なコンテンツで地域コミュニティを盛り上げます。',
  keywords: ['ゆるまち', 'まちなか文化祭', '地域イベント', '文化祭', 'コミュニティ', 'イベント', '音楽', 'グルメ', 'アート'],
  authors: [{ name: 'ゆるまち実行委員会' }],
  creator: 'ゆるまち実行委員会',
  publisher: 'ゆるまち実行委員会',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://yurumachi.vercel.app/',
    title: 'ゆるまち｜まちなか文化祭',
    description: 'ゆるまちは地域の皆さんが気軽に参加できるまちなか文化祭です。音楽、グルメ、アート、ワークショップなど多彩なコンテンツで地域コミュニティを盛り上げます。',
    siteName: 'ゆるまち',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ゆるまち - まちなか文化祭',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ゆるまち｜まちなか文化祭',
    description: 'ゆるまちは地域の皆さんが気軽に参加できるまちなか文化祭です。',
  },
  alternates: {
    canonical: 'https://yurumachi.vercel.app/',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'ゆるまち - まちナかぶんかさい',
    description: 'ゆるまちは地域の皆さんが気軽に参加できるまちなか文化祭です。音楽、グルメ、アート、ワークショップなど多彩なコンテンツで地域コミュニティを盛り上げます。',
    startDate: '2025-09-27', // 実際の開催日に更新してください
    endDate: '2025-09-27',   // 実際の開催日に更新してください
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: '長岡市',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '長岡市',
        addressRegion: '新潟県',
        addressCountry: 'JP'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'ゆるまち実行委員会',
      url: 'https://yurumachi.vercel.app'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock'
    },
    url: 'https://yurumachi.vercel.app'
  }

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
