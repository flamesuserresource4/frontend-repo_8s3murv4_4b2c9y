export default function PricingCTA() {
  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Start free. Built for South African SMEs.</h2>
              <p className="text-gray-600 mt-2">Try Biz AI with a 14-day free trial. No card required. Local pricing in ZAR.</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>• Business WhatsApp inbox</li>
                <li>• HR document vault</li>
                <li>• Quotes and invoices</li>
                <li>• Basic accounting</li>
              </ul>
            </div>
            <div className="text-center lg:text-right" id="cta">
              <div className="inline-flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tight">R299</span>
                <span className="text-gray-500 text-sm mb-1">/month per company</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row lg:justify-end gap-3">
                <a href="#" className="inline-flex justify-center rounded-full bg-[#4285F4] px-5 py-3 text-white text-sm font-semibold shadow hover:shadow-md">Start your free trial</a>
                <a href="#" className="inline-flex justify-center rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold hover:bg-gray-50">Book a demo</a>
              </div>
              <p className="text-xs text-gray-500 mt-3">SA support • Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
