"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import MenuSection from "./MenuSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import CartSidebar from "./CartSidebar";
import CheckoutModal from "./CheckoutModal";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function SiteLayout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
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
    if (cart.length > 0) {
      setIsCheckoutOpen(true);
    }
  };

  const handleOrderComplete = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <HeroSection 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />
      
      <ProductsSection onAddToCart={addToCart} />
      <MenuSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />

      <CartSidebar
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