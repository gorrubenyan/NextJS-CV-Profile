# 🌟 Sitio Web de Portafolio Moderno

Un impresionante sitio web de portafolio responsivo construido con **Next.js 14**, **Tailwind CSS** y **TypeScript**. Incluye modo oscuro, soporte multiidioma, animaciones suaves y patrones de diseño modernos.

![Vista previa del portafolio](./public/preview.png)

## ✨ Características

### 🎨 **Diseño Moderno**
- Diseño limpio y profesional con fondos degradados
- Efectos de glassmorfismo y componentes UI modernos
- Diseño responsivo que funciona en todos los dispositivos
- Efectos hover suaves y micro-interacciones

### 🌙 **Soporte de Modo Oscuro**
- Alternar entre temas claro y oscuro
- Persistencia automática del tema
- Transiciones suaves entre modos

### 🌍 **Soporte Multiidioma**
- Soporte para 5 idiomas: inglés, armenio, ruso, español, francés
- Cambio fácil de idioma con indicadores de banderas
- Traducciones completas para todo el contenido

### 🎬 **Animaciones Avanzadas**
- Animaciones de desplazamiento suaves
- Efecto de escritura para descripciones de roles
- Barras de progreso para habilidades
- Elementos flotantes y efectos de paralaje

### 📱 **Diseño Responsivo**
- Enfoque mobile-first
- Optimizado para tabletas y escritorio
- Navegación amigable al tacto

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+
- npm o yarn
- Git

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir el navegador**
   Navegar a [http://localhost:3000](http://localhost:3000)

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Desarrollo con tipos seguros
- **Tailwind CSS** - Framework CSS utility-first
- **React Icons** - Hermosa librería de iconos

### Características
- **SEO Optimizado** - Meta tags y datos estructurados
- **Rendimiento** - Imágenes optimizadas y carga diferida
- **Accesibilidad** - Diseño compatible con WCAG
- **Estándares Modernos** - ES6+, CSS Grid, Flexbox

## 📁 Estructura del Proyecto

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

## 🎨 Guía de Personalización

### 1. **Información Personal**
Edita los archivos de traducción en `app/locales/` para actualizar:
- Nombre y posición
- Biografía y texto descriptivo
- Información de contacto
- Enlaces de redes sociales

### 2. **Colores y Tema**
Modifica `globals.css` para personalizar:
- Esquemas de colores
- Duración de animaciones
- Variables CSS personalizadas

### 3. **Secciones de Contenido**
Actualiza `page.tsx` para modificar:
- Habilidades y tecnologías
- Descripciones de proyectos
- Experiencia laboral
- Detalles de educación

### 4. **Imágenes**
Reemplaza las imágenes en la carpeta `public/`:
- `avatar.png` - Foto de perfil
- `cv.pdf` - Archivo de currículum/CV
- Añade imágenes de proyectos según sea necesario

## 🌐 Agregar Nuevos Idiomas

1. **Crear archivo de traducción**
   ```bash
   touch app/locales/[código-idioma].json
   ```

2. **Añadir traducciones**
   Copia la estructura de `en.json` y traduce el contenido

3. **Actualizar LanguageSelector**
   Añade el nuevo idioma al array `languages` en `LanguageSelector.tsx`

## 📊 Optimización de Rendimiento

### Optimización de Imágenes
- Usa el componente Next.js Image
- Implementa carga diferida
- Optimiza formatos de imagen (WebP, AVIF)

### División de Código
- División automática de código con Next.js
- Importaciones dinámicas para componentes pesados
- Tree shaking para código no utilizado

### Optimización SEO
- Configuración de meta tags
- Tags Open Graph
- Marcado de datos estructurados
- Generación de sitemap

## 🚀 Despliegue

### Vercel (Recomendado)
1. Sube el código a GitHub
2. Conecta el repositorio a Vercel
3. Despliega automáticamente

### Netlify
1. Construye el proyecto: `npm run build`
2. Sube la carpeta `out` a Netlify
3. Configura redirecciones si es necesario

### Servidor Personalizado
1. Construir: `npm run build`
2. Iniciar: `npm start`
3. Configurar proxy inverso

## 🧪 Pruebas

```bash
# Ejecutar verificación de tipos
npm run type-check

# Ejecutar linting
npm run lint

# Construir para producción
npm run build
```

## 📈 Integración de Analytics

Añade analytics para rastrear el rendimiento del portafolio:

```typescript
// Añadir en layout.tsx
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

## 🔧 Solución de Problemas

### Problemas Comunes

**Errores de construcción:**
- Verifica la versión de Node.js (18+)
- Limpia la carpeta `.next` y reconstruye
- Actualiza las dependencias

**Problemas de estilo:**
- Purga el caché de Tailwind CSS
- Verifica las clases del modo oscuro
- Verifica la sintaxis CSS personalizada

**Las traducciones no funcionan:**
- Verifica las rutas de archivos en `utils/translations.ts`
- Verifica la sintaxis JSON en archivos de localización
- Asegúrate de que todas las claves existan en todos los idiomas

## 🤝 Contribuir

1. Haz fork del repositorio
2. Crea una rama de característica: `git checkout -b feature/amazing-feature`
3. Confirma los cambios: `git commit -m 'Add amazing feature'`
4. Empuja a la rama: `git push origin feature/amazing-feature`
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- **Equipo Next.js** - Increíble framework de React
- **Tailwind CSS** - Framework CSS utility-first
- **Vercel** - Plataforma de hosting y despliegue
- **React Icons** - Hermosa librería de iconos

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- 📧 Email: your.email@example.com
- 💬 GitHub Issues: [Crear un issue](https://github.com/yourusername/modern-portfolio/issues)
- 🌐 Sitio web: [URL de tu portafolio]

---

⭐ **¡Dale una estrella a este repositorio si te resultó útil!**

Hecho con ❤️ y ☕ por [Tu Nombre]