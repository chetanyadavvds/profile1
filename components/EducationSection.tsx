
import React from 'react';
import type { Education } from '../types';
import Section from './Section';
import Card from './Card';
import { EducationIcon } from './Icons';

interface EducationProps {
  education: Education;
}

const EducationSection: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section title="Education" icon={<EducationIcon />}>
      <Card>
        <h3 className="text-xl font-bold text-white">{education.degree}</h3>
        <p className="text-md text-teal-400 font-semibold">{education.institution}</p>
        <p className="text-sm text-gray-400 mt-1">{education.year}</p>
      </Card>
    </Section>
  );
};

export default EducationSection;
