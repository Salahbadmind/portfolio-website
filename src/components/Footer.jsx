import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Skills', href: '/skills' },
      { name: 'Contact', href: '/contact' }
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/Salahbadmind', icon: <Github className="w-5 h-5" /> },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: <Linkedin className="w-5 h-5" /> },
      { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: <Twitter className="w-5 h-5" /> },
      { name: 'Email', href: 'mailto:sbouragbi5@gmail.com', icon: <Mail className="w-5 h-5" /> }
    ]
  }

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white">
      <div className="container-max-width">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Bouragbi Salah Eddine
                </span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                UI/UX and Web Developer creating beautiful, 
                functional digital experiences that make a difference.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <span className="text-primary-400">Email:</span><br />
                  your.email@example.com
                </p>
                <p className="text-gray-300">
                  <span className="text-primary-400">Phone:</span><br />
                  +1 (555) 123-4567
                </p>
                <p className="text-gray-300">
                  <span className="text-primary-400">Location:</span><br />
                  San Francisco, CA
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Your Name. All rights reserved.
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
              aria-label="Scroll to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
