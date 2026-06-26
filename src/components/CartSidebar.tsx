"use client";

import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface CartItem {
  id: number;
  name: string;
  nameAr: string;
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
      <SheetContent className="w-full sm:max-w-lg bg-amber-50 border-amber-200">
        <SheetHeader>
          <SheetTitle className="text-amber-900 flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Votre Panier ({itemCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-4xl">
                🍽️
              </div>
              <p className="text-amber-700 font-medium">Votre panier est vide</p>
              <p className="text-amber-500 text-sm mt-1">Ajoutez des plats délicieux !</p>
              <Button 
                onClick={onClose}
                variant="outline"
                className="mt-4 border-amber-600 text-amber-600"
              >
                Voir le menu
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl p-4 border border-amber-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-amber-900">{item.name}</h4>
                        <p className="text-amber-600 text-sm">{item.nameAr}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="h-8 w-8 p-0 border-amber-400"
                        >
                          <Minus className="h-3 w-3 text-amber-600" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="h-8 w-8 p-0 border-amber-400"
                        >
                          <Plus className="h-3 w-3 text-amber-600" />
                        </Button>
                      </div>
                      <span className="font-bold text-amber-600">
                        {item.price * item.quantity}€
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-amber-300 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-amber-900">Total</span>
                  <span className="text-2xl font-bold text-amber-600">{total}€</span>
                </div>
                {total < 40 && (
                  <p className="text-sm text-amber-600 mb-4 text-center">
                    Commande minimum : 40€ (il vous manque {40 - total}€)
                  </p>
                )}
                <Button 
                  onClick={onCheckout}
                  disabled={cart.length === 0 || total < 40}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg py-6"
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