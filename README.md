# SP Restaurant — Fine Dining in Dhaka

A premium, production-ready React + Vite + Tailwind CSS landing page for **SP Restaurant**,
a Bangladeshi & international restaurant in Gulshan, Dhaka.

## Features

- Sticky navbar with dark/light toggle (persisted in `localStorage`), cart badge and mobile menu
- Hero with food photography, rating strip and opening-hours badge
- About, featured dishes, and a working interactive menu with category filters
  (All / Starters / Main Course / Biryani & Rice / Desserts / Drinks — 15 dishes, prices in ৳)
- Special offers, Chef's Special, Why Choose Us, customer review carousel
- Restaurant gallery with hover zoom
- Table reservation form with inline validation and a success state (no backend — simulated)
- Food delivery info with Order on WhatsApp CTA
- Location & opening hours with an embedded Google Map (Gulshan, Dhaka)
- Contact section, premium footer, floating WhatsApp order button
- Shopping cart drawer (slide-in): quantity +/−, remove, subtotal in ৳, demo checkout with
  success state. Cart state lives in a React context (`src/context/CartContext.jsx`) and
  persists in `localStorage`.
- Fully responsive, Framer Motion animations, Playfair Display + Inter typography,
  light mode (warm cream `#FFF8F0`) and dark mode (dark slate)

## Tech

React 18 · Vite 5 · Tailwind CSS 3.4 · Framer Motion 11 · Lucide React

## Setup

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Deploy (Netlify)

`netlify.toml` is included: build command `npm run build`, publish directory `dist`,
with an SPA fallback redirect (`/* → /index.html`, 200). Connect the repo to Netlify
and deploy — no extra configuration needed.

## Contact

- Phone: +880 1712-345678
- Email: hello@sprestaurant.com
- Address: House 12, Road 5, Gulshan-1, Dhaka 1212, Bangladesh
- Hours: Sat–Thu 11 AM – 11 PM · Fri 2 PM – 11 PM
