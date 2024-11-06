"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const plans = [
  {
    name: 'Single Journey',
    price: '£2.50',
    description: 'Perfect for occasional travelers',
    features: [
      'Single bus journey',
      'Valid for 60 minutes',
      'Mobile ticket',
      'Real-time tracking'
    ]
  },
  {
    name: 'Day Pass',
    price: '£7.50',
    description: 'Ideal for day trips',
    features: [
      'Unlimited journeys',
      'Valid for 24 hours',
      'Mobile ticket',
      'Real-time tracking',
      'Route planning'
    ],
    popular: true
  },
  {
    name: 'Weekly Pass',
    price: '£35.00',
    description: 'Best value for regular travelers',
    features: [
      'Unlimited journeys',
      'Valid for 7 days',
      'Mobile ticket',
      'Real-time tracking',
      'Route planning',
      'Priority support'
    ]
  }
];

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-800" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose the perfect ticket for your journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`relative ${plan.popular ? 'border-red-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-sm px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.popular ? 'bg-red-600 hover:bg-red-700' : ''
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}