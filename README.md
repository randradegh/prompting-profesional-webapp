# Curso Técnicas Avanzadas de Prompting - Sitio Web

Sitio web moderno y responsivo para el curso "Técnicas Avanzadas de Prompting" impartido por el Ing. Roberto Andrade Fonseca.

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

## 📋 Información del Curso

### 🎯 Objetivo
Dominar las técnicas más avanzadas de prompting para obtener resultados excepcionales con la Inteligencia Artificial Generativa.

### 👨‍🏫 Instructor
**Ing. Roberto Andrade Fonseca**
- Experto en Análisis de Datos con más de 10 años de experiencia
- Profesor de la Maestría en Alta Dirección de la Facultad de Química de la UNAM
- Divulgador de tecnología especializado en IA Generativa e Ingeniería de Peticiones
- Consultor senior en bases de datos relacionales y análisis de datos
- Fundador del movimiento del software libre en México

### 📅 Fechas y Horario
- **Fechas**: 10 al 13 de noviembre de 2025
- **Horario**: De 19 a 21 horas
- **Modalidad**: A Distancia vía Google Meet
- **Duración**: 8 horas de contenido premium

### 💰 Inversión
- **Precio**: $1,600 MXN (20% de descuento)
- **Precio regular**: $2,000 MXN
- **IVA**: Adicionar si requiere factura

### 📧 Inscripción
Para inscribirte, envía un correo a **randradedev@gmail.com** solicitando la inscripción al "Curso Técnicas Avanzadas de Prompting".

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd curso-prompting-webapp
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

## 📞 Contacto

Para información del curso o soporte técnico:
- **Email**: randradedev@gmail.com
- **Teléfono**: +52 (55) 2576-5962
- **Blog**: [randradedev.hashnode.dev](https://randradedev.hashnode.dev/)

## 📚 Recursos Adicionales

- **Blog del instructor**: Artículos sobre IA Generativa e Ingeniería de Peticiones
- **Comunidad**: Únete a la comunidad de profesionales que dominan el prompting
- **Actualizaciones**: Recibe las últimas técnicas y mejores prácticas

---

**Desarrollado con ❤️ para profesionales que buscan dominar la IA Generativa**
