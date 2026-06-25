import { Button } from "@/components/ui/button";
import { ExternalLink, Home, Utensils } from "lucide-react";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 bg-purple-600 rounded-full flex items-center justify-center">
              <Utensils className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight">
            MA Cuisine
          </h1>
          <p className="text-xl text-purple-200">
            Restaurant marocain authentique avec assistant de commande intelligent
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/site-MA-Cuisine.html" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
            >
              <Home className="h-5 w-5" />
              Voir le site
            </Button>
          </a>
          <a href="/site-MA-Cuisine.html" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-200 hover:bg-purple-800/30 gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              Ouvrir dans un nouvel onglet
            </Button>
          </a>
        </div>

        <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-white font-semibold mb-3">🍽️ Fonctionnalités</h3>
          <ul className="text-purple-200 text-sm space-y-2 text-left max-w-sm mx-auto">
            <li>✅ Assistant chat pour commander</li>
            <li>✅ Menu interactif avec photos</li>
            <li>✅ Panier de commande intégré</li>
            <li>✅ Design responsive mobile</li>
            <li>✅ Optimisé pour Vercel</li>
          </ul>
        </div>

        <p className="text-sm text-purple-300/60">
          💬 Cliquez sur l'icône de chat en bas à droite pour discuter et passer commande
        </p>
      </div>
      
      {/* ChatBot component */}
      <ChatBot />
    </div>
  );
};

export default Index;
