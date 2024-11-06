"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bus, Clock } from 'lucide-react';

type Departure = {
  id: number;
  route: string;
  destination: string;
  time: string;
  status: 'On Time' | 'Delayed' | 'Approaching';
};

const mockDepartures: Departure[] = [
  { id: 1, route: '24', destination: 'Pimlico', time: '3 min', status: 'On Time' },
  { id: 2, route: '11', destination: 'Liverpool Street', time: '5 min', status: 'Approaching' },
  { id: 3, route: '38', destination: 'Victoria', time: '7 min', status: 'On Time' },
  { id: 4, route: '73', destination: 'Oxford Circus', time: '12 min', status: 'Delayed' },
];

export function DepartureBoardWidget() {
  const [departures, setDepartures] = useState(mockDepartures);

  useEffect(() => {
    const interval = setInterval(() => {
      setDepartures((prev) =>
        prev.map((dep) => ({
          ...dep,
          time: updateTime(dep.time),
        }))
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Live Departures
        </h3>
        <span className="text-sm text-gray-500">Updated live</span>
      </div>

      <div className="space-y-4">
        {departures.map((departure) => (
          <motion.div
            key={departure.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  {departure.route}
                </div>
                <div>
                  <p className="font-medium">{departure.destination}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Route {departure.route}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{departure.time}</p>
                <p className={`text-sm ${getStatusColor(departure.status)}`}>
                  {departure.status}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function updateTime(time: string): string {
  const minutes = parseInt(time);
  if (isNaN(minutes)) return time;
  return `${Math.max(1, minutes - 1)} min`;
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'On Time':
      return 'text-green-600';
    case 'Delayed':
      return 'text-red-600';
    case 'Approaching':
      return 'text-blue-600';
    default:
      return 'text-gray-600';
  }
}