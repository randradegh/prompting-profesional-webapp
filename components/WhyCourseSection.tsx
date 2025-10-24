'use client'

import { CheckCircle, Zap, Target, TrendingUp, Users, Award, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhyCourseSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Control Total del Tono y Estilo',
      description: 'Aprende a escribir prompts que controlan exactamente el tono, estilo y formato de la IA para obtener resultados profesionales.'
    },
    {
      icon: Zap,
      title: 'Estrategias Avanzadas',
      description: 'Domina técnicas como Chain of Thought, Few-Shot Learning, Role-Playing y Prompt Perfect para maximizar la efectividad.'
    },
    {
      icon: Target,
      title: 'Aplicable a Cualquier Modelo',
      description: 'Las técnicas que aprenderás funcionan con ChatGPT, Claude, Gemini y cualquier modelo de lenguaje grande (LLM).'
    },
    {
      icon: TrendingUp,
      title: 'Aumenta tu Productividad',
      description: 'Automatiza tareas complejas y obtén resultados precisos en menos tiempo, aumentando significativamente tu eficiencia.'
    },
    {
      icon: Users,
      title: 'Diferenciación Profesional',
      description: 'Obtén reconocimiento como experto en IA y destaca en tu campo profesional con habilidades de prompting avanzadas.'
    },
    {
      icon: Award,
      title: 'Resultados Inmediatos',
      description: 'Aplica las técnicas desde el primer día y ve mejoras inmediatas en la calidad y precisión de tus interacciones con IA.'
    }
  ]

  const stats = [
    { icon: Users, value: '200+', label: 'Profesionales Capacitados' },
    { icon: TrendingUp, value: '95%', label: 'Aumento en Productividad' },
    { icon: Award, value: '4.9/5', label: 'Calificación del Curso' },
    { icon: Clock, value: '8h', label: 'Contenido Práctico' }
  ]

  return (
    <section id="por-que" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Por qué este curso?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            No es solo otro curso de IA. Es una formación profesional que te dará las herramientas 
            para controlar la inteligencia artificial con precisión y obtener resultados excepcionales.
          </p>
        </motion.div>

        {/* Beneficios principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Resultados Comprobados
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Miles de profesionales ya han transformado su forma de trabajar con IA
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
