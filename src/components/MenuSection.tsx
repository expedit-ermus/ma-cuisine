"use client";

import { useState } from "react";
import { Leaf, Flame, Star, Flower, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tag: string;
  tagIcon: "leaf" | "flame" | "star" | "flower" | "wheat";
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Beignets Sucrés (x10)",
    description: "Doux, moelleux et légèrement sucrés. Un classique indémodable qui fond dans la bouche.",
    price: 5,
    image: "https://i.postimg.cc/dtJbBFH0/beignets.jpg",
    tag: "Classique",
    tagIcon: "star",
    category: "Beignets"
  },
  {
    id: 2,
    name: "Beignets Salés (x10)",
    description: "Savoureux et relevés avec des épices africaines authentiques. Parfait pour l'apéritif.",
    price: 5,
    image: "https://i.postimg.cc/BvXnN8HY/beignets-sales.jpg",
    tag: "Épicé",
    tagIcon: "flame",
    category: "Beignets"
  },
  {
    id: 3,
    name: "Beignets Vermicelles (x10)",
    description: "Une texture unique avec des vermicelles croustillants. Une explosion de saveurs.",
    price: 5,
    image: "https://i.postimg.cc/fy4d0qYF/vermhicelles.jpg",
    tag: "Populaire",
    tagIcon: "star",
    category: "Beignets"
  },
  {
    id: 4,
    name: "Jus Gingembre-Hibiscus",
    description: "Rafraîchissant et plein de vertus. Le mélange parfait entre douceur et fraîcheur.",
    price: 5,
    image: "https://i.postimg.cc/85CckX2j/jus.jpg",
    tag: "Infusé",
    tagIcon: "flower",
    category: "Jus"
  },
  {
    id: 5,
    name: "Beignets Sans Gluten",
    description: "Option disponible sur commande. Les mêmes saveurs, sans gluten.",
    price: 7,
    image: "https://i.postimg.cc/dtJbBFH0/beignets.jpg",
    tag: "Sur commande",
    tagIcon: "wheat",
    category: "Options"
  },
  {
    id: 6,
    name: "Commande Personnalisée",
    description: "Commande minimum 40€. Contactez-nous pour un devis personnalisé.",
    price: 40,
    image: "https://i.postimg.cc/8kBBcJqX/Ma-Cuisine-1.jpg",
    tag: "Événement",
    tagIcon: "star",
    category: "Options"
  }
];

const categories = ["Tous", "Beignets", "Jus", "Options"];

const tagIcons = {
  leaf: Leaf,
  flame: Flame,
  star: Star,
  flower: Flower,
  wheat: Wheat
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredItems = activeCategory === "Tous" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 px-4 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] font-serif mb-4">Notre Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez notre carte complète avec toutes nos créations
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              variant={activeCategory === cat ? "default" : "outline"}
              className={`rounded-full px-6 ${
                activeCategory === cat 
                  ? "bg-[#8B4513] hover:bg-[#D2691E] text-white" 
                  : "border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const IconComponent = tagIcons[item.tagIcon];
            return (
              <div 
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl hover:shadow-lg transition-all"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full sm:w-28 h-28 object-cover rounded-xl"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-[#2C1810]">{item.name}</h3>
                      <span className="font-bold text-[#8B4513] text-lg">{item.price}€</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs w-fit">
                    <IconComponent className="h-3 w-3" />
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}