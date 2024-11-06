"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Clock, 
  CreditCard, 
  Phone,
  Shield,
  Bus
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Track your bus in real-time with precise GPS location updates.'
  },
  {
    icon: Clock,
    title: 'Live Updates',
    description: 'Get instant updates about delays, changes, and arrival times.'
  },
  {
    icon: CreditCard,
    title: 'Easy Payment',
    description: 'Secure and convenient payment options for your journeys.'
  },
  {
    icon: Phone,
    title: 'Mobile Tickets',
    description: 'Digital tickets right on your phone - no paper needed.'
  },
  {
    icon: Shield,
    title: 'Safe Travel',
    description: 'Enhanced safety measures and regular sanitization.'
  },
  {
    icon: Bus,
    title: 'Premium Fleet',
    description: 'Modern, comfortable vehicles for a pleasant journey.'
  }
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Why Choose LTC?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300"
          >
            Experience the future of city transport with our innovative features
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}