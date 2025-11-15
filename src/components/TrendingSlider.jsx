import { useEffect, useRef } from 'react'

const items = [
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1520974722077-978741d4af30?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1520975967395-16ad109b2a0f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1514861451418-85cc7c837bfa?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1607346256330-dee7af15f7d5?auto=format&fit=crop&w=1200&q=80',
]

export default function TrendingSlider() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animation
    const speed = 40 // px per second

    const step = () => {
      track.scrollLeft += 0.5
      animation = requestAnimationFrame(step)
    }
    animation = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Trending Collection
          </h2>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto whitespace-nowrap px-4 sm:px-6 lg:px-8"
      >
        <div className="inline-flex gap-4 sm:gap-6">
          {items.concat(items).map((src, i) => (
            <div
              key={i}
              className="group relative h-44 sm:h-56 w-64 sm:w-80 flex-none overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md"
            >
              <img
                src={src}
                alt="trend"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
