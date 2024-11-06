"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DepartureBoardWidget } from '@/components/widgets/departure-board';

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1569839333583-7375336cde4b"
        alt="London Bus"
        fill
        priority
        className="object-cover opacity-20"
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Journey,{' '}
              <span className="text-red-600">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Experience London's most advanced transit system with real-time tracking, 
              instant booking, and premium fleet services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Book Your Journey
              </Button>
              <Button size="lg" variant="outline">
                View Live Routes
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-2xl p-6"
          >
            <DepartureBoardWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
}