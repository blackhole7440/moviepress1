import React from 'react';
import { UserPlus, Film, Play } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Free Registration',
      description: 'Complete quick registration for unlimited access'
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: 'Choose Movie',
      description: 'Select from thousands of popular and latest movies'
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: 'Start Watching',
      description: 'Enjoy your favorite movies without limits'
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to Watch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;