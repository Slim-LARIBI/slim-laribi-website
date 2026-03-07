const fs = require('fs')
const path = require('path')

const WP_API = 'http://54.36.31.145/wp-json/wp/v2/posts?per_page=100'

const allowedSlugs = [
  'strategies-encheres-ads-sea',
  'conversion-linker-gtm',
  'pixel-event-tracking-retargeting',
  'pixel-tracking-purchase-event',
  'seo-core-web-vitals',
  'utm-tracking',
  'expressions-regulieres-regex-seo-gsc',
  'codes-http-seo-erreurs-20x-30x-40x-50x',
  'catalogue-pixel-datafeed-xml-opengraph',
  'seo-url-canonique-fragments',
  'configuration-permaliens-wordpress',
  'keyword-efficiency-index-kei-seo',
  'probleme-indexation-seo',
]

const outputDir = path.join(process.cwd(), 'content', 'blog')

function decodeHtmlEntities(str = '') {
  return str
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&#038;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&hellip;/g, '...')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function stripUnwanted(html = '') {
  return html
    // remove styles/scripts
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    // remove hr wp blocks if ugly
    .replace(/<hr[^>]*>/gi, '\n\n---\n\n')
    // remove empty paragraphs
    .replace(/<p>\s*<\/p>/gi, '')
    // remove kadence accordion wrappers but keep inner text
    .replace(/<div class="wp-block-kadence-accordion[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi, '')
    // remove figure wrappers but keep img
    .replace(/<figure[^>]*>/gi, '')
    .replace(/<\/figure>/gi, '')
    // remove classes/style attrs
    .replace(/\sclass="[^"]*"/gi, '')
    .replace(/\sstyle="[^"]*"/gi, '')
    .replace(/\sid="[^"]*"/gi, '')
    // tidy line breaks
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function cleanText(text = '') {
  return decodeHtmlEntities(text)
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/"/g, '\\"')
}

function categoryFromPost(post) {
  if (Array.isArray(post.category_info) && post.category_info.length > 0) {
    return cleanText(post.category_info[0].name)
  }
  if (post.taxonomy_info?.category?.[0]?.label) {
    return cleanText(post.taxonomy_info.category[0].label)
  }
  return 'Marketing'
}

function tagsFromPost(post) {
  if (Array.isArray(post.tag_info) && post.tag_info.length > 0) {
    return post.tag_info.map((t) => cleanText(t.name)).filter(Boolean)
  }
  return []
}

async function main() {
  const res = await fetch(WP_API, {
  headers: {
    Host: 'laribislim.com',
  },
})
  if (!res.ok) {
    throw new Error(`WP API error: ${res.status}`)
  }

  const posts = await res.json()
  const filtered = posts.filter((post) => allowedSlugs.includes(post.slug))

  console.log(`Trouvé ${filtered.length} article(s) correspondant(s).`)

  for (const post of filtered) {
    const slug = post.slug
    const filePath = path.join(outputDir, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
      console.log(`⏭ Fichier absent, ignoré: ${slug}.mdx`)
      continue
    }

    const title = cleanText(post.title?.rendered || slug)
    const excerpt = cleanText(post.excerpt?.rendered || '')
    const category = categoryFromPost(post)
    const tags = tagsFromPost(post)
    const date = (post.date || '').slice(0, 10) || new Date().toISOString().slice(0, 10)
    const coverImage = post.featured_image_src_large?.[0] || '/og-image.jpg'

    const rawContent = decodeHtmlEntities(post.content?.rendered || '')
    const cleanedContent = stripUnwanted(rawContent)

    const mdx = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
category: "${category}"
tags: [${tags.map((tag) => `"${tag.replace(/"/g, '\\"')}"`).join(', ')}]
author: "Slim Laribi"
coverImage: "${coverImage}"
---

${cleanedContent}
`

    fs.writeFileSync(filePath, mdx, 'utf8')
    console.log(`✅ Importé: ${slug}.mdx`)
  }

  console.log('\n🎉 Import terminé.')
}

main().catch((err) => {
  console.error('❌ Erreur:', err.message)
  process.exit(1)
})