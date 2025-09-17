
import React from 'react';
import type { PersonalInfo } from '../types';
import { EmailIcon, LinkedInIcon, PhoneIcon } from './Icons';

interface FooterProps {
    personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400">
      <div className="flex justify-center items-center space-x-6 mb-4">
        <a href={`mailto:${personalInfo.email}`} className="hover:text-teal-400 transition-colors" aria-label="Email">
          <EmailIcon />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={`tel:${personalInfo.phone}`} className="hover:text-teal-400 transition-colors" aria-label="Phone">
          <PhoneIcon />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
