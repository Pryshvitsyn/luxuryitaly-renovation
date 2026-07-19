import { useState, useEffect, useMemo } from 'react'
import { CheckCircle2, ChevronRight, ArrowRight, Star, ExternalLink, ShieldCheck, MessageCircle, Calendar, Home, Building2, Landmark, KeyRound } from 'lucide-react'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import ProjectDetailsModal from './components/ProjectDetailsModal'
import { useLanguage } from './useLanguage'
import ConsultationForm from './components/ConsultationForm'
import { SEO, seoPages } from './seo'

const pageConfigs = {
  '/': {
    seo: seoPages.home,
    serviceKey: null,
  },
  '/renovation': {
    seo: seoPages.renovation,
    serviceKey: 'renovation',
  },
  '/historic-restoration': {
    seo: seoPages.historicRestoration,
    serviceKey: 'historicRestoration',
  },
  '/heritage': {
    seo: seoPages.heritage,
    serviceKey: 'heritage',
  },
  '/real-estate': {
    seo: seoPages.realEstate,
    serviceKey: 'realEstate',
  },
}

const serviceIcons = {
  renovation: Home,
  historicRestoration: Landmark,
  heritage: Building2,
  realEstate: KeyRound,
}

function normalizePath(pathname) {
  if (!pathname || pathname === '') return '/'
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

function App() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))
  const { t, language, setLanguage } = useLanguage()

  const currentPage = pageConfigs[pathname] ?? pageConfigs['/']

  const heroImages = [
    '/images/hero/amalfi.png',
    '/images/hero/spello.png',
    '/images/hero/como.png',
    '/images/hero/argentario.png'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (targetPath) => {
    const nextPath = normalizePath(targetPath)

    if (nextPath === pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const amalfiDetails = [
    '/images/details/amalfi_detail_1.png',
    '/images/details/amalfi_detail_2.png',
    '/images/details/amalfi_detail_3.png',
    '/images/details/amalfi_detail_4.png',
  ]

  const spelloDetails = [
    '/images/details/spello_detail_1.png',
    '/images/details/spello_detail_2.png',
    '/images/details/spello_detail_3.png',
    '/images/details/spello_detail_4.png',
  ]

  const argentarioDetails = [
    '/images/details/Argentario_kitchen.jpg',
    '/images/details/Argentario_master_bedroom.jpg',
    '/images/details/Argentario_master_bathroom.jpg',
    '/images/details/Argentario_livingroom.jpg',
  ]

  const romeDetails = [
    '/images/details/rome_detail_1.png',
    '/images/details/rome_detail_2.png',
    'https://placehold.co/800x800/1e293b/ffffff?text=Tuscan+Terracotta+Loggia',
    'https://placehold.co/800x800/1e293b/ffffff?text=Chef+Grade+Modern+Kitchen',
  ]

  const comoDetails = [
    '/images/details/como_detail_1.png',
    '/images/details/como_detail_2.png',
    '/images/details/como_detail_3.png',
    '/images/details/como_detail_4.png',
  ]

  const tp = t('portfolio.projects')

  const portfolioItems = [
    {
      id: 1,
      location: tp[0].location,
      description: tp[0].description,
      detailsText: tp[0].detailsText,
      carouselImages: amalfiDetails,
      beforeImage: '/images/portfolio/amalfi_before_aligned.png',
      afterImage: '/images/portfolio/amalfi_after.png',
    },
    {
      id: 2,
      location: tp[1].location,
      description: tp[1].description,
      detailsText: tp[1].detailsText,
      carouselImages: spelloDetails,
      beforeImage: '/images/portfolio/spello_before_aligned.png',
      afterImage: '/images/portfolio/spello_after_1771781231456.png',
    },
    {
      id: 3,
      location: tp[2].location,
      description: tp[2].description,
      detailsText: tp[2].detailsText,
      carouselImages: argentarioDetails,
      beforeImage: '/images/portfolio/Argentario_before.png',
      afterImage: '/images/portfolio/Argentario_after.jpg',
    },
    {
      id: 4,
      location: tp[3].location,
      description: tp[3].description,
      detailsText: tp[3].detailsText,
      carouselImages: romeDetails,
      beforeImage: '/images/portfolio/rome_before.png',
      afterImage: '/images/portfolio/rome_after.png',
    },
    {
      id: 5,
      location: tp[4].location,
      description: tp[4].description,
      detailsText: tp[4].detailsText,
      carouselImages: comoDetails,
      beforeImage: '/images/portfolio/como_before.png',
      afterImage: '/images/portfolio/como_after.png',
    }
  ]

  const serviceLandingPages = useMemo(() => ({
    renovation: {
      eyebrow: 'Luxury Renovation in Italy',
      title: 'Elegant renovations for villas, apartments and exceptional Italian estates.',
      intro: 'We manage luxury renovation in Italy with a turnkey approach that protects design intent, budget clarity and construction quality from concept to completion.',
      highlights: [
        'Turnkey renovation planning and project coordination',
        'Interior upgrades, layout improvement and refined finishes',
        'Support for overseas owners and second-home investors',
      ],
    },
    historicRestoration: {
      eyebrow: 'Historic Restoration in Italy',
      title: 'Restoring period homes with respect for architecture, provenance and modern comfort.',
      intro: 'Our historic restoration work balances heritage preservation with discreet modernization, helping remarkable Italian properties regain beauty, function and long-term value.',
      highlights: [
        'Sensitive restoration of period details and original character',
        'Coordination with architects, geometricians and local requirements',
        'Comfort, usability and value enhancement without losing identity',
      ],
    },
    heritage: {
      eyebrow: 'Heritage Property Services',
      title: 'Strategic guidance for heritage properties that deserve careful stewardship.',
      intro: 'For owners of architecturally significant homes and estates, we provide preservation-minded planning, design advisory and a practical path toward elegant contemporary use.',
      highlights: [
        'Preservation strategy for historic and culturally sensitive assets',
        'Design and restoration planning before works begin',
        'Long-term thinking for maintenance, use and presentation',
      ],
    },
    realEstate: {
      eyebrow: 'Luxury Real Estate in Italy',
      title: 'Partner-led property sales with renovation and restoration insight built in.',
      intro: 'Through trusted real-estate relationships, we help identify promising properties and evaluate their renovation, restoration and long-term investment potential in Italy.',
      highlights: [
        'Curated opportunities through trusted partner relationships',
        'Early vision for restructuring, restoration and finish potential',
        'A smoother path from acquisition to transformation',
      ],
    },
  }), [])

  const currentServicePage = currentPage.serviceKey ? serviceLandingPages[currentPage.serviceKey] : null

  const ServiceLinks = () => (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Service Pages</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Explore our dedicated service pages</h3>
          <p className="text-lg text-slate-600">Explore each of our core services in detail. Every page is designed to give you clear, practical information while reflecting the same premium standard you expect from Luxury Italy Renovation</p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { key: 'renovation', path: '/renovation', label: 'Renovation' },
            { key: 'historicRestoration', path: '/historic-restoration', label: 'Historic Restoration' },
            { key: 'heritage', path: '/heritage', label: 'Heritage' },
            { key: 'realEstate', path: '/real-estate', label: 'Real Estate' },
          ].map((item) => {
            const Icon = serviceIcons[item.key]
            return (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className="text-left bg-white p-7 rounded-2xl border border-slate-200 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 group"
              >
                <Icon className="w-10 h-10 text-brand-blue mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.label}</h4>
                <p className="text-slate-600 mb-4">{serviceLandingPages[item.key].intro}</p>
                <span className="inline-flex items-center gap-2 text-brand-blue font-medium">
                  Open page <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )

  const ServicePage = ({ page }) => (
    <main>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden min-h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-slate-900">
          {heroImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Luxury Italian Architecture"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="lg:w-2/3">
            <p className="text-sm font-bold tracking-[0.24em] text-brand-blue uppercase mb-5">{page.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight mb-8">{page.title}</h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsFormOpen(true)} className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2 group">
                {t('nav.consultation')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => navigateTo('/')} className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2">
                Return to homepage
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">A page built for search visibility and premium conversion</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">This destination is designed for the future luxuryitaly.net domain strategy: clear service intent, elegant messaging, and stronger relevance for users searching specifically for renovation, restoration, heritage and real-estate expertise in Italy.</p>
              <div className="space-y-4">
                {page.highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-4 items-start bg-slate-50 border border-slate-100 rounded-2xl p-5">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl">
              <p className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-4">Why this structure works</p>
              <h3 className="text-2xl font-serif mb-6">Safe SEO growth without changing the core brand experience</h3>
              <ul className="space-y-4 text-slate-300 leading-relaxed">
                <li>• Dedicated URL for a focused search topic</li>
                <li>• Unique title, description and canonical targeting luxuryitaly.net</li>
                <li>• Same premium look and feel as the homepage</li>
                <li>• Clear conversion path into consultation and acquisition support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceLinks />
    </main>
  )

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SEO page={currentPage.seo} pathname={pathname} />

      <nav className="fixed w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <button onClick={() => navigateTo('/')} className="flex-shrink-0 flex items-center text-left">
              <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
                Elio<span className="text-brand-blue">Genesis</span>
              </span>
            </button>

            <div className="hidden lg:flex lg:space-x-8">
              <a href="#services" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors">{t('nav.services')}</a>
              <a href="#portfolio" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors">{t('nav.portfolio')}</a>
              <a href="#testimonials" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors">{t('nav.testimonials')}</a>
              <a href="#credentials" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors">{t('nav.credentials')}</a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex gap-2 text-sm font-medium">
                <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'text-brand-blue' : 'text-slate-400 hover:text-slate-600'}`}>EN</button>
                <div className="text-slate-300">|</div>
                <button onClick={() => setLanguage('it')} className={`${language === 'it' ? 'text-brand-blue' : 'text-slate-400 hover:text-slate-600'}`}>IT</button>
                <div className="text-slate-300">|</div>
                <button onClick={() => setLanguage('ru')} className={`${language === 'ru' ? 'text-brand-blue' : 'text-slate-400 hover:text-slate-600'}`}>RU</button>
              </div>

              <a 
                href="https://wa.me/393519363404?text=Hello%20I%20would%20like%20a%20consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-xl flex items-center gap-2 group"
              >
                WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-slate-900 hover:bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-xl flex items-center gap-2 group"
              >
                {t('nav.consultation')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:hidden flex gap-1 text-xs font-bold bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-md">
              <button onClick={() => setLanguage('en')} className={`px-2 py-0.5 rounded transition-colors ${language === 'en' ? 'text-brand-blue bg-blue-50' : 'text-slate-400 hover:text-slate-600'}`}>EN</button>
              <div className="text-slate-300">|</div>
              <button onClick={() => setLanguage('it')} className={`px-2 py-0.5 rounded transition-colors ${language === 'it' ? 'text-brand-blue bg-blue-50' : 'text-slate-400 hover:text-slate-600'}`}>IT</button>
              <div className="text-slate-300">|</div>
              <button onClick={() => setLanguage('ru')} className={`px-2 py-0.5 rounded transition-colors ${language === 'ru' ? 'text-brand-blue bg-blue-50' : 'text-slate-400 hover:text-slate-600'}`}>RU</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed top-[4.5rem] right-4 z-40 flex flex-col gap-2 lg:hidden">
        <a
          href="https://wa.me/393519363404?text=Hello%20I%20would%20like%20a%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-brand-blue hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          title="Schedule Consultation"
        >
          <Calendar className="w-5 h-5" />
        </button>
      </div>

      {isFormOpen && <ConsultationForm onClose={() => setIsFormOpen(false)} />}

      {currentServicePage ? (
        <ServicePage page={currentServicePage} />
      ) : (
        <>
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
            <div className="absolute inset-0 z-0 bg-slate-900">
              {heroImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt="Luxury Italian Architecture"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="lg:w-2/3">
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight mb-8">
                  {t('hero.title1')} <br />
                  <span className="text-brand-blue italic">{t('hero.title2')}</span>
                </h1>
                <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#portfolio" className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2 group">
                    {t('hero.viewPortfolio')}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#services" className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2">
                    {t('hero.ourServices')}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 border-y border-slate-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <span className="text-slate-400 font-medium tracking-wide uppercase text-sm">{t('exclusive.partnership')}</span>
              <div className="flex items-center justify-center w-full md:w-auto">
                <a
                  href="https://www.nestseekers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NestSeekers International website"
                  className="inline-block"
                >
                  <img
                    src="/nestseekers-logo.svg"
                    alt="NestSeekers International"
                    className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto max-w-[95vw] sm:max-w-[80vw] md:max-w-none object-contain shrink-0 mx-auto"
                  />
                </a>
              </div>
              <a href="https://www.facebook.com/kathleen.canape" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:text-brand-blue transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center text-slate-300 font-bold group-hover:border-brand-blue transition-colors">
                  KC
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-200 group-hover:text-brand-blue transition-colors">Kathleen Canape</p>
                  <p className="text-xs text-slate-400">{t('exclusive.advisor')}</p>
                </div>
              </a>
            </div>
          </section>

          <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('services.tag')}</h2>
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">{t('services.title')}</h3>
                <p className="text-lg text-slate-600">{t('services.subtitle')}</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {t('services.items').map((service, index) => (
                  <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CheckCircle2 className="w-10 h-10 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                    <p className="text-slate-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ServiceLinks />

          <section id="portfolio" className="py-24 bg-slate-900 text-white clip-path-diagonal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
              <div className="mb-16 md:flex justify-between items-end">
                <div className="max-w-2xl">
                  <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('portfolio.tag')}</h2>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{t('portfolio.title1')} <br /><span className="italic font-light text-slate-300">{t('portfolio.title2')}</span></h3>
                </div>
                <p className="text-slate-400 max-w-md md:text-right">{t('portfolio.subtitle')}</p>
              </div>

              <div className="mt-12 space-y-12">
                {portfolioItems.map((item) => (
                  <BeforeAfterSlider
                    key={item.id}
                    location={item.location}
                    description={item.description}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    onViewDetails={() => setSelectedProject(item)}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('testimonials.tag')}</h2>
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">{t('testimonials.title')}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {t('testimonials.items').map((testimonial, idx) => {
                  const image = [
                    '/images/people/client_giulia.png',
                    '/images/people/client_marco.png',
                    '/images/people/client_eleanor.png'
                  ][idx]
                  return (
                    <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-brand-beige fill-brand-beige" />)}
                        </div>
                        <p className="text-slate-700 mb-8 italic leading-relaxed">&quot;{testimonial.text}&quot;</p>
                      </div>
                      <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                        {image ? (
                          <img src={image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                        ) : (
                          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl uppercase">{testimonial.name.charAt(0)}</div>
                        )}
                        <div>
                          <h5 className="font-bold text-slate-900 flex items-center gap-2">
                            {testimonial.name}
                            <a href="#" className="text-brand-blue hover:text-brand-blue/80"><ExternalLink className="w-4 h-4" /></a>
                          </h5>
                          <p className="text-sm text-slate-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section id="partners" className="py-24 bg-white border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('partners.tag')}</h2>
                <h3 className="text-3xl md:text-3xl font-serif text-slate-900">{t('partners.title')}</h3>
              </div>
            </div>

            <div className="relative flex overflow-x-hidden group">
              {[false, true].map((isDuplicate) => (
                <div key={isDuplicate ? 'dup' : 'orig'} className={`${isDuplicate ? 'absolute top-0 animate-marquee2' : 'animate-marquee'} whitespace-nowrap flex items-center gap-12 py-4`}>
                  <a href="https://edilemi.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center hover:opacity-100 transition-opacity mx-8">
                    <div className="flex flex-col items-center">
                      <div className="flex items-end">
                        <div style={{ transform: 'translateY(4px)' }}>
                          <svg width="85" height="55" viewBox="0 0 85 55" fill="none" className="shrink-0 overflow-visible">
                            <path d="M37 11 L47 18 L47 55 L37 55 Z" fill="#FFF200" />
                            <path d="M49 14.5 L59 21.5 L59 55 L49 55 Z" fill="#FFF200" />
                            <path d="M61 18 L71 25 L71 55 L61 55 Z" fill="#FFF200" />
                            <path d="M0 25 L35 7 L35 55 L0 55 Z" fill="#D37D4B" />
                            <rect x="8" y="32" width="10" height="10" fill="white" />
                            <rect x="23" y="35" width="8" height="20" fill="white" />
                          </svg>
                        </div>
                        <span className="text-[56px] font-black tracking-tighter ml-2" style={{ color: '#000000', lineHeight: 0.8, fontFamily: '"Arial Black", Impact, sans-serif' }}>EMI</span>
                      </div>
                      <span className="text-[13px] font-bold tracking-[0.08em] uppercase mt-2 w-full text-center" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>Costruzioni Edili</span>
                    </div>
                  </a>

                  {[
                    { name: 'Knauf', color: '#003B7E', url: 'https://www.knauf.com/' },
                    { name: 'Mapei', color: '#004F9F', url: 'https://www.mapei.com/' },
                    { name: 'Kerakoll', color: '#8DC63F', url: 'https://www.kerakoll.com/' },
                    { name: 'Fassa Bortolo', color: '#E30613', url: 'https://www.fassabortolo.com/' },
                    { name: 'Weber', color: '#00A651', url: 'https://www.it.weber/' },
                    { name: 'Vimar', color: '#003366', url: 'https://www.vimar.com/' },
                    { name: 'BTicino', color: '#007DC3', url: 'https://www.bticino.com/' },
                    { name: 'Daikin', color: '#009FE3', url: 'https://www.daikin.com/' },
                    { name: 'Mitsubishi', color: '#E60012', url: 'https://www.mitsubishielectric.com/' },
                    { name: 'Velux', color: '#C8102E', url: 'https://www.velux.com/' },
                    { name: 'Scrigno', color: '#1D1D1B', url: 'https://www.scrigno.com/' },
                    { name: 'Gyproc', color: '#0072CE', url: 'https://www.gyproc.com/' },
                    { name: 'Italcementi', color: '#1E3A5F', url: 'https://www.italcementi.it/' },
                    { name: 'Buzzi Unicem', color: '#004B87', url: 'https://www.buzziunicem.com/' },
                    { name: 'Marazzi', color: '#1A1A1A', url: 'https://www.marazzi.it/' },
                    { name: 'Florim', color: '#2C2C2C', url: 'https://www.florim.com/' },
                    { name: 'Jacuzzi', color: '#C09553', url: 'https://www.jacuzzi.com/' },
                    { name: 'Villeroy & Boch', color: '#003D6A', url: 'https://www.villeroy-boch.com/' },
                    { name: 'Grohe', color: '#005CA9', url: 'https://www.grohe.com/' },
                    { name: 'Geberit', color: '#004990', url: 'https://www.geberit.com/en/' },
                    { name: 'Hansgrohe', color: '#00694E', url: 'https://www.hansgrohe.com/' },
                    { name: 'Fantini', color: '#1A1A1A', url: 'https://www.fantinirubinetti.com/' },
                    { name: 'Gessi', color: '#8B7355', url: 'https://www.gessi.com/' },
                    { name: 'Dornbracht', color: '#2B2B2B', url: 'https://www.dornbracht.com/' },
                    { name: 'Salvatori', color: '#A0927C', url: 'https://www.salvatoriofficial.com/' },
                    { name: 'Antolini', color: '#B8860B', url: 'https://www.antolini.com/' },
                    { name: 'Margraf', color: '#6B4C3B', url: 'https://www.margraf.it/' },
                    { name: 'Boffi', color: '#1C1C1C', url: 'https://www.boffi.com/' },
                    { name: 'Porcelanosa', color: '#1E1E1E', url: 'https://www.porcelanosa.com/' },
                  ].map((brand, idx) => (
                    <a
                      key={isDuplicate ? `dup-${idx}` : idx}
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold font-sans uppercase tracking-widest mx-8 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100"
                      style={{ color: brand.color }}
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section id="credentials" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('credentials.tag')}</h2>
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">{t('credentials.title')}</h3>
                <p className="text-lg text-slate-600">{t('credentials.subtitle')}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-blue/10 transform -rotate-3 rounded-2xl"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-100 h-[400px] flex flex-col justify-center items-center text-center">
                    <ShieldCheck className="w-16 h-16 text-brand-blue mb-4" />
                    <h4 className="text-xl font-bold font-serif mb-2">{t('credentials.docTitle')}</h4>
                    <p className="text-slate-500 max-w-xs mb-6">{t('credentials.docDesc')}</p>
                    <a
                      href="https://www.normattiva.it/atto/caricaDettaglioAtto?atto.dataPubblicazioneGazzetta=2016-11-26&atto.codiceRedazionale=16G00237&atto.articolo.numero=0&atto.articolo.sottoArticolo=1&atto.articolo.sottoArticolo1=10&qId=&tabID=0.49785774990105524&title=lbl.dettaglioAtto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue font-medium hover:underline flex items-center gap-1"
                    >
                      {t('credentials.viewDoc')} <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-8">
                  {[
                    { title: t('credentials.prof1Title'), doc: 'Arch. Lorenzo Ricci', reg: 'Ordine Architetti Roma N. 14592', image: '/images/people/arch_ricci.png' },
                    { title: t('credentials.prof2Title'), doc: 'Geom. Matteo Conti', reg: 'Collegio Geometri Firenze N. 8234', image: null }
                  ].map((prof, idx) => (
                    <div key={idx} className="flex gap-6 items-center bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-20 h-20 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                        {prof.image ? (
                          <img src={prof.image} alt={prof.doc} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">{prof.doc.charAt(0)}</div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-1">{prof.title}</p>
                        <h5 className="text-xl font-bold text-slate-900 mb-1">{prof.doc}</h5>
                        <p className="text-sm text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded inline-block">{prof.reg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
              <button onClick={() => navigateTo('/')} className="text-2xl font-serif font-bold tracking-tight text-white block mb-4 mx-auto">
                Elio<span className="text-brand-blue">Genesis</span>
              </button>
              <p>{t('footer.copyright')}</p>
            </div>
          </footer>
        </>
      )}

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default App
