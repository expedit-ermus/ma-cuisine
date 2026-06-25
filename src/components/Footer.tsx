"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍩</span>
              <span className="text-xl font-bold font-serif text-white">M.A Cuisine</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Des saveurs d'Afrique dans chaque bouchée. Beignets artisanaux et jus exotiques préparés avec amour.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#hero" className="hover:text-[#FF8C00] transition-colors">Accueil</a></li>
              <li><a href="#produits" className="hover:text-[#FF8C00] transition-colors">Produits</a></li>
              <li><a href="#menu" className="hover:text-[#FF8C00] transition-colors">Menu</a></li>
              <li><a href="#apropos" className="hover:text-[#FF8C00] transition-colors">À propos</a></li>
              <li><a href="#avis" className="hover:text-[#FF8C00] transition-colors">Avis</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FF8C00]" />
                <span>Paris, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FF8C00]" />
                <span>06 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#FF8C00]" />
                <span>contact@macuisine.fr</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2 text-white/70">
              <li>Lundi - Vendredi</li>
              <li className="font-medium text-white">9h00 - 19h00</li>
              <li className="mt-2">Samedi</li>
              <li className="font-medium text-white">10h00 - 20h00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© 2024 M.A Cuisine. Tous droits réservés. Fait avec ❤️ à Paris</p>
        </div>
      </div>
    </footer>
  );
}