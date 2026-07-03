import { useEffect } from 'react'

const DEFAULT_OG_IMAGE = 'https://luxuryitaly.net/favicon.svg'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let element = document.head.querySelector(`#${id}`)

  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.id = id
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

export const seoPages = {
  home: {
    path: '/',
    title: 'Luxury Renovation & Restoration in Italy | Elio Genesis',
    description:
      'Elio Genesis delivers luxury renovation, historic restoration and heritage property transformation in Italy, with trusted real-estate partners for exceptional homes and estates.',
    keywords:
      'luxury renovation Italy, historic restoration Italy, heritage property Italy, Italian villa renovation, luxury real estate Italy',
  },
  renovation: {
    path: '/renovation',
    title: 'Luxury Renovation in Italy | Villas, Apartments & Estates',
    description:
      'Luxury renovation in Italy for villas, apartments and private estates, with design coordination, premium finishes and elegant project delivery.',
    keywords:
      'luxury renovation Italy, villa renovation Italy, apartment renovation Italy, estate renovation Italy',
  },
  historicRestoration: {
    path: '/historic-restoration',
    title: 'Historic Restoration in Italy | Period Homes & Villas',
    description:
      'Historic restoration in Italy for period homes, villas and landmark properties, preserving architectural character while enhancing comfort and long-term value.',
    keywords:
      'historic restoration Italy, Italian villa restoration, period home restoration Italy, heritage restoration Italy',
  },
  heritage: {
    path: '/heritage',
    title: 'Heritage Property Services in Italy | Preservation & Advisory',
    description:
      'Heritage property services in Italy with preservation strategy, restoration planning and design advisory for distinctive historic homes and estates.',
    keywords:
      'heritage property Italy, preservation Italy, restoration planning Italy, historic home advisory Italy',
  },
  realEstate: {
    path: '/real-estate',
    title: 'Luxury Real Estate in Italy | Partner Property Sales',
    description:
      'Luxury real estate in Italy through trusted partners, featuring curated property sales and expert insight on renovation, restoration and investment potential.',
    keywords:
      'luxury real estate Italy, Italian property sales, villas for sale Italy, prestige real estate Italy',
  },
  internationalBuyers: {
    path: '/international-buyers',
    title: 'Buying & Renovating Property in Italy | Services for International Owners',
    description:
      'Full-service support for international buyers acquiring, renovating and maintaining luxury property in Italy — from acquisition and documentation to renovation oversight and long-term care.',
    keywords:
      'buying property Italy international, renovating property Italy overseas, luxury property Italy foreign buyers, villa renovation Italy international owners, property purchase Italy abroad',
  },
}

export function SEO({ page, pathname }) {
  useEffect(() => {
    const canonicalUrl = `https://luxuryitaly.net${pathname}`

    document.title = page.title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: page.description,
    })

    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: page.keywords,
    })

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    })

    upsertLink('canonical', canonicalUrl)

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })

    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Elio Genesis',
    })

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: page.title,
    })

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: page.description,
    })

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })

    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: DEFAULT_OG_IMAGE,
    })

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: page.title,
    })

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: page.description,
    })

    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: DEFAULT_OG_IMAGE,
    })

    upsertJsonLd('service-schema', {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Elio Genesis',
      url: canonicalUrl,
      image: DEFAULT_OG_IMAGE,
      description: page.description,
      areaServed: 'Italy',
      brand: 'Elio Genesis',
      serviceType: page.title,
    })

    upsertJsonLd('organization-schema', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Elio Genesis',
      url: 'https://luxuryitaly.net/',
      logo: 'https://luxuryitaly.net/favicon.svg',
      sameAs: [
        'https://www.facebook.com/kathleen.canape',
        'https://www.nestseekers.com/',
      ],
    })
  }, [page, pathname])

  return null
}
