import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  author: string
  categories: string[]
  tags: string[]
  excerpt: string
  content: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      title: data.title,
      date: format(new Date(data.date), 'yyyy년 MM월 dd일', { locale: ko }),
      author: data.author || 'Muricture Team',
      categories: data.categories || [],
      tags: data.tags || [],
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      content: contentHtml
    }
  } catch (error) {
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const post = await getPostBySlug(slug)
        return post
      })
  )
  
  return allPosts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })
}

export async function getLatestPosts(count: number): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.slice(0, count)
} 