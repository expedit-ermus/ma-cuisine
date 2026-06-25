"use client";

import { Leaf, Heart, Truck, Award } from "lucide-react";

const features = [
  { icon: Leaf, title: "Ingrédients frais", description: "Produits de qualité sélectionnés" },
  { icon: Heart, title: "Fait avec amour", description: "Chaque commande est unique" },
  { icon: Truck, title: "Livraison rapide", description: "Paris et Île-de-France" },
  { icon: Award, title: "Artisanal", description: "Recettes authentiques" }
];

export default function AboutSection() {
  return (
    <section id="apropos" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <img 
              src="https://i.postimg.cc/8kBBcJqX/Ma-Cuisine-1.jpg" 
              alt="Emma - M.A Cuisine"
              className="w-full h-80 md:h-[400px] object-cover rounded-2xl shadow-2xl"
            />
            <img 
              src="https://i.postimg.cc/8kBBcJqX/Ma-Cuisine-1.jpg" 
              alt="Emma en action"
              className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl border-4 border-white shadow-xl hidden md:block"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] font-serif mb-6">
              L'Histoire de M.A Cuisine
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              M.A Cuisine est née d'une passion profonde pour la cuisine africaine et d'un désir de partager les saveurs authentiques de notre culture. Chaque beignet est préparé avec amour, en utilisant des recettes de famille transmises de génération en génération.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Emma, fondatrice et cuisinière, met tout son cœur dans chaque préparation. Son objectif ? Faire découvrir les délices africains à tous, tout en restant fidèle aux traditions.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFF8F0] rounded-full flex items-center justify-center text-[#FF8C00] flex-shrink-0">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810]">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}