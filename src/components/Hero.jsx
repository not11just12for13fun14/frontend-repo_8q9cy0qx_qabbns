import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

const gradientText = "bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300 bg-clip-text text-transparent"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl animate-pulse [animation-duration:5s]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-from)_0%,transparent_60%)] from-white/10" />
        <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight ${gradientText}`}
          >
            The Exotic Fashion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-5 text-base sm:text-lg text-white/80"
          >
            Where Gen-Z style meets attitude
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 120 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#featured"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white shadow-lg backdrop-blur-md ring-1 ring-white/20 transition-all hover:bg-white/20 hover:shadow-fuchsia-500/20 hover:-translate-y-0.5"
            >
              <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="font-semibold">Shop Now</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Animated hero text accents */}
        <div className="pointer-events-none absolute inset-x-0 bottom-10 hidden sm:flex justify-center gap-6 text-xs text-white/50">
          <span className="animate-fade-in">Streetwear</span>
          <span className="animate-fade-in [animation-delay:0.2s]">Y2K</span>
          <span className="animate-fade-in [animation-delay:0.4s]">Neon</span>
          <span className="animate-fade-in [animation-delay:0.6s]">Minimal</span>
        </div>
      </div>

      {/* Parallax showcase images */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1520975967395-16ad109b2a0f?auto=format&fit=crop&w=1200&q=80"
          alt="Streetwear jacket"
          className="absolute left-[-4%] top-28 w-36 sm:w-48 rounded-2xl shadow-2xl opacity-70"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
          alt="Denim fit"
          className="absolute right-[-2%] top-16 w-28 sm:w-40 rounded-2xl shadow-2xl opacity-70"
          initial={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1520974722077-978741d4af30?auto=format&fit=crop&w=1200&q=80"
          alt="Sneakers"
          className="absolute left-1/2 top-4 w-32 sm:w-44 -translate-x-1/2 rounded-2xl shadow-2xl opacity-70"
          initial={{ y: 0 }}
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
