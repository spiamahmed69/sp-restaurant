import { DISHES, FEATURED_IDS } from '../data/menu'
import DishCard from './DishCard'
import SectionHeading from './SectionHeading'

export default function FeaturedDishes() {
  const featured = FEATURED_IDS.map((id) => DISHES.find((d) => d.id === id)).filter(Boolean)
  return (
    <section id="featured" className="bg-white py-20 dark:bg-slate-900/40 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Dishes"
          title="Signature Dishes Guests Come Back For"
          subtitle="Our most-loved plates — from Old Dhaka kacchi to flame-grilled salmon — made fresh to order every day."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
