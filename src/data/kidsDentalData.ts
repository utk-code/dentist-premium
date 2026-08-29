export interface KidService {
  id: string;
  name: string;
  category: string;
  ageRange: string;
  tagline: string;
  description: string;
  benefits: string[];
  recoveryTime: string;
  imageUrl: string;
}

export interface KidAmenity {
  id: string;
  name: string;
  architectureSubtitle: string;
  description: string;
  clinicalImpact: string;
  badge: string;
  imageUrl: string;
}

export interface AgeMilestone {
  id: string;
  range: string;
  title: string;
  headline: string;
  description: string;
  imageUrl: string;
  protocols: { name: string; desc: string }[];
  milestones: string[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  education: string;
  experienceYears: number;
  bio: string;
  imageUrl: string;
  specialties: string[];
}

export interface KidReview {
  id: string;
  parentName: string;
  parentRole: string;
  childInfo: string;
  date: string;
  treatment: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

export interface KidFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  clinicalNote?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  idealFor: string;
  description: string;
  inclusions: string[];
  recommended?: boolean;
}

export const AGE_MILESTONES: AgeMilestone[] = [
  {
    id: 'stage-1',
    range: '0 – 24 Months',
    title: 'Infant & Toddler Care',
    headline: 'First Tooth & Airway Foundations',
    description: 'Gentle lap-to-lap examinations with mom or dad. We assess feeding ease, early tooth eruption, and check for tongue or lip ties.',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    protocols: [
      { name: 'Infant Airway & Tongue-Tie Check', desc: 'Screening for restricted ties that cause latching fatigue and mouth breathing.' },
      { name: 'Enamel Mineralization Defense', desc: 'Gentle application of protective bio-varnish to safeguard first baby teeth.' },
      { name: 'Parent Teething & Hygiene Coaching', desc: 'Custom night-time cleaning routines to prevent bottle decay.' },
      { name: 'Lap-to-Lap Comfort Protocol', desc: 'Baby rests peacefully in parent’s lap with zero separation anxiety.' }
    ],
    milestones: [
      'The AAPD recommends the first dental visit by age 1 or within 6 months of the first tooth.'
    ]
  },
  {
    id: 'stage-2',
    range: '2 – 5 Years',
    title: 'Early Childhood',
    headline: 'Fear-Free Habit Building & 60-Sec Cavity Arrest',
    description: 'Playful, interactive visits introducing the dental suite. Gentle warm water cleanings and drill-free cavity stops if decay starts.',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    protocols: [
      { name: '60-Second No-Drill Cavity Fill (SDF)', desc: 'Brush-on silver liquid stops decay in 60 seconds with zero needles.' },
      { name: 'Swiss Airflow 37°C Warm Mist Cleaning', desc: 'Cleans plaque using 37°C warm water mist with sweet erythritol powder.' },
      { name: 'Positive Habit Redirection', desc: 'Gentle positive reinforcement to stop thumb sucking and pacifier use.' },
      { name: 'Child-Led Sensory Choice', desc: 'Kids pick their favorite Netflix cartoon and strawberry polish flavor.' }
    ],
    milestones: [
      'Early positive associations eliminate lifelong dental anxiety and build confident brushers.'
    ]
  },
  {
    id: 'stage-3',
    range: '6 – 11 Years',
    title: 'Mixed Dentition',
    headline: 'Molar Protection & Natural Jaw Growth',
    description: 'Guiding jaw expansion and protecting permanent adult molars as baby teeth shed. Screening for airway obstruction and sleep quality.',
    imageUrl: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=800&q=80',
    protocols: [
      { name: 'Bioactive Molar Sealants', desc: 'Invisible shield over deep grooves on adult molars to prevent 80%+ of cavities.' },
      { name: 'Gentle Myobrace Airway Expansion', desc: 'Removable night trainers guide wide dental arches and straight natural teeth.' },
      { name: 'Painless Gentle Restorations', desc: 'Tooth-colored biocompatible ceramics when primary teeth need protection.' },
      { name: 'Sleep & Breathing Growth Audit', desc: 'Catching mouth breathing, snoring, and crowded teeth early.' }
    ],
    milestones: [
      'Age 7 is the golden window for interceptive airway orthopedics to prevent future braces.'
    ]
  },
  {
    id: 'stage-4',
    range: '12 – 18 Years',
    title: 'Adolescent & Teen',
    headline: 'Smile Aesthetics & Sports Protection',
    description: 'Empowering teens with modern invisible aligners, safe enamel whitening, sports mouthguards, and wisdom tooth growth scans.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    protocols: [
      { name: 'Invisible Clear Aligners', desc: 'Comfortable, discreet smile straightening tailored to teen lifestyles.' },
      { name: 'Custom Shock-Absorbing Mouthguards', desc: 'Engineered for football, cricket, martial arts, and basketball safety.' },
      { name: 'Gentle Stain Removal & Polish', desc: 'Removes food stains and restores natural brilliance for confident smiles.' },
      { name: 'Wisdom Tooth 3D Growth Mapping', desc: 'Low-dose digital scans monitoring third molars before impaction occurs.' }
    ],
    milestones: [
      'Respectful, mature communication encourages teens to take independent pride in oral health.'
    ]
  }
];

