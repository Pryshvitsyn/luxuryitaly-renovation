import { useState } from 'react'
import { CheckCircle2, ChevronRight, ChevronDown, Globe, Shield, Clock, MessageSquare, Wrench, Home } from 'lucide-react'

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

const faqs = [
  {
    q: 'Do I need to be in Italy during the renovation?',
    a: 'No. We manage the entire renovation process on your behalf. You are kept informed through regular structured updates, photographic documentation and direct access to your project manager — without needing to be present in Italy at any stage.',
  },
  {
    q: 'How do you handle communication across different time zones?',
    a: 'We structure communication to suit each client\'s location and schedule. Updates are provided through agreed channels at agreed intervals, and our team is responsive to clients in Asia-Pacific, the Gulf and other international locations.',
  },
  {
    q: 'What legal support do you provide for property acquisition?',
    a: 'We coordinate trusted notarial and legal advisors but do not provide legal representation ourselves. Our role is to ensure the purchase process is well-managed, that the right professionals are in place and that you remain fully informed at every stage.',
  },
  {
    q: 'Can you help us identify a property as well as renovate it?',
    a: 'Through trusted real-estate partner relationships, we can assist with property identification and pre-acquisition assessment alongside our renovation and restoration services. Many of our international clients begin their relationship with us at the search stage.',
  },
  {
    q: 'Which regions of Italy do you work in?',
    a: 'We work across Italy\'s most sought-after locations — including Tuscany, Umbria, the Amalfi Coast, Lake Como, Rome and Lazio, Puglia, Sardinia and Argentario. We consider other regions for the right project.',
  },
  {
    q: 'What happens after the renovation is complete?',
    a: 'We offer ongoing maintenance and property oversight services to ensure your investment remains in excellent condition. Many of our international clients retain us on a long-term basis after project completion — for seasonal maintenance, property oversight and ongoing care.',
  },
]

const sections = [
  {
    icon: Home,
    heading: 'Buying Property in Italy from Abroad',
    body: 'Acquiring property in Italy as a non-resident involves legal, notarial and documentary processes that differ significantly from those in other countries. We work with international buyers to simplify this process, coordinating trusted legal and notarial advisors and ensuring that nothing critical is overlooked. Our role is not to replace your legal representation — it is to ensure that the process flows smoothly and that you remain fully informed at every stage.',
  },
  {
    icon: Globe,
    heading: 'Evaluating Renovation Potential Before Purchase',
    body: 'Buying a property with renovation in mind requires a different kind of due diligence. Structural condition, planning permissions, heritage restrictions and realistic renovation costs all need to be understood before a purchase decision is finalised. We provide pre-acquisition renovation assessments that give buyers a clear picture of what they are purchasing and what it will realistically take to transform it — protecting you from common and costly acquisition errors.',
  },
  {
    icon: Wrench,
    heading: 'Managing Renovation While Overseas',
    body: 'Once a property is purchased, the renovation process begins — and for international owners, this is where the complexity typically intensifies. We act as the client\'s trusted representative on the ground in Italy, overseeing contractors, managing timelines, coordinating inspections and ensuring that the project is delivered to the standard agreed. Clients receive regular photographic reporting and structured updates throughout, without needing to travel to Italy during active works.',
  },
  {
    icon: Shield,
    heading: 'Legal, Documentation and Local Coordination',
    body: 'Renovation in Italy requires engagement with municipal authorities, licensed architects and geometricians, and specialist local trades. We coordinate this process on behalf of our clients — managing permits, planning approvals and technical documentation so that the project proceeds without unnecessary delays or compliance issues. For international owners unfamiliar with Italian administrative processes, this coordination is particularly valuable.',
  },
  {
    icon: MessageSquare,
    heading: 'White-Glove Communication and Project Oversight',
    body: 'We understand that international clients expect a different quality of communication. Our approach is discreet, responsive and precise. A single point of contact manages the client relationship, supported by structured reporting, clear documentation and an open channel for questions or decisions at any stage of the project. We adapt our communication style and scheduling to suit clients across different time zones and cultural contexts.',
  },
  {
    icon: Clock,
    heading: 'Long-Term Maintenance After Delivery',
    body: 'After renovation is complete, the property requires ongoing expert care. We offer structured maintenance programmes for clients who visit seasonally or who wish to ensure the property remains in excellent condition for personal use, rental or future sale. This long-term maintenance service is particularly valued by owners who are not resident in Italy year-round and who need a reliable, trusted presence managing the property in their absence.',
  },
]

export default function InternationalBuyersPage({ navigateTo, setIsFormOpen, currentHeroIndex, heroImages }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden min-h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-slate-900">
          {heroImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Luxury Italian Property"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="lg:w-2/3">
            <p className="text-sm font-bold tracking-[0.24em] text-brand-blue uppercase mb-5">For International Owners</p>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight mb-8">
              Buying and Renovating Property in Italy — Services for International Owners
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light">
              A discreet, full-service partnership for international buyers who wish to acquire, renovate and maintain exceptional property in Italy — managed with care and precision from first enquiry through to long-term ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2 group"
              >
                Arrange a Private Consultation
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

      {/* Trust bar */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Full acquisition-to-handover support', sub: 'From first property search through to renovation completion and aftercare.' },
              { label: 'A single point of contact', sub: 'One trusted relationship managing the entire process on your behalf.' },
              { label: 'Experienced with overseas ownership', sub: 'Structured for clients who manage their Italian property from abroad.' },
            ].map((item) => (
              <div key={item.label} className="px-4">
                <CheckCircle2 className="w-6 h-6 text-brand-blue mx-auto mb-3" />
                <p className="font-semibold text-slate-900 mb-1">{item.label}</p>
                <p className="text-sm text-slate-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main sections */}
      {sections.map((sec, i) => {
        const Icon = sec.icon
        return (
          <section key={sec.heading} className={`py-16 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-b border-slate-100`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 leading-snug">{sec.heading}</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed pl-[4.25rem]">{sec.body}</p>
            </div>
          </section>
        )
      })}

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Questions we commonly receive from international clients before beginning a project.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA + service links */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Begin with a private conversation.</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We welcome enquiries from international buyers at any stage — whether you are actively searching, have recently acquired a property or simply wish to understand your options before committing to a direction.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2 group w-fit"
              >
                Arrange a Private Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-6">Our Services</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Luxury Renovation', path: '/renovation' },
                  { label: 'Historic Restoration', path: '/historic-restoration' },
                  { label: 'Heritage Services', path: '/heritage' },
                  { label: 'Real Estate', path: '/real-estate' },
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
