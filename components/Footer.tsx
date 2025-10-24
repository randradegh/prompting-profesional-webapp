import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              Prompting Profesional
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Domina las técnicas más avanzadas para obtener exactamente lo que deseas de la inteligencia artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#por-que" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Por qué este curso
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Lo que aprenderás
                </a>
              </li>
              <li>
                <a href="#instructor" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Instructor
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Precios
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@promptingpro.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  info@promptingpro.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Prompting Profesional. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hecho con ❤️ para profesionales de la IA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