export const SERVICES_DATA: KidService[] = [
  {
    id: 'swiss-airflow',
    name: 'Swiss Airflow 37°C Warm Water Mist',
    category: 'Preventative Care',
    ageRange: 'All Ages (0–18y)',
    tagline: '100% scraper-free warm mist hygiene with sweet erythritol.',
    description: 'Replaces vibrating metal scrapers with a soothing 37°C warm water mist. Cleans plaque, sugar film, and stains with zero sensitivity.',
    benefits: [
      'No cold sensitivity (body temperature water)',
      'Zero sharp metal scraping on enamel',
      'Infused with sweet, antibacterial erythritol',
      'Completed comfortably in 12–15 minutes'
    ],
    recoveryTime: 'Immediate (Zero Downtime)',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sdf-cavity-arrest',
    name: 'Silver Diamine (SDF) 60-Sec Cavity Stop',
    category: 'Painless Dentistry',
    ageRange: 'Ages 1–12y',
    tagline: 'Stops active decay in 60 seconds with zero drilling or needles.',
    description: 'We apply gentle Silver Diamine Fluoride liquid directly onto the cavity with a tiny micro-brush. It hardens enamel and kills bacteria without needles.',
    benefits: [
      '100% needle-free and drill-free',
      'Arrests tooth decay in under 60 seconds',
      'No numb lips or post-procedure biting',
      'Child eats snacks and plays immediately'
    ],
    recoveryTime: 'Zero Downtime',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'laser-tongue-tie',
    name: 'Gentle Infant Laser Tongue-Tie Release',
    category: 'Infant Airway Care',
    ageRange: 'Ages 0–5y',
    tagline: 'Light-beam laser release in 90 seconds for effortless feeding.',
    description: 'Gentle laser release of tight lingual and labial ties that cause feeding fatigue, reflux, and speech delay. No scissors, bleeding, or stitches.',
    benefits: [
      'Completed in under 90 seconds',
      'Zero bleeding and no sutures needed',
      'Immediate comfortable nursing in our quiet suite',
      'Heals within 48–72 hours naturally'
    ],
    recoveryTime: 'Immediate Nursing',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'myobrace-expansion',
    name: 'Myobrace Gentle Airway & Jaw Expansion',
    category: 'Airway Growth',
    ageRange: 'Ages 4–12y',
    tagline: 'Comfortable night trainers for straight teeth and nasal breathing.',
    description: 'Soft silicone habit trainers worn during sleep that encourage nasal breathing, correct tongue resting posture, and guide wide, straight jaw arches.',
    benefits: [
      'Reduces the need for metal braces later',
      'Stops mouth breathing and nighttime snoring',
      'Corrects tongue thrust and thumb sucking',
      'Worn just 1 hour during the day plus overnight'
    ],
    recoveryTime: 'Comfortable Sleep Wear',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bioactive-sealants',
    name: 'Bioactive Tooth Armor (Pit & Fissure Sealants)',
    category: 'Preventative Care',
    ageRange: 'Ages 5–16y',
    tagline: 'Shields deep grooves on permanent molars from 80%+ of cavities.',
    description: 'A smooth, clear protective coating painted over the deep chewing grooves of adult molars. Blocks food particles and releases calcium and fluoride.',
    benefits: [
      'Blocks 80%+ of childhood chewing cavities',
      'BPA-free and mineral-releasing resin',
      'Painted on in seconds with safe curing light',
      'Lasts 3–5 years through chewing years'
    ],
    recoveryTime: 'Immediate Eating',
    imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'white-ceramic-crowns',
    name: 'Natural White Ceramic Crowns for Kids',
    category: 'Biomimetic Restoration',
    ageRange: 'Ages 2–9y',
    tagline: 'Strong, tooth-colored ceramic crowns for deep baby tooth decay.',
    description: 'Metal-free, ultra-biocompatible zirconia crowns that match your child’s natural tooth shade and protect teeth until they shed naturally.',
    benefits: [
      '100% natural white appearance (No silver metal)',
      'Ultra-smooth surface prevents plaque buildup',
      'Gentle placement with comforting topical numbing',
      'Preserves space for incoming adult teeth'
    ],
    recoveryTime: 'Same-Day Recovery',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-maya-nair',
    name: 'Dr. Maya Nair',
    role: 'Lead Pediatric Specialist & Founder',
    education: 'BDS (Gold Medalist), MDS Pediatric Dentistry (AIIMS New Delhi)',
    experienceYears: 14,
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'AIIMS Gold Medalist with over 14 years dedicated exclusively to pediatric dentistry. Dr. Maya specializes in fear-free behavioral guidance, airway-centric orthopedics, and needle-free remineralization protocols.',
    specialties: [
      'Fear-Free Pediatric Psychology',
      'Needle-Free SDF Cavity Care',
      'Pediatric Airway Growth & Myobrace',
      'AIIMS New Delhi Gold Medalist'
    ]
  },
  {
    id: 'dr-leo-mathew',
    name: 'Dr. Leo Mathew',
    role: 'Pediatric Surgeon & Laser Fellow',
    education: 'BDS, MDS Pediatric Dentistry (Manipal University), Fellow ISPPD',
    experienceYears: 11,
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Certified in Pediatric Advanced Life Support (PALS) with advanced hospital fellowship training in light-beam dental lasers, infant tongue-tie release, and gentle pediatric emergency trauma care.',
    specialties: [
      'Infant Laser Frenectomy (Tongue-Tie)',
      'Pediatric Dental Trauma & Emergencies',
      'PALS Certified (Life Support)',
      'ISPPD Fellow & Manipal Alum'
    ]
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'first-visit',
    name: 'First Visit & Airway Audit',
    price: '₹750',
    idealFor: 'New Little Patients',
    description: 'An unhurried 45-minute introductory visit in a private suite with parent bedside and Barnaby the therapy dog.',
    inclusions: [
      'Comprehensive pediatric oral exam',
      'Airway, breathing & tongue-tie audit',
      'Intraoral camera digital photos',
      'Child bravery gold coin & toy prize',
      'Personalized cavity prevention guide'
    ],
    recommended: true
  },
  {
    id: 'warm-mist-spa',
    name: 'Swiss Airflow Warm Mist Cleaning',
    price: '₹1,800',
    idealFor: 'Ages 2–18y Hygiene',
    description: '37°C warm water mist cleaning infused with erythritol powder. Completely eliminates scraping tools.',
    inclusions: [
      'Gentle 37°C warm water mist cleaning',
      'Natural berry or mango flavor polish',
      'Protective bio-fluoride varnish coat',
      'Ceiling Netflix cartoons & headphones',
      'Zero scraping or vibration tools'
    ]
  },
  {
    id: 'no-drill-fill',
    name: '60-Second No-Drill Cavity Stop',
    price: '₹1,200',
    idealFor: 'Early / Moderate Decay',
    description: 'Needle-free, drill-free brush-on Silver Diamine Fluoride treatment that arrests cavities instantly.',
    inclusions: [
      'Painless brush-on mineral application',
      '100% needle-free & injection-free',
      'Kills cavity bacteria in 60 seconds',
      'Protects natural tooth structure',
      'Follow-up mineral check included'
    ]
  }
];

