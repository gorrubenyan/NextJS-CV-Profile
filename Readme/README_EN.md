# 🌟 Modern Portfolio Website

A stunning, responsive portfolio website built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Features dark mode, multilingual support, smooth animations, and modern design patterns.

![Portfolio Preview](./public/preview.png)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional layout with gradient backgrounds
- Glassmorphism effects and modern UI components
- Responsive design that works on all devices
- Smooth hover effects and micro-interactions

### 🌙 **Dark Mode Support**
- Toggle between light and dark themes
- Automatic theme persistence
- Smooth transitions between modes

### 🌍 **Multilingual Support**
- Support for 5 languages: English, Armenian, Russian, Spanish, French
- Easy language switching with flag indicators
- Complete translations for all content

### 🎬 **Advanced Animations**
- Smooth scroll animations
- Typing effect for role descriptions
- Progress bars for skills
- Floating elements and parallax effects

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library

### Features
- **SEO Optimized** - Meta tags and structured data
- **Performance** - Optimized images and lazy loading
- **Accessibility** - WCAG compliant design
- **Modern Standards** - ES6+, CSS Grid, Flexbox

## 📁 Project Structure

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

## 🎨 Customization Guide

### 1. **Personal Information**
Edit the translation files in `app/locales/` to update:
- Name and position
- Bio and about text
- Contact information
- Social media links

### 2. **Colors and Theme**
Modify `globals.css` to customize:
- Color schemes
- Animation durations
- Custom CSS variables

### 3. **Content Sections**
Update `page.tsx` to modify:
- Skills and technologies
- Project descriptions
- Work experience
- Education details

### 4. **Images**
Replace images in `public/` folder:
- `avatar.png` - Profile picture
- `cv.pdf` - Resume/CV file
- Add project images as needed

## 🌐 Adding New Languages

1. **Create translation file**
   ```bash
   touch app/locales/[language-code].json
   ```

2. **Add translations**
   Copy structure from `en.json` and translate content

3. **Update LanguageSelector**
   Add new language to the `languages` array in `LanguageSelector.tsx`

## 📊 Performance Optimization

### Image Optimization
- Use Next.js Image component
- Implement lazy loading
- Optimize image formats (WebP, AVIF)

### Code Splitting
- Automatic code splitting with Next.js
- Dynamic imports for heavy components
- Tree shaking for unused code

### SEO Optimization
- Meta tags configuration
- Open Graph tags
- Structured data markup
- Sitemap generation

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out` folder to Netlify
3. Configure redirects if needed

### Custom Server
1. Build: `npm run build`
2. Start: `npm start`
3. Configure reverse proxy

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build
```

## 📈 Analytics Integration

Add analytics to track portfolio performance:

```typescript
// Add to layout.tsx
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

## 🔧 Troubleshooting

### Common Issues

**Build errors:**
- Check Node.js version (18+)
- Clear `.next` folder and rebuild
- Update dependencies

**Styling issues:**
- Purge Tailwind CSS cache
- Check dark mode classes
- Verify custom CSS syntax

**Translation not working:**
- Check file paths in `utils/translations.ts`
- Verify JSON syntax in locale files
- Ensure all keys exist in all languages

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Hosting and deployment platform
- **React Icons** - Beautiful icon library

## 📞 Support

If you have questions or need help:

- 📧 Email: your.email@example.com
- 💬 GitHub Issues: [Create an issue](https://github.com/yourusername/modern-portfolio/issues)
- 🌐 Website: [your portfolio URL]

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and ☕ by [Your Name]