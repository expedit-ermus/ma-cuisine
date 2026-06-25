"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aminata D.",
    role: "Cliente fidèle",
    text: "Les beignets de M.A Cuisine m'ont rappelé ceux de mon enfance. Un vrai délice ! La livraison était rapide et les beignets étaient encore chauds.",
    rating: 5
  },
  {
    name: "Marie L.",
    role: "Cliente événement",
    text: "J'ai commandé pour l'anniversaire de ma fille. Tout le monde a adoré ! Les beignets sans gluten étaient parfaits pour ma cousine allergique.",
    rating: 5
  },
  {
    name: "Cheikh M.",
    role: "Client régulier",
    text: "Le jus gingembre-hibiscus est une merveille ! Rafraîchissant et plein de goût. Je recommande à 100%. Merci Emma !",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="avis" className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#8B4513] to-[#D2691E]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus grande fierté
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 italic mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  🍩
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}