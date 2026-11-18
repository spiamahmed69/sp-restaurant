import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter, UtensilsCrossed, Youtube } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Special Offers', href: '#offers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reserve a Table', href: '#reserve' },
]

const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://www.twitter.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white"><UtensilsCrossed className="h-5 w-5" /></span>
            <span className="font-display text-xl font-bold text-white">SP <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Restaurant</span></span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Fine Bangladeshi & international dining in the heart of Gulshan, Dhaka. Fresh ingredients, master chefs, and a table that always feels like home — since 2010.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-orange-500 hover:text-white">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-slate-400 transition hover:text-orange-400">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-white">Opening Hours</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange-500" /> Sat – Thu: 11 AM – 11 PM</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange-500" /> Fri: 2 PM – 11 PM</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange-500" /> Delivery: 11 AM – 10:30 PM</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" /> House 12, Road 5, Gulshan-1, Dhaka 1212, Bangladesh</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-orange-500" /><a href="tel:+8801712345678" className="hover:text-orange-400">+880 1712-345678</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-orange-500" /><a href="mailto:hello@sprestaurant.com" className="hover:text-orange-400">hello@sprestaurant.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} SP Restaurant, Dhaka. All rights reserved.</p>
          <p>Made with care in Gulshan, Dhaka</p>
        </div>
      </div>
    </footer>
  )
}
