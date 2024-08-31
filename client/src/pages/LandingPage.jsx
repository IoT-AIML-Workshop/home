import LeftSidebar from '../components/LeftSidebar'
import Speakers from '../components/Speakers'
import Schedule from '../components/Schedule'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto flex flex-col md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8 px-6">
          <LeftSidebar />
        <div className="w-full md:w-3/4">
          <Speakers />
          <Schedule />
          <About />
        </div>
      </div>
      <Footer />
    </div>
  )
}

