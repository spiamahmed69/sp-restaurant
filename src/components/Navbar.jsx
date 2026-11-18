import { useEffect, useState } from 'react'
import { Menu, Moon, ShoppingBag, Sun, UtensilsCrossed, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Offers', href: '#offers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reserve', href: '#reserve' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { count, setIsOpen } = useCart()
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('sp-restaurant-theme') === 'dark'
    } catch {
      return false
    }
  })
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('sp-restaurant-theme', dark ? 'dark' : 'light')
    } catch {
      // ignore
    }
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? 'bg-white/90 shadow-lg backdrop-blur dark:bg-slate-950/90'
          : 'bg-white/70 backdrop-blur dark:bg-slate-950/70'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold text-stone-900 dark:text-white sm:text-2xl">
            SP <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Restaurant</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-stone-600 transition hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-600 transition hover:border-orange-500 hover:text-orange-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-orange-400"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 transition hover:scale-105"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-bold text-white ring-2 ring-white dark:ring-slate-950">
                {count}
              </span>
            )}
          </button>
          <a href="#reserve" className="ml-1 hidden rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:scale-105 md:block">
            Reserve Table
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-700 dark:border-slate-700 dark:text-slate-200 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-stone-100 bg-white px-4 pb-5 pt-3 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {l.label}
              </a>
            ))}
            <a href="#reserve" onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-center text-sm font-semibold text-white">
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
