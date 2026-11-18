import { motion } from 'framer-motion'
import { Flame, Gift, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'

const OFFERS = [
  {
    icon: Gift, title: 'Buy 1 Get 1 Free', subtitle: 'On all biryanis', desc: 'Order any biryani on weekdays between 12–3 PM and get a second one free. Dine-in and takeaway.', code: 'BOGO-BIRYANI', badge: 'Weekdays Only', gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: Users, title: 'Family Feast — 20% Off', subtitle: 'Feeds 4–6 people', desc: 'Two kacchi biryanis, butter chicken, 4 naans, raita, salad and 1.5L drinks — the full family table for less.', code: 'FAMILY20', badge: 'Most Popular', gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Flame, title: 'Weekend BBQ Night', subtitle: 'Every Friday & Saturday', desc: 'Live BBQ grill on the rooftop from 6 PM: kebabs, grilled fish, corn and smoky chicken tikka, from ৳499 per person.', code: 'BBQ-WEEKEND', badge: 'Fri – Sat, 6 PM', gradient: 'from-red-500 to-rose-600',
  },
]

export default function SpecialOffers() {
  return (
    <section id="offers" className="bg-white py-20 dark:bg-slate-900/40 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Special Offers" title="Deals Worth Coming Back For" subtitle="Real savings on the dishes you already love. Show the code at the counter or mention it on WhatsApp." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {OFFERS.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${o.gradient} p-7 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl`}
            >
              <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">{o.badge}</span>
              <o.icon className="h-10 w-10" />
              <h3 className="mt-4 font-display text-2xl font-bold">{o.title}</h3>
              <p className="text-sm font-semibold opacity-90">{o.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed opacity-90">{o.desc}</p>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-black/20 px-4 py-2.5">
                <span className="text-xs uppercase tracking-widest opacity-80">Use code</span>
                <span className="font-mono text-sm font-bold tracking-wider">{o.code}</span>
              </div>
              <a href="#menu" className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-bold text-stone-900 transition hover:scale-105">Claim Offer</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
