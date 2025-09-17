
import React from 'react';
import type { Certification } from '../types';
import Section from './Section';
import Card from './Card';
import { CertificationIcon } from './Icons';

interface CertificationsProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <Section title="Certifications" icon={<CertificationIcon />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="text-center">
            <h3 className="font-bold text-white">{cert.name}</h3>
            <p className="text-sm text-teal-400">{cert.issuer}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default CertificationsSection;
