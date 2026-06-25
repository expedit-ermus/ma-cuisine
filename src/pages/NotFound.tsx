import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Only log in development mode to avoid information disclosure
    if (import.meta.env.DEV) {
      console.warn("404 - Route non trouvée:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-purple-500">404</h1>
          <h2 className="text-3xl font-semibold text-white">Page non trouvée</h2>
          <p className="text-purple-200 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <Link to="/">
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
          >
            <Home className="h-5 w-5" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
