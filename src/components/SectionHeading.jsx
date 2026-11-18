import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${alignCls}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-700 dark:bg-orange-500/10 dark:text-orange-400">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold leading-tight text-stone-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-stone-600 dark:text-slate-300">{subtitle}</p>
      )}
    </motion.div>
  )
}
