// Intégration du Chatbot MA Cuisine
// Ce script doit être exécuté APRÈS le chargement du DOM

(function() {
  // Créer et ajouter le lien CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = '/chatbot.css';
  document.head.appendChild(cssLink);
  
  // Créer et ajouter le script JS
  const jsScript = document.createElement('script');
  jsScript.src = '/chatbot.js';
  jsScript.onload = function() {
    console.log('✅ Chatbot MA Cuisine chargé avec succès !');
  };
  document.body.appendChild(jsScript);
})();
