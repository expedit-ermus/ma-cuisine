// Image configuration for M.A Cuisine
// Uses local images when available, falls back to placeholder services

export interface ImageConfig {
  src: string;
  alt: string;
  fallback?: string;
}

// Image mapping - replace with actual local images when available
export const images: Record<string, ImageConfig> = {
  beignets: {
    src: "/src/assets/images/IMG-20230911-WA0002.jpg",
    alt: "Beignets africains M.A Cuisine",
    fallback: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop"
  },
  pastilla: {
    src: "/src/assets/images/IMG-20230830-WA0001.jpg",
    alt: "Pastilla marocaine",
    fallback: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop"
  },
  tajine: {
    src: "/src/assets/images/IMG-20231104-WA0010.jpg",
    alt: "Tajine marocain",
    fallback: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop"
  },
  couscous: {
    src: "/src/assets/images/IMG-20231104-WA0011.jpg",
    alt: "Couscous royal",
    fallback: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&h=400&fit=crop"
  },
  harira: {
    src: "/src/assets/images/IMG_20210508_102007.jpg",
    alt: "Harira soupe marocaine",
    fallback: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop"
  },
  mintTea: {
    src: "/src/assets/images/IMG-20260320-WA0023.jpg",
    alt: "Thé à la menthe marocain",
    fallback: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop"
  },
  emma: {
    src: "/src/assets/images/IMG-20231104-WA0011.jpg",
    alt: "Emma fondatrice M.A Cuisine",
    fallback: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop"
  }
};

// Get image URL with fallback
export function getImageUrl(key: string): string {
  const img = images[key];
  if (!img) return "";
  
  // Try local image first
  // If local image doesn't exist, use fallback
  return img.fallback || img.src;
}

// Placeholder image URLs from Unsplash for food photography
export const placeholders = {
  couscous: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&h=400&fit=crop",
  tajine: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop",
  pastilla: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
  beignets: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
  harira: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop",
  mintTea: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
  chef: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop",
};

// Category images
export const categoryImages = {
  hero: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1200&h=800&fit=crop",
  heroAlt: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
};