'use client'

import { BookOpen, Clock, CheckCircle, Brain, Cpu, Zap, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export function CurriculumSection() {
  const modules = [
    {
      number: 1,
      title: '¿Qué es un modelo masivo de lenguaje (LLM)?',
      duration: '1 hora',
      icon: Brain,
      topics: [
        '¿Qué es un LLM y cómo funciona?',
        'Modelos sobresalientes del mercado',
        'Sitio Leaderboard y comparación de modelos'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      title: 'Modelos, RAG y Agentes',
      duration: '1 hora',
      icon: Cpu,
      topics: [
        'Modelos líderes: GPT, Claude, Gemini',
        '¿Qué es RAG (Retrieval-Augmented Generation)?',
        'Agentes de IA y sus casos de uso',
        'Integración de sistemas de IA'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      number: 3,
      title: 'Prompting: Primer Acercamiento',
      duration: '2 horas',
      icon: BookOpen,
      topics: [
        '¿Qué es un prompt? Fundamentos',
        'Técnicas tradicionales: Chain-of-Thought, Few-Shot Learning y Role-Playing',
        'Ejemplos prácticos de implementación',
        'Limitaciones de las técnicas estándar'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 4,
      title: 'Técnicas de Prompting Avanzadas',
      duration: '4 horas',
      icon: Zap,
      topics: [
        'Prompt Engineering vs Técnicas de Prompting',
        'Niveles de uso de la IA Generativa',
        'Prompt Optimization: Prompt Perfect',
        'Vibe Coding: Product Requirements Document (PRD) + Contexto',
        'Spec Kit: Build high-quality software faster',
        'Claude Skills: una excelente alternativa'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const learningOutcomes = [
    'Escribir prompts que controlen el tono, estilo y formato de la IA',
    'Aplicar técnicas de prompting como Chain of Thought y Few-Shot Learning',
    'Optimizar prompts para obtener resultados precisos',
    'Implementar técnicas avanzadas en cualquier modelo LLM',
    'Crear sistemas de prompting escalables y reutilizables',
    'Resolver problemas complejos usando técnicas de prompting'
  ]

  return (
    <section id="curriculum" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Lo que aprenderás
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un programa estructurado de 8 horas que te llevará desde los fundamentos 
            hasta las técnicas más avanzadas de prompting profesional.
          </p>
        </motion.div>

        {/* Módulos del curso */}
        <div className="space-y-8 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Información del módulo */}
                <div className="lg:w-1/3">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                      {module.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {module.title}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{module.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-primary-600 dark:text-primary-400">
                    <module.icon className="h-6 w-6 mr-2" />
                    <span className="font-medium">Módulo {module.number}</span>
                  </div>
                </div>

                {/* Temas del módulo */}
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Temas que cubrirás:
                  </h4>
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resultados de aprendizaje */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Al finalizar el curso podrás:
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Habilidades concretas que aplicarás inmediatamente en tu trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <Target className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {outcome}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
