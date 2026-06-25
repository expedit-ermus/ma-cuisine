"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Maximize2, ExternalLink } from "lucide-react";

const SiteView = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const htmlPath = "/site-MA-Cuisine-v5__3_.html";

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-300 text-sm font-medium">
            {htmlPath}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="text-gray-400 hover:text-white"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <a
            href={htmlPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
          >
            <ExternalLink className="h-4 w-4 text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 relative">
        <iframe
          src={htmlPath}
          title="Site Preview"
          className={`w-full h-full border-0 ${
            isFullscreen ? "fixed inset-0 z-50 bg-black" : ""
          }`}
          sandbox="allow-scripts allow-same-origin"
        />

        {/* Exit Fullscreen Button */}
        {isFullscreen && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-50 bg-black/80 border-white text-white hover:bg-black"
          >
            <X className="h-4 w-4 mr-2" />
            Exit Fullscreen
          </Button>
        )}
      </div>
    </div>
  );
};

export default SiteView;