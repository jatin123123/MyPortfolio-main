'use client'
import { useState } from 'react';
import { MessageCircle, Phone, Mail, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const actions = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      color: 'bg-blue-500 hover:bg-blue-600',
      href: 'mailto:jatinjangid947@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call',
      color: 'bg-green-500 hover:bg-green-600',
      href: 'tel:+916396065410'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'LinkedIn',
      color: 'bg-purple-500 hover:bg-purple-600',
      href: 'https://linkedin.com/in/jatin-jangid'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                exit={{ 
                  opacity: 0, 
                  x: 20, 
                  y: 20,
                  transition: { delay: (actions.length - index - 1) * 0.1 }
                }}
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg ${action.color} transition-all duration-200 hover:scale-110`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {action.icon}
                <span className="sr-only">{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        <span className="sr-only">Contact options</span>
      </motion.button>
    </div>
  );
};

export default MobileFloatingButton;
