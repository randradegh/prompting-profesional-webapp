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
                  <span className="text-5xl font-bold text-primary-600 dark:text-primary-400">$1,600</span>
                  <div className="text-left">
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-through">$2,000</div>
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
                Inscríbete Ahora - $1,600 MXN
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

          {/* Información del curso */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendario y horario */}
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
                  Fechas y Horario
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">10 al 13 de noviembre de 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">De 19 a 21 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Modalidad a Distancia. Vía Google Meet</span>
                  </div>
                </div>
              </div>

              {/* Inscripción */}
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Users className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
                  Inscripción
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Para inscribirte, manda un correo a{' '}
                    <a href="mailto:randradedev@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                      randradedev@gmail.com
                    </a>{' '}
                    solicitando la inscripción al "Curso Técnicas Avanzadas de Prompting".
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    A vuelta de correo se te solicitarán algunos datos académicos y conocerás la manera de inscribirte y realizar tu pago del curso.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                    <p className="text-yellow-800 dark:text-yellow-200 font-semibold text-sm">
                      ⚠️ Plazas limitadas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-4">¿Aún tienes dudas?</h3>
                <div className="space-y-2">
                  <p className="text-primary-100">
                    <a href="mailto:randradedev@gmail.com" className="hover:text-white underline">
                      randradedev@gmail.com
                    </a>
                  </p>
                  <p className="text-primary-100">
                    <a href="tel:+525525765962" className="hover:text-white underline">
                      +52 (55) 2576-5962
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
