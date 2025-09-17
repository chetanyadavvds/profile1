import React from 'react';
import { portfolioData } from './data/portfolioData';
import PortfolioHeader from './components/PortfolioHeader';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import Section from './components/Section';
import { BriefcaseIcon, SummaryIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-200 leading-relaxed">
      {/* Background visual effect */}
      <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          <div 
              className="absolute inset-0" 
              style={{
                  backgroundImage: `radial-gradient(circle at 25% 30%, #0d9488 0%, transparent 40%),
                                  radial-gradient(circle at 75% 70%, #2563eb 0%, transparent 40%)`,
                  filter: 'blur(100px)'
              }}
          ></div>
      </div>
      
      <main className="relative z-10 p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
        <PortfolioHeader personalInfo={portfolioData.personalInfo} />

        <Section title="Professional Summary" icon={<SummaryIcon />}>
          <p className="text-gray-300 text-lg">
            {portfolioData.professionalSummary}
          </p>
        </Section>
        
        <SkillsSection skills={portfolioData.skills} />
        
        <ExperienceSection jobs={portfolioData.experience} />

        <CertificationsSection certifications={portfolioData.certifications} />
        
        <EducationSection education={portfolioData.education} />
        
        <Footer personalInfo={portfolioData.personalInfo} />
      </main>
    </div>
  );
};

export default App;