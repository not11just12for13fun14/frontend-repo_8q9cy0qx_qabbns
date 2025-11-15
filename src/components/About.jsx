export default function About() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">About Us</h2>
            <p className="text-white/80 leading-relaxed">
              The Exotic Fashion is a bold, youth-driven label shaping the pulse of modern culture. We blend streetwear with neon accents, minimal pastel palettes, and premium finish to create drops that feel fresh, fearless, and unapologetically Gen-Z. Designed for creators, trendsetters, and rule-breakers.
            </p>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80" className="rounded-2xl h-40 sm:h-56 w-full object-cover shadow-lg" />
            <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-2xl h-40 sm:h-56 w-full object-cover shadow-lg translate-y-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
