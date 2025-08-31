import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
              <p className="text-gray-400 leading-relaxed">
                Frontend Developer passionate about creating exceptional digital experiences 
                with modern web technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="space-y-2">
                <p className="text-gray-400">{personalInfo.location}</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label={link.name}
                  >
                    {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center gap-2 mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. Made with <Heart size={16} className="text-red-500" /> and React.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};