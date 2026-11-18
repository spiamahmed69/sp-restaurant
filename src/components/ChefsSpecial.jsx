import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useCart } from '../context/CartContext'
import { DISHES } from '../data/menu'

export default function ChefsSpecial() {
  const { addItem } = useCart()
  const dish = DISHES.find((d) => d.id === 8) // Beef Kacchi Biryani
  return (
    <section id="chef" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}>
          <SectionHeading
            align="left"
            eyebrow="Chef's Special"
            title="From the Kitchen of Chef Rahim Uddin"
            subtitle="Chef Rahim trained in Old Dhaka's legendary kacchi kitchens and has led our kitchen for 12 years. His dum-sealed beef kacchi — slow-cooked for four hours with saffron, mace and his grandmother's spice blend — is the dish Dhaka talks about."
          />
          <blockquote className="mt-6 flex gap-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Quote className="h-6 w-6 shrink-0 fill-orange-500 text-orange-500" />
            <p className="font-display text-lg italic leading-relaxed text-stone-700 dark:text-slate-200">
              &ldquo;A great kacchi cannot be rushed. The rice, the meat, the steam — they must meet at exactly the right moment. That is the whole secret.&rdquo;
            </p>
          </blockquote>
          <div className="mt-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 font-display text-lg font-bold text-white">RU</span>
            <div>
              <p className="font-semibold text-stone-900 dark:text-white">Chef Rahim Uddin</p>
              <p className="text-sm text-stone-500 dark:text-slate-400">Executive Chef · 20+ years experience</p>
            </div>
            <span className="ml-auto flex items-center gap-1 text-sm font-bold text-stone-900 dark:text-white"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }} className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop" alt="Chef Rahim Uddin's signature Beef Kacchi Biryani" className="h-[440px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-5 shadow-xl dark:bg-slate-900 sm:left-8 sm:right-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">Signature Dish</p>
                <p className="font-display text-lg font-bold text-stone-900 dark:text-white">Beef Kacchi Biryani</p>
                <p className="text-sm text-stone-500 dark:text-slate-400">Slow-cooked on dum · Serves 1–2</p>
              </div>
              <p className="font-display text-2xl font-bold text-orange-600">৳650</p>
            </div>
            <button onClick={() => dish && addItem(dish)} className="mt-4 w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]">
              Add Signature Dish to Cart
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
