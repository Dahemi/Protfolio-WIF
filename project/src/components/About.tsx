import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const highlights = [
    { icon: <Calendar className="w-5 h-5" />, label: '5+ Years', description: 'Professional Experience' },
    { icon: <Award className="w-5 h-5" />, label: '50+ Projects', description: 'Successfully Delivered' },
    { icon: <MapPin className="w-5 h-5" />, label: personalInfo.location, description: 'Based in' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                  >
                    <div className="flex justify-center text-blue-600 dark:text-blue-400 mb-2">
                      {highlight.icon}
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white text-lg">
                      {highlight.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Crafting Digital Experiences
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate frontend developer who loves turning complex problems into 
                  simple, beautiful designs. My journey in web development started over 5 years ago, 
                  and I've been dedicated to mastering modern technologies ever since.
                </p>
                
                <p>
                  Specializing in React and TypeScript, I build scalable applications that not only 
                  look great but perform exceptionally. I believe in writing clean, maintainable code 
                  and staying up-to-date with the latest industry trends and best practices.
                </p>
                
                <p>
                  When I'm not coding, you'll find me contributing to open source projects, mentoring 
                  junior developers, or exploring new technologies that can enhance user experiences.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {['React & TypeScript', 'Responsive Design', 'Performance Optimization', 'User Experience'].map((strength, index) => (
                  <motion.div
                    key={strength}
                    variants={itemVariants}
                    className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};