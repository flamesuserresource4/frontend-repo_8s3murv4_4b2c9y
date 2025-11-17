export default function ProblemSolution() {
  const painPoints = [
    {
      title: 'Too many disconnected tools',
      desc: 'WhatsApp chats, HR files, quotes and accounts scattered across apps makes work slow and messy.'
    },
    {
      title: 'Time-consuming admin',
      desc: 'Chasing documents, reconciling invoices and replying to customers takes hours you don\'t have.'
    },
    {
      title: 'Hard to get visibility',
      desc: 'Without a single source of truth it\'s tough to see cash flow, team status and customer activity.'
    }
  ]

  return (
    <section className="py-14" aria-labelledby="problem-solution">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="problem-solution" className="text-2xl sm:text-3xl font-bold tracking-tight">Run smoother with one platform</h2>
        <p className="text-gray-600 mt-2">SA SMEs face unique challenges. Biz AI brings everything together so you can focus on growth.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((p) => (
            <div key={p.title} className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
