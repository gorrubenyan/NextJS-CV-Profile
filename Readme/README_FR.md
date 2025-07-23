# 🌟 Site Web Portfolio Moderne

Un magnifique site web portfolio responsive construit avec **Next.js 14**, **Tailwind CSS** et **TypeScript**. Comprend le mode sombre, le support multilingue, des animations fluides et des modèles de design modernes.

![Aperçu du portfolio](./public/preview.png)

## ✨ Fonctionnalités

### 🎨 **Design Moderne**
- Mise en page propre et professionnelle avec des arrière-plans dégradés
- Effets de glassmorphisme et composants UI modernes
- Design responsive qui fonctionne sur tous les appareils
- Effets de survol fluides et micro-interactions

### 🌙 **Support du Mode Sombre**
- Basculer entre les thèmes clair et sombre
- Persistance automatique du thème
- Transitions fluides entre les modes

### 🌍 **Support Multilingue**
- Support pour 5 langues : anglais, arménien, russe, espagnol, français
- Changement de langue facile avec des indicateurs de drapeaux
- Traductions complètes pour tout le contenu

### 🎬 **Animations Avancées**
- Animations de défilement fluides
- Effet de frappe pour les descriptions de rôles
- Barres de progression pour les compétences
- Éléments flottants et effets de parallaxe

### 📱 **Design Responsive**
- Approche mobile-first
- Optimisé pour tablettes et ordinateurs de bureau
- Navigation conviviale au toucher

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- npm ou yarn
- Git

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Exécuter le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir le navigateur**
   Naviguer vers [http://localhost:3000](http://localhost:3000)

## 🛠️ Stack Technologique

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Développement type-safe
- **Tailwind CSS** - Framework CSS utility-first
- **React Icons** - Belle bibliothèque d'icônes

### Fonctionnalités
- **SEO Optimisé** - Meta tags et données structurées
- **Performance** - Images optimisées et chargement différé
- **Accessibilité** - Design conforme WCAG
- **Standards Modernes** - ES6+, CSS Grid, Flexbox

## 📁 Structure du Projet

```
├── app/
│   ├── components/
│   │   ├── LanguageSelector.tsx
│   │   └── ThemeToggle.tsx
│   ├── locales/
│   │   ├── en.json
│   │   ├── hy.json
│   │   ├── ru.json
│   │   ├── es.json
│   │   └── fr.json
│   ├── utils/
│   │   └── translations.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── avatar.png
│   ├── cv.pdf
│   └── images/
└── README.md
```

## 🎨 Guide de Personnalisation

### 1. **Informations Personnelles**
Éditez les fichiers de traduction dans `app/locales/` pour mettre à jour :
- Nom et poste
- Biographie et texte descriptif
- Informations de contact
- Liens réseaux sociaux

### 2. **Couleurs et Thème**
Modifiez `globals.css` pour personnaliser :
- Schémas de couleurs
- Durée des animations
- Variables CSS personnalisées

### 3. **Sections de Contenu**
Mettez à jour `page.tsx` pour modifier :
- Compétences et technologies
- Descriptions de projets
- Expérience professionnelle
- Détails de formation

### 4. **Images**
Remplacez les images dans le dossier `public/` :
- `avatar.png` - Photo de profil
- `cv.pdf` - Fichier CV
- Ajoutez des images de projets selon les besoins

## 🌐 Ajouter de Nouvelles Langues

1. **Créer un fichier de traduction**
   ```bash
   touch app/locales/[code-langue].json
   ```

2. **Ajouter les traductions**
   Copiez la structure de `en.json` et traduisez le contenu

3. **Mettre à jour LanguageSelector**
   Ajoutez la nouvelle langue au tableau `languages` dans `LanguageSelector.tsx`

## 📊 Optimisation des Performances

### Optimisation des Images
- Utilisez le composant Next.js Image
- Implémentez le chargement différé
- Optimisez les formats d'image (WebP, AVIF)

### Division du Code
- Division automatique du code avec Next.js
- Importations dynamiques pour les composants lourds
- Tree shaking pour le code inutilisé

### Optimisation SEO
- Configuration des meta tags
- Tags Open Graph
- Balisage de données structurées
- Génération de sitemap

## 🚀 Déploiement

### Vercel (Recommandé)
1. Poussez le code sur GitHub
2. Connectez le dépôt à Vercel
3. Déployez automatiquement

### Netlify
1. Construisez le projet : `npm run build`
2. Téléchargez le dossier `out` sur Netlify
3. Configurez les redirections si nécessaire

### Serveur Personnalisé
1. Construire : `npm run build`
2. Démarrer : `npm start`
3. Configurer le proxy inverse

## 🧪 Tests

```bash
# Exécuter la vérification des types
npm run type-check

# Exécuter le linting
npm run lint

# Construire pour la production
npm run build
```

## 📈 Intégration Analytics

Ajoutez des analytics pour suivre les performances du portfolio :

```typescript
// Ajouter dans layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔧 Dépannage

### Problèmes Courants

**Erreurs de construction :**
- Vérifiez la version Node.js (18+)
- Nettoyez le dossier `.next` et reconstruisez
- Mettez à jour les dépendances

**Problèmes de style :**
- Purgez le cache Tailwind CSS
- Vérifiez les classes du mode sombre
- Vérifiez la syntaxe CSS personnalisée

**Les traductions ne fonctionnent pas :**
- Vérifiez les chemins de fichiers dans `utils/translations.ts`
- Vérifiez la syntaxe JSON dans les fichiers de localisation
- Assurez-vous que toutes les clés existent dans toutes les langues

## 🤝 Contribuer

1. Forkez le dépôt
2. Créez une branche de fonctionnalité : `git checkout -b feature/amazing-feature`
3. Commitez les changements : `git commit -m 'Add amazing feature'`
4. Poussez vers la branche : `git push origin feature/amazing-feature`
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails.

## 🙏 Remerciements

- **Équipe Next.js** - Framework React incroyable
- **Tailwind CSS** - Framework CSS utility-first
- **Vercel** - Plateforme d'hébergement et de déploiement
- **React Icons** - Belle bibliothèque d'icônes

## 📞 Support

Si vous avez des questions ou besoin d'aide :

- 📧 Email : your.email@example.com
- 💬 GitHub Issues : [Créer un issue](https://github.com/yourusername/modern-portfolio/issues)
- 🌐 Site web : [URL de votre portfolio]

---

⭐ **Mettez une étoile à ce dépôt si vous l'avez trouvé utile !**

Fait avec ❤️ et ☕ par [Votre Nom]