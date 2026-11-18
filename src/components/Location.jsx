import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'

const HOURS = [
  { days: 'Saturday – Thursday', time: '11:00 AM – 11:00 PM' },
  { days: 'Friday', time: '2:00 PM – 11:00 PM' },
]

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Location & Opening Hours" title="Find Us in Gulshan" subtitle="Five minutes from Gulshan-1 Circle, with parking and a rooftop terrace." />
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-3xl border border-stone-100 shadow-lg dark:border-slate-800 lg:col-span-3">
            <iframe
              title="SP Restaurant location map — Gulshan, Dhaka"
              src="https://www.google.com/maps?q=Gulshan,Dhaka&output=embed"
              className="h-[380px] w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-3xl border border-stone-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-500/10"><MapPin className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold text-stone-900 dark:text-white">Our Address</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                House 12, Road 5, Gulshan-1<br />Dhaka 1212, Bangladesh
              </p>
              <a href="https://www.google.com/maps?q=Gulshan,Dhaka" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-orange-600 hover:underline">Get Directions →</a>
            </div>
            <div className="rounded-3xl border border-stone-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-500/10"><Clock className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold text-stone-900 dark:text-white">Opening Hours</h3>
              <div className="mt-3 space-y-2">
                {HOURS.map((h) => (
                  <div key={h.days} className="flex items-center justify-between gap-3 border-b border-dashed border-stone-200 pb-2 text-sm last:border-0 dark:border-slate-700">
                    <span className="text-stone-600 dark:text-slate-300">{h.days}</span>
                    <span className="font-semibold text-stone-900 dark:text-white">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-stone-500 dark:text-slate-400">Kitchen closes 30 minutes before closing time.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
