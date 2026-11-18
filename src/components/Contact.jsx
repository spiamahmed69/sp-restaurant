import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'

const CARDS = [
  { icon: Phone, title: 'Call Us', lines: ['+880 1712-345678', '+880 2-8834567'], href: 'tel:+8801712345678', action: 'Call now' },
  { icon: Mail, title: 'Email Us', lines: ['hello@sprestaurant.com', 'orders@sprestaurant.com'], href: 'mailto:hello@sprestaurant.com', action: 'Send email' },
  { icon: MapPin, title: 'Visit Us', lines: ['House 12, Road 5, Gulshan-1', 'Dhaka 1212, Bangladesh'], href: 'https://www.google.com/maps?q=Gulshan,Dhaka', action: 'Get directions' },
  { icon: Clock, title: 'Opening Hours', lines: ['Sat – Thu: 11 AM – 11 PM', 'Fri: 2 PM – 11 PM'], href: '#location', action: 'See location' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-slate-900/40 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact Us" title="We'd Love to Hear From You" subtitle="Questions, feedback, catering for weddings and corporate events — call, email, or just walk in." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl border border-stone-100 bg-cream p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 transition group-hover:scale-110">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-stone-900 dark:text-white">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="mt-1 text-sm text-stone-600 dark:text-slate-300">{l}</p>
              ))}
              <span className="mt-4 inline-block text-sm font-semibold text-orange-600 group-hover:underline">{c.action} →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
