# Guía de Despliegue en Netlify

Esta guía te ayudará a desplegar el sitio web del curso "Técnicas Avanzadas de Prompting" en Netlify.

## 🚀 Despliegue Automático

### Opción 1: Conectar con GitHub (Recomendado)

1. **Subir el código a GitHub**
   ```bash
   git add .
   git commit -m "Preparar para despliegue en Netlify"
   git push origin main
   ```

2. **Conectar con Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión o crea una cuenta
   - Haz clic en "New site from Git"
   - Conecta tu repositorio de GitHub
   - Configura las siguientes opciones:
     - **Build command**: `npm run build`
     - **Publish directory**: `out`
     - **Node version**: `18`

3. **Configuración automática**
   - Netlify detectará automáticamente el archivo `netlify.toml`
   - El despliegue se realizará automáticamente

### Opción 2: Despliegue Manual

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Subir archivos a Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Arrastra la carpeta `out` a la zona de "Deploy manually"
   - O usa la CLI de Netlify:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=out
     ```

## ⚙️ Configuración del Proyecto

### Archivos de Configuración

- **`netlify.toml`**: Configuración principal de Netlify
- **`public/_redirects`**: Redirecciones para SPA
- **`next.config.js`**: Configuración de Next.js para export estático

### Variables de Entorno (si es necesario)

Si necesitas variables de entorno, agrégalas en:
- Netlify Dashboard → Site settings → Environment variables

## 🔧 Configuración de Build

### Comandos de Build
```bash
# Instalar dependencias
npm install

# Construir para producción
npm run build

# El resultado estará en la carpeta 'out'
```

### Estructura de Archivos de Salida
```
out/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── images/
└── ...
```

## 🌐 Configuración de Dominio

### Dominio Personalizado
1. Ve a Site settings → Domain management
2. Agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones de Netlify

### SSL/HTTPS
- Netlify proporciona SSL automático
- Se activa automáticamente para dominios de Netlify
- Para dominios personalizados, sigue las instrucciones de Netlify

## 📊 Monitoreo y Analytics

### Netlify Analytics
- Activa Netlify Analytics en Site settings
- Monitorea visitas, páginas más populares, etc.

### Google Analytics (Opcional)
Para agregar Google Analytics, edita `app/layout.tsx`:

```typescript
// Agregar en el <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

## 🔄 Despliegues Automáticos

### GitHub Integration
- Cada push a la rama `main` activará un nuevo despliegue
- Los pull requests pueden generar previews automáticos

### Webhooks
- Configura webhooks para otros repositorios si es necesario
- Ve a Site settings → Build & deploy → Build hooks

## 🐛 Solución de Problemas

### Build Fails
1. Revisa los logs de build en Netlify Dashboard
2. Verifica que todas las dependencias estén en `package.json`
3. Asegúrate de que el Node.js version sea compatible

### 404 Errors
1. Verifica que `public/_redirects` esté presente
2. Revisa la configuración de `netlify.toml`
3. Asegúrate de que `output: 'export'` esté en `next.config.js`

### Images Not Loading
1. Verifica que `images.unoptimized: true` esté en `next.config.js`
2. Asegúrate de que las imágenes estén en `public/images/`

## 📱 Testing Post-Despliegue

### Checklist
- [ ] El sitio carga correctamente
- [ ] Todas las imágenes se muestran
- [ ] Los enlaces funcionan
- [ ] El modo oscuro/claro funciona
- [ ] El sitio es responsive
- [ ] Los formularios funcionan (si los hay)
- [ ] El SEO está configurado correctamente

### Herramientas de Testing
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🔒 Seguridad

### Headers de Seguridad
El archivo `netlify.toml` incluye headers de seguridad:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### HTTPS
- Netlify fuerza HTTPS automáticamente
- Los certificados SSL se renuevan automáticamente

## 📈 Optimización

### Performance
- Las imágenes están optimizadas con Next.js
- Los archivos estáticos tienen cache headers apropiados
- El CSS y JS están minificados

### SEO
- Meta tags configurados en `app/layout.tsx`
- Sitemap automático (si se configura)
- URLs amigables

## 🆘 Soporte

Si tienes problemas con el despliegue:
1. Revisa los logs de build en Netlify
2. Consulta la [documentación de Netlify](https://docs.netlify.com/)
3. Contacta al desarrollador: randradedev@gmail.com

---

**¡Tu sitio web del curso estará listo para recibir estudiantes!** 🎓