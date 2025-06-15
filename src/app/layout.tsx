import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import '@/styles/globals.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'Muricture 기업 블로그',
    template: 'Muricture'
  },
  description: 'Muricture는 혁신적인 일정 관리와 일상 기록을 위한 솔루션을 제공합니다. Muricture 웹, Planaz 앱, 그리고 전문적인 Flutter/Next.js 외주 개발 서비스를 만나보세요.',
  keywords: ['Muricture', 'Planaz', '일정관리', '캘린더앱', 'Flutter개발', 'Next.js개발', '외주개발'],
  authors: [{ name: 'Muricture Team' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://muricture.github.io',
    siteName: 'Muricture',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muricture'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@muricture',
    creator: '@muricture'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <Header />
        <main className="site-main">
          {children}
        </main>
        <Footer />
        <script src="/js/main.js" defer></script>
      </body>
    </html>
  )
} 