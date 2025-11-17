import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import PricingCTA from './components/PricingCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <Benefits />
      <SocialProof />
      <PricingCTA />
      <Footer />
    </div>
  )
}

export default App
