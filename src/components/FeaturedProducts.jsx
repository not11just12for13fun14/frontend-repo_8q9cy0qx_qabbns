import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Neon Edge Hoodie',
    price: '$78',
    image: 'https://images.unsplash.com/photo-1604230729027-8459422f69da?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwRWRnZSUyMEhvb2RpZXxlbnwwfDB8fHwxNzYzMjA5NjY5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Pastel Puffer',
    price: '$92',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    name: 'Y2K Cargo Pants',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1573871788944-789b65b49bd1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxZMkslMjBDYXJnbyUyMFBhbnRzfGVufDB8MHx8fDE3NjMyMDk2NzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Glow Runner Sneakers',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
  }
]

export default function FeaturedProducts() {
  return (
    <section id="featured" className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Featured Products
          </h2>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">View all</a>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group rounded-2xl bg-white/5 backdrop-blur-md p-3 ring-1 ring-white/10 hover:ring-white/30 transition-all hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img src={p.image} alt={p.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{p.name}</p>
                  <p className="text-white/60 text-sm">{p.price}</p>
                </div>
                <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:shadow-cyan-500/30">
                  Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
