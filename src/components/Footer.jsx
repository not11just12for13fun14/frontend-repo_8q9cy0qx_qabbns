import { Instagram, Twitter, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-white/80">
          <div>
            <h3 className="text-white font-semibold mb-3">The Exotic Fashion</h3>
            <p className="text-sm">Premium Gen-Z apparel with an attitude. Designed for now.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#featured" className="hover:text-white transition-colors">Featured</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lookbook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-3 text-white/70">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><Twitter size={18} /></a>
              <a href="#" aria-label="Youtube" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><Youtube size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Newsletter</h4>
            <form className="flex gap-2">
              <div className="flex-1">
                <input type="email" placeholder="Email address" className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 ring-1 ring-white/10 focus:ring-2 focus:ring-fuchsia-400 outline-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:shadow-cyan-500/30">
                <Mail size={16} /> Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} The Exotic Fashion. All rights reserved.</div>
      </div>
    </footer>
  )
}
