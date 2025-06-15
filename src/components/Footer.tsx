import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Muricture 기업 블로그</h3>
            <p>IP 크리에이터 큐레이션 웹 사이트와 AI 기반 일정 관리 앱 서비스, 외주 개발 서비스를 제공합니다.</p>
            <div className="social-links">
              {/* <a href="https://github.com/muricture" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/muricture" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a> */}
            </div>
          </div>
          <div className="footer-section">
            <h4>서비스</h4>
            <ul>
              <li><Link href="/services/muricture-web">Muricture 웹</Link></li>
              <li><Link href="/services/planaz-app">Planaz 앱</Link></li>
              <li><Link href="/services/outsourcing">외주 개발 서비스</Link></li>
            </ul>
          </div>
          {/* <div className="footer-section"> */}
            {/* <h4>리소스</h4> */}
            {/* <ul> */}
              {/* <li><Link href="/blog">개발 블로그</Link></li> */}
              {/* <li><Link href="/faq">자주 묻는 질문</Link></li> */}
            {/* </ul> */}
          {/* </div> */}
          <div className="footer-section">
            {/* <h4>연락처</h4> */}
            <p>문의 메일<br/>muricture@muricture.com</p>
              
            {/* <p>GitHub: <a href="https://github.com/muricture">@muricture</a></p> */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Muricture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 