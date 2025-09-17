
import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        <div className="text-teal-400 mr-4">{icon}</div>
        <h2 className="text-3xl font-bold text-gray-100 tracking-wide">{title}</h2>
      </div>
      <div className="pl-12 border-l-2 border-gray-700">
        {children}
      </div>
    </section>
  );
};

export default Section;
