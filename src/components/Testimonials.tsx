import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      text: 'Amazing HD quality, smooth streaming without buffering!',
      role: 'Member since 2023'
    },
    {
      name: 'Sarah Wilson',
      text: 'Complete collection and always updated with the latest releases.',
      role: 'Member since 2023'
    },
    {
      name: 'Mike Johnson',
      text: 'Easy registration and instant access. Highly recommended!',
      role: 'Member since 2023'
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg relative">
              <Quote className="w-8 h-8 text-purple-500 mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;