import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import TrendingSlider from './components/TrendingSlider'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(120deg,#0b0f14,40%,#0d0b14)] text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white text-lg">
            <span className="bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">The Exotic</span> Fashion
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white transition" href="#featured">Featured</a>
            <a className="hover:text-white transition" href="#">Collections</a>
            <a className="hover:text-white transition" href="#about">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition">Sign In</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <FeaturedProducts />
        <TrendingSlider />
        <section id="about"><About /></section>
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App
