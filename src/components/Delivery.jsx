import { motion } from 'framer-motion'
import { Bike, Clock, MapPin, MessageCircle, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import SectionHeading from './SectionHeading'

const STEPS = [
  { icon: UtensilsCrossed, title: '1. Pick your dishes', desc: 'Browse the menu and add your favourites to the cart.' },
  { icon: MessageCircle, title: '2. Order on WhatsApp', desc: 'Send your order in one tap — or call us directly.' },
  { icon: Bike, title: '3. Hot delivery', desc: 'Our rider brings it hot to your door within 45 minutes.' },
]

export default function Delivery() {
  return (
    <section id="delivery" className="bg-white py-20 dark:bg-slate-900/40 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Food Delivery & Ordering" title="Craving SP at Home? We Deliver Hot" subtitle="Dine-in, takeaway or delivery — order the way that suits you. Delivery is free on orders over ৳1,000 in Gulshan." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl border border-stone-100 bg-cream p-7 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30"><s.icon className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold text-stone-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-7 text-white shadow-xl sm:flex-row lg:p-8">
          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-8">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Delivery: 11 AM – 10:30 PM</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Gulshan · Banani · Baridhara · Niketon</span>
            <span className="flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Free delivery over ৳1,000</span>
          </div>
          <a href="https://wa.me/8801712345678?text=Hello%20SP%20Restaurant!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-900 transition hover:scale-105">
            <MessageCircle className="h-5 w-5 text-emerald-600" /> Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
