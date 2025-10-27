'use client'

import { Star, Quote, TrendingUp, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Consultora Digital',
      company: 'TechConsult',
      avatar: 'MG',
      rating: 5,
      text: 'Este curso transformó completamente mi forma de trabajar con IA. Ahora puedo obtener resultados precisos en la mitad del tiempo. Las técnicas de Chain of Thought que aprendí son increíbles.',
      results: 'Aumentó 300% su productividad'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Analista de Datos',
      company: 'DataCorp',
      avatar: 'CR',
      rating: 5,
      text: 'Las técnicas de prompting que aprendí aquí me han dado una ventaja competitiva enorme. Ahora automatizo tareas que antes me tomaban horas en minutos.',
      results: 'Automatizó 80% de sus tareas'
    },
    {
      name: 'Ana Martínez',
      role: 'Directora de Marketing',
      company: 'InnovateLab',
      avatar: 'AM',
      rating: 5,
      text: 'Como directora de marketing, necesito contenido de calidad constante. Este curso me enseñó a generar briefs perfectos para mi equipo creativo usando IA.',
      results: 'Mejoró 250% la calidad del contenido'
    },
    {
      name: 'Roberto Silva',
      role: 'Desarrollador Full-Stack',
      company: 'DevStudio',
      avatar: 'RS',
      rating: 5,
      text: 'Las técnicas de Few-Shot Learning que aprendí aquí me han ayudado a crear prompts que generan código más limpio y eficiente. Es impresionante.',
      results: 'Redujo 60% el tiempo de desarrollo'
    },
    {
      name: 'Laura Fernández',
      role: 'Profesora Universitaria',
      company: 'Universidad Nacional',
      avatar: 'LF',
      rating: 5,
      text: 'Uso las técnicas de prompting para crear materiales educativos personalizados para mis estudiantes. La calidad y relevancia del contenido ha mejorado dramáticamente.',
      results: 'Mejoró 400% la satisfacción estudiantil'
    },
    {
      name: 'Diego Herrera',
      role: 'Emprendedor',
      company: 'StartupAI',
      avatar: 'DH',
      rating: 5,
      text: 'Como emprendedor, necesito ser eficiente en todo. Este curso me enseñó a usar la IA como mi asistente personal más inteligente. Los resultados hablan por sí solos.',
      results: 'Escaló su negocio 5x más rápido'
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Profesionales Capacitados' },
    { icon: Star, value: '4.9/5', label: 'Calificación Promedio' },
    { icon: TrendingUp, value: '95%', label: 'Aumento en Productividad' },
    { icon: Clock, value: '8h', label: 'Contenido Práctico' }
  ]

  return (
    <section id="testimonios" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Miles de profesionales ya han transformado su carrera con nuestras técnicas de prompting. 
            Descubre sus historias de éxito.
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary-200 dark:text-primary-800" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Result highlight */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                    {testimonial.results}
                  </span>
                </div>
              </div>

              {/* Author info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} en {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
