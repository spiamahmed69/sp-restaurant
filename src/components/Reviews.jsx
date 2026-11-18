import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'

const REVIEWS = [
  { name: 'Tanvir Ahmed', role: 'Regular since 2019 · Gulshan', rating: 5, text: 'The beef kacchi here is the closest thing to Old Dhaka you will find in Gulshan. The meat falls apart, the rice is fragrant, and the staff remember my usual order. My family eats here every Friday.' },
  { name: 'Nusrat Jahan', role: 'Food blogger · Dhaka', rating: 5, text: 'I have reviewed over 60 restaurants in Dhaka and SP Restaurant is in my top three. The butter chicken is silky, the naan is fresh from the tandoor, and the rooftop BBQ night is genuinely special.' },
  { name: 'Arif Hossain', role: 'Ordered delivery · Banani', rating: 4, text: 'Ordered chicken biryani and mango lassi on WhatsApp at 7 PM — food arrived hot in 35 minutes, still steaming. The packaging was neat and the portions were generous for the price.' },
  { name: 'Sarah Karim', role: 'Birthday dinner · Baridhara', rating: 5, text: 'We booked a table for my mother\'s 60th birthday. They decorated the table, the chef sent out a complimentary dessert, and the grilled salmon was cooked perfectly. A beautiful evening.' },
]

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length)

  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Customer Reviews" title="What Our Guests Say" subtitle="Real words from real tables — 4.9 out of 5 across 2,400+ reviews." />
        <div className="mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-stone-100 bg-white p-8 text-center shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-10"
            >
              <Quote className="mx-auto h-8 w-8 fill-orange-500 text-orange-500" />
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'fill-stone-200 text-stone-200 dark:fill-slate-700 dark:text-slate-700'}`} />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl italic leading-relaxed text-stone-700 dark:text-slate-200 sm:text-2xl">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 font-display text-lg font-bold text-white">
                  {review.name.split(' ').map((w) => w[0]).join('')}
                </span>
                <p className="mt-3 font-semibold text-stone-900 dark:text-white">{review.name}</p>
                <p className="text-sm text-stone-500 dark:text-slate-400">{review.role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous review" className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-orange-500 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to review ${i + 1}`} className={`h-2.5 rounded-full transition ${i === index ? 'w-8 bg-orange-500' : 'w-2.5 bg-stone-300 dark:bg-slate-600'}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next review" className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-orange-500 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
