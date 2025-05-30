'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/" className="logo">
              <Image 
                src="/images/muricture-logo.png" 
                alt="Muricture" 
                width={200} 
                height={50}
                priority
              />
            </Link>
          </div>
          <button 
            className="navbar-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 토글"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-nav">
              <li><Link href="/">홈</Link></li>
              <li className="dropdown">
                <Link href="/services">서비스</Link>
                <ul className="dropdown-menu">
                  <li><Link href="/services/muricture-web">Muricture 웹</Link></li>
                  <li><Link href="/services/planaz-app">Planaz 앱</Link></li>
                  <li><Link href="/services/outsourcing">외주 개발</Link></li>
                </ul>
              </li>
              <li><Link href="/docs">기술 문서</Link></li>
              <li><Link href="/blog">개발 블로그</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact" className="btn-primary">문의하기</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
} 