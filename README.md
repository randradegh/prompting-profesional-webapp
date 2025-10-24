# Prompting Profesional - Sitio Web

Sitio web moderno y responsivo para el curso "Prompting Profesional: Del Texto al Control Preciso de la IA".

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con modo claro y oscuro
- **Totalmente Responsivo**: Optimizado para móviles, tablets y desktop
- **SEO Optimizado**: Meta tags y estructura optimizada para motores de búsqueda
- **Animaciones Suaves**: Transiciones y efectos visuales con Framer Motion
- **Componentes Modulares**: Arquitectura escalable y mantenible
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework de CSS utility-first
- **Framer Motion**: Animaciones y transiciones
- **Lucide React**: Iconografía moderna
- **Responsive Design**: Mobile-first approach

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd prompting-profesional-webapp
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
webapp/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── Header.tsx        # Navegación principal
│   ├── Footer.tsx         # Pie de página
│   ├── HeroSection.tsx    # Sección hero
│   ├── WhyCourseSection.tsx
│   ├── CurriculumSection.tsx
│   ├── InstructorSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── PricingSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactForm.tsx
│   └── ThemeProvider.tsx  # Gestión de temas
├── public/                # Archivos estáticos
└── package.json          # Dependencias y scripts
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Colores primarios
  },
  dark: {
    // Colores del modo oscuro
  }
}
```

### Contenido
- **Hero Section**: Editar `components/HeroSection.tsx`
- **Currículum**: Modificar `components/CurriculumSection.tsx`
- **Testimonios**: Actualizar `components/TestimonialsSection.tsx`
- **Precios**: Cambiar `components/PricingSection.tsx`

### SEO
Configurar meta tags en `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Tu Título',
  description: 'Tu descripción',
  // ... más configuraciones
}
```

## 📱 Responsive Design

El sitio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🌙 Modo Oscuro

- **Automático**: Detecta preferencias del sistema
- **Manual**: Toggle en el header
- **Persistente**: Guarda preferencia en localStorage

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno si es necesario
3. Deploy automático en cada push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Configurar redirects para SPA

### Otros proveedores
```bash
npm run build
npm start
```

## 📊 Métricas y Analytics

Para agregar Google Analytics:

1. Crear cuenta en Google Analytics
2. Obtener el ID de seguimiento
3. Agregar en `app/layout.tsx`:

```typescript
// Agregar script de Google Analytics
```

## 🔧 Scripts Disponibles

- `npm run dev`: Servidor de desarrollo
- `npm run build`: Build de producción
- `npm run start`: Servidor de producción
- `npm run lint`: Linter de código

## 📝 Próximas Mejoras

- [ ] Integración con CMS (Sanity/Contentful)
- [ ] Sistema de pagos (Stripe)
- [ ] Blog integrado
- [ ] Chat en vivo
- [ ] Analytics avanzado
- [ ] A/B Testing
- [ ] PWA (Progressive Web App)

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- Email: soporte@promptingpro.com
- GitHub Issues: [Crear issue](https://github.com/tu-repo/issues)

---

**Desarrollado con ❤️ para profesionales de la IA**
