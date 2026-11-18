import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedDishes from './components/FeaturedDishes'
import MenuSection from './components/MenuSection'
import SpecialOffers from './components/SpecialOffers'
import ChefsSpecial from './components/ChefsSpecial'
import WhyChooseUs from './components/WhyChooseUs'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Delivery from './components/Delivery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-stone-800 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <MenuSection />
        <SpecialOffers />
        <ChefsSpecial />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <Reservation />
        <Delivery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  )
}
