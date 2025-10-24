'use client'

import { Check, Star, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export function PricingSection() {
  const features = [
    '8 horas de contenido premium',
    '4 módulos estructurados',
    'Ejercicios prácticos incluidos',
    'Comunidad exclusiva',
    'Soporte directo del instructor',
    'Actualizaciones gratuitas',
    'Templates de prompts descargables',
    'Sesiones de Q&A en vivo'
  ]


  return (
    <section id="precios" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Invierte en tu futuro profesional
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Una inversión única que te dará habilidades para toda la vida. 
            El precio de este curso es menor al valor de una sola consultoría profesional.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Plan principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Badge de popular */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Más Popular</span>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl border-2 border-primary-200 dark:border-primary-800 p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Curso Completo
                </h3>
                <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-5xl font-bold text-primary-600 dark:text-primary-400">$1,200</span>
                  <div className="text-left">
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-through">$1,500</div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-semibold">20% OFF</div>
                  </div>
                </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Adicionar IVA si requiere factura
                  </p>
                </div>
              </div>

              {/* Características incluidas */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Todo lo que incluye:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>


              {/* CTA */}
              <button className="w-full btn-primary text-lg py-4 mb-4">
                Inscríbete Ahora - $1,200 MXN
              </button>

              {/* Garantía */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>Garantía de 30 días • Sin preguntas</span>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Testimonial de precio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Aún tienes dudas?
              </h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Recuerda: el costo de NO aprender estas técnicas puede ser mucho mayor. 
                Cada día que esperas es una oportunidad perdida de aumentar tu productividad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Sí, Quiero Inscribirme
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Tengo Preguntas
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
