"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingBag, ChefHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Couscous Royal", nameAr: "كسكسي ملكي", description: "Semoule, légumes, agneau, poulet", price: 18, category: "Plats" },
  { id: 2, name: "Tajine Poulet Citron", nameAr: "طاجين دجاج بالليمون", description: "Poulet, citrons confits, olives", price: 15, category: "Plats" },
  { id: 3, name: "Pastilla au Poulet", nameAr: "بسطيلة بالدجاج", description: "Feuille de brick, poulet, amandes", price: 12, category: "Plats" },
  { id: 4, name: "Kefta Tajine", nameAr: "طاجين كفتة", description: "Boulettes de viande, sauce tomate", price: 14, category: "Plats" },
  { id: 5, name: "Harira", nameAr: "حريرة", description: "Soupe traditionnelle marocaine", price: 6, category: "Entrées" },
  { id: 6, name: "Zaalouk", nameAr: "زلalous", description: "Caviar d'aubergines", price: 5, category: "Entrées" },
  { id: 7, name: "Mint Tea", nameAr: "شاي بالنعناع", description: "Thé à la menthe frais", price: 3, category: "Boissons" },
  { id: 8, name: "Jus d'orange", nameAr: "عصير برتقال", description: "Jus pressé frais", price: 4, category: "Boissons" },
];

const categories = ["Tous", "Plats", "Entrées", "Boissons"];

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const filteredItems = selectedCategory === "Tous" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    const qty = quantities[item.id] || 1;
    for (let i = 0; i < qty; i++) {
      onAddToCart(item);
    }
    setQuantities(prev => ({ ...prev, [item.id]: 0 }));
  };

  return (
    <section id="menu" className="py-16 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <ChefHat className="h-12 w-12 mx-auto text-amber-600 mb-4" />
          <h2 className="text-4xl font-bold text-amber-900 mb-2">Notre Menu</h2>
          <p className="text-amber-700">Délices du Maroc</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              variant={selectedCategory === cat ? "default" : "outline"}
              className={selectedCategory === cat 
                ? "bg-amber-600 hover:bg-amber-700 text-white" 
                : "border-amber-600 text-amber-600 hover:bg-amber-50"
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-amber-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                    <p className="text-amber-600 text-sm font-arabic">{item.nameAr}</p>
                  </div>
                  <span className="text-2xl font-bold text-amber-600">{item.price}€</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-8 w-8 p-0 border-amber-400"
                    >
                      <Minus className="h-4 w-4 text-amber-600" />
                    </Button>
                    <span className="w-8 text-center font-semibold">
                      {quantities[item.id] || 1}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-8 w-8 p-0 border-amber-400"
                    >
                      <Plus className="h-4 w-4 text-amber-600" />
                    </Button>
                  </div>
                  
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-amber-600 hover:bg-amber-700 text-white gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}