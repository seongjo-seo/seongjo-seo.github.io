import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '서비스',
  description: 'Muricture의 혁신적인 서비스들을 만나보세요.'
}

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="container">
        <h1>Muricture의 서비스</h1>
        <div className="services-grid">
          <Link href="/services/muricture-web" className="service-card">
            <div className="service-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3>Muricture 웹</h3>
            <p>이미지 업로드, 메타데이터 관리, Instagram URL 단축, 큐레이션, 이벤트 채널, 커뮤니티 '모먼트' 기능으로 일상을 기록하고 공유하세요.</p>
          </Link>
          
          <Link href="/services/planaz-app" className="service-card">
            <div className="service-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>Planaz 앱</h3>
            <p>최적화된 캘린더 UI/UX, 스티커와 테마 커스터마이징, Tiki-Taka 일정 공유 기능으로 일정을 효율적으로 관리하세요.</p>
          </Link>
          
          <Link href="/services/outsourcing" className="service-card">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>외주 개발 서비스</h3>
            <p>Flutter와 Next.js 전문 개발팀이 여러분의 아이디어를 현실로 만들어드립니다. GitHub 협업과 지속적인 유지보수를 제공합니다.</p>
          </Link>
        </div>
      </div>
    </div>
  )
} 