import { Button } from "@/components/ui/button";
import { ExternalLink, FileCode, Home } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            MA Cuisine
          </h1>
          <p className="text-xl text-purple-200">
            Your uploaded site is ready to view
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/view-site">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
            >
              <Home className="h-5 w-5" />
              View Site in App
            </Button>
          </a>
          <a href="/site-MA-Cuisine-v5__3_.html" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-200 hover:bg-purple-800/30 gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              Open in New Tab
            </Button>
          </a>
          <a href="/site-MA-Cuisine-v5__3_.html" download>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-200 hover:bg-purple-800/30 gap-2"
            >
              <FileCode className="h-5 w-5" />
              Download HTML
            </Button>
          </a>
        </div>

        <p className="text-sm text-purple-300/60">
          HTML file: <code className="bg-black/30 px-2 py-1 rounded">public/site-MA-Cuisine-v5__3_.html</code>
        </p>
      </div>
    </div>
  );
};

export default Index;