"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import MenuSection from "./MenuSection";
import ContactSection from "./ContactSection";
import CartDrawer from "./CartDrawer";
import CheckoutModal from "./CheckoutModal";

interface CartItem {
  id: number;
  name: string;
  nameAr: string;
  price: number;
  quantity: number;
}

export default function SiteLayout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (item: { id: number; name: string; nameAr: string; price: number }) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing && existing.quantity + delta <= 0) {
        return prev.filter(i => i.id !== id);
      }
      return prev.map(i => i.id === id ? { ...i, quantity: i.quantity + delta } : i);
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
    setIsCartOpen(false);
  };

  const handleOrderComplete = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <HeroSection 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />
      
      <MenuSection onAddToCart={addToCart} />
      <ContactSection />
      
      <footer className="bg-amber-900 text-amber-200 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">🍽️ MA Cuisine</p>
          <p className="text-amber-400">Saveurs du Maroc • Paris 10ème</p>
          <p className="text-amber-500 text-sm mt-4">© 2024 MA Cuisine. Tous droits réservés.</p>
        </div>
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => { setIsCheckoutOpen(false); handleOrderComplete(); }}
        cart={cart}
        total={total}
      />
    </div>
  );
}