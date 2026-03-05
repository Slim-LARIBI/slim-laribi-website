import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'
import { getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Marketing Digital, Tracking & Data',
  description:
    'Articles sur le tracking server-side, GA4, Performance Max, CRM et l\'automatisation marketing. Pratique, précis, orienté résultats.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">Blog</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Insights, méthodes,{' '}
              <span className="text-gradient-brand">pas de bullshit.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary max-w-xl mx-auto">
              Des articles pratiques sur le tracking, la performance ads, le CRM et l'automatisation. Orientés opérationnel, pas théorique.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Posts */}
      <Section py="xl">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20 text-brand-text-muted">
              <p>Aucun article pour l'instant. Revenez bientôt.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.07}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="glass rounded-2xl p-6 border border-brand-border h-full transition-all duration-300 group-hover:border-brand-border-strong group-hover:shadow-glow-sm group-hover:-translate-y-1 flex flex-col">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="accent" size="sm">{post.category}</Badge>
                      </div>

                      {/* Title */}
                      <h2 className="font-display font-bold text-brand-text-primary text-lg mb-2 leading-tight group-hover:text-white transition-colors flex-1">
                        {post.title}
                      </h2>

                      <p className="text-sm text-brand-text-secondary line-clamp-3 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded-md text-2xs font-medium bg-white/5 text-brand-text-muted border border-white/8">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-brand-border mt-auto">
                        <div className="flex items-center gap-3 text-xs text-brand-text-muted">
                          <span>{formatDate(post.date)}</span>
                          <span>·</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readingTime} min</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-brand-accent group-hover:translate-x-0.5 transition-transform duration-200" />
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
