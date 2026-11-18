import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CATEGORIES, DISHES } from '../data/menu'
import DishCard from './DishCard'
import SectionHeading from './SectionHeading'

export default function MenuSection() {
  const [active, setActive] = useState('All')
  const filtered = useMemo(
    () => (active === 'All' ? DISHES : DISHES.filter((d) => d.category === active)),
    [active],
  )

  return (
    <section id="menu" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Menu"
          title="Explore the Full Menu"
          subtitle="Fifteen dishes across six categories — Bangladeshi classics and international favourites, all halal and made fresh."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === cat
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30'
                  : 'border border-stone-200 bg-white text-stone-600 hover:border-orange-400 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-75">
                {cat === 'All' ? DISHES.length : DISHES.filter((d) => d.category === cat).length}
              </span>
            </button>
          ))}
        </div>
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((dish, i) => (
              <motion.div key={dish.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}>
                <DishCard dish={dish} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-8 text-center text-sm text-stone-500 dark:text-slate-400">
          Showing {filtered.length} of {DISHES.length} dishes · Prices include VAT · Delivery available across Gulshan, Banani & Baridhara
        </p>
      </div>
    </section>
  )
}
