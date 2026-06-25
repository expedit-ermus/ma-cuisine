# MA Cuisine - Restaurant Marocain

Application web moderne pour restaurant marocain avec assistant chat intégré.

## 🚀 Déploiement sur Vercel

### Déploiement automatique (Recommandé)

1. **Connecter le repository à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre repository GitHub/GitLab

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

## ⚡ Optimisations Vercel

- **Edge Caching**: Assets mis en cache au niveau mondial
- **CDN**: Distribution via le réseau Edge de Vercel
- **Build**: Optimisé avec Vite + SWC
- **Code Splitting**: Bundles séparés pour vendor, UI, et charts

## 🛡️ Sécurité

- Headers de sécurité actifs (X-Frame-Options, CSP, etc.)
- Cookies sécurisés avec SameSite=Lax
- Pas de secrets exposés côté client

## 📊 Performance

- Chunk splitting automatique
- CSS minifié
- Source maps désactivés en production
- Tree shaking activé

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

## 🌐 Configuration

### Variables d'environnement

Créer un fichier `.env.local`:

```env
VITE_APP_NAME="MA Cuisine"
VITE_APP_URL=https://macuisine.vercel.app
```

## 📁 Structure du projet

```
├── vercel.json          # Configuration Vercel
├── vite.config.ts       # Configuration Vite
├── src/
│   ├── components/      # Composants React
│   ├── pages/           # Pages de l'application
│   ├── hooks/           # Hooks personnalisés
│   └── lib/             # Utilitaires
└── public/              # Assets statiques
```

## 📜 Licence

MIT
