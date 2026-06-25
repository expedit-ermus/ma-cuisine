"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X, MessageCircle, Bot, User, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Couscous Royal", description: "Semoule, légumes, agneau, poulet", price: 18 },
  { id: 2, name: "Tajine Poulet Citron", description: "Poulet, citrons confits, olives", price: 15 },
  { id: 3, name: "Pastilla au Poulet", description: "Feuille de brick, poulet, amandes", price: 12 },
  { id: 4, name: "Kefta Tajine", description: "Boulettes de viande, sauce tomate", price: 14 },
  { id: 5, name: "Harira", description: "Soupe traditionnelle marocaine", price: 6 },
  { id: 6, name: "Mint Tea", description: "Thé à la menthe frais", price: 3 },
];

const initialMessages: Message[] = [
  {
    id: "1",
    role: "bot",
    content: "مرحباً ! Bienvenue chez MA Cuisine 🍽️\n\nJe suis votre assistant. Comment puis-je vous aider ?\n\n• Voir le menu → tapez \"menu\"\n• Passer une commande → tapez \"commander\"\n• Horaires d'ouverture → tapez \"horaires\"\n• Contact → tapez \"contact\"",
    timestamp: new Date(),
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== itemId);
    });
  };

  const deleteFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase().trim();

    if (msg === "menu" || msg === "carte" || msg === "voir le menu") {
      const menuText = menuItems
        .map((item) => `🍴 ${item.name} - ${item.price}€\n   ${item.description}`)
        .join("\n\n");
      return `📋 Voici notre menu :\n\n${menuText}\n\nTapez "commander" pour passer une commande !`;
    }

    if (msg === "commander" || msg === "commande" || msg === "order") {
      setShowCart(true);
      return `🛒 Mode commande activé !\n\nCliquez sur + pour ajouter des articles à votre commande.\n\nQuand vous avez fini, dites "finir ma commande".`;
    }

    if (msg === "finir" || msg === "finir ma commande" || msg === "terminer") {
      if (cart.length === 0) {
        return "Votre panier est vide. Ajoutez des articles avec \"commander\".";
      }
      const total = getCartTotal();
      const itemsList = cart
        .map((item) => `• ${item.name} x${item.quantity} - ${item.price * item.quantity}€`)
        .join("\n");
      setCart([]);
      setShowCart(false);
      return `✅ Commande confirmée !\n\n${itemsList}\n\n💰 Total : ${total}€\n\nMerci pour votre commande ! Un membre de notre équipe vous contactera pour la confirmation.`;
    }

    if (msg === "horaires" || msg === "horaire" || msg === "heures") {
      return `🕐 Horaires d'ouverture :\n\n• Lundi - Vendredi : 11h00 - 22h00\n• Samedi : 12h00 - 23h00\n• Dimanche : 12h00 - 21h00`;
    }

    if (msg === "contact" || msg === "téléphone" || msg === "adresse") {
      return `📍 MA Cuisine\n12 Rue du Maroc, 75010 Paris\n\n📞 01 23 45 67 89\n\n💬 Commandes en ligne disponibles 24h/24`;
    }

    if (msg === "merci" || msg === "thanks") {
      return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊";
    }

    if (msg.includes("/deliv")) {
      return "🚚 La livraison est disponible dans un rayon de 10km. Frais de livraison : 3€. Commande minimum : 20€.";
    }

    if (msg.includes("réservation") || msg.includes("reserve")) {
      return "📅 Pour réserver une table, appelez-nous au 01 23 45 67 89 ou utilisez notre formulaire de réservation sur le site.";
    }

    return "Je ne suis pas sûr de comprendre. Tapez \"menu\" pour voir nos plats, \"commander\" pour passer une commande, ou \"horaires\" pour les horaires d'ouverture.";
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: handleBotResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg flex items-center justify-center z-50 transition-all hover:scale-105"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        {getCartCount() > 0 && (
          <span className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {getCartCount()}
          </span>
        )}
      </Button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="h-14 w-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg flex items-center justify-center relative"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {getCartCount()}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute -top-2 -left-2 h-6 w-6 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center"
          >
            <X className="h-3 w-3 text-white" />
          </button>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] max-h-[80vh] bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-700">
      {/* Header */}
      <div className="bg-purple-700 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">MA Cuisine Assistant</h3>
            <p className="text-purple-200 text-xs">En ligne</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowCart(!showCart)}
            className="p-2 hover:bg-purple-600 rounded-lg transition-colors relative"
          >
            <ShoppingBag className="h-5 w-5 text-white" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {getCartCount()}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-purple-600 rounded-lg transition-colors"
          >
            <Minus className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-purple-600 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Cart View */}
      {showCart && (
        <div className="flex-1 overflow-y-auto p-4 bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" /> Votre Panier
            </h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCart(false)}
              className="text-purple-300 hover:text-purple-100"
            >
              Retour au chat
            </Button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">Votre panier est vide</p>
              <p className="text-gray-500 text-sm mt-1">Ajoutez des plats ci-dessous</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-700 rounded-lg p-3 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{item.name}</p>
                    <p className="text-purple-300 text-xs">{item.price} €</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="h-7 w-7 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center"
                    >
                      <Minus className="h-3 w-3 text-white" />
                    </button>
                    <span className="text-white w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="h-7 w-7 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center"
                    >
                      <Plus className="h-3 w-3 text-white" />
                    </button>
                    <button
                      onClick={() => deleteFromCart(item.id)}
                      className="h-7 w-7 bg-red-600/50 hover:bg-red-600 rounded-full flex items-center justify-center ml-2"
                    >
                      <Trash2 className="h-3 w-3 text-white" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="border-t border-gray-600 pt-3 mt-3">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-300">Total</span>
                  <span className="text-white font-bold text-lg">{getCartTotal()} €</span>
                </div>
                <Button
                  onClick={() => {
                    setShowCart(false);
                    setInputValue("finir ma commande");
                    sendMessage();
                    setTimeout(() => setInputValue(""), 100);
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Confirmer la commande
                </Button>
              </div>
            </div>
          )}

          {/* Quick Add Section */}
          <div className="mt-6">
            <h5 className="text-gray-300 text-sm font-medium mb-3">Ajouter au panier</h5>
            <div className="space-y-2">
              {menuItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => addToCart(item)}
                  className="w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-3 flex items-center justify-between transition-colors"
                >
                  <div className="text-left">
                    <p className="text-white text-sm">{item.name}</p>
                    <p className="text-purple-300 text-xs">{item.price} €</p>
                  </div>
                  <Plus className="h-5 w-5 text-purple-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat View */}
      {!showCart && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-purple-600"
                      : "bg-gray-700"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-purple-300" />
                  )}
                </div>
                <div
                  className={`rounded-2xl px-4 py-2 max-w-[80%] whitespace-pre-line text-sm ${
                    message.role === "user"
                      ? "bg-purple-600 text-white rounded-tr-sm"
                      : "bg-gray-700 text-gray-100 rounded-tl-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2 flex gap-2 flex-wrap">
            <button
              onClick={() => {
                setInputValue("menu");
                sendMessage();
              }}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs rounded-full transition-colors"
            >
              📋 Menu
            </button>
            <button
              onClick={() => {
                setInputValue("commander");
                sendMessage();
              }}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs rounded-full transition-colors"
            >
              🛒 Commander
            </button>
            <button
              onClick={() => {
                setInputValue("horaires");
                sendMessage();
              }}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs rounded-full transition-colors"
            >
              🕐 Horaires
            </button>
            <button
              onClick={() => {
                setInputValue("livraison");
                sendMessage();
              }}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs rounded-full transition-colors"
            >
              🚚 Livraison
            </button>
          </div>

          {/* Input */}
          <div className="p-4 bg-gray-900 border-t border-gray-700">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-full"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim()}
                className="rounded-full bg-purple-600 hover:bg-purple-700 px-4"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;