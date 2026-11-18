import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const initialForm = { name: '', phone: '', date: '', time: '', guests: '2', notes: '' }

export default function Reservation() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(null)

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 3) e.name = 'Please enter your full name (at least 3 characters).'
    if (!/^(\+?880|0)1[3-9]\d{8}$/.test(form.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a valid Bangladeshi mobile number, e.g. 01712-345678.'
    if (!form.date) e.date = 'Please pick a date.'
    else {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (new Date(`${form.date}T00:00:00`) < today) e.date = 'Date cannot be in the past.'
    }
    if (!form.time) e.time = 'Please pick a time.'
    const g = Number(form.guests)
    if (!g || g < 1 || g > 20) e.guests = 'Guests must be between 1 and 20.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSuccess({ ...form })
    setForm(initialForm)
  }

  const inputCls = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 dark:bg-slate-900 dark:text-white ${
      hasError ? 'border-red-500' : 'border-stone-200 dark:border-slate-700'
    }`

  return (
    <section id="reserve" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Table Reservation" title="Book Your Table" subtitle="Reserve in under a minute. We hold your table for 15 minutes past your booking time — just call if you are running late." />
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white lg:col-span-2">
            <CalendarCheck className="h-10 w-10" />
            <h3 className="mt-4 font-display text-2xl font-bold">Good to know</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed opacity-95">
              <li>• Tables for up to 20 guests — larger groups, please call us.</li>
              <li>• Rooftop and private family rooms available on request.</li>
              <li>• No advance payment needed for tables under 8 guests.</li>
              <li>• Friday lunch is our busiest time — book a day ahead.</li>
            </ul>
            <p className="mt-6 rounded-xl bg-black/20 p-4 text-sm">Prefer to talk? Call <a href="tel:+8801712345678" className="font-bold underline">+880 1712-345678</a> — we answer 11 AM to 11 PM.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-stone-100 bg-white p-7 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:col-span-3">
            {success ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                <h3 className="mt-4 font-display text-2xl font-bold text-stone-900 dark:text-white">Table Reserved!</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                  Thank you, {success.name}. Your table for {success.guests} {Number(success.guests) === 1 ? 'guest' : 'guests'} on{' '}
                  {new Date(`${success.date}T00:00:00`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} at {success.time} is confirmed.
                  We will call {success.phone} to confirm shortly.
                </p>
                <button onClick={() => setSuccess(null)} className="mt-6 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:scale-105">
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="res-name" className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-slate-200">Full Name *</label>
                  <input id="res-name" value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Tanvir Ahmed" className={inputCls(errors.name)} />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="res-phone" className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-slate-200">Phone *</label>
                  <input id="res-phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="01712-345678" className={inputCls(errors.phone)} />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="res-date" className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-slate-200">Date *</label>
                  <input id="res-date" type="date" value={form.date} onChange={(e) => set('date', e.target.value)} className={inputCls(errors.date)} />
                  {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="res-time" className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-slate-200">Time *</label>
                  <select id="res-time" value={form.time} onChange={(e) => set('time', e.target.value)} className={inputCls(errors.time)}>
                    <option value="">Select a time</option>
                    {['11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && <p className="mt-1 text-xs text-red-600">{errors.time}</p>}
                </div>
                <div>
                  <label htmlFor="res-guests" className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-slate-200">Guests *</label>
                  <input id="res-guests" type="number" min="1" max="20" value={form.guests} onChange={(e) => set('guests', e.target.value)} className={inputCls(errors.guests)} />
                  {errors.guests && <p className="mt-1 text-xs text-red-600">{errors.guests}</p>}
                </div>
                <div>
                  <label htmlFor="res-notes" className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-slate-200">Special Requests</label>
                  <input id="res-notes" value={form.notes} onChange={(e) => set('notes', e.target.value)} placeholder="Birthday, window seat…" className={inputCls(false)} />
                </div>
                <button type="submit" className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02] sm:col-span-2">
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
