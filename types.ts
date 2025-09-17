
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
}

export interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  skills: SkillCategory[];
  experience: Job[];
  certifications: Certification[];
  education: Education;
}
