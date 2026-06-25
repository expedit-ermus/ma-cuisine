"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag, MapPin, Clock, Phone, Star } from "lucide-react";

interface HeroSectionProps {
  onOpenCart: () => void;
  cartCount: number;
}

export default function HeroSection({ onOpenCart, cartCount }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 text-white">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-700/50 px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-amber-100 text-sm">Note 4.8/5 - +500 avis</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Saveurs du <span className="text-amber-300">Maroc</span>
            </h1>
            
            <p className="text-xl text-amber-100">
              Découvrez les authentiques délices de la cuisine marocaine. 
              Couscous royal, tajines parfumés, et bien plus encore.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={onOpenCart}
                className="bg-amber-500 hover:bg-amber-600 text-amber-900 gap-2 text-lg px-8"
              >
                <ShoppingBag className="h-5 w-5" />
                Commander
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-2">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-amber-300 text-amber-100 hover:bg-amber-800"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir le menu
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-amber-200">
                <MapPin className="h-5 w-5" />
                <span>Paris 10ème</span>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <Clock className="h-5 w-5" />
                <span>11h - 23h</span>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <Phone className="h-5 w-5" />
                <span>01 23 45 67 89</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-amber-100 rounded-full w-72 h-72 md:w-96 md:h-96 mx-auto flex items-center justify-center">
              <div className="text-8xl">🍽️</div>
            </div>
            <div className="absolute top-4 right-4 bg-white text-amber-900 px-4 py-2 rounded-full font-bold shadow-lg">
              🍚 Couscous Royal - 18€
            </div>
            <div className="absolute bottom-4 left-4 bg-white text-amber-900 px-4 py-2 rounded-full font-bold shadow-lg">
              🐔 Tajine Poulet - 15€
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}