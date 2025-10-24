# Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto Prompting Profesional! 

## Cómo Contribuir

### Reportar Bugs
- Usa el template de bug report en Issues
- Incluye pasos para reproducir el problema
- Agrega screenshots si es relevante

### Sugerir Mejoras
- Usa el template de feature request en Issues
- Describe claramente la funcionalidad deseada
- Explica por qué sería útil

### Contribuir Código

1. **Fork** el repositorio
2. **Crea una rama** para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Haz tus cambios** y commitea:
   ```bash
   git commit -m "Agregar nueva funcionalidad"
   ```
4. **Push** a tu fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Abre un Pull Request**

## Estándares de Código

### TypeScript/JavaScript
- Usa TypeScript cuando sea posible
- Sigue las convenciones de naming de React
- Comenta código complejo

### CSS/Styling
- Usa Tailwind CSS para estilos
- Mantén consistencia con el design system
- Usa clases utilitarias cuando sea posible

### Componentes React
- Usa functional components con hooks
- Implementa TypeScript interfaces
- Sigue el patrón de componentes existentes

## Estructura del Proyecto

```
webapp/
├── app/                 # App Router de Next.js
├── components/          # Componentes reutilizables
├── public/             # Archivos estáticos
├── styles/             # Estilos globales
└── docs/              # Documentación
```

## Testing

Antes de hacer commit:
```bash
npm run lint          # Verificar linting
npm run build         # Verificar build
npm run dev           # Probar localmente
```

## Convenciones de Git

### Commits
Usa el formato: `tipo: descripción`

Tipos:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Formato, espacios, etc.
- `refactor`: Refactoring de código
- `test`: Tests
- `chore`: Tareas de mantenimiento

### Branches
- `main`: Rama principal
- `feature/nombre`: Nuevas funcionalidades
- `fix/nombre`: Correcciones
- `docs/nombre`: Documentación

## Contacto

Si tienes preguntas:
- Abre un Issue en GitHub
- Contacta al equipo de desarrollo

¡Gracias por contribuir! 🚀
