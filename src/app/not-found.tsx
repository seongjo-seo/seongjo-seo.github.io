import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다',
  description: '요청하신 페이지가 존재하지 않습니다.'
}

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-content">
          <h1>404</h1>
          <h2>페이지를 찾을 수 없습니다</h2>
          <p>요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
          
          <div className="error-actions">
            <Link href="/" className="btn btn-primary">홈으로 돌아가기</Link>
            <Link href="/contact" className="btn btn-outline">문의하기</Link>
          </div>
          
          <div className="helpful-links">
            <h3>도움이 될 만한 링크</h3>
            <ul>
              <li><Link href="/services">서비스 둘러보기</Link></li>
              <li><Link href="/docs">기술 문서</Link></li>
              <li><Link href="/blog">블로그</Link></li>
              <li><Link href="/faq">자주 묻는 질문</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 