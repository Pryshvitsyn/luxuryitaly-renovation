import { useState } from 'react'
import { CheckCircle2, ChevronRight, ChevronDown, MapPin, Users, Wrench, Star } from 'lucide-react'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center text-left px-6 py-5 bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2 bg-slate-50 text-slate-600 leading-relaxed border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  )
}

export default function RichServicePage({ content, navigateTo, setIsFormOpen, currentHeroIndex, heroImages }) {
  return (
    <main>
      {/* Hero */}
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
            <p className="text-sm font-bold tracking-[0.24em] text-brand-blue uppercase mb-5">{content.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight mb-8">{content.title}</h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light">{content.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2 group"
              >
                {content.cta}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateTo('/')}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2"
              >
                Return to homepage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {content.highlights.map((h) => (
              <div key={h} className="flex gap-4 items-start bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <CheckCircle2 className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 font-medium">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for (renovation only) */}
      {content.whoSection && (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Users className="w-8 h-8 text-brand-blue mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900">{content.whoSection.heading}</h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {content.whoSection.items.map((item) => (
                <div key={item.title} className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What we handle (renovation only) */}
      {content.whatSection && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr,1fr] gap-16 items-center">
              <div>
                <Wrench className="w-8 h-8 text-brand-blue mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8">{content.whatSection.heading}</h2>
                <ul className="space-y-4">
                  {content.whatSection.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {content.whySection && (
                <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
                  <p className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-4">{content.whySection.heading}</p>
                  <ul className="space-y-4 text-slate-300 leading-relaxed">
                    {content.whySection.items.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <Star className="w-4 h-4 text-brand-blue mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Generic narrative sections (historic-restoration, heritage, real-estate) */}
      {content.sections && content.sections.map((sec, i) => (
        <section key={sec.heading} className={`py-16 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50 border-y border-slate-100'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6">{sec.heading}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{sec.body}</p>
          </div>
        </section>
      ))}

      {/* Locations (renovation only) */}
      {content.locations && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <MapPin className="w-7 h-7 text-brand-blue mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-serif text-slate-900">{content.locations.heading}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {content.locations.list.map((loc) => (
                <span key={loc} className="bg-white border border-slate-200 text-slate-700 font-medium px-5 py-2 rounded-full text-sm">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Answers to questions our clients commonly raise before beginning a project.</p>
          </div>
          <div className="space-y-3">
            {content.faq.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Internal links */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Ready to discuss your project?</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We welcome enquiries from private owners, international buyers and anyone who has a property in Italy they would like to transform thoughtfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2 group"
                >
                  {content.cta}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigateTo('/international-buyers')}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
                >
                  {content.ctaIntl}
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-6">Explore Our Services</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Luxury Renovation', path: '/renovation' },
                  { label: 'Historic Restoration', path: '/historic-restoration' },
                  { label: 'Heritage Services', path: '/heritage' },
                  { label: 'Real Estate', path: '/real-estate' },
                  { label: 'International Buyers', path: '/international-buyers' },
                ].map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigateTo(link.path)}
                    className="text-left text-slate-300 hover:text-brand-blue transition-colors flex items-center gap-2 group py-2"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span className="text-sm">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
