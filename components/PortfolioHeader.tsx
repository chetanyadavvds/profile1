
import React from 'react';
import type { PersonalInfo } from '../types';
import { EmailIcon, LinkedInIcon, PhoneIcon } from './Icons';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const PortfolioHeader: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="text-center mb-16 mt-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        {personalInfo.name}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-teal-400 font-medium">
        {personalInfo.title}
      </p>
      <div className="mt-8 flex justify-center items-center space-x-6 text-gray-400">
        <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
          <EmailIcon />
          <span className="hidden md:inline">{personalInfo.email}</span>
        </a>
        <span className="text-gray-600">|</span>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
          <LinkedInIcon />
          <span className="hidden md:inline">LinkedIn</span>
        </a>
        <span className="text-gray-600">|</span>
        <div className="flex items-center space-x-2">
          <PhoneIcon />
          <span className="hidden md:inline">{personalInfo.phone}</span>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
