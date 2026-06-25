# MA Cuisine - Restaurant Marocain 🍽️

Application web moderne pour restaurant marocain avec assistant chat intégré pour les commandes.

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
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 📁 Structure du projet

```
├── public/
│   └── site-MA-Cuisine.html   # Site principal (HTML statique)
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
