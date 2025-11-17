import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#FBBC04]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-[#34A853]/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center pt-8 pb-16">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm ring-1 ring-black/5 px-3 py-1 text-xs font-medium text-gray-700">
            Built in South Africa • For South African SMEs
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            The operating system for your business
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Biz AI is a modern, AI-driven platform that brings your WhatsApp, HR, accounting and quoting into one place — built for the realities of doing business in Mzansi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center rounded-full bg-[#4285F4] px-5 py-3 text-white text-sm font-semibold shadow hover:shadow-md">
              Start your free trial
            </a>
            <a href="#features" className="inline-flex justify-center rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
              Explore features
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="h-2 w-2 rounded-full bg-[#EA4335]" />
            <div className="h-2 w-2 rounded-full bg-[#FBBC04]" />
            <div className="h-2 w-2 rounded-full bg-[#34A853]" />
          </div>
        </div>
        <div className="h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white/40 backdrop-blur">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
