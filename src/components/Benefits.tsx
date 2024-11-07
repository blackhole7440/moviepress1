import React from 'react';
import { CheckCircle2, Tv, Wifi, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Tv className="w-6 h-6" />,
      title: 'HD Quality',
      description: 'Enjoy movies in the best quality'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Smooth Streaming',
      description: 'No buffering or interruptions'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Latest Updates',
      description: 'New movies every week'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Ad-Free',
      description: 'Watch without ad interruptions'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              <div className="text-purple-500 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;