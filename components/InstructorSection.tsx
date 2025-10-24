'use client'

import { Award, Linkedin, Twitter, Github, Users, BookOpen, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function InstructorSection() {
  const credentials = [
    {
      icon: Award,
      title: 'Experto en IA',
      description: 'Más de 5 años trabajando con modelos de lenguaje y sistemas de IA'
    },
    {
      icon: Users,
      title: '500+ Estudiantes',
      description: 'Ha capacitado a cientos de profesionales en técnicas de prompting'
    },
    {
      icon: BookOpen,
      title: 'Investigador',
      description: 'Publicaciones en conferencias internacionales sobre IA generativa'
    },
    {
      icon: Star,
      title: '4.9/5 Calificación',
      description: 'Reconocido por la calidad y efectividad de sus cursos'
    }
  ]

  const achievements = [
    'Consultor senior en IA para empresas Fortune 500',
    'Autor de múltiples papers sobre prompting y LLMs',
    'Speaker en conferencias internacionales de IA',
    'Fundador de la comunidad "Prompting Professionals"',
    'Certificado en Machine Learning por Stanford',
    'Ex-Google AI Research Engineer'
  ]

  return (
    <section id="instructor" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Conoce a tu instructor
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un experto reconocido en IA que ha transformado la forma en que las empresas 
            y profesionales interactúan con la inteligencia artificial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto y información básica */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Foto del instructor */}
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-white">AI</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Foto del Instructor
                  </p>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Dr. Alejandro Martínez
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
              Experto en Inteligencia Artificial y Prompting
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Con más de 5 años de experiencia en el campo de la IA, Alejandro ha sido pionero 
              en el desarrollo de técnicas de prompting avanzadas. Su trabajo ha ayudado a 
              transformar la productividad de cientos de profesionales y empresas.
            </p>

            {/* Redes sociales */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200">
                <Linkedin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200">
                <Twitter className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200">
                <Github className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </a>
            </div>
          </motion.div>

          {/* Credenciales y logros */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Credenciales principales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <credential.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {credential.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Logros destacados */}
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Logros Destacados
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Award className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Testimonial del instructor */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-6 text-white">
              <blockquote className="text-lg italic mb-4">
                "Mi misión es democratizar el acceso a las técnicas más avanzadas de prompting. 
                No se trata solo de usar IA, sino de dominarla y obtener resultados excepcionales 
                que transformen tu carrera profesional."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">AM</span>
                </div>
                <div>
                  <div className="font-semibold">Dr. Alejandro Martínez</div>
                  <div className="text-primary-100 text-sm">Instructor del Curso</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
