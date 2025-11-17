export default function Benefits() {
  const benefits = [
    { title: 'Save hours weekly', desc: 'Automations handle routine tasks so your team can focus on customers.' },
    { title: 'Improve cash flow', desc: 'Send quotes faster, convert to invoices, and follow up automatically.' },
    { title: 'Stay compliant', desc: 'Keep HR docs and processes POPIA-aware with reminders and audit trails.' },
    { title: 'Designed for SA', desc: 'Local tax settings, SA English, ZAR by default and support that understands your context.' },
  ]

  return (
    <section id="benefits" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Real outcomes that matter</h2>
        <p className="text-gray-600 mt-2">Built for owner-led teams who need to move quickly and stay organised.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
