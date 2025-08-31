import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-purple-500',
    backend: 'from-green-500 to-teal-500',
    tools: 'from-orange-500 to-red-500'
  };

  const categoryTitles = {
    frontend: 'Frontend Technologies',
    backend: 'Backend & Database',
    tools: 'Tools & Workflow'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <div className={`w-1 h-8 bg-gradient-to-b ${categoryColors[category as keyof typeof categoryColors]} rounded-full`}></div>
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                          className={`h-2 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how we can bring your project to life with these technologies.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};