"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">123 Transport Street, London, UK</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+44 20 7123 4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@ltc.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Your message..." className="h-32" />
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}