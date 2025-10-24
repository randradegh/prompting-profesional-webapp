'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Qué nivel de experiencia necesito para tomar este curso?',
      answer: 'Este curso está diseñado para usuarios intermedios de IA. Si ya has usado ChatGPT, Claude o herramientas similares y quieres mejorar tus resultados, este curso es perfecto para ti. No necesitas conocimientos técnicos avanzados.'
    },
    {
      question: '¿Cuánto tiempo necesito para completar el curso?',
      answer: 'El curso tiene 8 horas de contenido estructurado, pero puedes completarlo a tu propio ritmo. La mayoría de estudiantes lo terminan en 1-2 semanas dedicando 1 hora diaria. Tienes acceso de por vida, así que puedes revisar el contenido cuando quieras.'
    },
    {
      question: '¿Funcionan estas técnicas con cualquier modelo de IA?',
      answer: '¡Absolutamente! Las técnicas que aprenderás son universales y funcionan con ChatGPT, Claude, Gemini, y cualquier modelo de lenguaje grande (LLM). Te enseñamos a adaptar las técnicas según la plataforma que uses.'
    },
    {
      question: '¿Recibo algún certificado al completar el curso?',
      answer: 'Sí, al completar el curso recibirás un certificado oficial de "Prompting Profesional" que puedes agregar a tu LinkedIn y CV. Este certificado es reconocido en la industria.'
    },
    {
      question: '¿Hay soporte disponible durante el curso?',
      answer: 'Sí, tienes acceso a soporte directo del instructor a través de la comunidad privada. También organizamos sesiones de Q&A en vivo donde puedes hacer preguntas específicas sobre tu implementación.'
    },
    {
      question: '¿Las técnicas se actualizan con nuevas versiones de IA?',
      answer: 'Sí, mantenemos el curso actualizado con las últimas técnicas y modelos. Como estudiante, recibes todas las actualizaciones gratuitamente. La comunidad también comparte nuevas técnicas que van surgiendo.'
    },
    {
      question: '¿Es mejor que los cursos gratuitos de YouTube?',
      answer: 'Definitivamente. Nuestro curso está estructurado, es completo y va directo al grano. Los cursos gratuitos suelen ser fragmentados y no cubren las técnicas avanzadas. Aquí obtienes un sistema completo y probado.'
    },
    {
      question: '¿Puedo usar estas técnicas en mi trabajo inmediatamente?',
      answer: '¡Absolutamente! Las técnicas están diseñadas para ser aplicadas desde el primer día. Incluimos ejemplos prácticos y templates que puedes usar inmediatamente en tu trabajo. Muchos estudiantes ven resultados el mismo día.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hemos recopilado las preguntas más comunes de nuestros estudiantes. 
            Si tienes alguna duda que no esté aquí, no dudes en contactarnos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-center mb-4">
                <HelpCircle className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">
                  ¿Tienes más preguntas?
                </h3>
              </div>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Nuestro equipo está aquí para ayudarte. Contáctanos y te responderemos 
                en menos de 24 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Contactar Soporte
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Inscríbete Ahora
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
