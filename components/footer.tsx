import { Bus, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bus className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-white">LTC</span>
            </div>
            <p className="text-sm">
              Your trusted partner for modern city transport solutions in London.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#routes" className="hover:text-red-600 transition-colors">Routes</Link></li>
              <li><Link href="#fleet" className="hover:text-red-600 transition-colors">Fleet</Link></li>
              <li><Link href="#pricing" className="hover:text-red-600 transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Transport Street</li>
              <li>London, UK EC4R 9HA</li>
              <li>Phone: +44 20 7123 4567</li>
              <li>Email: info@ltc.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} London Transit Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}