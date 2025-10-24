'use client'

import { ArrowRight, Play, Sparkles, Zap, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Curso Profesional de Prompting
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              <span className="text-primary-600 dark:text-primary-400">Prompting</span>{' '}
              Profesional
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
            >
              Del Texto al Control Preciso de la IA
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              Domina las técnicas más avanzadas para obtener exactamente lo que deseas de la inteligencia artificial. 
              Aprende frameworks como Chain of Thought, Few-Shot Learning y Prompt Perfect.
            </motion.p>

            {/* Beneficios clave */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Zap className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Control Preciso
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Target className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Resultados Exactos
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Técnicas Avanzadas
                </span>
              </div>
            </motion.div>


            {/* Estadísticas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-dark-700"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Horas de Contenido</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Módulos Prácticos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Aplicable</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/hero-main.jpeg"
                alt="Prompting Profesional - Técnicas avanzadas de IA"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