export const PARENT_TESTIMONIALS: KidReview[] = [
  {
    id: 'rev-1',
    parentName: 'Dr. Ananya Sengupta',
    parentRole: 'Pediatrician & Mother to Vivaan (4)',
    childInfo: 'Vivaan (Age 4)',
    date: 'August 2026',
    treatment: 'Warm Mist Cleaning & First Checkup',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote: 'As a pediatrician, I am very picky about medical environments. Little Orbit is pure magic. Vivaan was terrified after a bad clinic visit elsewhere. Here, with Barnaby the golden retriever and Bluey on the ceiling screen, he did not shed a single tear!'
  },
  {
    id: 'rev-2',
    parentName: 'Pooja & Rajesh Kulkarni',
    parentRole: 'Parents of Shanaya (3) and Kabir (7)',
    childInfo: 'Shanaya (3) & Kabir (7)',
    date: 'July 2026',
    treatment: 'No-Drill SDF Cavity Arrest',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: 'Another clinic wanted to put Shanaya under general anesthesia for two tiny cavities. Dr. Maya used SDF liquid in under a minute without needles or drilling. Fast, completely painless, and cost a fraction of hospital quotes.'
  },
  {
    id: 'rev-3',
    parentName: 'Col. Vikramaditya Rathore',
    parentRole: 'Father of Aryan (9) and Meera (13)',
    childInfo: 'Aryan (9) & Meera (13)',
    date: 'June 2026',
    treatment: 'Habit Trainer & Airway Care',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'The level of hygiene and warmth in this clinic is exceptional. From WhatsApp booking to clear itemized bills for insurance, everything was smooth. Aryan stopped mouth breathing within a month with his Myobrace trainer.'
  }
];

