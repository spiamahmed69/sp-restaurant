import { motion } from 'framer-motion'
import { Award, Check, Leaf, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'

const POINTS = [
  'Farm-fresh ingredients sourced every morning from Dhaka markets',
  'Recipes perfected over 15 years by our master chefs',
  'Halal-certified kitchen with strict hygiene standards',
  'Family-friendly dining hall, rooftop seating and private rooms',
]

const STATS = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '120k+', label: 'Happy Guests Served' },
  { icon: Leaf, value: '100%', label: 'Halal & Fresh' },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
              alt="Signature plated dish at SP Restaurant"
              className="h-[440px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 px-6 py-5 text-white shadow-xl sm:right-8">
            <p className="font-display text-4xl font-bold">15+</p>
            <p className="text-sm opacity-90">Years Serving Dhaka</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            align="left"
            eyebrow="About Our Restaurant"
            title="A Family Kitchen That Became Dhaka's Favourite Table"
            subtitle="SP Restaurant began in 2010 as a small family kitchen in Gulshan with one tandoor, one handi and a simple promise: serve food we would proudly feed our own family. Today we welcome hundreds of guests every day — but every biryani is still sealed on dum, every spice still ground fresh, and every plate still checked before it leaves the kitchen."
          />
          <ul className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-stone-700 dark:text-slate-200 sm:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10"><Check className="h-4 w-4" /></span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-stone-100 bg-white p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <s.icon className="mx-auto h-5 w-5 text-orange-600" />
                <p className="mt-2 font-display text-xl font-bold text-stone-900 dark:text-white sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-stone-500 dark:text-slate-400 sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
