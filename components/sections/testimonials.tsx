"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Daily Commuter',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'The real-time tracking feature has made my daily commute so much more reliable. I always know exactly when my bus will arrive.',
    rating: 5,
    direction: 'left'
  },
  {
    name: 'Michael Chen',
    role: 'Business Traveler',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    content: 'The mobile tickets are a game-changer. No more queuing or searching for change. Everything I need is right on my phone.',
    rating: 5,
    direction: 'right'
  },
  {
    name: 'Emma Thompson',
    role: 'Tourist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'As a tourist, the route planning feature helped me navigate London with ease. The buses were clean and comfortable.',
    rating: 4,
    direction: 'left'
  }
];

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Passengers Say</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Real experiences from our valued customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ 
                opacity: 0, 
                x: testimonial.direction === 'left' ? -100 : 100,
                rotateY: testimonial.direction === 'left' ? -45 : 45
              }}
              animate={inView ? { 
                opacity: 1, 
                x: 0,
                rotateY: 0
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 -right-4 bg-red-600 rounded-full p-3 shadow-lg">
                <Quote className="h-6 w-6 text-white" />
              </div>

              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="relative h-16 w-16 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover ring-4 ring-gray-100 dark:ring-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 text-yellow-400 fill-current"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="relative"
              >
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
                <div className="absolute -left-2 -top-2 text-6xl text-red-600/10 pointer-events-none">
                  "
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.4 }}
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
              >
                <div className="bg-red-600 text-white text-sm px-4 py-1 rounded-full shadow-lg">
                  Verified Passenger
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}