export const FAQ_ITEMS: KidFAQ[] = [
  {
    id: 'faq-1',
    question: 'How is Little Orbit different from adult or family dental clinics?',
    answer: 'We are exclusively pediatric specialists (MDS Pedodontists) who treat only children. Our entire clinic is child-sized and sensory-friendly: private soundproof suites, 4K ceiling cartoon screens, painless Swiss warm-water cleaning, needle-free cavity arrest, and parents always sit right beside their child.',
    category: 'First Visits',
    clinicalNote: '100% of our clinical faculty hold post-graduate MDS degrees in Pediatric Dentistry.'
  },
  {
    id: 'faq-2',
    question: 'What if my child is very scared or cries during medical visits?',
    answer: 'We never rush, force, or physically restrain a child. We use gentle "Tell-Show-Do" behavioral techniques, dim circadian lighting, favorite cartoons on ceiling screens, and Barnaby our certified therapy dog. Over 99% of anxious children become completely calm within minutes.',
    category: 'Sensory Comfort',
    clinicalNote: 'Parents can hold infants and toddlers in their laps during all examinations.'
  },
  {
    id: 'faq-3',
    question: 'Can cavities really be treated without drilling or injections?',
    answer: 'Yes! For most early and moderate decay in children, we use Silver Diamine Fluoride (SDF) and bioactive remineralizing agents. We apply a gentle liquid with a tiny brush that stops active decay in 60 seconds with zero needles, zero drilling, and zero pain.',
    category: 'Gentle Procedures',
    clinicalNote: 'SDF is FDA-approved and endorsed by the American Academy of Pediatric Dentistry.'
  },
  {
    id: 'faq-4',
    question: 'What age should my child have their first dental visit?',
    answer: 'The Indian Society of Pedodontics and Preventive Dentistry (ISPPD) and American Academy of Pediatric Dentistry (AAPD) recommend bringing your child by their first birthday or when their first tooth appears. Early visits prevent tooth decay and screen for healthy airway development.',
    category: 'First Visits',
    clinicalNote: 'Our First Visit checkup is just ₹750 and includes an unhurried 45-minute consultation.'
  },
  {
    id: 'faq-5',
    question: 'Do you accept health insurance and provide itemized bills?',
    answer: 'Yes! We provide complete itemized invoices, clinical treatment summaries, and diagnostic photo records required for OPD dental insurance reimbursement (Star Health, MediBuddy, HDFC ERGO, ICICI Lombard, etc.). We also offer 0% interest EMI options.',
    category: 'Billing & Insurance',
    clinicalNote: 'Our concierge desk will assist you directly with insurance paperwork on the same day.'
  }
];

