"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-2">Contactez-nous</h2>
          <p className="text-amber-700">Nous sommes à votre service</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">12 Rue du Maroc, 75010 Paris</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">01 23 45 67 89</p>
                    <p className="text-gray-500 text-sm">Commandes 24h/24</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@macuisine.fr</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Horaires</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Vendredi: 11h00 - 22h00</p>
                      <p>Samedi: 12h00 - 23h00</p>
                      <p>Dimanche: 12h00 - 21h00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Message envoyé !</h3>
                  <p className="text-amber-700">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-amber-900">Nom</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom"
                      required
                      className="border-amber-300 bg-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email" className="text-amber-900">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      required
                      className="border-amber-300 bg-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-amber-900">Message</Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      rows={5}
                      required
                      className="border-amber-300 bg-white"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white gap-2">
                    <Send className="h-4 w-4" />
                    Envoyer
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}