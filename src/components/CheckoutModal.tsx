"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, MapPin, Clock, Phone } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Array<{ id: number; name: string; nameAr: string; price: number; quantity: number; image: string }>;
  total: number;
}

export default function CheckoutModal({ isOpen, onClose, cart, total }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const orderItems = cart.map(item => `• ${item.name} x${item.quantity} - ${item.price * item.quantity}€`).join("%0A");
    const message = `🍽️ NOUVELLE COMMANDE M.A Cuisine%0A%0A` +
      `👤 Nom: ${formData.name}%0A` +
      `📞 Téléphone: ${formData.phone}%0A` +
      `📍 Adresse: ${formData.address}%0A` +
      `%0A📦 Commande:%0A${orderItems}%0A` +
      `%0A💰 Total: ${total}€%0A` +
      `%0A📝 Notes: ${formData.notes || 'Aucune'}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/33600000000?text=${message}`, "_blank");
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setFormData({ name: "", phone: "", address: "", notes: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-amber-50 border-amber-300 max-h-[90vh] overflow-y-auto">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-amber-900 flex items-center gap-2 text-xl">
                🍽️ Finaliser la commande
              </DialogTitle>
            </DialogHeader>

            {/* Order Summary */}
            <div className="bg-amber-100 rounded-xl p-4 mb-4">
              <p className="text-amber-900 font-medium mb-2">Récapitulatif :</p>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm text-amber-800">
                  <span>{item.name} x{item.quantity}</span>
                  <span>{item.price * item.quantity}€</span>
                </div>
              ))}
              <div className="border-t border-amber-300 mt-2 pt-2 flex justify-between font-bold text-amber-900">
                <span>Total</span>
                <span>{total}€</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-amber-900">Nom complet</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Votre nom"
                  required
                  className="border-amber-300 bg-white focus:border-amber-500"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-amber-900">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="06 00 00 00 00"
                  required
                  className="border-amber-300 bg-white focus:border-amber-500"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-amber-900">Adresse de livraison</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Votre adresse complète"
                  required
                  rows={2}
                  className="border-amber-300 bg-white focus:border-amber-500"
                />
              </div>

              <div>
                <Label htmlFor="notes" className="text-amber-900">Notes (optionnel)</Label>
                <Input
                  id="notes"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Sans gluten, épicé, etc."
                  className="border-amber-300 bg-white focus:border-amber-500"
                />
              </div>

              {/* Info */}
              <div className="bg-amber-100 rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 text-sm">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span>Livraison : 30-45 min</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800 text-sm">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  <span>Rayon : Paris & IDF</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800 text-sm">
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span>Commande min : 40€</span>
                </div>
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 rounded-full text-lg">
                Confirmer via WhatsApp
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Commande envoyée !</h3>
            <p className="text-gray-600 mb-4">
              Merci {formData.name} ! Votre commande a été envoyée sur WhatsApp. Nous vous contacterons pour confirmer.
            </p>
            <Button onClick={handleClose} className="bg-amber-600 hover:bg-amber-700 rounded-full">
              Fermer
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}