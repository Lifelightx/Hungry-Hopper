import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Food Delivery',
      description: 'Fast and reliable food delivery service to your doorstep.',
      icon: '🚚', // You can replace these with actual icons if needed
    },
    {
      id: 2,
      title: 'Online Ordering',
      description: 'Easily order your favorite dishes online with just a few clicks.',
      icon: '💻',
    },
    {
      id: 3,
      title: 'Custom Catering',
      description: 'Tailored catering services for your special events and gatherings.',
      icon: '🎉',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-6xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

