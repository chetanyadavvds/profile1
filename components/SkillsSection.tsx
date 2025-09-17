
import React from 'react';
import type { SkillCategory } from '../types';
import Section from './Section';
import { SkillsIcon } from './Icons';

interface SkillsProps {
  skills: SkillCategory[];
}

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="Core Competencies" icon={<SkillsIcon />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((category) => (
          <div key={category.name}>
            <h3 className="text-xl font-semibold text-teal-300 mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="bg-gray-700 text-gray-200 py-1 px-3 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
