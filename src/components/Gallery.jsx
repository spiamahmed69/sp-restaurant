import { motion } from 'framer-motion'
import { GALLERY } from '../data/menu'
import SectionHeading from './SectionHeading'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 dark:bg-slate-900/40 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Restaurant Gallery" title="A Feast for the Eyes" subtitle="Inside our dining hall, our rooftop, and the plates our kitchen is proudest of." />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.src + g.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl ${i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img src={g.src} alt={g.label} loading="lazy" className={`w-full object-cover transition duration-500 group-hover:scale-110 ${i === 0 || i === 5 ? 'h-full min-h-[280px] lg:min-h-[420px]' : 'h-44 sm:h-52 lg:h-52'}`} />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {g.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
