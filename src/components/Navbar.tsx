"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
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
      isScrolled 
        ? "bg-white/98 backdrop-blur-sm shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8B4513] rounded-full flex items-center justify-center text-xl md:text-2xl">
              🍩
            </div>
            <span className="text-lg md:text-xl font-bold text-[#8B4513]">M.A Cuisine</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-[#2C1810] hover:text-[#D2691E] transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection("menu")} className="text-[#2C1810] hover:text-[#D2691E] transition-colors font-medium">
              Menu
            </button>
            <button onClick={() => scrollToSection("apropos")} className="text-[#2C1810] hover:text-[#D2691E] transition-colors font-medium">
              À propos
            </button>
            <button onClick={() => scrollToSection("avis")} className="text-[#2C1810] hover:text-[#D2691E] transition-colors font-medium">
              Avis
            </button>
            <button 
              onClick={onOpenCart}
              className="relative p-2 bg-[#FF8C00] hover:bg-[#D2691E] text-white rounded-full transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={onOpenCart}
              className="relative p-2 bg-[#FF8C00] text-white rounded-full"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#8B4513]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-b-2xl shadow-lg pb-4">
            <button onClick={() => scrollToSection("hero")} className="block w-full text-left px-4 py-3 text-[#2C1810] hover:bg-[#FFF8F0]">
              Accueil
            </button>
            <button onClick={() => scrollToSection("menu")} className="block w-full text-left px-4 py-3 text-[#2C1810] hover:bg-[#FFF8F0]">
              Menu
            </button>
            <button onClick={() => scrollToSection("apropos")} className="block w-full text-left px-4 py-3 text-[#2C1810] hover:bg-[#FFF8F0]">
              À propos
            </button>
            <button onClick={() => scrollToSection("avis")} className="block w-full text-left px-4 py-3 text-[#2C1810] hover:bg-[#FFF8F0]">
              Avis
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}