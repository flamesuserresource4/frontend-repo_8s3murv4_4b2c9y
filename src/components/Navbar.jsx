import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#4285F4] grid place-items-center text-white font-bold">B</div>
            <span className="text-base font-semibold tracking-tight">Biz AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#benefits" className="hover:text-gray-900">Benefits</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden sm:inline-flex rounded-full bg-[#4285F4] px-4 py-2 text-white text-sm font-medium shadow hover:shadow-md active:scale-[0.99]">Get started</a>
            <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-lg border border-gray-100 p-3 bg-white">
              <a href="#features" className="px-3 py-2 rounded hover:bg-gray-50" onClick={() => setOpen(false)}>Features</a>
              <a href="#benefits" className="px-3 py-2 rounded hover:bg-gray-50" onClick={() => setOpen(false)}>Benefits</a>
              <a href="#pricing" className="px-3 py-2 rounded hover:bg-gray-50" onClick={() => setOpen(false)}>Pricing</a>
              <a href="#contact" className="px-3 py-2 rounded hover:bg-gray-50" onClick={() => setOpen(false)}>Contact</a>
              <a href="#cta" className="px-3 py-2 rounded bg-[#4285F4] text-white text-center" onClick={() => setOpen(false)}>Get started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
