"use client";

import { useState } from "react";
import { Leaf, Flame, Star, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { placeholders } from "@/lib/images";

interface MenuItem {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  price: number;
  imageKey: keyof typeof placeholders;
  tag: string;
  tagIcon: "star" | "flame" | "leaf" | "utensils";
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Couscous Royal",
    nameAr: "كسكسي ملكي",
    description: "Semoule fine, légumes mijotés, agneau et poulet. Le plat star du Maroc.",
    price: 18,
    imageKey: "couscous",
    tag: "Best-seller",
    tagIcon: "star",
    category: "Plats"
  },
  {
    id: 2,
    name: "Tajine Poulet Citron",
    nameAr: "طاجين دجاج ليمون",
    description: "Poulet fondant, citrons confits, olives vertes et herbes fraîches.",
    price: 15,
    imageKey: "tajine",
    tag: "Populaire",
    tagIcon: "flame",
    category: "Plats"
  },
  {
    id: 3,
    name: "Pastilla au Poulet",
    nameAr: "بسطيلة دجاج",
    description: "Feuille de brick croustillante, poulet, amandes grillées et cannelle.",
    price: 12,
    imageKey: "pastilla",
    tag: "Classique",
    tagIcon: "star",
    category: "Plats"
  },
  {
    id: 4,
    name: "Kefta Tajine",
    nameAr: "طاجين كفتة",
    description: "Boulettes de viande hachée sauce tomate épicée et œuf poché.",
    price: 14,
    imageKey: "tajine",
    tag: "Épicé",
    tagIcon: "flame",
    category: "Plats"
  },
  {
    id: 5,
    name: "Harira",
    nameAr: "حريرة",
    description: "Soupe traditionnelle marocaine aux lentilles, pois chiches et herbes.",
    price: 6,
    imageKey: "harira",
    tag: "Soupe",
    tagIcon: "leaf",
    category: "Entrées"
  },
  {
    id: 6,
    name: "Pastilla au Poisson",
    nameAr: "بسطيلة سمك",
    description: "Feuille de brick, poisson, fruits de mer et crevettes.",
    price: 16,
    imageKey: "pastilla",
    tag: "Spécialité",
    tagIcon: "utensils",
    category: "Plats"
  },
  {
    id: 7,
    name: "Mint Tea",
    nameAr: "شاي بالنعناع",
    description: "Thé à la menthe fraîche préparé à la marocaine, menthes fraîches et sucre.",
    price: 3,
    imageKey: "mintTea",
    tag: "Boisson",
    tagIcon: "leaf",
    category: "Boissons"
  },
  {
    id: 8,
    name: "Beignets Marocains",
    nameAr: "المقليات",
    description: "Beignets croustillants sucrés, parfumés à l'anis et à la fleur d'oranger.",
    price: 5,
    imageKey: "beignets",
    tag: "Dessert",
    tagIcon: "star",
    category: "Desserts"
  }
];

const categories = ["Tous", "Plats", "Entrées", "Boissons", "Desserts"];

const tagIcons = {
  star: Star,
  flame: Flame,
  leaf: Leaf,
  utensils: UtensilsCrossed
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">Notre Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez notre carte traditionnelle marocaine
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
                  src={placeholders[item.imageKey]} 
                  alt={item.name}
                  className="w-full sm:w-28 h-28 object-cover rounded-xl"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-[#2C1810]">{item.name}</h3>
                      <span className="font-bold text-[#8B4513] text-lg">{item.price}€</span>
                    </div>
                    <p className="text-amber-700 text-sm font-arabic mb-1">{item.nameAr}</p>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-md text-xs w-fit">
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