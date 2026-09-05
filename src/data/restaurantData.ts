import { MenuItem, MenuCategory, GalleryItem, FoodCategoryHighlight } from '../types';

export const RESTAURANT_INFO = {
  name: 'Colorado Kitchen',
  tagline: 'Good Food. Warm Moments.',
  location: {
    shop: 'Shop 2, Ground Floor',
    building: 'Fatima Arcade',
    street: 'Street No. 45',
    sector: 'E-11/4',
    city: 'Islamabad',
    country: 'Pakistan',
    fullAddress: 'Shop 2, Ground Floor, Fatima Arcade, Street No. 45, E-11/4, Islamabad, Pakistan',
    shortAddress: 'Shop 2, Fatima Arcade, St. 45, E-11/4, Islamabad',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fatima+Arcade+Street+45+E-11%2F4+Islamabad+Pakistan',
    embedMapUrl: 'https://maps.google.com/maps?q=Fatima%20Arcade%2C%20Street%2045%2C%20E-11%2F4%2C%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  phones: [
    { display: '+92 51 2751831', value: '+92512751831', label: 'Landline' },
    { display: '+92 327 7747733', value: '+923277747733', label: 'Mobile & WhatsApp' },
  ],
  whatsapp: {
    number: '+92 327 7747733',
    url: 'https://wa.me/923277747733',
    cleanNumber: '923277747733',
  },
  social: {
    facebook: {
      url: 'https://www.facebook.com/coloradokitchenisb/',
      handle: '@coloradokitchenisb',
      followers: '457 followers',
      lastObserved: '23 May 2022',
    },
  },
};

// High-resolution, sharp, natural-light food & restaurant photography
export const IMAGES = {
  // Hero: Beautifully plated modern comfort-food dish on a premium restaurant table
  // Editorial photography, natural side lighting, realistic textures, shallow depth of field
  hero: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=88',
  
  // Signature Kitchen Table split-screen
  signatureTable: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
  
  // Categories
  categories: {
    signaturePlates: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85',
    grillsMains: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85',
    comfortFavorites: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85',
    freshSidesBites: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=1000&q=85',
  },

  // Atmosphere / Experience
  atmosphere: {
    kitchenPrep: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85',
    diningSpace: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    hospitalityDetail: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85',
  },
};

