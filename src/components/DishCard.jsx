import { motion } from 'framer-motion'
import { Plus, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function DishCard({ dish, index = 0 }) {
  const { addItem } = useCart()
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative overflow-hidden">
        <img src={dish.image} alt={dish.name} loading="lazy" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
        {dish.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 text-xs font-semibold text-white shadow">
            {dish.tag}
          </span>
        )}
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-stone-800 shadow">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {dish.rating} ({dish.reviews})
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white">{dish.name}</h3>
          <p className="shrink-0 font-display text-lg font-bold text-orange-600">৳{dish.price}</p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-slate-300">{dish.description}</p>
        <button
          onClick={() => addItem(dish)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 py-2.5 text-sm font-semibold text-white transition hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 dark:bg-white dark:text-stone-900 dark:hover:text-white"
        >
          <Plus className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </motion.article>
  )
}
