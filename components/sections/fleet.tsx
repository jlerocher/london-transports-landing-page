"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const fleetItems = [
  {
    title: 'Standard Bus',
    description: 'Modern single-decker for urban routes',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e',
    features: ['80 seats', 'USB charging', 'Air conditioning', 'Wheelchair access']
  },
  {
    title: 'Double Decker',
    description: 'Iconic London double-decker experience',
    image: 'https://images.unsplash.com/photo-1517216015940-049a2d4e2da4',
    features: ['130 seats', 'Panoramic views', 'USB charging', 'Air conditioning']
  },
  {
    title: 'Electric Bus',
    description: 'Zero-emission sustainable transport',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317',
    features: ['Zero emissions', 'Silent operation', 'Modern interior', 'Smart displays']
  }
];

export function FleetSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900" id="fleet">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Experience comfort and reliability with our modern vehicle fleet
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}