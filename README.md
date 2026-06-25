# MA Cuisine - Restaurant Marocain 🍽️

Application web moderne pour restaurant avec chatbot intégré pour les commandes.

## 🚀 Déploiement sur Vercel

### Déploiement automatique (Recommandé)

1. **Connecter le repository à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre repository GitHub

2. **Configuration automatique**
   - Vercel détectera automatiquement `vercel.json`
   - Le framework "Vite" sera détecté

3. **Déployer**
   - Cliquez sur "Deploy"

### Déploiement via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📁 Structure du projet

```
├── public/
│   ├── site-MA-Cuisine.html   # Site principal (HTML statique)
│   ├── chatbot.css             # Styles du chatbot
│   ├── chatbot.js              # Logique du chatbot
│   └── integrate-chatbot.js     # Script d'intégration
├── src/
│   ├── components/
│   │   └── ChatBot.tsx        # Assistant chat React
│   ├── pages/
│   │   ├── Index.tsx          # Page d'accueil
│   │   └── NotFound.tsx       # Page 404
│   └── App.tsx                # Application principale
├── vercel.json                # Configuration Vercel
├── vite.config.ts             # Configuration Vite
└── package.json
```

## 💬 Intégration du Chatbot

### Pour le site HTML statique (`public/site-MA-Cuisine.html`)

Ajoutez ces lignes avant la balise `</body>` :

```html
<link rel="stylesheet" href="/chatbot.css">
<script src="/chatbot.js"></script>
```

Ou utilisez le script d'intégration automatique :

```html
<script src="/integrate-chatbot.js"></script>
```

### Fonctionnalités du Chatbot

- 🤖 Assistant virtuel "Emma" avec IA
- 📋 Menu interactif avec prix
- 🛒 Panier de commande intégré
- 🚴 Informations livraison
- 📅 Prochains événements
- 📍 Contact et localisation
- 🌿 Options sans gluten

### Commandes du Chatbot

| Commande | Description |
|----------|-------------|
| `menu` | Affiche la carte complète |
| `commander` | Active le mode commande |
| `livraison` | Informations livraison |
| `contact` | Coordonnées du restaurant |
| `événements` | Calendrier événements |
| `prix` | Liste des tarifs |
| `emma` | Histoire de la fondatrice |

## 🌐 URLs après déploiement

- **Application React** : `https://macuisine.vercel.app`
- **Site principal** : `https://macuisine.vercel.app/site-MA-Cuisine.html`

## 🛡️ Sécurité

- Headers de sécurité actifs (X-Frame-Options, CSP, etc.)
- Cookies sécurisés avec SameSite=Lax
- Pas de secrets exposés côté client

## 📊 Performance

- Chunk splitting automatique
- CSS minifié
- Source maps désactivés en production
- Tree shaking activé
- CDN Edge Vercel

## 🛠️ Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📜 Licence

MIT
