"use client";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FFF8F0]">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#FF8C00] to-[#D2691E] rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          {/* Decorative Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
              Prêt à découvrir nos saveurs ?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Commandez maintenant et recevez vos beignets frais directement chez vous. Commande minimum 40€ pour la livraison.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[#8B4513] hover:bg-gray-100 rounded-full px-8 py-6 text-lg shadow-lg"
              >
                Commander en ligne
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#8B4513] rounded-full px-8 py-6 text-lg"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}