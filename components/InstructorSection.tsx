'use client'

import { Award, Linkedin, Twitter, Github, Users, BookOpen, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function InstructorSection() {
  const credentials = [
    {
      icon: Award,
      title: 'Experto en Análisis de Datos',
      description: 'Más de 10 años trabajando con base de datos y análisis de datos'
    },
    {
      icon: Users,
      title: '500+ Estudiantes',
      description: 'Ha capacitado a cientos de profesionales en sistemas de información, SQL, análisis de datos y técnicas de prompting'
    },
    {
      icon: BookOpen,
      title: 'Divulgador de Tecnología',
      description: 'Mantiene un blog en Hashnode sobre tecnologías de la Información, en especial acerca de la IA Generativa y la llamada «Ingeniería de Peticiones»'
    },
    {
      icon: Star,
      title: '4.9/5 Calificación',
      description: 'Reconocido por la calidad y efectividad de sus cursos'
    }
  ]

  const achievements = [
    'Consultor senior en bases de datos relacionales y análisis de datos',
    <>
      Escribe sobre tecnología y en especial sobre AI Generativa en{' '}
      <a
        href="https://randradedev.hashnode.dev/"
        className="text-primary-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hashnode
      </a>
    </>,
    'Speaker en conferencias en varias universidades nacionales',
    'Fundador del movimiento del software libre en México'
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
              <div className="w-150 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/instructor/foto_instructor.png"
                  alt="Ing. Roberto Andrade Fonseca - Instructor del curso"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Ing. Roberto Andrade Fonseca
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
              Experto en Inteligencia Artificial Generativa y Prompting
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Con más de 25 años de experiencia en el campo de las TIC, Roberto ha sido pionero 
              en el desarrollo de técnicas de prompting avanzadas. Su trabajo ha ayudado a 
              transformar la productividad de cientos de profesionales y empresas.</p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Es profesor de la <b>Maestría en Alta Dirección</b> de la <b>Facultad de Química</b> de la <b>UNAM</b> en las asignaturas de <i>Sistemas de Información Gerencial</i> y <i>Comercialización</i>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Ha impartido varios cursos acerca de AI Generativa a profesores y profesionales 
              de varias verticales en los últimos tres años.
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
                  <span className="text-sm font-bold">RA</span>
                </div>
                <div>
                  <div className="font-semibold">Ing. Roberto Andrade Fonseca</div>
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
