import Link from 'next/link'
import { getLatestPosts } from '@/lib/posts'

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3)

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="hero">
        <div className="container">
          <h1>일상을 기록하고, 미래를 계획하세요</h1>
          <p>Muricture와 함께 혁신적인 일정 관리와 일상 기록을 경험하세요</p>
          <div className="hero-buttons">
            <Link href="/services/muricture-web" className="btn btn-white">
              Muricture 웹 시작하기
            </Link>
            <Link href="/services/planaz-app" className="btn btn-outline">
              Planaz 앱 다운로드
            </Link>
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="section">
        <div className="container">
          <h2>우리의 서비스</h2>
          <div className="services-grid">
            <Link href="/services/muricture-web" className="service-card">
              <div className="service-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Muricture 웹</h3>
              <p>이미지 업로드, 메타데이터 관리, Instagram URL 단축, 커뮤니티 '모먼트' 기능으로 일상을 기록하고 공유하세요.</p>
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
      </section>

      {/* 기술 스택 섹션 */}
      <section className="section bg-light">
        <div className="container">
          <h2>검증된 기술 스택</h2>
          <div className="tech-stack">
            <div className="tech-grid">
              <div className="tech-item">
                <i className="fab fa-react"></i>
                <span>Next.js</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-flutter"></i>
                <span>Flutter</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-database"></i>
                <span>Supabase</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-fire"></i>
                <span>Firebase</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-github"></i>
                <span>GitHub Actions</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-cloud"></i>
                <span>Cloud Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 최신 소식 섹션 */}
      <section className="section">
        <div className="container">
          <h2>최신 소식</h2>
          <div className="news-grid">
            {latestPosts.map((post) => (
              <article key={post.slug} className="news-card">
                <div className="news-date">{post.date}</div>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="read-more">
                  자세히 보기 →
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/blog" className="btn btn-primary">모든 글 보기</Link>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="section bg-light">
        <div className="container">
          <div className="cta-box">
            <h2>프로젝트를 시작할 준비가 되셨나요?</h2>
            <p>Muricture의 전문 개발팀이 여러분의 아이디어를 현실로 만들어드립니다.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              지금 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 