import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개발 블로그',
  description: 'Muricture의 개발 이야기와 기술 인사이트를 공유합니다.'
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <div className="blog-header">
        <div className="container">
          <h1>개발 블로그</h1>
          <p>Muricture의 개발 이야기와 기술 인사이트를 공유합니다.</p>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          <div className="blog-grid">
            <div className="blog-posts">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-header">
                    <time>{post.date}</time>
                    {post.categories.length > 0 && (
                      <div className="categories">
                        {post.categories.map((category) => (
                          <span key={category} className="category">
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <h2>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="excerpt">{post.excerpt}</p>
                  
                  {post.tags.length > 0 && (
                    <div className="tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>
                  )}
                  
                  <Link href={`/blog/${post.slug}`} className="read-more">
                    자세히 읽기 →
                  </Link>
                </article>
              ))}
            </div>
            
            <aside className="blog-sidebar">
              <div className="sidebar-section">
                <h3>카테고리</h3>
                <ul className="category-list">
                  <li><Link href="/blog">전체 글</Link></li>
                  <li><Link href="/blog?category=announcement">공지사항</Link></li>
                  <li><Link href="/blog?category=product-update">제품 업데이트</Link></li>
                  <li><Link href="/blog?category=tech">기술 블로그</Link></li>
                  <li><Link href="/blog?category=tutorial">튜토리얼</Link></li>
                </ul>
              </div>
              
              <div className="sidebar-section">
                <h3>인기 태그</h3>
                <div className="tag-cloud">
                  <Link href="/blog?tag=flutter" className="tag-cloud-item">Flutter</Link>
                  <Link href="/blog?tag=nextjs" className="tag-cloud-item">Next.js</Link>
                  <Link href="/blog?tag=muricture-web" className="tag-cloud-item">Muricture Web</Link>
                  <Link href="/blog?tag=planaz" className="tag-cloud-item">Planaz</Link>
                  <Link href="/blog?tag=api" className="tag-cloud-item">API</Link>
                  <Link href="/blog?tag=opensource" className="tag-cloud-item">오픈소스</Link>
                </div>
              </div>
              
              <div className="sidebar-section">
                <h3>뉴스레터 구독</h3>
                <p>최신 업데이트와 기술 인사이트를 이메일로 받아보세요.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="이메일 주소" required />
                  <button type="submit" className="btn btn-primary">구독하기</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
} 