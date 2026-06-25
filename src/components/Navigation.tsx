"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavigationProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navigation({ cartCount, onOpenCart }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-amber-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍽️</span>
            <span className="text-xl font-bold text-white">MA Cuisine</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-amber-100 hover:text-white transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection("menu")} className="text-amber-100 hover:text-white transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-amber-100 hover:text-white transition-colors">
              Contact
            </button>
            <Button 
              onClick={onOpenCart}
              className="bg-amber-500 hover:bg-amber-600 text-amber-900 gap-2 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              Panier
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              onClick={onOpenCart}
              size="icon"
              className="bg-amber-500 hover:bg-amber-600 text-amber-900 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-amber-800 rounded-b-lg pb-4">
            <button onClick={() => scrollToSection("hero")} className="block w-full text-left px-4 py-3 text-amber-100 hover:bg-amber-700">
              Accueil
            </button>
            <button onClick={() => scrollToSection("menu")} className="block w-full text-left px-4 py-3 text-amber-100 hover:bg-amber-700">
              Menu
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-3 text-amber-100 hover:bg-amber-700">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}