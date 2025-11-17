import { MessageCircle, FileCheck2, Calculator, Sparkles } from 'lucide-react'
import { useState } from 'react'

const tabs = [
  {
    key: 'whatsapp',
    label: 'Business WhatsApp',
    color: '#34A853',
    icon: MessageCircle,
    title: 'Centralise customer chats',
    desc: 'All WhatsApp Business messages in one inbox with AI assistance, templates and assignments.'
  },
  {
    key: 'hr',
    label: 'HR Documents',
    color: '#EA4335',
    icon: FileCheck2,
    title: 'Keep HR tidy and compliant',
    desc: 'Store IDs, contracts, leave forms and warnings with reminders for POPIA-friendly compliance.'
  },
  {
    key: 'accounting',
    label: 'Accounting',
    color: '#FBBC04',
    icon: Calculator,
    title: 'Track money without the maths',
    desc: 'Invoices, expenses and reports made simple with local tax settings and bank imports.'
  },
  {
    key: 'quoting',
    label: 'AI Quotes',
    color: '#4285F4',
    icon: Sparkles,
    title: 'Quotes in minutes, not days',
    desc: 'Generate accurate, branded quotes using AI and convert to invoices in one tap.'
  }
]

export default function Features() {
  const [active, setActive] = useState('whatsapp')
  const activeTab = tabs.find(t => t.key === active)

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Everything your team needs — in one place</h2>
        <p className="text-gray-600 mt-2">No more app-hopping. Biz AI connects your daily tools with smart automation.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="flex md:flex-col gap-2 overflow-auto">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-lg border px-3 py-2 text-sm transition ${active === t.key ? 'bg-white border-gray-300 shadow-sm' : 'bg-white/70 hover:bg-white border-gray-200'}`}
                >
                  <t.icon className="h-4 w-4" style={{ color: t.color }} />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                {activeTab && <activeTab.icon className="h-5 w-5" style={{ color: activeTab.color }} />}
                <h3 className="font-semibold">{activeTab?.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">{activeTab?.desc}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {tabs.map((t) => (
                  <div key={t.key} className="rounded-lg border border-gray-100 p-4 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-2">
                      <t.icon className="h-4 w-4" style={{ color: t.color }} />
                      <span className="text-sm font-medium">{t.label}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
