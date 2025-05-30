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
          
          <div className="feature-grid">
            <div className="feature-card">
              <h3>📸 이미지 업로드 & 메타데이터 관리</h3>
              <p>고품질 이미지 업로드와 함께 EXIF 데이터, 위치 정보, 태그 등 풍부한 메타데이터를 자동으로 추출하고 관리합니다.</p>
            </div>
            
            <div className="feature-card">
              <h3>🔗 Instagram URL 단축 서비스</h3>
              <p>긴 Instagram URL을 간단하고 기억하기 쉬운 단축 URL로 변환하여 공유를 더욱 편리하게 만듭니다.</p>
            </div>
            
            <div className="feature-card">
              <h3>💬 커뮤니티 '모먼트'</h3>
              <p>일정과 다이어리를 공유하고, 댓글과 좋아요로 소통하는 활발한 커뮤니티 공간입니다.</p>
            </div>
          </div>

          <h2>시작하기</h2>
          
          <ol>
            <li><a href="https://muricture.com">muricture.com</a>에 접속하여 회원가입</li>
            <li>프로필 설정 및 관심사 선택</li>
            <li>첫 번째 모먼트 업로드</li>
            <li>커뮤니티와 소통 시작!</li>
          </ol>

          <div className="cta-section">
            <a href="https://muricture.com" className="btn btn-primary">지금 시작하기</a>
            {/* <Link href="/docs/muricture-web" className="btn btn-outline">기술 문서 보기</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
} 