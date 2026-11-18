import { motion } from 'framer-motion'
import { ArrowRight, Clock, Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/10" />
      <div className="pointer-events-none absolute -left-32 top-64 h-80 w-80 rounded-full bg-red-400/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-700 shadow-sm dark:border-orange-500/30 dark:bg-slate-900 dark:text-orange-400">
            <Star className="h-3.5 w-3.5 fill-orange-500 text-orange-500" /> Rated 4.9 by 2,400+ guests
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.08] text-stone-900 dark:text-white sm:text-6xl lg:text-7xl">
            Taste Dhaka&apos;s Finest{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Flavours</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-slate-300">
            From slow-cooked Old Dhaka kacchi and smoky chicken biryani to grilled salmon and
            butter chicken — every dish at SP Restaurant is made fresh, with love, in the heart of Gulshan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#menu" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/30 transition hover:scale-105">
              Order Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full border-2 border-stone-900 px-7 py-3.5 text-sm font-semibold text-stone-900 transition hover:border-orange-500 hover:text-orange-600 dark:border-white dark:text-white dark:hover:border-orange-400 dark:hover:text-orange-400">
              <Play className="h-4 w-4" /> View Menu
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-sm font-bold text-stone-900 dark:text-white">4.9 / 5</span>
              </div>
              <p className="mt-1 text-xs text-stone-500 dark:text-slate-400">2,400+ happy customers</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10"><Clock className="h-4 w-4" /></span>
              <div>
                <p className="font-semibold text-stone-900 dark:text-white">Open Today</p>
                <p className="text-xs text-stone-500 dark:text-slate-400">Sat – Thu: 11 AM – 11 PM</p>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-stone-900 dark:text-white">15+ Years</p>
              <p className="text-xs text-stone-500 dark:text-slate-400">Serving Dhaka since 2010</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-orange-500/20">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              alt="Elegant dining hall at SP Restaurant, Gulshan Dhaka"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur dark:bg-slate-900/90 sm:left-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">Today&apos;s Signature</p>
            <p className="font-display text-lg font-bold text-stone-900 dark:text-white">Beef Kacchi Biryani</p>
            <p className="text-sm font-semibold text-orange-600">৳650 <span className="ml-1 text-xs font-normal text-stone-400 line-through">৳780</span></p>
          </div>
          <div className="absolute -right-2 top-6 rounded-2xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:bg-slate-900/90 sm:-right-4">
            <p className="flex items-center gap-1 text-sm font-bold text-stone-900 dark:text-white">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9 Rating
            </p>
            <p className="text-xs text-stone-500 dark:text-slate-400">2,400+ reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
