import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'The fits go crazy! The quality and vibe are unmatched.',
    name: 'Ava G.',
    title: 'Content Creator'
  },
  {
    quote: 'Finally a brand that gets the Gen-Z aesthetic right.',
    name: 'Noah R.',
    title: 'Street Photographer'
  },
  {
    quote: 'Minimal, neon, premium — I’m obsessed.',
    name: 'Mia T.',
    title: 'Designer'
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-8">What people say</h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl bg-white/5 backdrop-blur-md p-6 ring-1 ring-white/10 hover:ring-white/30 transition-all"
            >
              <p className="text-white/90">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/60">{t.name} — {t.title}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
