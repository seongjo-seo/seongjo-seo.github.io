# Muricture 기업 블로그

Muricture의 공식 기업 블로그 저장소입니다. Next.js와 GitHub Pages를 사용하여 구축되었습니다.

## 🚀 주요 기능

- **서비스 소개**: Muricture 웹, Planaz 앱, 외주 개발 서비스
- **기술 문서**: API 가이드, 아키텍처 문서, SDK 가이드
- **개발 블로그**: 기술 인사이트와 업데이트 공유
- **FAQ & 문의**: 자주 묻는 질문과 문의 양식

## 🛠 기술 스택

- **프레임워크**: Next.js 14.1.0
- **언어**: TypeScript
- **스타일링**: SCSS, 반응형 디자인
- **호스팅**: GitHub Pages
- **CI/CD**: GitHub Actions
- **SEO**: Next.js 내장 SEO 기능

## 📁 프로젝트 구조

```
.
├── src/
│   ├── app/              # Next.js App Router 페이지
│   ├── components/       # React 컴포넌트
│   ├── lib/             # 유틸리티 함수
│   ├── styles/          # SCSS 스타일
│   └── types/           # TypeScript 타입 정의
├── content/
│   ├── posts/           # 블로그 포스트 (Markdown)
│   └── services/        # 서비스 페이지 콘텐츠
├── public/              # 정적 파일
├── next.config.js       # Next.js 설정
└── package.json         # 프로젝트 의존성
```

## 🚀 로컬 개발

### 필요 사항

- Node.js 18.0+
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:3000 접속
```

### 빌드 및 정적 Export

```bash
# 프로덕션 빌드 및 정적 파일 생성
npm run export

# out/ 디렉토리에 정적 파일 생성됨
```

## 📝 콘텐츠 추가

### 블로그 포스트 추가

`content/posts` 디렉토리에 `post-slug.md` 형식으로 파일 생성:

```markdown
---
title: "포스트 제목"
date: 20nn-nn-nn
author: "작성자"
categories: [카테고리1, 카테고리2]
tags: [태그1, 태그2]
excerpt: "포스트 요약"
---

포스트 내용...
```

### 서비스 페이지 추가

`content/services` 디렉토리에 마크다운 파일 생성하고, `src/app/services/[slug]/page.tsx`에서 라우팅 처리

## 🚀 배포

main 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드하고 배포합니다.

```bash
git add .
git commit -m "Update content"
git push origin main
```

### GitHub Pages 설정

1. 저장소 Settings > Pages
2. Source: Deploy from a branch
3. Branch: gh-pages (GitHub Actions가 자동 생성)

## 📧 문의

- 일반 문의: muricture@muricture.com
- 기술 지원: dev@muricture.com
- GitHub: [@muricture](https://github.com/muricture)

## 📄 라이선스

© 2025 Muricture. All rights reserved. 