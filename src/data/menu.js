const img = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`

export const CATEGORIES = ['All', 'Starters', 'Main Course', 'Biryani & Rice', 'Desserts', 'Drinks']

export const DISHES = [
  // Starters
  { id: 1, name: 'Chicken Tikka', category: 'Starters', price: 380, rating: 4.8, reviews: 214, description: 'Char-grilled chicken marinated overnight in yoghurt, Kashmiri chilli and garam masala, served with mint chutney.', image: img('1544025162-d76694265947'), tag: 'Spicy' },
  { id: 2, name: 'Prawn Tempura', category: 'Starters', price: 520, rating: 4.7, reviews: 156, description: 'Crispy golden prawns in a light tempura batter with sweet chilli dip and a squeeze of lime.', image: img('1551218808-94e220e084d2'), tag: 'Chef Pick' },
  { id: 3, name: 'Vegetable Spring Rolls', category: 'Starters', price: 280, rating: 4.6, reviews: 132, description: 'Crisp rolls stuffed with cabbage, carrot and mushroom, served with tamarind sauce.', image: img('1490645935967-10de6ba17061'), tag: 'Veg' },
  // Main Course
  { id: 4, name: 'Butter Chicken', category: 'Main Course', price: 580, rating: 4.9, reviews: 412, description: 'Tandoori chicken folded into a silky tomato-butter gravy with cream and kasuri methi. Best with butter naan.', image: img('1504674900247-0877df9cc836'), tag: 'Bestseller' },
  { id: 5, name: 'Grilled Salmon', category: 'Main Course', price: 1250, rating: 4.9, reviews: 268, description: 'Norwegian salmon fillet grilled over charcoal, lemon-butter sauce, roasted vegetables and herb rice.', image: img('1467003909585-2f8a72700288'), tag: 'Premium' },
  { id: 6, name: 'Grilled Beef Steak', category: 'Main Course', price: 1450, rating: 4.8, reviews: 189, description: 'Juicy beef steak flame-grilled to your liking, with pepper sauce, sautéed mushrooms and mashed potato.', image: img('1600891964092-4316c288032e'), tag: 'Premium' },
  // Biryani & Rice
  { id: 7, name: 'Chicken Biryani', category: 'Biryani & Rice', price: 450, rating: 4.9, reviews: 823, description: 'Fragrant basmati layered with spiced chicken, saffron and fried onion, served with raita and salad.', image: img('1476224203421-9ac39bcb3327'), tag: 'Bestseller' },
  { id: 8, name: 'Beef Kacchi Biryani', category: 'Biryani & Rice', price: 650, rating: 4.9, reviews: 764, description: 'Slow-cooked Old Dhaka style kacchi — tender beef, aromatic rice, potato and a boiled egg, sealed on dum.', image: img('1546069901-ba9599a7e63c'), tag: 'Signature' },
  { id: 9, name: 'Hyderabadi Biryani', category: 'Biryani & Rice', price: 720, rating: 4.8, reviews: 341, description: 'Fiery Hyderabadi dum biryani with marinated mutton, mint, green chilli and crispy birista.', image: img('1567620905732-2d1ec7ab7445'), tag: 'Spicy' },
  // Desserts
  { id: 10, name: 'Gulab Jamun with Kulfi', category: 'Desserts', price: 220, rating: 4.8, reviews: 298, description: 'Warm syrup-soaked gulab jamun served with a slice of creamy malai kulfi and crushed pistachio.', image: img('1551024506-0bccd828d307'), tag: 'Sweet' },
  { id: 11, name: 'Strawberry Cheesecake', category: 'Desserts', price: 350, rating: 4.7, reviews: 187, description: 'Baked New York cheesecake with fresh strawberry compote and a buttery biscuit base.', image: img('1565958011703-44f9829ba187'), tag: 'Sweet' },
  { id: 12, name: 'Chocolate Lava Cake', category: 'Desserts', price: 380, rating: 4.9, reviews: 256, description: 'Warm dark chocolate cake with a molten centre, served with vanilla ice cream.', image: img('1574071318508-1cdbab80d002'), tag: 'Sweet' },
  // Drinks
  { id: 13, name: 'Mango Lassi', category: 'Drinks', price: 180, rating: 4.8, reviews: 342, description: 'Thick mango lassi made with ripe Rajshahi mangoes, yoghurt and a touch of cardamom.', image: img('1598866594230-a7c12756260f'), tag: 'Fresh' },
  { id: 14, name: 'Fresh Lime & Mint Cooler', category: 'Drinks', price: 150, rating: 4.7, reviews: 198, description: 'Chilled lime, crushed mint and soda — the perfect cooler with spicy biryani.', image: img('1482049016688-2d3e1b311543'), tag: 'Fresh' },
  { id: 15, name: 'Cold Coffee', category: 'Drinks', price: 240, rating: 4.6, reviews: 143, description: 'Double-shot espresso blended with cold milk, vanilla ice cream and a cocoa dusting.', image: img('1555396273-367ea4eb4db5'), tag: 'Chilled' },
]

export const FEATURED_IDS = [7, 8, 5, 4]

export const GALLERY = [
  { src: img('1517248135467-4c7edcad34c4'), label: 'Fine dining hall' },
  { src: img('1414235077428-338989a2e8c0'), label: 'Signature plating' },
  { src: img('1552566626-52f8b828add9'), label: 'Cozy interior' },
  { src: img('1555396273-367ea4eb4db5'), label: 'Family seating' },
  { src: img('1546069901-ba9599a7e63c'), label: 'Kacchi on dum' },
  { src: img('1467003909585-2f8a72700288'), label: 'Grilled salmon' },
  { src: img('1567620905732-2d1ec7ab7445'), label: 'Hyderabadi biryani' },
  { src: img('1565958011703-44f9829ba187'), label: 'Dessert table' },
]
