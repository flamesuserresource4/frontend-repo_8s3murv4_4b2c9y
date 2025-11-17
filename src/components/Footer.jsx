export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#4285F4] grid place-items-center text-white font-bold">B</div>
              <span className="text-base font-semibold tracking-tight">Biz AI</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Built in South Africa. Helping SMEs run smarter with AI.</p>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>Email: hello@bizai.co.za</li>
              <li>Phone: +27 10 123 4567</li>
              <li>Johannesburg, South Africa</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Biz AI</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span>Proudly South African</span>
        </div>
      </div>
    </footer>
  )
}
