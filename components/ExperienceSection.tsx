
import React from 'react';
import type { Job } from '../types';
import Section from './Section';
import Card from './Card';
import { BriefcaseIcon, BulletIcon } from './Icons';

interface ExperienceProps {
  jobs: Job[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ jobs }) => {
  return (
    <Section title="Professional Experience" icon={<BriefcaseIcon />}>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <Card key={index}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <p className="text-md text-teal-400 font-semibold">{job.company}</p>
              </div>
              <p className="text-sm text-gray-400 whitespace-nowrap">{job.period}</p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300">
              {job.description.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1 flex-shrink-0"><BulletIcon /></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
