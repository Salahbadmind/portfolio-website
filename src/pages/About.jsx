import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Award } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development for multiple client projects, mentoring junior developers, and implementing modern React patterns.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed end-to-end web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement pixel-perfect UIs.'
    },
    {
      title: 'Junior Developer',
      company: 'Web Solutions Ltd.',
      period: '2019 - 2020',
      description: 'Started my professional journey building responsive websites and learning modern web development practices.'
    }
  ]

  const achievements = [
    'Certified AWS Solutions Architect',
    'Google UX Design Certificate',
    'React Developer Certification',
    'Open Source Contributor'
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                About <span className="gradient-text">Bouragbi Salah Eddine</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              >
                I'm a passionate full-stack developer with over 3 years of experience creating 
                digital solutions that make a real impact. My journey in tech started with a 
                curiosity about how websites work, and it has evolved into a career dedicated 
                to building exceptional user experiences.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              >
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying up-to-date with the latest trends 
                in web development.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="btn-primary inline-flex items-center">
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </button>
                <button className="btn-secondary">
                  View My Work
                </button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <p className="text-lg font-medium">Your Photo Here</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-full opacity-50"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              My Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A journey of growth, learning, and creating meaningful digital experiences.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Achievements */}
      <section className="section-padding">
        <div className="container-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h2>
              <div className="space-y-4">
                {[
                  { category: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
                  { category: 'Backend', skills: ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB'] },
                  { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
                  { category: 'Mobile', skills: ['React Native', 'Flutter', 'Expo'] }
                ].map((group, index) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Achievements & Certifications
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Available for freelance work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
