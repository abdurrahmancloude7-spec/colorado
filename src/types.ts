export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'grills' | 'burgers' | 'sides' | 'desserts' | 'beverages';
  description: string;
  badge?: string;
  isChefSpecial?: boolean;
}

export interface MenuCategory {
  id: 'all' | 'starters' | 'mains' | 'grills' | 'burgers' | 'sides' | 'desserts' | 'beverages';
  label: string;
  subtitle: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'craft' | 'ambiance';
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface FoodCategoryHighlight {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  targetCategory: string;
}
