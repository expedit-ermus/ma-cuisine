"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChefHat, Phone, MapPin, Clock } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Array<{ id: number; name: string; price: number; quantity: number }>;
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
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setFormData({ name: "", phone: "", address: "", notes: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-amber-50 border-amber-200">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-amber-900 flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-amber-600" />
                Finaliser la commande
              </DialogTitle>
            </DialogHeader>

            <div className="bg-amber-100 rounded-lg p-3 mb-4">
              <p className="text-amber-800 text-sm font-medium mb-2">Récapitulatif :</p>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm text-amber-700">
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
                  className="border-amber-300 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-amber-900">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="06 12 34 56 78"
                  required
                  className="border-amber-300 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-amber-900">Adresse de livraison</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  placeholder="12 Rue du Maroc, 75010 Paris"
                  required
                  className="border-amber-300 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="notes" className="text-amber-900">Notes (optionnel)</Label>
                <Input
                  id="notes"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Sans coriandre, sauce séparée..."
                  className="border-amber-300 bg-white"
                />
              </div>

              <div className="bg-amber-100 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Livraison : 30-45 min</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Rayon : 10km</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>Commande min : 20€</span>
                </div>
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg">
                Confirmer la commande
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Commande confirmée !</h3>
            <p className="text-amber-700 mb-4">
              Merci {formData.name} ! Votre commande sera préparée et livrée sous 30-45 minutes.
            </p>
            <p className="text-amber-600 text-sm mb-6">
              Un SMS de confirmation a été envoyé au {formData.phone}
            </p>
            <Button onClick={handleClose} className="bg-amber-600 hover:bg-amber-700">
              Fermer
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}