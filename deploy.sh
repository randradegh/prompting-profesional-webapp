#!/bin/bash

# Script de despliegue para Netlify
# Curso Técnicas Avanzadas de Prompting

echo "🚀 Preparando despliegue para Netlify..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
    exit 1
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Ejecutar build
echo "🔨 Construyendo proyecto..."
npm run build

# Verificar que el build fue exitoso
if [ ! -d "out" ]; then
    echo "❌ Error: El build falló. No se encontró la carpeta 'out'."
    exit 1
fi

echo "✅ Build completado exitosamente!"
echo "📁 Archivos listos en la carpeta 'out/'"
echo ""
echo "🌐 Para desplegar en Netlify:"
echo "1. Ve a https://netlify.com"
echo "2. Arrastra la carpeta 'out' a la zona de deploy"
echo "3. O conecta tu repositorio de GitHub para deploy automático"
echo ""
echo "📋 Configuración recomendada en Netlify:"
echo "   - Build command: npm run build"
echo "   - Publish directory: out"
echo "   - Node version: 18"
echo ""
echo "🎉 ¡Tu sitio web del curso está listo para desplegar!"
