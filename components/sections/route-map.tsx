"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RouteMapSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-800" id="routes">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Interactive Route Map</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Explore our comprehensive network of routes across London. Plan your journey
              with real-time updates and live traffic information.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Popular Routes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Direct connections to major landmarks and stations
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Navigation className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Live Navigation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Turn-by-turn directions and ETA updates
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-8">View Full Map</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse">
              {/* Map placeholder - In production, integrate with a real map service */}
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                Interactive Map
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}