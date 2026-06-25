"use client";

import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartSidebarProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-[#FFF8F0] border-[#D2691E] flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-[#8B4513] flex items-center gap-2 font-serif">
            <ShoppingBag className="h-5 w-5" />
            Votre Panier ({itemCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col flex-1 mt-6">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#8B4513]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🍩</span>
              </div>
              <p className="text-[#8B4513] font-medium">Votre panier est vide</p>
              <p className="text-gray-500 text-sm mt-1">Ajoutez des produits délicieux !</p>
              <Button 
                onClick={onClose}
                variant="outline"
                className="mt-4 border-[#8B4513] text-[#8B4513]"
              >
                Voir le menu
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl p-4 flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-[#2C1810]">{item.name}</h4>
                          <p className="text-[#8B4513] font-medium">{item.price}€</p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="h-8 w-8 p-0 border-[#D2691E]"
                          >
                            <Minus className="h-3 w-3 text-[#8B4513]" />
                          </Button>
                          <span className="w-6 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="h-8 w-8 p-0 border-[#D2691E]"
                          >
                            <Plus className="h-3 w-3 text-[#8B4513]" />
                          </Button>
                        </div>
                        <span className="font-bold text-[#8B4513]">
                          {item.price * item.quantity}€
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#D2691E]/30 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-[#2C1810]">Total</span>
                  <span className="text-2xl font-bold text-[#8B4513]">{total}€</span>
                </div>
                {total < 40 && (
                  <p className="text-sm text-[#FF8C00] mb-4 text-center">
                    Commande minimum : 40€ (il vous manque {40 - total}€)
                  </p>
                )}
                <Button 
                  onClick={onCheckout}
                  disabled={cart.length === 0 || total < 40}
                  className="w-full bg-[#8B4513] hover:bg-[#D2691E] text-white text-lg py-6 rounded-full"
                >
                  Commander maintenant
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}