// Configuración del proyecto Prompting Profesional
module.exports = {
  // Información del sitio
  site: {
    name: 'Prompting Profesional',
    description: 'Del Texto al Control Preciso de la IA',
    url: 'https://promptingprofesional.com',
    author: 'Dr. Alejandro Martínez'
  },

  // Configuración del curso
  course: {
    title: 'Prompting Profesional: Del Texto al Control Preciso de la IA',
    duration: '8 horas',
    modules: 4,
    price: 1200,
    originalPrice: 1500,
    currency: 'MXN',
    language: 'es'
  },

  // Configuración de colores
  colors: {
    primary: '#3B82F6',
    secondary: '#1E40AF',
    accent: '#F59E0B',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },

  // Configuración de animaciones
  animations: {
    duration: 300,
    easing: 'ease-in-out'
  },

  // Configuración de SEO
  seo: {
    title: 'Prompting Profesional: Del Texto al Control Preciso de la IA',
    description: 'Domina las técnicas más avanzadas para obtener exactamente lo que deseas de la inteligencia artificial. Aprende prompting profesional con frameworks como Chain of Thought, Few-Shot Learning y más.',
    keywords: 'prompting, inteligencia artificial, IA, ChatGPT, Claude, Gemini, prompt engineering, curso online',
    ogImage: '/images/og-image.jpg',
    twitterCard: 'summary_large_image'
  },

  // Configuración de formularios
  forms: {
    contact: {
      endpoint: process.env.FORMSPREE_ENDPOINT || '',
      fields: ['name', 'email', 'phone', 'message', 'interest']
    }
  },

  // Configuración de analytics
  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_ID || '',
    trackingEnabled: process.env.NODE_ENV === 'production'
  },

  // Configuración de redes sociales
  social: {
    linkedin: 'https://linkedin.com/in/promptingpro',
    twitter: 'https://twitter.com/promptingpro',
    github: 'https://github.com/promptingpro',
    email: 'info@promptingprofesional.com'
  }
}
