const fs = require('fs')
const path = require('path')

const posts = [
  {
    slug: 'strategies-encheres-ads-sea',
    title: 'Stratégies d’enchères Ads SEA',
    category: 'Google Ads',
    tags: ['SEA', 'Google Ads', 'Enchères'],
    excerpt: 'Guide pratique sur les stratégies d’enchères SEA et leur impact sur la performance.',
  },
  {
    slug: 'conversion-linker-gtm',
    title: 'Conversion Linker GTM',
    category: 'Tracking',
    tags: ['GTM', 'Tracking', 'Google Ads'],
    excerpt: 'Comprendre le rôle du Conversion Linker dans Google Tag Manager.',
  },
  {
    slug: 'pixel-event-tracking-retargeting',
    title: 'Pixel Event Tracking Retargeting',
    category: 'Tracking',
    tags: ['Meta Pixel', 'Tracking', 'Retargeting'],
    excerpt: 'Comment structurer le tracking des événements pour améliorer le retargeting.',
  },
  {
    slug: 'pixel-tracking-purchase-event',
    title: 'Pixel Tracking Purchase Event',
    category: 'Tracking',
    tags: ['Meta Pixel', 'Purchase', 'Tracking'],
    excerpt: 'Mettre en place un tracking fiable de l’événement Purchase.',
  },
  {
    slug: 'seo-core-web-vitals',
    title: 'SEO Core Web Vitals',
    category: 'SEO',
    tags: ['SEO', 'Core Web Vitals', 'Performance'],
    excerpt: 'Comprendre les Core Web Vitals et leur impact sur le référencement naturel.',
  },
  {
    slug: 'utm-tracking',
    title: 'UTM Tracking',
    category: 'Analytics',
    tags: ['UTM', 'Analytics', 'Tracking'],
    excerpt: 'Guide complet pour construire des URLs UTM propres et exploitables.',
  },
  {
    slug: 'expressions-regulieres-regex-seo-gsc',
    title: 'Expressions régulières Regex SEO GSC',
    category: 'SEO',
    tags: ['SEO', 'Regex', 'Google Search Console'],
    excerpt: 'Utiliser les expressions régulières dans Google Search Console pour mieux analyser ses requêtes.',
  },
  {
    slug: 'codes-http-seo-erreurs-20x-30x-40x-50x',
    title: 'Codes HTTP SEO : erreurs 20x 30x 40x 50x',
    category: 'SEO',
    tags: ['SEO', 'HTTP', 'Indexation'],
    excerpt: 'Comprendre les codes HTTP et leurs impacts SEO.',
  },
  {
    slug: 'catalogue-pixel-datafeed-xml-opengraph',
    title: 'Catalogue Pixel Datafeed XML OpenGraph',
    category: 'E-commerce',
    tags: ['Catalogue', 'Pixel', 'Datafeed'],
    excerpt: 'Le rôle du datafeed, du pixel et des balises OpenGraph dans un setup e-commerce.',
  },
  {
    slug: 'seo-url-canonique-fragments',
    title: 'SEO URL canonique et fragments',
    category: 'SEO',
    tags: ['SEO', 'Canonical', 'URLs'],
    excerpt: 'Comprendre les URLs canoniques, fragments et duplication de contenu.',
  },
  {
    slug: 'configuration-permaliens-wordpress',
    title: 'Configuration des permaliens WordPress',
    category: 'WordPress',
    tags: ['WordPress', 'SEO', 'Permaliens'],
    excerpt: 'Bien configurer les permaliens WordPress pour un SEO propre.',
  },
  {
    slug: 'keyword-efficiency-index-kei-seo',
    title: 'Keyword Efficiency Index KEI SEO',
    category: 'SEO',
    tags: ['SEO', 'Keywords', 'KEI'],
    excerpt: 'Comprendre le Keyword Efficiency Index pour prioriser ses opportunités SEO.',
  },
  {
    slug: 'probleme-indexation-seo',
    title: 'Problème d’indexation SEO',
    category: 'SEO',
    tags: ['SEO', 'Indexation', 'Google'],
    excerpt: 'Identifier et résoudre les problèmes d’indexation SEO les plus fréquents.',
  },
]

const outputDir = path.join(process.cwd(), 'content', 'blog')

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

const today = new Date().toISOString().slice(0, 10)

posts.forEach((post) => {
  const filePath = path.join(outputDir, `${post.slug}.mdx`)

  if (fs.existsSync(filePath)) {
    console.log(`⏭ Déjà existant: ${post.slug}.mdx`)
    return
  }

  const content = `---
title: "${post.title}"
date: "${today}"
excerpt: "${post.excerpt}"
category: "${post.category}"
tags: [${post.tags.map((tag) => `"${tag}"`).join(', ')}]
author: "Slim Laribi"
coverImage: "/og-image.jpg"
---

# ${post.title}

> TODO: coller ici le contenu de l'article WordPress.

## Introduction

Contenu à importer depuis WordPress.

## Points clés

- Point 1
- Point 2
- Point 3

## Conclusion

Version MDX à finaliser.
`

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`✅ Créé: ${post.slug}.mdx`)
})

console.log('\n🎉 Terminé.')