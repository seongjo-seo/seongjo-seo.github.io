import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muricture 웹',
  description: '일상을 기록하고 공유하는 혁신적인 웹 플랫폼'
}

export default function MurictureWebPage() {
  return (
    <div className="service-page">
      <div className="service-header">
        <div className="container">
          <h1>Muricture 웹</h1>
          <p className="lead">일상을 기록하고 공유하는 혁신적인 웹 플랫폼</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <h2>주요 기능</h2>
         

          <div className="cta-section">
            <a href="https://muricture.com" className="btn btn-primary">지금 시작하기</a>
            {/* <Link href="/docs/muricture-web" className="btn btn-outline">기술 문서 보기</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
} 