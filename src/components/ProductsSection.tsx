"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Beignets Sucrés",
    description: "Doux, moelleux et légèrement sucrés. Un classique indémodable.",
    price: 5,
    image: "https://i.postimg.cc/dtJbBFH0/beignets.jpg",
    category: "Beignets"
  },
  {
    id: 2,
    name: "Beignets Salés",
    description: "Savoureux et relevés avec des épices africaines authentiques.",
    price: 5,
    image: "https://i.postimg.cc/BvXnN8HY/beignets-sales.jpg",
    category: "Beignets"
  },
  {
    id: 3,
    name: "Beignets aux Vermicelles",
    description: "Une texture unique avec des vermicelles croustillants.",
    price: 5,
    image: "https://i.postimg.cc/fy4d0qYF/vermhicelles.jpg",
    category: "Beignets"
  },
  {
    id: 4,
    name: "Jus Gingembre-Hibiscus",
    description: "Rafraîchissant et plein de vertus. Le mélange parfait.",
    price: 5,
    image: "https://i.postimg.cc/85CckX2j/jus.jpg",
    category: "Jus"
  }
];

export default function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  return (
    <section id="produits" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] font-serif mb-4">Nos Créations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des produits artisanaux préparés avec des ingrédients de qualité pour éveiller vos papilles
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-[#FFF8F0] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              onClick={() => onAddToCart(product)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#FF8C00] text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2C1810] mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#8B4513]">{product.price}€</span>
                  <Button 
                    size="sm"
                    className="bg-[#8B4513] hover:bg-[#D2691E] text-white rounded-full w-10 h-10 p-0 hover:rotate-90 transition-all"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}