export const FOOD_HIGHLIGHTS: FoodCategoryHighlight[] = [
  {
    id: 'cat-1',
    title: 'Signature Plates',
    tagline: 'Crafted with care',
    description: 'Distinctive culinary creations that showcase bold flavor profiles, balancing savory glazes with vibrant accompaniments.',
    imageUrl: IMAGES.categories.signaturePlates,
    targetCategory: 'mains',
  },
  {
    id: 'cat-2',
    title: 'Grills & Mains',
    tagline: 'Seared to perfection',
    description: 'Hot sizzling cuts, tender poultry, and char-grilled recipes seasoned with fragrant herb rubs and natural pan drippings.',
    imageUrl: IMAGES.categories.grillsMains,
    targetCategory: 'grills',
  },
  {
    id: 'cat-3',
    title: 'Comfort Favorites',
    tagline: 'Hearty & satisfying',
    description: 'Beloved classic kitchen recipes, rich melted layers, and soul-warming comfort food made for pure enjoyment.',
    imageUrl: IMAGES.categories.comfortFavorites,
    targetCategory: 'burgers',
  },
  {
    id: 'cat-4',
    title: 'Fresh Sides & Bites',
    tagline: 'Crisp & complementary',
    description: 'Golden hand-cut fries, garden-crisp salads, house-crafted dips, and savory finger bites that complete every table spread.',
    imageUrl: IMAGES.categories.freshSidesBites,
    targetCategory: 'sides',
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', label: 'All Items', subtitle: 'Browse the entire kitchen preview' },
  { id: 'starters', label: 'Starters', subtitle: 'Crispy bites & appetizers' },
  { id: 'mains', label: 'Mains', subtitle: 'Hearty kitchen specialties' },
  { id: 'grills', label: 'Grills', subtitle: 'Char-broiled cuts & skewers' },
  { id: 'burgers', label: 'Burgers & Sandwiches', subtitle: 'Artisan buns & melts' },
  { id: 'sides', label: 'Sides', subtitle: 'Fries, rings & greens' },
  { id: 'desserts', label: 'Desserts', subtitle: 'Sweet warm finishes' },
  { id: 'beverages', label: 'Beverages', subtitle: 'Chilled sips & refreshments' },
];

export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's-1',
    name: 'Crispy Herb Tossed Calamari & Wings',
    category: 'starters',
    description: 'Golden crust seasoned with coarse sea salt, garlic butter, and fresh cilantro with smoked aioli.',
    badge: 'Popular Starter',
    isChefSpecial: true,
  },
  {
    id: 's-2',
    name: 'Golden Loaded Potato Wedges',
    category: 'starters',
    description: 'Double-cooked skin-on wedges loaded with warm cheddar melt, spring onions, and herb dip.',
    badge: 'Guest Favorite',
  },
  {
    id: 's-3',
    name: 'Charred Garlic Breadsticks & Marinara',
    category: 'starters',
    description: 'Freshly baked hearth bread brushed with crushed garlic oil, parmesan, and warm tomato dip.',
  },

  // Mains
  {
    id: 'm-1',
    name: 'Colorado Herb-Crusted Chicken Platter',
    category: 'mains',
    description: 'Pan-seared tender chicken breast infused with rosemary, cracked black pepper, accompanied by warm pan jus.',
    badge: 'Signature Dish',
    isChefSpecial: true,
  },
  {
    id: 'm-2',
    name: 'Tender Slow-Braised Pot Roast Bowl',
    category: 'mains',
    description: 'Succulent cuts simmered slowly in rich aromatic broth with sweet carrots, baby potatoes, and crusty bread.',
    badge: 'Kitchen Classic',
  },
  {
    id: 'm-3',
    name: 'Creamy Garlic Butter Mushroom Penne',
    category: 'mains',
    description: 'Fresh pasta enveloped in velvety cream sauce, sautéed forest mushrooms, cracked pepper, and aged parmesan.',
  },

  // Grills
  {
    id: 'g-1',
    name: 'Fire-Charred Tenderloin Steak Cut',
    category: 'grills',
    description: 'Prime marinated steak grilled over open heat, topped with herb compound butter and blistered cherry tomatoes.',
    badge: 'Chef Specialty',
    isChefSpecial: true,
  },
  {
    id: 'g-2',
    name: 'Smoky BBQ Glazed Ribs & Skewers',
    category: 'grills',
    description: 'Tender ribs brushed continuously with house molasses glaze, charred on edges and served tender.',
    badge: 'Grill Special',
  },
  {
    id: 'g-3',
    name: 'Herb & Lemon Char-Grilled Skewers',
    category: 'grills',
    description: 'Marinated chicken and crisp bell pepper skewers basted in lemon thyme marinade with garlic dip.',
  },

  // Burgers & Sandwiches
  {
    id: 'b-1',
    name: 'The Colorado Signature Smash',
    category: 'burgers',
    description: 'Crisp-edged smash patty, caramelized sweet onions, melted yellow cheddar, and kitchen burger sauce on brioche.',
    badge: 'House Favorite',
    isChefSpecial: true,
  },
  {
    id: 'b-2',
    name: 'Buttermilk Crispy Chicken Melt',
    category: 'burgers',
    description: 'Fried spiced chicken fillet, dill pickles, shredded slaw, and spicy honey glaze on toasted sesame bun.',
    badge: 'Top Pick',
  },
  {
    id: 'b-3',
    name: 'Double Cheese & Sautéed Shroom Bun',
    category: 'burgers',
    description: 'Juicy grilled patty topped with earthy sautéed button mushrooms, Swiss cheese, and truffle mayo.',
  },

  // Sides
  {
    id: 'sd-1',
    name: 'Hand-Cut Sea Salt & Paprika Fries',
    category: 'sides',
    description: 'Fresh potatoes cut daily, crisp fried and dusted with mild smoked paprika and coarse sea salt.',
    badge: 'Crisp & Fresh',
  },
  {
    id: 'sd-2',
    name: 'Truffle & Parmesan Herb Fries',
    category: 'sides',
    description: 'Thinly cut crispy fries drizzled with white truffle oil and generously dusted with aged parmesan.',
  },
  {
    id: 'sd-3',
    name: 'Garden Crisp Side Salad with House Vinaigrette',
    category: 'sides',
    description: 'Mixed crisp baby greens, heirloom tomatoes, cucumber coins, and house shallot dressing.',
  },

  // Desserts
  {
    id: 'd-1',
    name: 'Warm Melted Skillet Chocolate Cookie',
    category: 'desserts',
    description: 'Baked to order in a mini iron skillet with gooey chocolate core, topped with a scoop of cold vanilla cream.',
    badge: 'Sweet Finish',
    isChefSpecial: true,
  },
  {
    id: 'd-2',
    name: 'Classic Caramelized Apple Crumble',
    category: 'desserts',
    description: 'Tender cinnamon spiced apples beneath a crunchy golden butter oat crust, drizzled with warm caramel.',
  },

  // Beverages
  {
    id: 'bv-1',
    name: 'Fresh Mint & Citrus Cooler',
    category: 'beverages',
    description: 'Crushed garden mint, freshly squeezed lime juice, raw cane sugar syrup, and chilled sparkling soda.',
    badge: 'Refreshing',
  },
  {
    id: 'bv-2',
    name: 'Peach & Hibiscus Iced Brew',
    category: 'beverages',
    description: 'Slow-steeped iced tea infused with natural white peach puree and a hint of wild hibiscus flower.',
  },
  {
    id: 'bv-3',
    name: 'Signature Chilled Cold Brew',
    category: 'beverages',
    description: 'Smooth 16-hour steeped coffee served over artisanal ice with optional sweet condensed foam.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Plated Culinary Dish',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    alt: 'Beautifully plated dish with fresh herbs at Colorado Kitchen',
    caption: 'Thoughtfully prepared recipes crafted for genuine table comfort.',
  },
  {
    id: 'gal-2',
    title: 'Artisan Comfort Burger',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85',
    alt: 'Artisan burger with melted cheese and fresh brioche bun',
    caption: 'Fresh brioche, premium grilled cuts, and house-made sauces.',
  },
  {
    id: 'gal-3',
    title: 'Warm Table Hospitality',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    alt: 'Warm restaurant lighting and welcoming tables in Islamabad',
    caption: 'A comfortable dining environment welcoming families and close friends.',
  },
  {
    id: 'gal-4',
    title: 'Kitchen Craft & Fire',
    category: 'craft',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Chef preparing fresh ingredients in the kitchen',
    caption: 'Honest culinary craftsmanship with attention to every fresh detail.',
  },
  {
    id: 'gal-5',
    title: 'Shared Table Feast',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    alt: 'Shared dinner table spread with savory dishes',
    caption: 'Every meal is an opportunity to gather, connect, and savor.',
  },
  {
    id: 'gal-6',
    title: 'Sizzling Grill Specialties',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85',
    alt: 'Char-grilled skewers and cuts hot from the fire',
    caption: 'Char-grilled cuts seared to retain deep savory flavor and natural juices.',
  },
  {
    id: 'gal-7',
    title: 'Crispy Sides & Fresh Dips',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=1200&q=85',
    alt: 'Golden hand-cut fries and seasoned dipping sauces',
    caption: 'Golden hand-cut potatoes and savory accompaniment dips.',
  },
  {
    id: 'gal-8',
    title: 'Atmospheric Hospitality',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85',
    alt: 'Cozy modern dining ambience with warm glow',
    caption: 'Subtle warm tones and relaxed seating at Fatima Arcade, E-11/4.',
  },
];
