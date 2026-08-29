export type ArchetypeId = 'man-led' | 'kids' | 'woman-led' | 'multi-dentist' | 'comparison' | 'boards';

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  techUsed: string[];
  idealFor: string;
  duration: string;
  recoveryTime: string;
  iconName: string;
  image: string;
  detailedPoints: string[];
}

export interface TechnologyItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  clinicalBenefit: string;
  patientComfort: string;
  specs: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  patientProfile: string;
  chiefComplaint: string;
  clinicalProcedure: string;
  treatmentTimeline: string;
  beforeImage: string;
  afterImage: string;
  doctorNotes: string;
  category: 'Full Arch' | 'Biomimetic Veneers' | 'Single Implant' | 'Family Restorative';
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
  treatment: string;
  tenure: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'First Visit' | 'Technology & Safety' | 'Financial & Insurance' | 'Family & Children';
}

export interface DirectionBoardData {
  id: ArchetypeId;
  name: string;
  conceptTitle: string;
  tagline: string;
  moodDescription: string;
  targetAudience: string;
  palette: {
    hex: string;
    name: string;
    role: string;
    usage: string;
  }[];
  typography: {
    displayFont: string;
    bodyFont: string;
    sampleH1: string;
    sampleH2: string;
    sampleH3: string;
    sampleBody: string;
    sampleQuote: string;
    displayCharacteristics: string;
  };
  keyComponents: {
    heroStyle: string;
    buttonPrimary: string;
    buttonSecondary: string;
    cardStyle: string;
    navigationStyle: string;
    mobileBehavior: string;
    imageTreatment: string;
  };
  designRules: {
    radius: string;
    spacingScale: string;
    borders: string;
    shadows: string;
    motion: string;
  };
  rejectedPatterns: string[];
  signatureFeature: string;
}
