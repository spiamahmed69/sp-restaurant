import { motion } from 'framer-motion'
import { Bike, ChefHat, Leaf, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

const FEATURES = [
  { icon: Leaf, title: 'Fresh Ingredients', desc: 'Vegetables, meat and fish bought fresh every morning from Dhaka markets — never frozen, never stale.' },
  { icon: ChefHat, title: 'Master Chefs', desc: 'A kitchen led by chefs with 20+ years of experience in Bangladeshi and international cuisine.' },
  { icon: Bike, title: 'Fast Delivery', desc: 'Hot food at your door in Gulshan, Banani and Baridhara within 45 minutes — or your delivery is free.' },
  { icon: ShieldCheck, title: 'Hygiene First', desc: 'Halal-certified kitchen, daily deep cleaning, and food-safety checks on every single order.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900/40 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Why Dhaka Chooses SP Restaurant" subtitle="Good food is only half the story. Here is what keeps our guests coming back week after week." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl border border-stone-100 bg-cream p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 transition group-hover:scale-110">
                <f.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-stone-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
