import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { readingTime } from './utils'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  tags: string[]
  readingTime: number
  content: string
  author: string
  coverImage?: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug,
      title: data.title ?? '',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      category: data.category ?? 'Marketing',
      tags: data.tags ?? [],
      readingTime: readingTime(content),
      content,
      author: data.author ?? 'Slim Laribi',
      coverImage: data.coverImage,
    } satisfies BlogPost
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    category: data.category ?? 'Marketing',
    tags: data.tags ?? [],
    readingTime: readingTime(content),
    content,
    author: data.author ?? 'Slim Laribi',
    coverImage: data.coverImage,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}
