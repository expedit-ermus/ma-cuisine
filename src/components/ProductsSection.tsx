"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { placeholders } from "@/lib/images";

interface Product {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  price: number;
  imageKey: keyof typeof placeholders;
  category: string;
}

interface ProductsSectionProps {
  onAddToCart: (product: Product & { image: string }) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Couscous Royal",
    nameAr: "كسكسي ملكي",
    description: "Semoule fine, légumes mijotés, agneau et poulet. Le plat star du Maroc.",
    price: 18,
    imageKey: "couscous",
    category: "Plats"
  },
  {
    id: 2,
    name: "Tajine Poulet Citron",
    nameAr: "طاجين دجاج ليمون",
    description: "Poulet fondant, citrons confits et olives vertes.",
    price: 15,
    imageKey: "tajine",
    category: "Plats"
  },
  {
    id: 3,
    name: "Pastilla au Poulet",
    nameAr: "بسطيلة دجاج",
    description: "Feuille de brick croustillante, poulet et amandes.",
    price: 12,
    imageKey: "pastilla",
    category: "Plats"
  },
  {
    id: 4,
    name: "Beignets Marocains",
    nameAr: "المقليات",
    description: "Beignets sucrés parfumés à la fleur d'oranger.",
    price: 5,
    imageKey: "beignets",
    category: "Desserts"
  }
];

export default function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  return (
    <section id="produits" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">Nos Spécialités</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des plats traditionnels préparés avec passion et des ingrédients de qualité
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-[#FFF8F0] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              onClick={() => onAddToCart({ ...product, image: placeholders[product.imageKey] })}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={placeholders[product.imageKey]} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#FF8C00] text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2C1810] mb-1">{product.name}</h3>
                <p className="text-amber-700 text-sm font-arabic mb-2">{product.nameAr}</p>
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