import { Button } from "@/components/ui/button";
import { ExternalLink, FileCode, Home } from "lucide-react";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            MA Cuisine
          </h1>
          <p className="text-xl text-purple-200">
            Votre site est prêt avec un assistant chat !
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
            >
              <Home className="h-5 w-5" />
              Voir le site
            </Button>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
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
