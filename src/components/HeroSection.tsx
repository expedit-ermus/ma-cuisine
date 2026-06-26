"use client";

import { Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMGEmma } from "@/assets/images";

export default function HeroSection({ onOpenCart }: { onOpenCart: () => void }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#FFF8F0] to-[#FFE4C4] overflow-hidden">
      {/* Decorative Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FF8C00] text-white px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
              ✨ Cuisine Marocaine Artisanale
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B4513] leading-tight animate-fade-in-up">
              Saveurs <span className="text-[#FF8C00]">du Maroc</span> dans chaque bouchée
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in-up">
              Découvrez les plats traditionnels marocains de M.A Cuisine, préparés avec amour et des recettes transmises de génération en génération. Couscous, tajines et pâtisseries authentiques.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up">
              <Button 
                size="lg" 
                onClick={onOpenCart}
                className="bg-[#8B4513] hover:bg-[#2C1810] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Commander maintenant
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("apropos")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white rounded-full px-8 py-6 text-lg"
              >
                Découvrir l'histoire
              </Button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-6 pt-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-[#2C1810]">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">4.9/5 - +200 avis</span>
              </div>
              <div className="flex items-center gap-2 text-[#2C1810]">
                <Truck className="h-5 w-5 text-[#FF8C00]" />
                <span className="font-medium">Livraison Paris & IDF</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D2691E] to-[#FF8C00] rounded-full animate-pulse" />
              
              {/* Main Image */}
              <img 
                src={IMGEmma}
                alt="M.A Cuisine Plats Marocains" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
              />
              
              {/* Floating Badges */}
              <div className="absolute -top-2 -right-4 md:right-0 bg-white p-3 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FFF8F0] rounded-full flex items-center justify-center text-[#FF8C00]">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2C1810]">4.9/5</p>
                    <p className="text-xs text-gray-500">+200 avis</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:left-0 bg-white p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FFF8F0] rounded-full flex items-center justify-center text-[#FF8C00]">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2C1810]">Livraison</p>
                    <p className="text-xs text-gray-500">Paris & IDF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease 0.2s forwards; opacity: 0; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}