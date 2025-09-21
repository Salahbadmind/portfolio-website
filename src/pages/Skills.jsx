import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Zap,
  Shield,
  Globe,
  Cpu
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      description: 'Creating responsive and interactive user interfaces',
      skills: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'Vue.js', level: 85, color: 'bg-green-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'Next.js', level: 88, color: 'bg-gray-800' },
        { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
        { name: 'Sass/SCSS', level: 80, color: 'bg-pink-500' },
        { name: 'JavaScript (ES6+)', level: 95, color: 'bg-yellow-500' },
        { name: 'HTML5', level: 98, color: 'bg-orange-500' },
        { name: 'CSS3', level: 95, color: 'bg-blue-400' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8" />,
      description: 'Building robust server-side applications and APIs',
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-green-600' },
        { name: 'Express.js', level: 88, color: 'bg-gray-700' },
        { name: 'Python', level: 85, color: 'bg-yellow-600' },
        { name: 'Django', level: 80, color: 'bg-green-700' },
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 82, color: 'bg-green-500' },
        { name: 'Redis', level: 75, color: 'bg-red-500' },
        { name: 'REST APIs', level: 92, color: 'bg-purple-500' },
        { name: 'GraphQL', level: 78, color: 'bg-pink-600' }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-8 h-8" />,
      description: 'Designing beautiful and user-centered interfaces',
      skills: [
        { name: 'Figma', level: 90, color: 'bg-purple-600' },
        { name: 'Adobe XD', level: 85, color: 'bg-pink-500' },
        { name: 'Sketch', level: 80, color: 'bg-yellow-500' },
        { name: 'User Research', level: 75, color: 'bg-indigo-500' },
        { name: 'Wireframing', level: 88, color: 'bg-gray-600' },
        { name: 'Prototyping', level: 85, color: 'bg-blue-500' },
        { name: 'Design Systems', level: 82, color: 'bg-green-500' },
        { name: 'Accessibility', level: 80, color: 'bg-red-600' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Building cross-platform mobile applications',
      skills: [
        { name: 'React Native', level: 85, color: 'bg-blue-500' },
        { name: 'Flutter', level: 80, color: 'bg-blue-400' },
        { name: 'Expo', level: 88, color: 'bg-gray-800' },
        { name: 'iOS Development', level: 70, color: 'bg-gray-600' },
        { name: 'Android Development', level: 75, color: 'bg-green-600' },
        { name: 'PWA', level: 85, color: 'bg-purple-500' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Deploying and managing applications in the cloud',
      skills: [
        { name: 'AWS', level: 80, color: 'bg-orange-500' },
        { name: 'Docker', level: 85, color: 'bg-blue-500' },
        { name: 'Kubernetes', level: 70, color: 'bg-blue-600' },
        { name: 'CI/CD', level: 82, color: 'bg-green-500' },
        { name: 'Netlify', level: 90, color: 'bg-cyan-500' },
        { name: 'Vercel', level: 88, color: 'bg-gray-800' },
        { name: 'GitHub Actions', level: 85, color: 'bg-gray-700' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <GitBranch className="w-8 h-8" />,
      description: 'Essential tools and technologies for development',
      skills: [
        { name: 'Git', level: 95, color: 'bg-orange-600' },
        { name: 'VS Code', level: 98, color: 'bg-blue-500' },
        { name: 'Webpack', level: 80, color: 'bg-blue-400' },
        { name: 'Vite', level: 85, color: 'bg-purple-500' },
        { name: 'Jest', level: 82, color: 'bg-red-500' },
        { name: 'Cypress', level: 75, color: 'bg-green-500' },
        { name: 'Storybook', level: 78, color: 'bg-pink-500' },
        { name: 'Framer Motion', level: 85, color: 'bg-purple-600' }
      ]
    }
  ]

  const softSkills = [
    { name: 'Problem Solving', icon: <Zap className="w-6 h-6" /> },
    { name: 'Team Collaboration', icon: <Globe className="w-6 h-6" /> },
    { name: 'Communication', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Project Management', icon: <Shield className="w-6 h-6" /> }
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              A comprehensive overview of my technical expertise and soft skills. 
              I'm constantly learning and expanding my knowledge to stay current 
              with the latest technologies and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max-width">
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-900 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="section-padding">
        <div className="container-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Soft Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beyond technical expertise, these skills help me work effectively 
              in teams and deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Continuous Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Technology evolves rapidly, and I'm committed to staying current. 
              I regularly invest time in learning new technologies, attending conferences, 
              and contributing to open source projects.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Currently Learning
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Rust Programming</li>
                  <li>• WebAssembly</li>
                  <li>• Machine Learning</li>
                  <li>• Advanced React Patterns</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Certifications
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• AWS Solutions Architect</li>
                  <li>• Google UX Design</li>
                  <li>• React Developer</li>
                  <li>• Scrum Master</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Goals 2024
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Master TypeScript</li>
                  <li>• Learn Go Language</li>
                  <li>• Contribute to Open Source</li>
                  <li>• Speak at Conferences</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Skills
