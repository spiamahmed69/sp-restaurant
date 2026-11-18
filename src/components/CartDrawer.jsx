import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const DELIVERY_FEE = 60

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQty, removeItem, clearCart, subtotal } = useCart()
  const [ordered, setOrdered] = useState(false)

  const close = () => {
    setIsOpen(false)
    setOrdered(false)
  }

  const checkout = () => {
    setOrdered(true)
    clearCart()
  }

  const total = items.length > 0 ? subtotal + DELIVERY_FEE : 0

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl dark:bg-slate-900"
          >
            <div className="flex items-center justify-between border-b border-stone-100 px-6 py-5 dark:border-slate-800">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-stone-900 dark:text-white">
                <ShoppingBag className="h-5 w-5 text-orange-600" /> Your Cart
              </h2>
              <button onClick={close} aria-label="Close cart" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-stone-100 dark:hover:bg-slate-800">
                <X className="h-5 w-5 text-stone-600 dark:text-slate-300" />
              </button>
            </div>

            {ordered ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                <h3 className="mt-4 font-display text-2xl font-bold text-stone-900 dark:text-white">Order Placed!</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                  Thank you for ordering from SP Restaurant. This is a demo checkout — no payment was taken.
                  Your food will be ready in about 45 minutes. We will call you to confirm.
                </p>
                <a href="https://wa.me/8801712345678?text=Hello%20SP%20Restaurant!%20I%20just%20placed%20an%20order%20on%20your%20website." target="_blank" rel="noreferrer" className="mt-5 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105">
                  Confirm on WhatsApp
                </a>
                <button onClick={close} className="mt-3 rounded-full border border-stone-200 px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-orange-500 hover:text-orange-600 dark:border-slate-700 dark:text-slate-200">
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <ShoppingBag className="h-16 w-16 text-stone-300 dark:text-slate-600" />
                <h3 className="mt-4 font-display text-xl font-bold text-stone-900 dark:text-white">Your cart is empty</h3>
                <p className="mt-2 text-sm text-stone-500 dark:text-slate-400">Add some biryani, kebabs or dessert from the menu.</p>
                <button onClick={close} className="mt-5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:scale-105">
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-3 rounded-2xl border border-stone-100 p-3 dark:border-slate-800">
                        <img src={item.image} alt={item.name} className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-semibold text-stone-900 dark:text-white">{item.name}</p>
                            <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} className="text-stone-400 transition hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm font-bold text-orange-600">৳{item.price} each</p>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button onClick={() => updateQty(item.id, -1)} aria-label="Decrease quantity" className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 text-stone-600 transition hover:border-orange-500 hover:text-orange-600 dark:border-slate-700 dark:text-slate-300">
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-6 text-center text-sm font-bold text-stone-900 dark:text-white">{item.qty}</span>
                              <button onClick={() => updateQty(item.id, 1)} aria-label="Increase quantity" className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 text-stone-600 transition hover:border-orange-500 hover:text-orange-600 dark:border-slate-700 dark:text-slate-300">
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <p className="text-sm font-bold text-stone-900 dark:text-white">৳{item.price * item.qty}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button onClick={clearCart} className="mt-4 text-xs font-semibold text-red-600 hover:underline">Clear cart</button>
                </div>
                <div className="border-t border-stone-100 px-6 py-5 dark:border-slate-800">
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between text-stone-600 dark:text-slate-300"><span>Subtotal</span><span>৳{subtotal}</span></div>
                    <div className="flex justify-between text-stone-600 dark:text-slate-300"><span>Delivery fee</span><span>৳{DELIVERY_FEE}</span></div>
                    <div className="flex justify-between border-t border-dashed border-stone-200 pt-2 text-base font-bold text-stone-900 dark:border-slate-700 dark:text-white"><span>Total</span><span>৳{total}</span></div>
                  </div>
                  <button onClick={checkout} className="mt-4 w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]">
                    Checkout · ৳{total} (Demo)
                  </button>
                  <p className="mt-2 text-center text-xs text-stone-400">Demo checkout — no real payment is taken.</p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
