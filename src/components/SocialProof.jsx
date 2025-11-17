export default function SocialProof() {
  const testimonials = [
    {
      name: 'Lebo, Owner at Mzansi Logistics',
      quote: 'We moved quoting and WhatsApp into Biz AI and cut response times by half. The team finally has one place to work.'
    },
    {
      name: 'Aisha, Director at Cape Homes',
      quote: 'HR files used to be chaos. Now reminders and secure storage keep us compliant without stress.'
    },
    {
      name: 'Pieter, GM at KZN Supplies',
      quote: 'Cash flow improved because quotes go out faster and invoices don\'t slip through.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Trusted by South African businesses</h2>
        <p className="text-gray-600 mt-2">What local owners and managers are saying.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl border border-gray-200 bg-white p-5">
              <blockquote className="text-sm text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-gray-500">{t.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-gray-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">POPIA-aware</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">Bank-grade encryption</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">Hosted in Africa</span>
        </div>
      </div>
    </section>
  )
}
