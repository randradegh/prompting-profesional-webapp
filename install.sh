#!/bin/bash

# Script de instalación para Prompting Profesional Webapp
# Este script configura el proyecto y instala todas las dependencias

echo "🚀 Configurando Prompting Profesional Webapp..."

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org/"
    exit 1
fi

# Verificar versión de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Se requiere Node.js 18 o superior. Versión actual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Verificar si npm está disponible
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está disponible"
    exit 1
fi

echo "✅ npm $(npm -v) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

# Crear archivo de entorno de ejemplo
echo "📝 Creando archivo de configuración de ejemplo..."
cat > .env.local.example << EOF
# Configuración del sitio web
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Prompting Profesional"

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (opcional)
EMAIL_SERVICE_API_KEY=your_email_service_key
EMAIL_SERVICE_DOMAIN=your_email_domain

# Formularios (opcional)
FORMSPREE_ENDPOINT=your_formspree_endpoint
EOF

echo "✅ Archivo .env.local.example creado"

# Crear directorio para imágenes si no existe
mkdir -p public/images

echo ""
echo "🎉 ¡Instalación completada!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Copia .env.local.example a .env.local y configura las variables"
echo "2. Ejecuta 'npm run dev' para iniciar el servidor de desarrollo"
echo "3. Abre http://localhost:3000 en tu navegador"
echo ""
echo "🛠️  Comandos disponibles:"
echo "  npm run dev     - Servidor de desarrollo"
echo "  npm run build   - Build de producción"
echo "  npm run start   - Servidor de producción"
echo "  npm run lint    - Verificar código"
echo ""
echo "📚 Documentación completa en README.md"
echo ""
echo "¡Disfruta creando tu sitio web de prompting profesional! 🚀"
