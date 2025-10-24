# 🚀 Guía de Despliegue - Prompting Profesional

Esta guía te ayudará a desplegar el sitio web en diferentes plataformas.

## 📋 Pre-requisitos

- Cuenta en la plataforma de hosting elegida
- Repositorio en GitHub/GitLab
- Dominio (opcional pero recomendado)

## 🌐 Opciones de Despliegue

### 1. Vercel (Recomendado)

**Ventajas:**
- Optimizado para Next.js
- Deploy automático
- CDN global
- SSL automático

**Pasos:**
1. Conectar cuenta de GitHub a Vercel
2. Importar repositorio
3. Configurar variables de entorno (opcional)
4. Deploy automático

**Variables de entorno recomendadas:**
```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. Netlify

**Ventajas:**
- Fácil configuración
- Formularios integrados
- CDN global

**Configuración:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18

### 3. AWS Amplify

**Ventajas:**
- Escalabilidad
- Integración con AWS
- CI/CD automático

### 4. DigitalOcean App Platform

**Ventajas:**
- Precio competitivo
- Fácil escalado
- Buena documentación

## 🔧 Configuración Post-Despliegue

### 1. Dominio Personalizado

1. Comprar dominio
2. Configurar DNS:
   - A record → IP del servidor
   - CNAME www → tu-dominio.com
3. Configurar SSL (automático en Vercel/Netlify)

### 2. Analytics

**Google Analytics:**
1. Crear cuenta en Google Analytics
2. Obtener ID de seguimiento
3. Agregar a variables de entorno

**Configuración en el código:**
```typescript
// app/layout.tsx
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
```

### 3. Formularios

**Opción 1: Formspree**
1. Crear cuenta en Formspree
2. Crear formulario
3. Obtener endpoint
4. Configurar en variables de entorno

**Opción 2: Netlify Forms**
- Automático si usas Netlify
- No requiere configuración adicional

### 4. Email Marketing

**Mailchimp:**
1. Crear cuenta
2. Obtener API key
3. Configurar webhook

**ConvertKit:**
1. Crear cuenta
2. Configurar formularios
3. Integrar API

## 📊 Monitoreo y Performance

### 1. Core Web Vitals

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### 2. Herramientas de Monitoreo

- **Vercel Analytics**: Automático
- **Google PageSpeed**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/

### 3. Optimizaciones

```bash
# Optimizar imágenes
npm run build

# Verificar bundle size
npm run analyze
```

## 🔒 Seguridad

### 1. Headers de Seguridad

```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
]
```

### 2. Variables de Entorno

- Nunca commitear `.env.local`
- Usar variables de entorno del hosting
- Rotar keys regularmente

## 🚀 Comandos de Despliegue

### Desarrollo Local
```bash
npm run dev
```

### Build de Producción
```bash
npm run build
npm run start
```

### Verificación Pre-Deploy
```bash
npm run lint
npm run build
npm run start
```

## 📈 Optimizaciones de Performance

### 1. Imágenes
- Usar formato WebP
- Optimizar tamaños
- Lazy loading

### 2. CSS/JS
- Minificación automática
- Tree shaking
- Code splitting

### 3. Caching
- Headers de cache
- CDN configuration
- Service workers (PWA)

## 🐛 Troubleshooting

### Error: Build Failed
```bash
# Limpiar cache
rm -rf .next
npm run build
```

### Error: Module Not Found
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error: Environment Variables
- Verificar variables en panel de hosting
- Revisar sintaxis de archivos .env
- Reiniciar deployment

## 📞 Soporte

Si encuentras problemas:

1. **Revisar logs** en panel de hosting
2. **Verificar configuración** de variables de entorno
3. **Consultar documentación** de la plataforma
4. **Contactar soporte** del hosting

## 🎯 Checklist Pre-Launch

- [ ] Build exitoso sin errores
- [ ] Variables de entorno configuradas
- [ ] Dominio configurado
- [ ] SSL habilitado
- [ ] Analytics funcionando
- [ ] Formularios probados
- [ ] Performance optimizada
- [ ] SEO configurado
- [ ] Mobile responsive
- [ ] Cross-browser testing

---

**¡Tu sitio web está listo para conquistar el mundo del prompting profesional! 🚀**
