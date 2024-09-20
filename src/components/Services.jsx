import React from 'react';
import services from '../assets/icons/services';

export default function Services() {
  return (
    <>
      <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Services</h1>
          <p className="text-center mb-12 text-lg">
            Strategic services drive digital success with tailored, comprehensive approaches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`bg-[#b9fd4f] text-black p-8 rounded-lg flex flex-col items-center justify-center ${index > 2 ? 'md:col-span-3 md:w-1/3 mx-auto' : ''}`}
                >
                {service.icon}
                <h2 className="text-xl font-semibold text-center mt-4">{service.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}