export const CLINIC_CONTACT = {
  name: 'Little Orbit Pediatric Dental Atelier',
  descriptor: 'Gentle, Painless & Fear-Free Pediatric Dentistry (Ages 0–18)',
  leadDentist: 'Dr. Maya Nair, BDS, MDS (AIIMS New Delhi)',
  leadCredentials: 'Gold Medalist & Pediatric Dental Specialist',
  surgicalDirector: 'Dr. Leo Mathew, BDS, MDS (Manipal)',
  address: 'No. 412, 100 Feet Road, HAL 2nd Stage, Indiranagar',
  landmark: 'Near Indiranagar Metro / Opposite Toit',
  city: 'Bengaluru, Karnataka 560038',
  phone: '+91 80 4123 4567',
  mobileLine: '+91 98800 12345',
  whatsapp: '+91 98800 12345',
  whatsappLink: 'https://wa.me/919880012345?text=Hello%20Little%20Orbit%2C%20I%20would%20like%20to%20book%20a%20visit%20for%20my%20child.',
  email: 'care@littleorbitdentistry.in',
  hours: [
    { days: 'Monday – Saturday', time: '09:00 AM – 08:00 PM' },
    { days: 'Sunday Specialist Clinic', time: '09:30 AM – 02:30 PM' }
  ],
  emergencyHelpline: {
    title: '24/7 Pediatric Dental Trauma Helpline',
    availability: 'On-Call Pediatric Doctor Support',
    phone: '+91 98800 12345',
    note: 'Immediate priority help for dental trauma, knocked-out teeth, and severe pain.'
  },
  parking: 'Complimentary Valet Parking & Easy Stroller Access'
};

export const SENSORY_AMENITIES = [
  {
    id: 'barnaby-dog',
    name: 'Barnaby Bedside Therapy Dog',
    architectureSubtitle: 'Calming Golden Retriever',
    description: 'Hypoallergenic, medical-certified therapy dog offering soothing deep-pressure cuddles.',
    clinicalImpact: 'Reduces cortisol and anxiety within 2 minutes.',
    badge: 'Child Favorite',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ceiling-tv',
    name: 'Ceiling 4K Netflix Cinema',
    architectureSubtitle: 'Overhead Entertainment',
    description: 'Kids watch Bluey, Peppa Pig, or Marvel with child-sized wireless headphones.',
    clinicalImpact: 'Keeps attention engaged throughout care.',
    badge: '4K Cinema',
    imageUrl: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'private-suite',
    name: 'Soundproof Family Suites',
    architectureSubtitle: 'Acoustically Isolated',
    description: 'Private quiet rooms with dim circadian lighting and no scary tools in sight.',
    clinicalImpact: 'Eliminates waiting-room and adjacent-chair anxiety.',
    badge: 'Zero Separation',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  }
];

export const HIGHLIGHTS = [
  'Zero-Drill Cavity Fill (SDF in 60s)',
  'Swiss 37°C Warm-Mist Water Cleanings',
  'AIIMS New Delhi Gold Medalist Faculty',
  'Barnaby the Certified Bedside Therapy Dog'
];

export const COMPARISON_ITEMS = [
  {
    feature: 'Cavity Treatment',
    traditional: 'High-speed drills, friction heat, sharp needles, numb lips for hours',
    littleOrbit: '60-second Silver Diamine Fluoride (SDF) liquid. No drills, no needles, zero downtime.'
  },
  {
    feature: 'Teeth Cleaning',
    traditional: 'Sharp metal scrapers and cold water shock causing gum sensitivity and tears',
    littleOrbit: 'Swiss Airflow 37°C warm water mist with sweet erythritol powder. Feels like a spa.'
  },
  {
    feature: 'Parent Presence',
    traditional: 'Parents often asked to wait outside while children are treated alone',
    littleOrbit: 'Zero separation policy. Parents sit in plush armchairs or hold toddlers in lap throughout.'
  },
  {
    feature: 'Sensory Comfort',
    traditional: 'Blinding fluorescent lights, loud drilling noises, clinical white coats',
    littleOrbit: 'Barnaby the therapy dog, 4K ceiling cartoons with headphones, and dim circadian light.'
  }
];
